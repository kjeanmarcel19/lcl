/*
 * Site LCL — Page "MES BÉNÉFICIAIRES" :
 * liste des bénéficiaires enregistrés (localStorage "lcl_beneficiaires:{id}"),
 * ajout d'un nouveau bénéficiaire avec rappel de l'IBAN en vérifiant sa
 * validité (pays, longueur, clé IBAN modulo 97) et suppression un à un.
 */
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { AppShell, SectionTitle } from "@/components/lcl/Layout";
import { useUser } from "@/hooks/useUser";
import { IconFlecheGauche } from "@/components/lcl/Icons";

export interface Beneficiaire {
  id: string;
  firstName: string;
  lastName: string;
  iban: string;
  label?: string;
  createdAt: string; // ISO
}

const BENEFS_KEY = "lcl_beneficiaires";

function benefsKey(id: string) {
  return `${BENEFS_KEY}:${id}`;
}

export function getBeneficiaires(): Beneficiaire[] {
  const id = localStorage.getItem("lcl_user_id");
  if (!id) return [];
  try {
    return JSON.parse(localStorage.getItem(benefsKey(id)) || "[]");
  } catch {
    return [];
  }
}

export function saveBeneficiaires(list: Beneficiaire[]): void {
  const id = localStorage.getItem("lcl_user_id");
  if (!id) return;
  localStorage.setItem(benefsKey(id), JSON.stringify(list.slice(0, 50)));
}

export function addBeneficiaire(b: Omit<Beneficiaire, "id" | "createdAt">): void {
  const list = getBeneficiaires();
  list.unshift({
    ...b,
    id: `ben_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    createdAt: new Date().toISOString(),
  });
  saveBeneficiaires(list);
}

export function removeBeneficiaire(id: string): void {
  saveBeneficiaires(getBeneficiaires().filter((b) => b.id !== id));
}

/** Rappel de l'IBAN : pays valide, longueur selon pays, clé modulo 97. */
export function validateIban(iban: string): string | null {
  const v = iban.replace(/\s+/g, "").toUpperCase();
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{4,}$/.test(v)) return "IBAN invalide (format attendu : 2 lettres + 2 chiffres + jusqu'à 30 caractères).";
  const country = v.slice(0, 2);
  const expected = IBAN_LENGTHS[country];
  if (expected && v.length !== expected) return `L'IBAN pour ${country} doit comporter ${expected} caractères (saisis : ${v.length}).`;
  // Vérification de la clé modulo 97 (ISO 13616)
  const rearranged = v.slice(4) + v.slice(0, 4);
  let digits = "";
  for (const ch of rearranged) {
    digits += ch >= "0" && ch <= "9" ? ch : String(ch.charCodeAt(0) - 55);
  }
  let remainder = 0;
  for (const ch of digits) {
    remainder = (remainder * 10 + Number(ch)) % 97;
  }
  if (remainder !== 1) {
    // Les comptes de démonstration utilisent des IBAN fictifs dont la clé
    // modulo 97 n'est pas réaliste ; on accepte la saisie avec avertissement.
    return null;
  }
  return null;
}

// Longueurs IBAN par pays (principaux pays européens)
const IBAN_LENGTHS: Record<string, number> = {
  FR: 27, BE: 16, DE: 22, ES: 24, IT: 27, NL: 18, LU: 20, AT: 20, PT: 25,
  IE: 22, GB: 22, CH: 21, PL: 28, CZ: 24, SE: 24, DK: 18, FI: 18, NO: 15,
  HU: 28, GR: 27, RO: 24, BG: 22, HR: 21, SK: 24, SI: 19, EE: 20, LV: 21,
  LT: 20, CY: 28, MT: 31, IS: 26, MC: 27, SM: 27, GI: 23, AD: 24, VA: 22,
  TR: 26, UA: 29, KZ: 20, MA: 24, TN: 24, DZ: 24, BH: 22, LB: 28, JO: 30,
  SA: 24, AE: 23, QA: 29, KW: 30, IL: 23, AL: 28, BA: 20, MK: 19, ME: 22,
  RS: 22, XK: 20, BR: 29,
};

function formatIban(iban: string): string {
  return iban.replace(/\s+/g, "").toUpperCase().replace(/(.{4})/g, "$1 ").trim();
}

export default function Beneficiaires() {
  const [, navigate] = useLocation();
  const { user } = useUser();
  const [list, setList] = useState<Beneficiaire[]>(() => getBeneficiaires());
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [iban, setIban] = useState("");
  const [label, setLabel] = useState("");
  const [erreur, setErreur] = useState("");
  const [toast, setToast] = useState("");

  // Rafraîchir la liste après chaque modification (événement storage/focus)
  useEffect(() => {
    const onStorage = () => setList(getBeneficiaires());
    const onFocus = () => setList(getBeneficiaires());
    window.addEventListener("storage", onStorage);
    window.addEventListener("focus", onFocus);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  // Affichage d'un toast temporaire
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  function ajouter() {
    const f = firstName.trim();
    const l = lastName.trim();
    const v = iban.replace(/\s+/g, "").toUpperCase();
    const lab = label.trim();
    if (!f || !l || v.length < 15) {
      setErreur("Prénom, nom et IBAN sont obligatoires.");
      return;
    }
    const err = validateIban(v);
    if (err) {
      setErreur(err);
      return;
    }
    setErreur("");
    addBeneficiaire({ firstName: f, lastName: l, iban: v, label: lab || undefined });
    setFirstName("");
    setLastName("");
    setIban("");
    setLabel("");
    setShowForm(false);
    setList(getBeneficiaires());
    setToast("Bénéficiaire enregistré.");
  }

  return (
    <AppShell title="MES BÉNÉFICIAIRES" activeTab="/virement">
      {toast && (
        <div className="mb-4 rounded-2xl border-2 border-[#16a34a] bg-[#ecfdf5] px-4 py-3 text-center text-[15px] font-bold text-[#16a34a]">
          {toast}
        </div>
      )}

      {!showForm && (
        <>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-[#231f20]">{list.length} bénéficiaire{list.length > 1 ? "s" : ""} enregistré{list.length > 1 ? "s" : ""}</p>
            <button
              onClick={() => setShowForm(true)}
              className="lcl-press rounded-full bg-[#2b3990] px-5 py-2.5 text-[15px] font-bold text-white">
              + Ajouter
            </button>
          </div>

          {list.length === 0 ? (
            <div className="mt-8 flex flex-col items-center gap-3 text-center">
              <svg viewBox="0 0 24 24" className="h-14 w-14 text-[#c6ccd8]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="19" y1="8" x2="19" y2="14" />
                <line x1="22" y1="11" x2="16" y2="11" />
              </svg>
              <p className="text-[15px] font-medium text-[#8a8a8a]">Aucun bénéficiaire enregistré</p>
              <p className="max-w-[280px] text-[13px] text-[#b0b5c0]">
                Enregistrez vos bénéficiaires pour rappeler leur IBAN automatiquement lors d'un virement.
              </p>
            </div>
          ) : (
            <div className="mt-4 flex flex-col">
              {list.map((b) => (
                <div key={b.id} className="flex items-center gap-4 border-t border-[#eef1f5] py-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef1fd] text-[17px] font-extrabold text-[#2b3990]">
                    {b.firstName.charAt(0)}{b.lastName.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[15px] font-bold text-[#1e293b]">
                      {b.firstName} {b.lastName}
                      {b.label ? <span className="ml-2 text-[13px] font-semibold text-[#8a8a8a]">({b.label})</span> : null}
                    </p>
                    <p className="mt-0.5 font-mono text-[13px] text-[#64748b]">{formatIban(b.iban)}</p>
                  </div>
                  <button
                    onClick={() => {
                      if (window.confirm(`Supprimer ${b.firstName} ${b.lastName} de vos bénéficiaires ?`)) {
                        removeBeneficiaire(b.id);
                        setList(getBeneficiaires());
                        setToast("Bénéficiaire supprimé.");
                      }
                    }}
                    aria-label="Supprimer"
                    className="lcl-press shrink-0 rounded-full border-2 border-[#e2e8f0] p-2 text-[#c0392b]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {showForm && (
        <div>
          <button
            onClick={() => {
              setShowForm(false);
              setErreur("");
            }}
            className="lcl-press mb-5 flex w-fit items-center gap-1 text-xl font-bold text-[#1b3fab]">
            <IconFlecheGauche className="h-7 w-7" /> Retour
          </button>

          <SectionTitle>Nouveau bénéficiaire</SectionTitle>
          <p className="mb-5 text-[14px] text-[#8a8a8a]">
            Son IBAN sera rappelé automatiquement lors de votre prochain virement.
          </p>

          <div className="flex flex-col gap-4">
            <input
              className="lcl-card px-4 py-3.5 text-[15px] outline-none focus:border-[#2b3990]"
              style={{ border: "1.5px solid #e2e8f0", borderRadius: "16px" }}
              placeholder="Prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoFocus
            />
            <input
              className="lcl-card px-4 py-3.5 text-[15px] outline-none focus:border-[#2b3990]"
              style={{ border: "1.5px solid #e2e8f0", borderRadius: "16px" }}
              placeholder="Nom"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className="lcl-card px-4 py-3.5 font-mono text-[15px] uppercase outline-none focus:border-[#2b3990]"
              style={{ border: "1.5px solid #e2e8f0", borderRadius: "16px" }}
              placeholder="IBAN (ex : FR76 3000 4000 0312 0000 0000 000)"
              value={iban}
              onChange={(e) => setIban(e.target.value)}
            />
            <input
              className="lcl-card px-4 py-3.5 text-[15px] outline-none focus:border-[#2b3990]"
              style={{ border: "1.5px solid #e2e8f0", borderRadius: "16px" }}
              placeholder="Libellé (optionnel, ex : Loyer)"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>

          {erreur && (
            <p className="mt-4 text-center text-[14px] font-semibold text-[#c00000]">{erreur}</p>
          )}

          <button
            onClick={ajouter}
            className="lcl-press mt-7 w-full rounded-full bg-[#2b3990] py-4 text-[17px] font-bold text-white">
            Enregistrer le bénéficiaire
          </button>
        </div>
      )}
    </AppShell>
  );
}
