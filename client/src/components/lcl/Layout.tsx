/*
 * Site LCL — Layout partagé des écrans internes :
 * Header bleu foncé (hamburger + titre + profil), carte blanche à rayon fort,
 * tab bar fixe en bas. Voir ideas.md pour les tokens.
 */
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "wouter";
import {
  IconHamburger,
  IconProfil,
  IconPortefeuillePetit,
  IconVirementBidirectionnel,
  IconCartePetite,
  IconConseiller,
  IconCloche,
  IconDeconnexion,
  IconConseillerPetit,
} from "./Icons";
import { useUser } from "@/hooks/useUser";
import { getNotifications } from "@/pages/Notifications";

const tabs = [
  { path: "/synthese", label: "Synthèse", Icon: IconPortefeuillePetit },
  { path: "/virement", label: "Virements", Icon: IconVirementBidirectionnel },
  { path: "/cartes", label: "Cartes", Icon: IconCartePetite },
  { path: "/conseiller", label: "Conseiller", Icon: IconConseiller },
  { path: "/notifications", label: "Notifications", Icon: IconCloche },
];

interface HeaderLCLProps {
  title: string;
  tabsSlot?: React.ReactNode;
  /** Sous-titre optionnel sous le titre (ex : conseiller du compte). */
  subtitle?: React.ReactNode;
}

export function HeaderLCL({ title, tabsSlot, subtitle }: HeaderLCLProps) {
  const [, navigate] = useLocation();
  const { user, logout } = useUser();
  const [profilOpen, setProfilOpen] = useState(false);
  const profilBtnRef = useRef<HTMLButtonElement>(null);
  const [profilPos, setProfilPos] = useState({ top: 0, right: 0 });

  useEffect(() => {
    // Recalcule la position du bouton profil (viewport) pour placer le menu
    // via portal, hors du stacking context du header (z-10).
    if (!profilOpen) return;
    const el = profilBtnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setProfilPos({ top: r.bottom + 8, right: window.innerWidth - r.right });
  }, [profilOpen]);

  return (
    <header
      className="relative z-10 flex flex-col px-5 pt-4 text-white"
      style={{ background: "linear-gradient(180deg,#2a42ae 0%,#1b3fab 55%,#16328c 100%)", paddingBottom: tabsSlot ? "1.25rem" : "1.6rem" }}>
      <div className="flex items-center justify-between">
        <button aria-label="Menu" className="p-1">
          <IconHamburger className="h-8 w-8" />
        </button>
        <div className="flex min-w-0 flex-1 flex-col items-center px-2">
          <span className="text-xl font-bold tracking-[0.14em]">{title}</span>
          {subtitle}
        </div>
        {/* Menu profil : popover avec le client connecté et le bouton Se déconnecter */}
        <div className="relative z-30">
          <button
            ref={profilBtnRef}
            aria-label="Profil"
            className="p-1"
            onClick={() => setProfilOpen((o) => !o)}>
            <IconProfil className="h-8 w-8" />
          </button>
          {profilOpen &&
            createPortal(
              <>
                <div
                  className="fixed inset-0 z-[60]"
                  onClick={() => setProfilOpen(false)}
                  aria-hidden
                />
                <div
                  className="menu-profil fixed z-[70] w-64 rounded-2xl bg-white text-[#231f20]"
                  style={{
                    top: profilPos.top,
                    right: profilPos.right,
                    boxShadow: "0 8px 30px rgba(27,63,171,0.35)",
                  }}>
              <div className="border-b border-[#e8e9ee] px-4 py-4">
                <p className="text-lg font-bold text-[#2b3990]">Mon profil</p>
                <p className="mt-0.5 break-words text-[15px] font-medium text-[#4a5578]">
                  {user ? `${user.prenom} ${user.nom} — ${user.identifiant}` : "Non connecté"}
                </p>
              </div>
              <button
                onClick={() => {
                  setProfilOpen(false);
                  navigate("/conseiller");
                }}
                className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-lg font-semibold text-[#2b3990] lcl-press">
                <IconConseillerPetit className="h-6 w-6" />
                {user ? `${user.manager} — ${user.location}` : "Votre conseiller"}
              </button>
              <button
                onClick={() => {
                  setProfilOpen(false);
                  logout();
                }}
                className="flex w-full items-center gap-3 border-t border-[#e8e9ee] px-4 py-3.5 text-left text-lg font-semibold text-[#c0392b] lcl-press">
                <IconDeconnexion className="h-6 w-6" />
                Se déconnecter
              </button>
            </div>
            </>,
            document.body,
          )}
        </div>
      </div>
      {tabsSlot}
    </header>
  );
}

interface TabBarProps {
  active: string;
}

/** Nombre de notifications non lues du client connecté. */
export function useUnreadNotifCount(): number {
  const { user } = useUser();
  if (!user) return 0;
  const notifs = getNotifications();
  // Lu : date de dernière visite de l'écran Notifications (lcl_notif_read:{id})
  let readAt = 0;
  try {
    readAt = Number(localStorage.getItem(`lcl_notif_read:${user.identifiant}`) || "0");
  } catch {
    readAt = 0;
  }
  return notifs.filter((n) => new Date(n.date).getTime() > readAt).length;
}

export function TabBar({ active }: TabBarProps) {
  const [, navigate] = useLocation();
  const unread = useUnreadNotifCount();
  return (
    <nav
      className="fixed bottom-0 left-1/2 z-40 w-full max-w-[430px] -translate-x-1/2 bg-white md:max-w-[600px] lg:max-w-[680px] xl:max-w-[720px]"
      style={{ boxShadow: "0 -2px 12px rgba(27,63,171,0.12)" }}>
      <div className="flex items-end justify-between px-2 pb-2 pt-3">
        {tabs.map(({ path, label, Icon }) => {
          const isActive = path === active;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex w-16 flex-col items-center gap-1 lcl-press">
              <span className="relative">
                {path === "/synthese" ? (
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${isActive ? "bg-[#2b3990] text-white" : "bg-white text-[#2b3990]"}`}>
                    <Icon className="h-5 w-5" fill={isActive ? "currentColor" : "none"} />
                  </span>
                ) : (
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${isActive ? "bg-[#2b3990] text-white" : "bg-white text-[#2b3990]"}`}>
                    <Icon className="h-4.5 w-4.5" fill={isActive ? "currentColor" : "none"} />
                  </span>
                )}
                {path === "/notifications" && unread > 0 && (
                  <span
                    className="absolute -right-1.5 -top-1.5 z-10 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#ef4444] px-1 text-[10px] font-bold text-white"
                    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.35)" }}>
                    {unread > 99 ? "99+" : unread}
                  </span>
                )}
              </span>
              <span
                className={`text-[11px] font-semibold ${isActive ? "text-[#2b3990]" : "text-[#4a5266]"}`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

interface AppShellProps {
  title: string;
  activeTab?: string;
  children: React.ReactNode;
  tabsSlot?: React.ReactNode;
  subtitle?: React.ReactNode;
}

/** Coquille des écrans internes : header + contenu + tab bar. */
/*
 * Animation d'entrée du menu profil via CSS pur (transition), sans keyframes
 * injectés en JS : le rendu "fantôme" en capture provenait d'une frame figée
 * à mi-animation des keyframes (transform figée par le capture tool).
 */

export function AppShell({ title, activeTab = "/synthese", children, tabsSlot, subtitle }: AppShellProps) {
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-[430px] bg-[#f4f5f8] md:max-w-[600px] lg:max-w-[680px] xl:max-w-[720px]">
      <HeaderLCL title={title} tabsSlot={tabsSlot} subtitle={subtitle} />
      {/* Carte blanche qui déborde légèrement sur le header comme dans les captures */}
      <div
        className="relative z-20 mx-0 rounded-t-[28px] bg-white pb-32"
        style={{ marginTop: "-14px", boxShadow: "0 -4px 20px rgba(27,63,171,0.10)" }}>
        <div className="px-5 pt-6">{children}</div>
      </div>
      <TabBar active={activeTab} />
    </div>
  );
}

/** Élément de liste de service avec icône à gauche et flèche à droite. */
export function ServiceRow({
  icon,
  title,
  subtitle,
  right,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  right?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-4 py-5 text-left lcl-press">
      <span className="h-12 w-12 shrink-0">{icon}</span>
      <span className="flex-1">
        <span className="block text-lg font-bold text-[#2b3990]">{title}</span>
        <span className="mt-0.5 block text-[15px] text-[#7a7a7a]">{subtitle}</span>
      </span>
      {right ?? <span className="shrink-0">→</span>}
    </button>
  );
}

/** Titre de section avec trait jaune en dessous. */
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-8 mb-2 text-2xl font-extrabold text-[#1b3fab]">
      {children}
      <span className="mt-1.5 block h-[5px] w-10 rounded-full bg-[#ffc20e]" />
    </h2>
  );
}
