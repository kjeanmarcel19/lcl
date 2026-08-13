/*
 * Site LCL — Onglet "Crédit" de Ma Synthèse (capture 21.02.09) :
 * montant disponible du crédit renouvelable, boutons Rembourser/Utiliser,
 * carte Crédit renouvelable, sections Immobilier et Crédit conso.
 */
import { useState } from "react";
import { useLocation } from "wouter";
import { AppShell, ServiceRow, SectionTitle } from "@/components/lcl/Layout";
import {
  IconImmoFlash,
  IconImmeuble,
  IconVirement,
  IconFleche,
} from "@/components/lcl/Icons";
import { useUser, formatEuro } from "@/hooks/useUser";
import { useBalanceVisibility } from "@/contexts/BalanceVisibilityContext";

const tabs = [
  { id: "compte", label: "Compte", path: "/synthese" },
  { id: "epargne", label: "Épargne", path: "/synthese" },
  { id: "credit", label: "Crédit" },
  { id: "assurance", label: "Assurance", path: "/synthese" },
];

export default function SyntheseCredit() {
  const [tab, setTab] = useState("credit");
  const [, navigate] = useLocation();
  const { user } = useUser();
  const { showBalances } = useBalanceVisibility();
  const masked = !showBalances;

  // Crédit renouvelable du compte connecté : limite carte - montant utilisé (limite = 300 € par défaut)
  const creditRenouvelable = user?.accounts.find((a) => a.type === "Crédit renouvelable") ?? null;
  const creditSolde = creditRenouvelable?.balance ?? 2400;
  const creditLimite = user?.card.limit ?? 300;

  // ---- Simulateur de crédit renouvelable ----
  const [simMontant, setSimMontant] = useState("3000");
  const [simDuree, setSimDuree] = useState("24");
  const [simTaux, setSimTaux] = useState("3.9");

  // Mensualité : M = montant × i / (1 − (1+i)^(−n)) où i = taux mensuel
  const montantNum = Number(simMontant) || 0;
  const dureeNum = Number(simDuree) || 1;
  const tauxNum = Number(simTaux) || 0;
  const tauxMensuel = tauxNum / 100 / 12;
  const mensualite =
    montantNum > 0 && tauxMensuel > 0
      ? (montantNum * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -dureeNum))
      : tauxNum === 0
        ? montantNum / dureeNum
        : 0;
  const coutTotal = mensualite * dureeNum - montantNum;

  const tabsSlot = (
    <div className="flex items-end justify-center gap-6 px-2 pb-6">
        {tabs.map((t) => {
        const active = t.id === tab;
        return (
          <button
            key={t.id}
            onClick={() => {
              setTab(t.id);
              if (t.path && t.id !== "credit") navigate(t.path);
            }}
            className="relative pb-2.5 text-lg font-semibold lcl-press"
            style={active ? { color: "#ffffff" } : { color: "rgba(255,255,255,0.9)" }}
          >
            {active && (
              <span
                className="absolute inset-0 -left-5 -right-0 rounded-xl"
                style={{ background: "rgba(255,255,255,0.14)" }}
              />
            )}
            <span className="relative z-10 px-3">{t.label}</span>
            {active && (
              <span className="absolute bottom-0.5 left-1/2 z-10 h-[4px] w-10 -translate-x-1/2 rounded-full bg-white" />
            )}
          </button>
        );
      })}
    </div>
  );

  return (
    <AppShell title="MA SYNTHÈSE" activeTab="/synthese" tabsSlot={tabsSlot}>
      {/* Montant disponible crédit renouvelable */}
      <div className="lcl-card px-5 py-6 text-center">
        <p className="text-[19px] font-bold leading-snug text-[#1b3fab]">
          Montant disponible
          <br />
          de mon crédit renouvelable
        </p>
        <p className="mt-3 text-[40px] font-extrabold text-[#1b3fab]">{masked ? "• • • •" : formatEuro(creditLimite)}</p>
        <div className="mt-5 flex items-center gap-3">
          <button className="lcl-press flex-1 rounded-full border-2 border-[#4258e3] py-3 text-lg font-bold text-[#4258e3]">
            Rembourser
          </button>
          <button className="lcl-press flex-1 rounded-full bg-[#2b3990] py-3 text-lg font-bold text-white">
            Utiliser
          </button>
        </div>
      </div>

      {/* Carte crédit renouvelable */}
      <div className="lcl-card mt-4 flex items-center justify-between px-5 py-5">
        <div>
          <p className="text-lg font-bold text-[#231f20]">Crédit renouvelable</p>
          <p className="text-[15px] text-[#7a7a7a]">{creditRenouvelable?.number ?? "00381 268410X"}</p>
        </div>
        <span className="text-2xl font-extrabold text-[#2b3990]">{masked ? "• • • •" : formatEuro(creditSolde)}</span>
      </div>

      {/* Section Immobilier */}
      <SectionTitle>Immobilier</SectionTitle>
      <div>
        <ServiceRow
          icon={<IconImmoFlash className="h-full w-full" />}
          title="Immoflash"
          subtitle="Compromis de vente déjà signé ? Faire ma demande de prêt 100% en ligne, en quelques clics"
          right={<IconFleche className="h-7 w-7" />}
        />
        <ServiceRow
          icon={<IconImmeuble className="h-full w-full" />}
          title="Mon Espace Immobilier"
          subtitle="M'informer, simuler & suivre"
          right={<IconFleche className="h-7 w-7" />}
        />
      </div>

      {/* Section Crédit conso */}
      <SectionTitle>Crédit conso</SectionTitle>
      <div>
        <ServiceRow
          icon={<IconVirement className="h-full w-full" />}
          title="Ma demande de crédit"
          subtitle="Faire une demande de crédit personnel"
          right={<IconFleche className="h-7 w-7" />}
        />
      </div>

      {/* Simulateur de crédit renouvelable */}
      <SectionTitle>Simulateur de crédit</SectionTitle>
      <div className="lcl-card mt-2 px-5 py-6">
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-[14px] font-bold text-[#3a3f4a]">Montant emprunté (€)</label>
            <input
              inputMode="numeric"
              value={simMontant}
              onChange={(e) => setSimMontant(e.target.value.replace(/[^0-9]/g, ""))}
              className="mt-1.5 w-full rounded-xl border-2 border-[#e2e8f0] px-4 py-3 text-[15px] font-bold outline-none focus:border-[#2b3990]"
            />
            <input
              type="range"
              min={500}
              max={7500}
              step={100}
              value={Math.min(Number(simMontant) || 500, 7500)}
              onChange={(e) => setSimMontant(e.target.value)}
              className="mt-2 w-full accent-[#2b3990]"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-[14px] font-bold text-[#3a3f4a]">Durée (mois)</label>
              <input
                inputMode="numeric"
                value={simDuree}
                onChange={(e) => setSimDuree(e.target.value.replace(/[^0-9]/g, ""))}
                className="mt-1.5 w-full rounded-xl border-2 border-[#e2e8f0] px-4 py-3 text-[15px] font-bold outline-none focus:border-[#2b3990]"
              />
            </div>
            <div className="flex-1">
              <label className="text-[14px] font-bold text-[#3a3f4a]">TAEG (%)</label>
              <input
                inputMode="decimal"
                value={simTaux}
                onChange={(e) => setSimTaux(e.target.value.replace(/[^0-9.]/g, ""))}
                className="mt-1.5 w-full rounded-xl border-2 border-[#e2e8f0] px-4 py-3 text-[15px] font-bold outline-none focus:border-[#2b3990]"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-[#eef1fd] px-5 py-5 text-center">
          <p className="text-[14px] font-bold text-[#64748b]">Mensualité estimée</p>
          <p className="mt-1 text-[32px] font-extrabold text-[#2b3990]">
            {masked ? "• • • •" : `${formatEuro(mensualite)}`}
          </p>
          <div className="mt-3 flex items-center justify-around border-t border-[#c9d2f0] pt-3 text-[13px] text-[#64748b]">
            <span>
              Coût total du crédit<br />
              <strong className="text-[#1e293b]">{masked ? "• • • •" : formatEuro(Math.max(coutTotal, 0))}</strong>
            </span>
            <span>
              Montant total dû<br />
              <strong className="text-[#1e293b]">{masked ? "• • • •" : formatEuro(montantNum + Math.max(coutTotal, 0))}</strong>
            </span>
          </div>
        </div>
        <p className="mt-4 text-center text-[12px] text-[#a0aab8]">
          Simulation indicative, sans engagement. Taux fixe, hors assurance facultative.
        </p>
      </div>
    </AppShell>
  );
}
