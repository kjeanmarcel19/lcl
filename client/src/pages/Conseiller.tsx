/*
 * Site LCL — Page "CONSEILLER" (item de la tab bar) :
 * même langage visuel que les autres écrans internes.
 */
import { useState } from "react";
import { useLocation } from "wouter";
import { AppShell, ServiceRow, SectionTitle } from "@/components/lcl/Layout";
import { IconConseiller, IconProgramme, IconFleche, IconCartePetite } from "@/components/lcl/Icons";
import { useUser } from "@/hooks/useUser";

const tabs = [
  { id: "rdv", label: "Rendez-vous" },
  { id: "echange", label: "Échanges" },
];

export default function Conseiller() {
  const [tab, setTab] = useState("rdv");
  const [, navigate] = useLocation();
  const { user } = useUser();

  const tabsSlot = (
    <div className="flex items-end justify-center gap-6 px-2 pb-6">
      {tabs.map((t) => {
        const active = t.id === tab;
        return (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="relative pb-2.5 text-lg font-semibold lcl-press"
            style={active ? { color: "#ffffff" } : { color: "rgba(255,255,255,0.9)" }}>
            {active && (
              <span
                className="absolute inset-0 -left-4 -right-0 rounded-xl"
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
    <AppShell title="CONSEILLER" activeTab="/conseiller" tabsSlot={tabsSlot}>

      <div className="lcl-card px-5 py-6 text-center">
        <p className="text-[19px] font-bold text-[#1b3fab]">Votre conseiller</p>
        <p className="mt-1 text-base text-[#7a7a7a]">
          {user ? `${user.manager} — ${user.location}` : "Émilie Martin — Agence Paris 12"}
        </p>
        <button className="lcl-press mt-5 w-full rounded-full bg-[#2b3990] py-3.5 text-lg font-bold text-white">
          Prendre rendez-vous
        </button>
      </div>

      <SectionTitle>Échanger</SectionTitle>
      <div>
        <ServiceRow
          icon={<IconCartePetite className="h-full w-full" />}
          title="Messagerie sécurisée"
          subtitle="Écrire un message à mon conseiller"
          right={<IconFleche className="h-7 w-7" />}
        />
        <ServiceRow
          icon={<IconProgramme className="h-full w-full" />}
          title="Mes rendez-vous"
          subtitle="Consulter et gérer mes rendez-vous"
          right={<IconFleche className="h-7 w-7" />}
        />
      </div>
    </AppShell>
  );
}
