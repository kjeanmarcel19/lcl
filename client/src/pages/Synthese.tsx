/*
 * Site LCL — Page "Ma Synthèse" (captures 21.02.07 / 21.02.09) :
 * onglets Compte/Épargne/Crédit/Assurance sur le header, total des comptes,
 * cartes de comptes, liste de services, tab bar.
 * Les données affichées proviennent de l'utilisateur connecté (useUser).
 */
import { useState } from "react";
import { useLocation } from "wouter";
import { AppShell, ServiceRow } from "@/components/lcl/Layout";
import {
  IconPrerelevements,
  IconCreditRenouvelable,
  IconCompteEnfant,
  IconPortefeuille,
  IconFleche,
} from "@/components/lcl/Icons";
import { useUser, formatEuro, getAdjustedBalance } from "@/hooks/useUser";
import { getTransfers } from "@/components/lcl/FormulaireVirement";
import { useBalanceVisibility } from "@/contexts/BalanceVisibilityContext";
import { formatDemoDate } from "@/lib/date";

const tabs = [
  { id: "compte", label: "Compte" },
  { id: "epargne", label: "Épargne" },
  { id: "credit", label: "Crédit" },
  { id: "assurance", label: "Assurance" },
];

export default function Synthese() {
  const [tab, setTab] = useState("compte");
  const { showBalances, toggleBalances } = useBalanceVisibility();
  const [, navigate] = useLocation();
  const { user } = useUser();
  const transfers = getTransfers();
  // Mouvements récents du compte courant : les virements effectués depuis ce compte
  const recentMovements = transfers.filter(
    (t) => t.sourceAccountId === user?.accounts[0]?.id
  );
  const masked = !showBalances;

  // Si personne n'est connecté, proposer de revenir à la connexion
  if (!user) {
    return (
      <AppShell title="MA SYNTHÈSE" activeTab="/synthese">
        <div className="flex min-h-[400px] flex-col items-center justify-center gap-5 text-center">
          <p className="text-xl font-bold text-[#231f20]">Vous n'êtes pas connecté.</p>
          <button
            onClick={() => navigate("/connexion")}
            className="lcl-press rounded-full bg-[#2b3990] px-10 py-4 text-lg font-bold text-white">
            Se connecter
          </button>
        </div>
      </AppShell>
    );
  }

  const compteDepot = user.accounts[0];
  const compteCheque = user.accounts[1];

  // Soldes ajustés après virements (persistés en localStorage)
  const balanceFor = (accountId: string) =>
    getAdjustedBalance(user.identifiant, accountId);

  const total = user.accounts
    .filter((a) => a.type !== "Crédit" && a.type !== "Assurance")
    .reduce((s, a) => s + balanceFor(a.id), 0);

  const tabsSlot = (
    <div className="flex items-end justify-center gap-6 px-2 pb-6">
      {tabs.map((t) => {
        const active = t.id === tab;
        return (
          <button
            key={t.id}
            onClick={() => {
              setTab(t.id);
              if (t.id === "credit") navigate("/synthese/credit");
            }}
            className="relative pb-2.5 text-lg font-semibold lcl-press"
            style={
              active
                ? { color: "#ffffff" }
                : { color: "rgba(255,255,255,0.9)" }
            }>
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
    <AppShell
      title="MA SYNTHÈSE"
      activeTab="/synthese"
      tabsSlot={tabsSlot}
      subtitle={
        <span className="mt-0.5 text-[13px] font-medium tracking-[0.08em] text-yellow-300">
          Votre conseiller : {user.manager}
        </span>
      }>
      {tab === "compte" && (
        <>
          <p className="text-xl font-bold text-[#231f20]">
            Bonjour, {user.prenom} {user.nom}
          </p>
          <p className="mt-3 flex items-center justify-between text-xl font-bold text-[#231f20]">
            <span>Total de mes comptes</span>
            <button
              onClick={toggleBalances}
              aria-label={masked ? "Afficher les soldes" : "Masquer les soldes"}
              className="lcl-press flex items-center justify-center rounded-full p-1.5 text-[#2b3990]">
              {masked ? (
                // Œil barré (soldes masqués)
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                // Œil ouvert (soldes visibles)
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </p>
          <p className="mt-1 text-[40px] font-extrabold leading-tight text-[#2b3990]">
            {masked ? "• • • •" : formatEuro(total)}
          </p>

          {compteDepot && (
            <div className="lcl-card mt-6 flex items-center justify-between px-5 py-5">
              <div>
                <p className="text-lg font-bold text-[#231f20]">{compteDepot.type}</p>
                <p className="text-[15px] text-[#7a7a7a]">{compteDepot.number}</p>
              </div>
              <span className="text-2xl font-extrabold text-[#2b3990]">
              {masked ? "• • • •" : formatEuro(balanceFor(compteDepot.id))}
            </span>
            </div>
          )}

          {compteCheque && compteCheque !== compteDepot && (
            <div className="lcl-card mt-4 flex items-center justify-between px-5 py-5">
              <div>
                <p className="text-lg font-bold text-[#231f20]">{compteCheque.type}</p>
                <p className="text-[15px] text-[#7a7a7a]">{compteCheque.number}</p>
              </div>
              <span className="text-2xl font-extrabold text-[#2b3990]">
              {masked ? "• • • •" : formatEuro(balanceFor(compteCheque.id))}
            </span>
            </div>
          )}

          <div className="mt-2">
            <ServiceRow
              icon={<IconPrerelevements className="h-full w-full" />}
              title="Prélèvements"
              subtitle="Consulter et gérer"
              right={<IconFleche className="h-7 w-7" />}
            />
            <ServiceRow
              icon={<IconCreditRenouvelable className="h-full w-full" />}
              title="Crédit renouvelable"
              subtitle="Tout sur votre crédit"
              right={<IconFleche className="h-7 w-7" />}
            />
            <ServiceRow
              icon={<IconCompteEnfant className="h-full w-full" />}
              title="Compte pour mon enfant"
              subtitle="Souscrire"
              right={<IconFleche className="h-7 w-7" />}
            />
            <ServiceRow
              icon={<IconPortefeuille className="h-full w-full" />}
              title="Ajouter une banque"
              subtitle=""
              right={<IconFleche className="h-7 w-7" />}
            />
          </div>

          {/* Détails des virements du compte courant : mouvements récents */}
          <div className="mt-6">
            <p className="flex items-center justify-between px-1 text-lg font-bold text-[#231f20]">
              <span>Détail de mon compte courant</span>
              <button
                onClick={() => navigate("/virement")}
                className="lcl-press text-[13px] font-semibold text-[#2b3990]">
                Voir plus
              </button>
            </p>
            {recentMovements.length === 0 ? (
              <div className="lcl-card mt-2 px-5 py-6 text-center text-[14px] font-medium text-[#8a8a8a]">
                Aucun mouvement récent sur ce compte.
              </div>
            ) : (
              <div className="mt-2 space-y-2">
                {recentMovements.map((t) => (
                  <div key={t.id} className="lcl-card flex items-center justify-between px-5 py-4">
                    <div className="min-w-0">
                      <p className="truncate text-[14px] font-bold text-[#1e293b]">
                        Virement à {t.firstName} {t.lastName}
                      </p>
                      <p className="truncate text-[12px] text-[#8a8a8a]">
                        {t.label ? `${t.label} · ` : ""}
                        {formatDemoDate(t.date)}
                      </p>
                    </div>
                    <span className="shrink-0 text-[15px] font-extrabold text-[#ef4444]">
                      − {masked ? "• • • •" : formatEuro(t.amount)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {tab === "epargne" && (
        <div className="mt-4 flex flex-col gap-4">
          <p className="text-xl font-bold text-[#231f20]">Total de mon épargne</p>
          {user.accounts.filter((a) => a.type === "Épargne").length === 0 && (
            <div className="lcl-card px-5 py-5 text-center text-[#7a7a7a]">
              Aucun compte d'épargne.
            </div>
          )}
          {user.accounts
            .filter((a) => a.type === "Épargne")
            .map((a) => (
              <div key={a.id} className="lcl-card flex items-center justify-between px-5 py-5">
                <div>
                  <p className="text-lg font-bold text-[#231f20]">{a.type}</p>
                  <p className="text-[15px] text-[#7a7a7a]">{a.number}</p>
                </div>
                <span className="text-2xl font-extrabold text-[#2b3990]">
                  {masked ? "• • • •" : formatEuro(a.balance)}
                </span>
              </div>
            ))}
        </div>
      )}

      {tab === "assurance" && (
        <div className="mt-4 flex flex-col gap-4">
          <p className="text-xl font-bold text-[#231f20]">Mes assurances</p>
          {user.accounts.filter((a) => a.type === "Assurance").length === 0 && (
            <div className="lcl-card px-5 py-5 text-center text-[#7a7a7a]">
              Aucun contrat d'assurance.
            </div>
          )}
          {user.accounts
            .filter((a) => a.type === "Assurance")
            .map((a) => (
              <div key={a.id} className="lcl-card flex items-center justify-between px-5 py-5">
                <div>
                  <p className="text-lg font-bold text-[#231f20]">{a.type}</p>
                  <p className="text-[15px] text-[#7a7a7a]">{a.number}</p>
                </div>
                <span className="text-2xl font-extrabold text-[#2b3990]">
                  {masked ? "• • • •" : formatEuro(a.balance)}
                </span>
              </div>
            ))}
        </div>
      )}
    </AppShell>
  );
}
