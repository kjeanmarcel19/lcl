/*
 * Site LCL — Page "MES ACTUS" (item de la tab bar) :
 * fil d'actualités bancaires dans le même langage visuel.
 */
import { AppShell, SectionTitle } from "@/components/lcl/Layout";
import { IconFleche } from "@/components/lcl/Icons";

const actus = [
  {
    date: "10 août 2026",
    tag: "Banque au quotidien",
    title: "Instant Payment : virez en moins de 10 secondes",
    desc: "Le virement instantané devient la norme en Europe. Découvrez comment l'activer depuis votre application LCL.",
  },
  {
    date: "6 août 2026",
    tag: "Épargne",
    title: "Livret A : le taux reste inchangé",
    desc: "Le taux du Livret A demeure à son niveau actuel. Pensez à compléter votre épargne de précaution.",
  },
  {
    date: "1 août 2026",
    tag: "Sécurité",
    title: "Bien repérer les tentatives d'arnaque",
    desc: "LCL ne vous demandera jamais votre code personnel. Conseils pour protéger vos accès.",
  },
];

export default function Actus() {
  return (
    <AppShell title="MES ACTUS" activeTab="/actus">
      <SectionTitle>Actualités</SectionTitle>
      <div className="flex flex-col gap-4">
        {actus.map((a, i) => (
          <button key={i} className="lcl-card w-full px-5 py-5 text-left lcl-press">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#eef0fb] px-3 py-1 text-xs font-bold text-[#2b3990]">
                {a.tag}
              </span>
              <span className="text-xs text-[#8a8a8a]">{a.date}</span>
            </div>
            <p className="mt-3 text-lg font-bold text-[#1b3fab]">{a.title}</p>
            <p className="mt-1 text-sm text-[#7a7a7a]">{a.desc}</p>
            <span className="mt-3 flex justify-end"><IconFleche className="h-6 w-6" /></span>
          </button>
        ))}
      </div>
    </AppShell>
  );
}
