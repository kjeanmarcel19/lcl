/*
 * Site LCL — Écran "DÉTAIL DE MA CARTE" :
 * carte Visa PREMIER dorée, numéro masqué, date d'expiration, limite de
 * paiement, statut (active / bloquée), blocage temporaire avec date de
 * déblocage programmée, et liste des opérations récentes de la carte.
 * Le blocage temporaire est persisté par client (localStorage) et
 * interrompt les paiements de la carte pendant la période choisie.
 */
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { AppShell, SectionTitle } from "@/components/lcl/Layout";
import { useUser, formatEuro } from "@/hooks/useUser";
import { IconFlecheGauche } from "@/components/lcl/Icons";
import { formatDemoDate } from "@/lib/date";
import { useBalanceVisibility } from "@/contexts/BalanceVisibilityContext";


const BLOCK_KEY = "lcl_card_block";

interface CardBlock {
  blocked: boolean;
  unblockAt: string; // ISO ou ""
}

function loadBlock(id: string): CardBlock {
  try {
    const raw = localStorage.getItem(`${BLOCK_KEY}:${id}`);
    if (!raw) return { blocked: false, unblockAt: "" };
    const b = JSON.parse(raw) as CardBlock;
    // Déblocage automatique : si l'heure de déblocage est dépassée
    if (b.blocked && b.unblockAt && new Date(b.unblockAt).getTime() <= Date.now()) {
      saveBlock(id, { blocked: false, unblockAt: "" });
      return { blocked: false, unblockAt: "" };
    }
    return b;
  } catch {
    return { blocked: false, unblockAt: "" };
  }
}

function saveBlock(id: string, b: CardBlock): void {
  try {
    localStorage.setItem(`${BLOCK_KEY}:${id}`, JSON.stringify(b));
  } catch {
    // best-effort
  }
}

export default function DetailCarte() {
  const [, navigate] = useLocation();
  const { user } = useUser();
  const { showBalances } = useBalanceVisibility();
  const masked = !showBalances;

  const [block, setBlock] = useState<CardBlock>(() =>
    loadBlock(user?.identifiant ?? "")
  );
  const [showConfirm, setShowConfirm] = useState(false);
  const [toast, setToast] = useState("");
  const [duree, setDuree] = useState<"30m" | "1h" | "4h" | "24h" | "custom">("24h");
  const [customHeures, setCustomHeures] = useState("24");

  // Rafraîchir le blocage toutes les 30 s (pour le déblocage automatique)
  useEffect(() => {
    const t = setInterval(() => setBlock(loadBlock(user?.identifiant ?? "")), 30000);
    return () => clearInterval(t);
  }, [user]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  if (!user) {
    return (
      <AppShell title="MA CARTE" activeTab="/cartes">
        <p className="text-center text-lg font-bold text-[#231f20]">Vous n'êtes pas connecté.</p>
      </AppShell>
    );
  }

  const identifiant = user.identifiant;
  const maskedNumber = "XX" + user.card.number.slice(-4);
  const unblockAtMs = block.unblockAt ? new Date(block.unblockAt).getTime() : 0;
  const tempsRestant = Math.max(0, unblockAtMs - Date.now());
  const minutesRestantes = Math.ceil(tempsRestant / 60000);
  const heuresRestantes = Math.floor(minutesRestantes / 60);
  const minutesAffichees = minutesRestantes % 60;

  function bloquerTemporairement(minutes: number) {
    const b: CardBlock = { blocked: true, unblockAt: new Date(Date.now() + minutes * 60000).toISOString() };
    saveBlock(identifiant, b);
    setBlock(b);
    setShowConfirm(false);
    setToast(`Carte bloquée temporairement. Déblocage automatique dans ${heuresEtMinutes(minutes)}.`);
  }

  function debloquer() {
    const b: CardBlock = { blocked: false, unblockAt: "" };
    saveBlock(identifiant, b);
    setBlock(b);
    setToast("Carte débloquée. Elle est de nouveau utilisable.");
  }

  function heuresEtMinutes(totalMinutes: number): string {
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    if (h > 0 && m > 0) return `${h}h${m > 0 ? String(m).padStart(2, "0") : ""}`;
    if (h > 0) return `${h}h`;
    return `${m}min`;
  }

  const dureeOptions = [
    { value: "30m" as const, label: "30 minutes" },
    { value: "1h" as const, label: "1 heure" },
    { value: "4h" as const, label: "4 heures" },
    { value: "24h" as const, label: "24 heures" },
    { value: "custom" as const, label: "Personnalisée" },
  ];
  const dureeToMinutes: Record<string, number> = { "30m": 30, "1h": 60, "4h": 240, "24h": 1440 };

  const totalDepenses = user.transactions.reduce((s, t) => s + Math.abs(t.amount), 0);

  return (
    <AppShell title="MA CARTE" activeTab="/cartes" subtitle={
      <button onClick={() => navigate("/cartes")} className="mt-1 flex items-center gap-1.5 text-[13px] text-yellow-300 lcl-press">
        <IconFlecheGauche className="h-4 w-4" />
        Retour
      </button>
    }>
      {toast && (
        <div className="mb-4 rounded-2xl border-2 border-[#16a34a] bg-[#ecfdf5] px-4 py-3 text-center text-[15px] font-bold text-[#16a34a]">
          {toast}
        </div>
      )}

      {/* Carte Visa PREMIER */}
      <div
        className="relative w-full overflow-hidden rounded-2xl p-6"
        style={{
          background: block.blocked
            ? "linear-gradient(150deg,#c9c9c9 0%,#a8a8a8 55%,#8f8f8f 100%)"
            : "linear-gradient(150deg,#f6d47a 0%,#eebe57 55%,#e2ac41 100%)",
          boxShadow: "0 6px 22px rgba(43,57,144,0.28)",
          minHeight: 230,
        }}>
        <span className="absolute right-0 top-0 rotate-90 pb-2 pr-6 pt-0 text-sm font-extrabold tracking-[0.3em]" style={{ color: block.blocked ? "#7a7a7a" : "#d69a2e" }}>
          PREMIER
        </span>
        <div className="flex gap-1">
          <div className="h-10 w-16 rounded-md bg-[#f5c842]" style={{ boxShadow: "inset 0 0 0 1px #d6a92c" }} />
          <div className="h-10 w-8 rounded-md bg-[#f5c842]" style={{ boxShadow: "inset 0 0 0 1px #d6a92c" }} />
        </div>
        {block.blocked && (
          <p className="mt-3 rounded-full bg-[#c00000] px-3 py-1 text-sm font-extrabold text-white" style={{ display: "inline-block" }}>
            BLOQUÉE TEMPORAIREMENT
          </p>
        )}
        <p className="mt-3 text-[15px] font-semibold text-[#1b2a78]/90">Mes dépenses sur 30 jours</p>
        <p className="mt-1 text-[38px] font-extrabold leading-none text-[#1b2a78]">
          {masked ? "• • • •" : `${totalDepenses.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €`}
        </p>
        <div className="absolute bottom-5 left-6">
          <p className="text-lg font-semibold text-[#1b2a78]">{user.prenom} {user.nom}</p>
          <p className="text-[15px] font-semibold text-[#1b2a78]/85">
            {maskedNumber}&#160;&#160;{user.card.expiry}
          </p>
        </div>
        <div className="absolute bottom-5 right-6 flex items-center gap-2">
          <div className="flex h-10 w-14 items-center justify-center rounded border-[2px] border-white/90 bg-white/25">
            <div className="flex h-5 w-9 items-center justify-center gap-[3px]">
              <span className="h-5 w-4 rounded-full bg-white" />
              <span className="h-5 w-4 rounded-full bg-white" />
            </div>
          </div>
          <span className="text-2xl font-black tracking-wide text-white" style={{ fontStyle: "italic" }}>
            VISA
          </span>
        </div>
      </div>

      {/* Informations de la carte */}
      <div className="lcl-card mt-5 px-5 py-5">
        <div className="flex flex-col divide-y divide-[#eef1f5]">
          <div className="flex items-center justify-between py-2.5">
            <span className="text-[15px] text-[#64748b]">Statut</span>
            <span className={`text-[15px] font-bold ${block.blocked ? "text-[#c00000]" : "text-[#16a34a]"}`}>
              {block.blocked ? "Bloquée temporairement" : "Active"}
            </span>
          </div>
          <div className="flex items-center justify-between py-2.5">
            <span className="text-[15px] text-[#64748b]">Numéro</span>
            <span className="font-mono text-[15px] font-bold text-[#1e293b]">{maskedNumber}</span>
          </div>
          <div className="flex items-center justify-between py-2.5">
            <span className="text-[15px] text-[#64748b]">Expiration</span>
            <span className="text-[15px] font-bold text-[#1e293b]">{user.card.expiry}</span>
          </div>
          <div className="flex items-center justify-between py-2.5">
            <span className="text-[15px] text-[#64748b]">Plafond mensuel</span>
            <span className="text-[15px] font-bold text-[#1e293b]">{masked ? "• • • •" : formatEuro(user.card.limit * 10)}</span>
          </div>
          {block.blocked && block.unblockAt && (
            <div className="flex items-center justify-between py-2.5">
              <span className="text-[15px] text-[#64748b]">Déblocage automatique</span>
              <span className="text-[15px] font-bold text-[#c00000]">
                {heuresRestantes > 0 ? `${heuresRestantes}h${String(minutesAffichees).padStart(2, "0")}` : `${minutesAffichees}min`}
                {" "}restantes
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Blocage temporaire */}
      <SectionTitle>{block.blocked ? "Débloquer ma carte" : "Bloquer temporairement ma carte"}</SectionTitle>
      {block.blocked ? (
        <div className="lcl-card mt-2 px-5 py-6 text-center">
          <p className="text-[15px] text-[#64748b]">
            Votre carte se débloquera automatiquement.
            <br />
            Vous pouvez aussi la débloquer dès maintenant.
          </p>
          <button
            onClick={debloquer}
            className="lcl-press mt-5 w-full rounded-full bg-[#2b3990] py-4 text-[17px] font-bold text-white">
            Débloquer ma carte maintenant
          </button>
        </div>
      ) : (
        <div className="lcl-card mt-2 px-5 py-6">
          <p className="text-[15px] text-[#64748b]">
            Choisissez la durée du blocage. À l'issue, la carte sera
            automatiquement débloquée.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {dureeOptions.map((o) => (
              <button
                key={o.value}
                onClick={() => setDuree(o.value)}
                className={`lcl-press rounded-xl border-2 py-3.5 text-[15px] font-bold ${
                  duree === o.value
                    ? "border-[#2b3990] bg-[#eef1fd] text-[#2b3990]"
                    : "border-[#e2e8f0] bg-white text-[#4a5266]"
                }`}>
                {o.label}
              </button>
            ))}
          </div>
          {duree === "custom" && (
            <input
              inputMode="numeric"
              value={customHeures}
              onChange={(e) => setCustomHeures(e.target.value.replace(/[^0-9]/g, ""))}
              className="mt-4 w-full rounded-xl border-2 border-[#e2e8f0] px-4 py-3.5 text-[15px] font-bold outline-none focus:border-[#2b3990]"
              placeholder="Nombre d'heures"
            />
          )}
          <button
            onClick={() => setShowConfirm(true)}
            className="lcl-press mt-6 w-full rounded-full bg-[#c00000] py-4 text-[17px] font-bold text-white">
            Bloquer ma carte
          </button>
        </div>
      )}

      {/* Opérations récentes */}
      <SectionTitle>Mes dernières opérations</SectionTitle>
      {user.transactions.slice(0, 8).map((t) => (
        <div key={t.id} className="flex items-center gap-4 border-t border-[#eef1f5] py-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef1fd] text-[#2b3990]">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="4" width="22" height="16" rx="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[15px] font-bold text-[#1e293b]">{t.reference}</p>
            <p className="text-[12px] text-[#8a8a8a]">
              {formatDemoDate(t.date)}
              {t.category ? ` · ${t.category}` : ""}
            </p>
          </div>
          <span className="shrink-0 text-[15px] font-extrabold text-[#2b3990]">
            {masked ? "• • • •" : `− ${formatEuro(Math.abs(t.amount))}`}
          </span>
        </div>
      ))}

      {/* Modal de confirmation du blocage */}
      {showConfirm && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
          style={{ backdropFilter: "blur(4px)" }}>
          <div className="w-full max-w-[360px] rounded-2xl bg-white p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fdeaea]">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#c00000]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <p className="mt-4 text-lg font-bold text-[#231f20]">Confirmer le blocage ?</p>
            <p className="mt-2 text-[15px] text-[#64748b]">
              {duree === "custom"
                ? `Votre carte sera bloquée pendant ${customHeures} heure${Number(customHeures) > 1 ? "s" : ""}, puis débloquée automatiquement.`
                : `Votre carte sera bloquée pendant ${heuresEtMinutes(dureeToMinutes[duree])}, puis débloquée automatiquement.`}
            </p>
            <p className="mt-2 text-[14px] font-semibold text-[#c00000]">
              Aucun paiement ne sera accepté pendant cette période.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="lcl-press flex-1 rounded-full border-2 border-[#e2e8f0] py-3.5 text-[15px] font-bold text-[#4a5266]">
                Annuler
              </button>
              <button
                onClick={() =>
                  bloquerTemporairement(
                    duree === "custom"
                      ? Math.max(1, Number(customHeures) || 24) * 60
                      : dureeToMinutes[duree]
                  )
                }
                className="lcl-press flex-1 rounded-full bg-[#c00000] py-3.5 text-[15px] font-bold text-white">
                Bloquer
              </button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
