/*
 * Site LCL — Formulaire de virement via IBAN.
 *
 * Structure IDENTIQUE au formulaire de référence :
 * https://github.com/kjeanmarcel19/bnpp/blob/main/src/views/Transfer.jsx
 * — en-tête du compte émetteur (solde disponible)
 * — champs : Nom, Prénom, IBAN, SWIFT/BIC, Code banque, Montant, Email, Libellé
 * — validations : montant > 0, solde suffisant, montant > 10 000 → compte bloqué
 * — bouton « Valider le virement » + progression circulaire 2,5 s
 * — modal succès avec récapitulatif et modal « Compte bloqué »
 * Les couleurs du bouton et des accents sont adaptées au bleu LCL (#2b3990).
 */
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { AppShell } from "@/components/lcl/Layout";
import { IconFlecheGauche } from "@/components/lcl/Icons";
import { useUser, formatEuro, adjustBalance, getAdjustedBalance } from "@/hooks/useUser";
import { trpc } from "@/lib/trpc";
import { getBeneficiaires } from "@/pages/Beneficiaires";

const ACCENT = "#2b3990";
const TRANSFERS_KEY = "lcl_transfers"; // historique des virements : { [identifiant]: TransferRecord[] }

export interface TransferRecord {
  id: string;
  date: string;
  firstName: string;
  lastName: string;
  iban: string;
  amount: number;
  label: string;
  emailSent: boolean;
  status: string;
  sourceAccountId: string;
  sourceAccountType: string;
  sourceAccountNumber: string;
}

/** Ajoute un virement à l'historique local de l'utilisateur connecté. */
export function addTransfer(record: TransferRecord): void {
  const id = localStorage.getItem("lcl_user_id");
  if (!id) return;
  try {
    const raw = localStorage.getItem(`${TRANSFERS_KEY}:${id}`) || "[]";
    const list: TransferRecord[] = JSON.parse(raw);
    list.unshift(record);
    localStorage.setItem(`${TRANSFERS_KEY}:${id}`, JSON.stringify(list.slice(0, 50)));
  } catch {
    // best-effort
  }
  try {
    // Alerte de notification : virement effectué
    const notifRaw = localStorage.getItem(`lcl_notifications:${id}`) || "[]";
    const notifList = JSON.parse(notifRaw);
    notifList.unshift({
      id: `notif_transfer_${record.id}`,
      type: "transfer",
      date: record.date,
      title: `Virement effectué de ${fmt(record.amount)}`,
      message: `Virement vers ${record.firstName} ${record.lastName} prélevé sur ${record.sourceAccountType}.`,
    });
    localStorage.setItem(`lcl_notifications:${id}`, JSON.stringify(notifList.slice(0, 100)));
  } catch {
    // best-effort
  }
}

/** Télécharge le récépissé PDF d'un virement (base64 → fichier). */
export function downloadReceipt(base64: string, amount: number): void {
  try {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    const blob = new Blob([bytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    const stamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}`;
    const euros = Math.floor(amount).toLocaleString("fr-FR");
    a.href = url;
    a.download = `recu-virement-${euros}EUR-${stamp}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  } catch {
    // best-effort : ne jamais bloquer la fermeture du modal
  }
}

/** Récupère l'historique des virements de l'utilisateur connecté. */
export function getTransfers(): TransferRecord[] {
  const id = localStorage.getItem("lcl_user_id");
  if (!id) return [];
  try {
    return JSON.parse(localStorage.getItem(`${TRANSFERS_KEY}:${id}`) || "[]");
  } catch {
    return [];
  }
}

/** Formate un montant comme "150,00 €" (format fr-FR). */
function fmt(val: number): string {
  return formatEuro(val);
}

export default function FormulaireVirement() {
  const { user } = useUser();
  const [, navigate] = useLocation();

  // ---- États du formulaire (mêmes champs que la référence) ----
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [iban, setIban] = useState("");
  const [swift, setSwift] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [label, setLabel] = useState("");
  const [sendStatus, setSendStatus] = useState<"idle" | "error" | "success">("idle");
  const [sendMessage, setSendMessage] = useState("");
  const [showKeypad, setShowKeypad] = useState(false);

  // Saisie du montant par pavé numérique (virgule = séparateur décimal)
  const onKeypadKey = (k: string) => {
    setAmount((v) => {
      if (k === "⌫") return v.slice(0, -1);
      const decimals = v.split(".");
      if (k === ",") {
        // Une seule virgule ; pas plus de 2 décimales déjà saisies
        if (decimals.length > 1 || decimals[1]?.length >= 2) return v;
        return v + ".";
      }
      // Limiter à 2 décimales
      if (decimals.length > 1 && decimals[1]?.length >= 2) return v;
      return v + k;
    });
  };

  // ---- Bénéficiaire enregistré (rappel automatique de l'IBAN) ----
  const savedBeneficiaires = getBeneficiaires();
  const [selectedBeneficiaire, setSelectedBeneficiaire] = useState<string>("");

  const onBeneficiaireChange = (id: string) => {
    setSelectedBeneficiaire(id);
    if (id === "") {
      // Effacer les champs si on repasse en saisie libre
      setFirstName("");
      setLastName("");
      setIban("");
      setSwift("");
      setBankCode("");
      setLabel("");
      return;
    }
    const b = savedBeneficiaires.find((x) => x.id === id);
    if (!b) return;
    setFirstName(b.firstName);
    setLastName(b.lastName);
    setIban(b.iban);
    setSwift("");
    setBankCode(b.iban.slice(4, 7));
    setLabel(b.label || "");
  };

  // ---- Compte de prélèvement (compte courant ou livret) ----
  const [sourceAccountId, setSourceAccountId] = useState<string>("");
  const fundingAccounts = (user?.accounts ?? []).filter(
    (a) => a.type !== "Crédit" && a.type !== "Assurance"
  );
  // Sélection par défaut : premier compte du client
  if (sourceAccountId === "" && fundingAccounts.length > 0) {
    setSourceAccountId(fundingAccounts[0].id);
  }
  const sourceAccount = fundingAccounts.find((a) => a.id === sourceAccountId) ?? fundingAccounts[0];
  const solde = sourceAccount ? getAdjustedBalance(user!.identifiant, sourceAccount.id) : 0;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSubmittingRef = useRef(false);
  const [progress, setProgress] = useState(0);
  const [processStep, setProcessStep] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showBlockedModal, setShowBlockedModal] = useState(false);
  const [receiptData, setReceiptData] = useState<{
    firstName: string;
    lastName: string;
    iban: string;
    amount: number;
    email: string;
    label?: string;
    emailSent: boolean;
    emailError: string;
    newBalance: number;
    sourceAccountId?: string;
    receiptPdfBase64?: string;
  } | null>(null);

  const executeMutation = trpc.virement.execute.useMutation();

  // Mise à jour de la progression des étapes pendant l'envoi serveur
  useEffect(() => {
    if (!isSubmitting) return;
    const interval = setInterval(() => {
      setProcessStep((prev) => (prev < 3 ? prev + 1 : prev));
    }, 600);
    return () => clearInterval(interval);
  }, [isSubmitting]);


  const resetFormFields = () => {
    setFirstName("");
    setLastName("");
    setIban("");
    setSwift("");
    setBankCode("");
    setAmount("");
    setEmail("");
    setLabel("");
  };

  const stopSubmitting = () => {
    isSubmittingRef.current = false;
    setIsSubmitting(false);
  };

  const generateRequestId = () => {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmittingRef.current) return;

    const transferAmount = parseFloat(amount);

    if (isNaN(transferAmount) || transferAmount <= 0) {
      setSendStatus("error");
      setSendMessage("Veuillez saisir un montant supérieur à 0.");
      return;
    }

    if (transferAmount > solde) {
      setSendStatus("error");
      setSendMessage("Solde insuffisant pour effectuer cette transaction.");
      return;
    }

    isSubmittingRef.current = true;
    setIsSubmitting(true);

    const transferData = {
      requestId: generateRequestId(),
      firstName,
      lastName,
      iban,
      swift,
      bankCode,
      amount: transferAmount,
      email,
      label,
    };

    setSendStatus("idle");
    setSendMessage("Envoi en cours...");
    setProgress(0);

    const duration = 2500; // 2,5 secondes de chargement total
    const intervalTime = 50;
    const step = (100 * intervalTime) / duration;

    const processTransfer = async () => {
      if (transferAmount > 10000) {
        setSendStatus("error");
        setSendMessage(
          "Transaction refusée : montant supérieur au plafond autorisé (10 000 €)."
        );
        setProgress(0);
        setShowBlockedModal(true);
        stopSubmitting();
        return;
      }

      // Virement exécuté côté serveur : validation, déduction du solde,
      // et envoi de l'email SMTP au destinataire.
      try {
        const result = await executeMutation.mutateAsync({
          identifiant: user!.identifiant,
          firstName: transferData.firstName,
          lastName: transferData.lastName,
          iban: transferData.iban,
          swift: transferData.swift,
          bankCode: transferData.bankCode,
          amount: transferData.amount,
          email: transferData.email,
          label: transferData.label || undefined,
          sourceAccountId,
        });

        // Déduction du montant du solde affiché (compte de prélèvement choisi)
        adjustBalance(sourceAccountId, -transferAmount);
        // Historique local des virements
        if (result.transfer) addTransfer(result.transfer as unknown as TransferRecord);

        setReceiptData({
          firstName: transferData.firstName,
          lastName: transferData.lastName,
          iban: transferData.iban,
          amount: transferData.amount,
          email: transferData.email,
          label: transferData.label || undefined,
          emailSent: result.emailSent,
          emailError: result.emailError,
          newBalance: result.newBalance,
          sourceAccountId: sourceAccount?.id ?? result.sourceAccountId,
          receiptPdfBase64: result.receiptPdfBase64,
        });
        resetFormFields();
        setSendStatus("success");
        setSendMessage("");
        setShowSuccessModal(true);
        stopSubmitting();
      } catch (err) {
        // Formater les erreurs de validation (IBAN, SWIFT, email...) en
        // messages lisibles au lieu du JSON brut renvoyé par le serveur.
        let msg = err instanceof Error ? err.message : String(err);
        if (msg.trim().startsWith("[")) {
          try {
            const issues = JSON.parse(msg) as { path?: string[]; message?: string }[];
            const first = issues.find((i) => Array.isArray(i.path) && i.path.length > 0);
            msg = first?.message ?? issues[0]?.message ?? "Vérifiez les champs saisis.";
          } catch {
            // pas un JSON, on garde le message d'origine
          }
        }
        // Le modal « Compte Bloqué » ne se déclenche que sur un plafonnement
        // de montant explicite (LCL_AMOUNT_OVER_PLAFOND renvoyé par le serveur).
        // Les autres erreurs (IBAN, SWIFT, solde, SMTP...) affichent leur
        // message sans jamais évoquer un compte bloqué inexistant.
        if (msg.includes("LCL_AMOUNT_OVER_PLAFOND")) {
          setShowBlockedModal(true);
        }
        setSendStatus("error");
        setSendMessage(msg);
        setIsSubmitting(false);
        setProgress(0);
      }
    };

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        return next >= 100 ? 100 : Math.round(next);
      });
    }, intervalTime);

    setTimeout(() => {
      clearInterval(progressTimer);
      setProgress(100);
      processTransfer();
    }, duration);
  };

  // ---- Dimensions de la progression circulaire (identiques à la référence) ----
  const radius = 60;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // ---- Styles réutilisables (structure de la référence) ----
  const styles: Record<string, React.CSSProperties> = {
    card: {
      backgroundColor: "#ffffff",
      padding: "2rem 1.5rem",
      borderRadius: "24px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)",
      textAlign: "left",
      marginBottom: "2rem",
    },
    title: {
      fontSize: "1.1rem",
      fontWeight: 800,
      color: "#475569",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      marginBottom: "2rem",
      fontFamily: "system-ui, sans-serif",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      marginBottom: "1.5rem",
    },
    label: {
      fontSize: "0.85rem",
      fontWeight: 700,
      color: "#475569",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    input: {
      width: "100%",
      padding: "1.1rem 1.25rem",
      borderRadius: "18px",
      border: "1.5px solid #e2e8f0",
      backgroundColor: "#ffffff",
      fontSize: "0.95rem",
      color: "#1e293b",
      fontWeight: 500,
      outline: "none",
      boxSizing: "border-box" as const,
      transition: "all 0.2s ease-in-out",
    },
    btnSubmit: {
      width: "100%",
      padding: "1.1rem",
      borderRadius: "18px",
      backgroundColor: ACCENT,
      color: "#ffffff",
      border: "none",
      fontSize: "1rem",
      fontWeight: 700,
      cursor: "pointer",
      boxShadow: `0 4px 12px rgba(43, 57, 144, 0.25)`,
      transition: "opacity 0.2s",
      marginTop: "1rem",
    },
  };

  const modalOverlay: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(4px)",
  };

  const modalBox: React.CSSProperties = {
    background: "white",
    padding: "2rem",
    borderRadius: "1.5rem",
    textAlign: "center",
    boxShadow: "0 4px 25px rgba(0,0,0,0.15)",
    width: "90%",
    maxWidth: "400px",
  };

  return (
    <AppShell title="VIREMENT" activeTab="/virement" subtitle={
      <button onClick={() => navigate("/virement")} className="mt-1 flex items-center gap-1.5 text-[13px] text-yellow-300 lcl-press">
        <IconFlecheGauche className="h-4 w-4" />
        Retour
      </button>
    }>
      {/* En-tête du compte émetteur (structure de la référence) */}
      <div
        className="mt-5 flex items-center gap-4 text-left"
        style={{ backgroundColor: "#ffffff", padding: "1.25rem", borderRadius: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.02)", marginBottom: "1.5rem" }}>
        <div
          style={{
            backgroundColor: "#eef1fd",
            color: ACCENT,
            padding: "12px",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
          </svg>
        </div>
        <div>
          <h5 style={{ margin: "0 0 0.25rem 0", fontSize: "0.8rem", color: "#6b7280", fontWeight: 500, textTransform: "uppercase" }}>
            Prélèvement: {sourceAccount ? sourceAccount.type : ""}
          </h5>
          <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 800, color: "#111827" }}>
            Solde disponible: <span style={{ color: ACCENT }}>{fmt(solde)}</span>
          </h3>
        </div>
      </div>

      {/* Titre (structure de la référence) */}
      <div style={{ textAlign: "left", marginBottom: "1.5rem" }}>
        <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1f2937", margin: 0 }}>
          Effectuer un virement
        </h4>
      </div>

      {/* Formulaire */}
      <div style={styles.card}>
        <h3 style={styles.title}>Informations du bénéficiaire</h3>

        {/* Sélecteur de bénéficiaire enregistré */}
        {savedBeneficiaires.length > 0 && (
          <div style={styles.formGroup}>
            <label style={styles.label}>Rappeler un bénéficiaire</label>
            <select
              style={{ ...styles.input, backgroundColor: "#f8fafc" }}
              value={selectedBeneficiaire}
              onChange={(e) => onBeneficiaireChange(e.target.value)}>
              <option value="">— Saisir un nouveau bénéficiaire —</option>
              {savedBeneficiaires.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.firstName} {b.lastName}{b.label ? ` (${b.label})` : ""}
                </option>
              ))}
            </select>
            {selectedBeneficiaire && (
              <p style={{ marginTop: "0.5rem", fontSize: "0.78rem", fontWeight: 600, color: "#16a34a" }}>
                IBAN rappelé automatiquement : {savedBeneficiaires.find((b) => b.id === selectedBeneficiaire)?.iban}
              </p>
            )}
          </div>
        )}

        <form id="virementForm" onSubmit={handleSubmit}>
          {/* NOM */}
          <div style={styles.formGroup}>
            <label htmlFor="nom" style={styles.label}>Nom</label>
            <input type="text" style={styles.input} id="nom" required placeholder="Ex: Leroy" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>

          {/* PRÉNOM */}
          <div style={styles.formGroup}>
            <label htmlFor="prenom" style={styles.label}>Prénom</label>
            <input type="text" style={styles.input} id="prenom" required placeholder="Ex: Martine" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>

          {/* IBAN */}
          <div style={styles.formGroup}>
            <label htmlFor="iban" style={styles.label}>Iban du compte destinataire</label>
            <input type="text" style={{ ...styles.input, fontFamily: "monospace", letterSpacing: "1px" }} id="iban" required placeholder="FR76 3000..." value={iban} onChange={(e) => setIban(e.target.value.toUpperCase())} />
          </div>

          {/* SWIFT / BIC */}
          <div style={styles.formGroup}>
            <label htmlFor="swift" style={styles.label}>Code Swift / BIC</label>
            <input type="text" style={{ ...styles.input, fontFamily: "monospace" }} id="swift" required placeholder="Ex: LCLFRPPXXX" value={swift} onChange={(e) => setSwift(e.target.value.toUpperCase())} />
          </div>

          {/* CODE BANQUE */}
          <div style={styles.formGroup}>
            <label htmlFor="banque" style={styles.label}>Code Banque</label>
            <input type="text" style={styles.input} id="banque" required placeholder="Ex: 30004" value={bankCode} onChange={(e) => setBankCode(e.target.value.replace(/[^0-9]/g, ""))} />
          </div>

          {/* MONTANT + PAVÉ NUMÉRIQUE */}
          <div style={styles.formGroup}>
            <label htmlFor="montant" style={styles.label}>Montant (€)</label>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <input
                type="number"
                style={{ ...styles.input, fontWeight: 700, marginBottom: 0 }}
                id="montant"
                required
                min="1"
                step="0.01"
                placeholder="Ex: 150.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button
                type="button"
                className="lcl-press"
                onClick={() => setShowKeypad((v) => !v)}
                style={{
                  flexShrink: 0,
                  padding: "0.9rem 1.1rem",
                  borderRadius: "18px",
                  border: "1.5px solid #e2e8f0",
                  backgroundColor: showKeypad ? ACCENT : "#ffffff",
                  color: showKeypad ? "#ffffff" : ACCENT,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
                aria-label={showKeypad ? "Fermer le pavé numérique" : "Ouvrir le pavé numérique"}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </button>
            </div>
            {showKeypad && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "0.6rem",
                  marginTop: "1rem",
                  padding: "1rem",
                  backgroundColor: "#f8fafc",
                  borderRadius: "18px",
                  border: "1px solid #e2e8f0",
                }}>
                {["1", "2", "3", "4", "5", "6", "7", "8", "9", ",", "0", "⌫"].map((k) => (
                  <button
                    key={k}
                    type="button"
                    className="lcl-press"
                    onClick={() => onKeypadKey(k)}
                    style={{
                      padding: "1rem",
                      borderRadius: "14px",
                      border: "1px solid #e2e8f0",
                      backgroundColor: "#ffffff",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: k === "⌫" ? "#ef4444" : "#1e293b",
                    }}>
                    {k}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* EMAIL DU DESTINATAIRE */}
          <div style={styles.formGroup}>
            <label htmlFor="dest_mail" style={styles.label}>Email du destinataire</label>
            <input type="email" style={styles.input} id="dest_mail" required placeholder="Ex: destinataire@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          {/* LIBELLÉ */}
          <div style={styles.formGroup}>
            <label htmlFor="libelle" style={styles.label}>Libellé du virement</label>
            <input type="text" style={styles.input} id="libelle" placeholder="Ex: Cadeau anniversaire" value={label} onChange={(e) => setLabel(e.target.value)} />
          </div>

          {/* COMPTE DE PRÉLÈVEMENT */}
          <div style={styles.formGroup}>
            <label htmlFor="compte" style={styles.label}>Compte de prélèvement</label>
            <select
              style={{ ...styles.input, appearance: "auto", cursor: "pointer", fontWeight: 600 }}
              id="compte"
              required
              value={sourceAccountId}
              onChange={(e) => setSourceAccountId(e.target.value)}
            >
              {fundingAccounts.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.type} ({a.number}) — Solde {fmt(getAdjustedBalance(user!.identifiant, a.id))}
                </option>
              ))}
            </select>
          </div>

          {/* BOUTON SOUMISSION */}
          <button type="submit" style={{ ...styles.btnSubmit, opacity: isSubmitting ? 0.7 : 1 }} id="submitBtn" disabled={isSubmitting}>
            {isSubmitting ? "Envoi en cours..." : "Valider le virement"}
          </button>

          {sendMessage && (
            <p style={{ marginTop: "1.25rem", color: sendStatus === "error" ? "#ef4444" : sendStatus === "success" ? "#16a34a" : "#334155", fontSize: "0.9rem", fontWeight: 600, textAlign: "center" }}>
              {sendMessage}
            </p>
          )}
        </form>
      </div>

      {/* Modal de progression circulaire */}
      {isSubmitting && (
        <div style={modalOverlay}>
          <div style={{ ...modalBox, display: "flex", flexDirection: "column", alignItems: "center", padding: "2.5rem", maxWidth: "350px" }}>
            <svg height={radius * 2} width={radius * 2} style={{ transform: "rotate(-90deg)", marginBottom: "1.5rem" }}>
              <circle stroke="#e2e8f0" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} />
              <circle stroke={ACCENT} fill="transparent" strokeWidth={stroke} strokeDasharray={circumference + " " + circumference} style={{ strokeDashoffset, transition: "stroke-dashoffset 0.05s linear" }} r={normalizedRadius} cx={radius} cy={radius} strokeLinecap="round" />
            </svg>
            <div style={{ position: "absolute", marginTop: "45px", fontSize: "1.5rem", fontWeight: "bold", color: "#1e293b" }}>{progress}%</div>
            <h4 style={{ color: "#1e293b", marginBottom: "1rem", fontWeight: 700 }}>Envoi en cours</h4>
            <div style={{ fontSize: "0.85rem", color: "#475569", textAlign: "left", lineHeight: 1.8 }}>
              <div style={{ color: processStep >= 1 ? "#16a34a" : "#94a3b8", fontWeight: 600 }}>● Transmission bancaire SEPA...</div>
              <div style={{ color: processStep >= 2 ? "#16a34a" : "#94a3b8", fontWeight: 600 }}>● Vérification du solde et validation...</div>
              <div style={{ color: processStep >= 3 ? "#16a34a" : "#94a3b8", fontWeight: 600 }}>● Envoi de la confirmation par email...</div>
            </div>
          </div>
        </div>
      )}

      {/* Modal succès */}
      {showSuccessModal && receiptData && (
        <div style={modalOverlay}>
          <div style={{ ...modalBox, maxHeight: "calc(100vh - 6rem)", display: "flex", flexDirection: "column" }}>
            {/* Zone scrollable contenant le contenu du succès */}
            <div style={{ overflowY: "auto", paddingBottom: "0.5rem", scrollbarWidth: "thin" }}>
            <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#ecfdf5", color: "#16a34a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", margin: "0 auto 1rem" }}>✓</div>
            <h3 style={{ color: "#1e293b", marginBottom: "0.5rem", fontWeight: 800 }}>Virement Effectué !</h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", marginBottom: "0.75rem" }}>Le transfert de fonds a été traité avec succès par nos services.</p>
            {receiptData.emailSent ? (
              <p style={{ fontSize: "0.8rem", color: "#16a34a", marginBottom: "1rem", fontWeight: 600 }}>
                ✓ Un email de confirmation a été envoyé à {receiptData.email}
              </p>
            ) : receiptData.emailError ? (
              <p style={{ fontSize: "0.8rem", color: "#d97706", marginBottom: "1rem", fontWeight: 600 }}>
                ⚠ Email de confirmation non envoyé ({receiptData.emailError})
              </p>
            ) : (
              <p style={{ fontSize: "0.8rem", color: "#d97706", marginBottom: "1rem", fontWeight: 600 }}>
                ⚠ Email de confirmation non envoyé
              </p>
            )}
            <p style={{ fontSize: "0.8rem", color: "#475569", marginBottom: "1rem", fontWeight: 600 }}>
              Nouveau solde disponible : <span style={{ color: ACCENT }}>{fmt(receiptData.newBalance)}</span>
            </p>

            <div style={{ textAlign: "left", background: "#f8fafc", padding: "1rem", borderRadius: "1rem", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1.5rem", border: "1px solid #e2e8f0" }}>
              <div><strong>Bénéficiaire :</strong> {receiptData.firstName} {receiptData.lastName}</div>
              <div><strong>IBAN :</strong> {receiptData.iban}</div>
              <div><strong>Email :</strong> {receiptData.email}</div>
              <div><strong>Montant :</strong> <span style={{ color: "#16a34a", fontWeight: "bold" }}>{fmt(receiptData.amount)}</span></div>
              {receiptData.label && <div><strong>Libellé :</strong> {receiptData.label}</div>}
            {receiptData.sourceAccountId && (() => {
              const acc = user?.accounts.find((a) => a.id === receiptData.sourceAccountId);
              return acc ? <div><strong>Prélèvement :</strong> {acc.type} ({acc.number})</div> : null;
            })()}
            </div>

            {receiptData.receiptPdfBase64 && (
              <button
                style={{
                  ...styles.btnSubmit,
                  marginTop: 0,
                  marginBottom: "0.75rem",
                  backgroundColor: "#004B87",
                  boxShadow: "0 4px 12px rgba(0, 75, 135, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
                onClick={() => downloadReceipt(receiptData.receiptPdfBase64!, receiptData.amount)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Télécharger le récépissé PDF
              </button>
            )}
            </div>
            {/* Bouton Fermer toujours visible en bas du modal */}
            <button style={{ ...styles.btnSubmit, marginTop: 0, flexShrink: 0 }} onClick={() => { setShowSuccessModal(false); navigate("/virement"); }}>
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Modal compte bloqué */}
      {showBlockedModal && (
        <div style={modalOverlay}>
          <div style={modalBox}>
            <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#fef2f2", color: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", margin: "0 auto 1rem" }}>⚠</div>
            <h3 style={{ color: "#ef4444", marginBottom: "0.5rem", fontWeight: 800 }}>Virement Rejeté</h3>
            <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem" }}>Montant supérieur au plafond autorisé</p>
            <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1.5rem", lineHeight: 1.5 }}>
              Cette transaction ne peut pas être finalisée car le montant saisi dépasse le plafond autorisé de 10 000 € par virement.
              Veuillez effectuer plusieurs virements d'un montant inférieur.
              {user && <> Pour toute question, contactez votre conseiller bancaire, <strong>{user.manager}</strong>.</>}
            </p>

            <button style={{ ...styles.btnSubmit, backgroundColor: "#ef4444", boxShadow: "0 4px 12px rgba(239, 68, 68, 0.2)", marginTop: 0 }} onClick={() => setShowBlockedModal(false)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </AppShell>
  );
}
