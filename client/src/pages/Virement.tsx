/*
 * Site LCL — Page "VIREMENT" (captures 21.02.27) :
 * carte bleue "Faire un virement vers un IBAN", carte wero,
 * section "Gestion et paramétrage" (bénéficiaires, plafonds, virements programmés).
 * Le clic sur la carte bleue ouvre le formulaire de virement via IBAN.
 */
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { AppShell, ServiceRow, SectionTitle } from "@/components/lcl/Layout";
import FormulaireVirement, { TransferRecord, getTransfers } from "@/components/lcl/FormulaireVirement";
import { formatEuro } from "@/hooks/useUser";
import { useUser } from "@/hooks/useUser";
import {
  IconPersonnePlus,
  IconPieces,
  IconProgramme,
  IconFleche,
} from "@/components/lcl/Icons";

export default function Virement() {
  const { user } = useUser();
  const [, navigate] = useLocation();
  const [showForm, setShowForm] = useState(false);
  const [transfers, setTransfers] = useState<TransferRecord[]>([]);

  // Recharge l'historique après un virement : on rafraîchit à chaque fois
  // que l'utilisateur revient sur cette page depuis le formulaire.
  useEffect(() => {
    setTransfers(getTransfers());
    const onStorage = () => setTransfers(getTransfers());
    window.addEventListener("storage", onStorage);
    window.addEventListener("focus", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("focus", onStorage);
    };
  }, [showForm]);

  if (showForm) return <FormulaireVirement />;

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <AppShell title="VIREMENT" activeTab="/virement">
      {/* Carte bleue principale */}
      <button
        onClick={() => setShowForm(true)}
        className="lcl-press mt-6 w-full rounded-2xl py-8 text-center text-white lcl-card"
        style={{ background: "linear-gradient(180deg,#3a52d8 0%,#2b3990 100%)", boxShadow: "0 4px 18px rgba(43,57,144,0.35)" }}>
        <span className="mx-auto mb-3 flex h-9 w-9 items-center justify-center">
          <svg viewBox="0 0 36 36" className="h-8 w-8" fill="none">
            <path d="M18 6v24M10 12l8-8 8 8M26 24l-8 8-8-8" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="block text-[21px] font-bold">Faire un virement</span>
        <span className="mt-1 block text-base text-white/85">vers un IBAN</span>
      </button>

      {/* Carte wero */}
      <div className="lcl-card mt-5 px-5 py-7 text-center">
        <span className="mx-auto inline-block bg-[#ffc20e] px-3 py-1 align-middle text-xl font-black tracking-tight text-[#231f20]">
          wero
        </span>
        <p className="mt-4 text-[19px] font-bold text-[#1b3fab]">
          Envoyer ou demander de l'argent
        </p>
        <p className="mt-1 text-[15px] text-[#8a8a8a]">
          en utilisant un numéro de téléphone ou une
          <br />
          adresse email
        </p>
      </div>

      {/* Gestion et paramétrage */}
      <SectionTitle>Gestion et paramétrage</SectionTitle>
      <div>
        <ServiceRow
          icon={<IconPersonnePlus className="h-full w-full" />}
          title="Mes bénéficiaires"
          subtitle="Ajouter ou supprimer"
          right={<IconFleche className="h-7 w-7" />}
          onClick={() => navigate("/beneficiaires")}
        />
        <ServiceRow
          icon={<IconPieces className="h-full w-full" />}
          title="Mes plafonds et pays autorisés"
          subtitle="Augmenter ou réduire le plafond et modifier la liste des pays autorisés"
          right={<IconFleche className="h-7 w-7" />}
        />
        <ServiceRow
          icon={<IconProgramme className="h-full w-full" />}
          title="Mes virements programmés"
          subtitle="Créer, modifier ou supprimer"
          right={<IconFleche className="h-7 w-7" />}
        />
      </div>

      {/* Historique des virements effectués */}
      <div className="mt-8" />
      <SectionTitle>Historique des virements</SectionTitle>
      {transfers.length === 0 ? (
        <div className="lcl-card mt-2 px-5 py-8 text-center">
          <p className="text-[15px] font-semibold text-[#64748b]">
            Aucun virement effectué pour le moment
          </p>
          <p className="mt-1 text-[13px] text-[#94a3b8]">
            Vos virements validés apparaîtront ici
          </p>
        </div>
      ) : (
        <div className="mt-2 space-y-3">
          {transfers.map((t) => (
            <div key={t.id} className="lcl-card px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-[15px] font-bold text-[#1e293b]">
                    {t.firstName} {t.lastName}
                  </p>
                  <p className="truncate text-[12px] font-medium text-[#8a8a8a]">
                    {t.sourceAccountType} · {t.sourceAccountNumber}
                    {t.label ? ` · ${t.label}` : ""}
                  </p>
                  <p className="text-[11px] text-[#a0aab8]">{formatDate(t.date)}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-[16px] font-extrabold text-[#ef4444]">
                    − {formatEuro(t.amount)}
                  </p>
                  <p
                    className={`text-[11px] font-semibold ${
                      t.emailSent ? "text-[#16a34a]" : "text-[#d97706]"
                    }`}>
                    {t.emailSent ? "Email envoyé" : "Email non envoyé"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </AppShell>
  );
}
