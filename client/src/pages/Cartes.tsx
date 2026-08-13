/*
 * Site LCL — Page "MES CARTES" (captures 21.02.41 / 21.02.42) :
 * carrousel de carte Visa PREMIER dorée, pastilles, bouton SOS Carte,
 * sous-onglets Paramètres/Options, bouton Configurer Pay, toggles.
 */
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useSwitch } from "@/hooks/useSwitch";
import { AppShell } from "@/components/lcl/Layout";
import { useUser, formatEuro } from "@/hooks/useUser";
import { IconCadrePlus, IconCadreOeil, IconCadreCadenas, IconCadreWifi } from "@/components/lcl/Icons";
import { getTransfers } from "@/components/lcl/FormulaireVirement";
import { useBalanceVisibility } from "@/contexts/BalanceVisibilityContext";
import { formatDemoDate } from "@/lib/date";

function AppleLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 17 20" className={className} fill="#231f20">
      <path d="M13.7 10.4c0-2.4 1.9-3.5 2-3.6-1.1-1.6-2.8-1.8-3.4-1.9-1.5-.1-2.8.9-3.5.9-.8 0-1.9-.9-3.1-.8-1.6 0-3 .9-3.8 2.3C.3 10 .9 14 2.5 16.3c.8 1.1 1.7 2.4 2.9 2.4 1.2-.1 1.6-.7 3.1-.7 1.4 0 1.9.7 3.1.7 1.3 0 2.1-1.1 2.9-2.3.9-1.3 1.3-2.6 1.3-2.6-.1 0-2.1-.8-2.1-3.4zM11.5 3.7c.6-.8 1.1-1.9 1-3-1 0-2.1.6-2.8 1.4-.6.7-1.2 1.8-1 2.9 1 0 2.1-.6 2.8-1.3z" />
    </svg>
  );
}

function CreditCard({ user }: { user: NonNullable<ReturnType<typeof useUser>["user"]> }) {
  const masked = "XX" + user.card.number.slice(-4);
  const { showBalances } = useBalanceVisibility();
  // Dépenses : opérations d'origine + virements effectués (persistés même après déconnexion)
  const total =
    user.transactions.reduce((s, t) => s + Math.abs(t.amount), 0) +
    getTransfers().reduce((s, t) => s + Math.abs(t.amount), 0);
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl p-6"
      style={{
        background: "linear-gradient(150deg,#f6d47a 0%,#eebe57 55%,#e2ac41 100%)",
        boxShadow: "0 6px 22px rgba(43,57,144,0.28)",
        minHeight: 260,
      }}>
      <span className="absolute right-0 top-0 rotate-90 pb-2 pr-6 pt-0 text-sm font-extrabold tracking-[0.3em] text-[#d69a2e]">
        PREMIER
      </span>
      {/* Nom / masque — en haut à gauche, jamais superposé au montant */}
      <p className="text-[15px] font-semibold text-[#1b2a78]/85">
        {user.prenom} {user.nom}
      </p>
      {/* Puce */}
      <div className="mt-2 flex gap-1">
        <div className="h-10 w-16 rounded-md bg-[#f5c842]" style={{ boxShadow: "inset 0 0 0 1px #d6a92c" }} />
        <div className="h-10 w-8 rounded-md bg-[#f5c842]" style={{ boxShadow: "inset 0 0 0 1px #d6a92c" }} />
      </div>
      <p className="mt-6 text-[24px] font-extrabold leading-tight text-[#1b2a78]">Mes dépenses</p>
      <p className="text-[16px] font-semibold text-[#1b2a78]/90">sur 30 jours</p>
      <p className="mt-1 text-[34px] font-extrabold leading-none text-[#1b2a78]">
        {showBalances
          ? `${total.toLocaleString("fr-FR", { minimumFractionDigits: 2 })} €`
          : "• • • •"}
      </p>
      <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between gap-2">
        <p className="whitespace-nowrap text-[13px] font-semibold text-[#1b2a78]/85">{masked}&#160;&#160;{user.card.expiry}</p>
        {/* Logos CB + VISA */}
        <div className="flex shrink-0 items-center gap-1.5">
          <div className="flex h-8 w-11 items-center justify-center rounded border-[1.5px] border-white/90 bg-white/25">
            <div className="flex h-4 w-7 items-center justify-center gap-[2px]">
              <span className="h-4 w-3 rounded-full bg-white" />
              <span className="h-4 w-3 rounded-full bg-white" />
            </div>
          </div>
          <span className="text-xl font-black tracking-wide text-white" style={{ fontStyle: "italic" }}>
            VISA
          </span>
        </div>
      </div>
    </div>
  );
}

function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={() => onChange(!on)}
      className="relative h-8 w-14 rounded-full lcl-press transition-colors"
      style={{ background: on ? "#2b3990" : "#b9bfc7" }}>
      <span
        className="absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-transform"
        style={{ left: 4, transform: on ? "translateX(24px)" : "none" }}
      />
    </button>
  );
}

/** Lit le statut de blocage partagé (même clé que DetailCarte.tsx). */
function useCardBlock(): boolean {
  const { user } = useUser();
  const [blocked, setBlocked] = useState(() => {
    const id = user?.identifiant;
    if (!id) return false;
    try {
      const raw = localStorage.getItem(`lcl_card_block:${id}`);
      if (!raw) return false;
      const b = JSON.parse(raw) as { blocked: boolean; unblockAt?: string };
      if (b.blocked && b.unblockAt && new Date(b.unblockAt).getTime() <= Date.now()) {
        localStorage.setItem(`lcl_card_block:${id}`, JSON.stringify({ blocked: false, unblockAt: "" }));
        return false;
      }
      return b.blocked;
    } catch {
      return false;
    }
  });
  // Rafraîchir à chaque événement storage/focus (blocage fait depuis une autre page)
  useEffect(() => {
    const onStorage = () =>
      setBlocked(() => {
        try {
          const id = localStorage.getItem("lcl_user_id");
          if (!id) return false;
          const raw = localStorage.getItem(`lcl_card_block:${id}`);
          if (!raw) return false;
          const b = JSON.parse(raw) as { blocked: boolean; unblockAt?: string };
          if (b.blocked && b.unblockAt && new Date(b.unblockAt).getTime() <= Date.now()) {
            localStorage.setItem(`lcl_card_block:${id}`, JSON.stringify({ blocked: false, unblockAt: "" }));
            return false;
          }
          return b.blocked;
        } catch {
          return false;
        }
      });
    window.addEventListener("storage", onStorage);
    window.addEventListener("focus", onStorage);
    const t = setInterval(onStorage, 30000);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("focus", onStorage);
      clearInterval(t);
    };
  }, []);
  return blocked;
}

export default function Cartes() {
  const [subTab, setSubTab] = useState<"params" | "options">("params");
  const [verrou, setVerrou] = useState(false);
  const [contact, setContact] = useSwitch(true);
  const { user } = useUser();
  const { showBalances } = useBalanceVisibility();
  const [, navigate] = useLocation();
  const blocked = useCardBlock();

  if (!user) {
    return (
      <AppShell title="MES CARTES" activeTab="/cartes">
        <div className="flex min-h-[400px] flex-col items-center justify-center gap-5 text-center">
          <p className="text-xl font-bold text-[#231f20]">Vous n'êtes pas connecté.</p>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell title="MES CARTES" activeTab="/cartes">
      {/* Carrousel de carte — scroll-snap natif, aucune superposition */}
      <div className="scrollbar-none overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex snap-x snap-mandatory gap-4 px-4">
          <button onClick={() => navigate("/carte-detail")} className="lcl-press w-[82%] shrink-0 snap-start text-left md:w-[320px]" aria-label="Voir le détail de ma carte">
            <CreditCard user={user} />
          </button>
          <div className="w-[82%] shrink-0 snap-start overflow-hidden md:w-[320px]" aria-hidden>
            <CreditCard user={user} />
          </div>
        </div>
      </div>
      <p className="-mt-3 mb-1 px-1 text-center text-[12px] text-[#a0aab8]">
        Appuyez sur la carte pour voir son détail
      </p>
      {/* Pastilles */}
      <div className="mb-6 flex items-center justify-center gap-2">
        <span className="h-3 w-8 rounded-full bg-[#4258e3]" />
        <span className="h-3 w-3 rounded-full border-2 border-[#4258e3] bg-transparent" />
        <span className="h-3 w-3 rounded-full border-2 border-[#4258e3] bg-transparent" />
      </div>

      {/* SOS Carte */}
      <button className="lcl-press mx-auto block w-full max-w-[240px] rounded-full bg-[#2b3990] py-4 text-center text-lg font-bold text-white">
        SOS Carte
      </button>

      {/* Sous-onglets Paramètres / Options */}
      <div className="mb-6 mt-8 flex items-center justify-center gap-12">
        <button
          onClick={() => setSubTab("params")}
          className={`relative pb-2.5 text-xl font-bold lcl-press ${subTab === "params" ? "text-[#4258e3]" : "text-[#7a7a7a]"}`}>
          Paramètres
          {subTab === "params" && (
            <span className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-[#4258e3]" />
          )}
        </button>
        <button
          onClick={() => setSubTab("options")}
          className={`relative pb-2.5 text-xl font-bold lcl-press ${subTab === "options" ? "text-[#4258e3]" : "text-[#7a7a7a]"}`}>
          Options
          {subTab === "options" && (
            <span className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-[#4258e3]" />
          )}
        </button>
      </div>

      {/* Configurer Pay */}
      <button className="lcl-press mb-2 w-full rounded-lg border-2 border-[#231f20] bg-white py-4 text-center text-xl font-bold text-[#231f20]">
        Configurer <AppleLogo className="mb-1 mr-0.5 inline-block h-5 w-4.5" />Pay
      </button>

      {/* Liste des paramètres */}
      <div className="mt-2 flex flex-col">
        <div className="flex items-center gap-4 py-5">
          <span className="h-12 w-12 shrink-0"><IconCadreCadenas className="h-full w-full" /></span>
          <div className="flex-1">
            <p className="text-lg font-bold text-[#2b3990]">Verrouillage de la carte</p>
            <p className="mt-0.5 text-[15px] text-[#7a7a7a]">
              {verrou || blocked ? "Carte verrouillée" : "Carte déverrouillée"}
            </p>
          </div>
          <Toggle on={verrou || blocked} onChange={(v) => { setVerrou(v); }} />
        </div>

        <button className="flex items-center gap-4 py-5 text-left lcl-press">
          <span className="h-12 w-12 shrink-0"><IconCadreOeil className="h-full w-full" /></span>
          <div className="flex-1">
            <p className="text-lg font-bold text-[#2b3990]">Code confidentiel</p>
            <p className="mt-0.5 text-[15px] text-[#7a7a7a]">Affichage pendant 10 secondes</p>
          </div>
          <span className="text-2xl font-bold text-[#4258e3]">→</span>
        </button>

        <div className="flex items-center gap-4 py-5">
          <span className="h-12 w-12 shrink-0"><IconCadreWifi className="h-full w-full" /></span>
          <div className="flex-1">
            <p className="text-lg font-bold text-[#2b3990]">Paiement sans contact</p>
          </div>
          <Toggle on={contact} onChange={setContact} />
        </div>

        <button className="flex items-center gap-4 py-5 text-left lcl-press">
          <span className="h-12 w-12 shrink-0"><IconCadrePlus className="h-full w-full" /></span>
          <div className="flex-1">
            <p className="text-lg font-bold text-[#2b3990]">Ajouter une carte</p>
            <p className="mt-0.5 text-[15px] text-[#7a7a7a]">Commander une nouvelle carte</p>
          </div>
          <span className="text-2xl font-bold text-[#4258e3]">→</span>
        </button>
      </div>

      {/* Détail des opérations : derniers paiements sur la carte */}
      <p className="mt-8 px-1 text-lg font-bold text-[#231f20]">Détail de mes opérations</p>
      <p className="mt-1 px-1 text-[13px] text-[#8a8a8a]">Derniers paiements sur ma carte</p>
      {/* Flux combiné : opérations d'origine + virements effectués, trié par date décroissante */}
      {(() => {
        const transfers = getTransfers().map((t) => ({
          id: `tr_${t.id}`,
          reference: `Virement vers ${t.firstName} ${t.lastName}`,
          date: t.date,
          category: t.label || "Virement",
          status: "Effectué" as const,
          amount: -t.amount,
          kind: "transfer" as const,
        }));
        const originals = user.transactions.map((t) => ({ ...t, kind: "original" as const }));
        const combined = [...transfers, ...originals]
          .sort((a, b) => (a.date > b.date ? -1 : 1))
          .slice(0, 8);
        return (
        <div className="mt-2 flex flex-col">
        {combined.map((t) => (
        <div key={t.id} className="flex items-center gap-4 border-t border-[#eef1f5] py-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef1fd] text-[#2b3990]">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" />
                <line x="1" y="10" x2="23" y2="10" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[15px] font-bold text-[#1e293b]">{t.reference}</p>
              <p className="text-[12px] text-[#8a8a8a]">
                {formatDemoDate(t.date)}
                {t.category ? ` · ${t.category}` : ""}
                {t.status === "En attente" ? " · En attente" : ""}
              </p>
            </div>
            <span className="shrink-0 text-[15px] font-extrabold text-[#2b3990]">
              {showBalances ? `− ${formatEuro(Math.abs(t.amount))}` : "• • • •"}
            </span>
          </div>
        ))}
      </div>
        );
      })()}
    </AppShell>
  );
}
