/*
 * Site LCL — Page "NOTIFICATIONS" :
 * alertes de connexion (à chaque connexion réussie) et alertes de virement
 * (à chaque virement effectué). Stockées en localStorage
 * (clé "lcl_notifications:{identifiant}") et effaçables une par une.
 */
import { useState } from "react";
import { useLocation } from "wouter";
import { AppShell } from "@/components/lcl/Layout";
import { useUser, formatEuro } from "@/hooks/useUser";
import { getTransfers } from "@/components/lcl/FormulaireVirement";

export interface AppNotification {
  id: string;
  type: "login" | "transfer";
  date: string; // ISO
  title: string;
  message: string;
}

const NOTIFICATIONS_KEY = "lcl_notifications";

function fmtDate(iso: string): string {
  return new Date(iso).toLocaleString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/** Ajoute une notification pour l'utilisateur connecté. */
export function addNotification(n: Omit<AppNotification, "id">): void {
  const id = localStorage.getItem("lcl_user_id");
  if (!id) return;
  try {
    const raw = localStorage.getItem(`${NOTIFICATIONS_KEY}:${id}`) || "[]";
    const list: AppNotification[] = JSON.parse(raw);
    list.unshift({ ...n, id: `notif_${Date.now()}_${Math.random().toString(36).slice(2, 8)}` });
    localStorage.setItem(`${NOTIFICATIONS_KEY}:${id}`, JSON.stringify(list.slice(0, 100)));
  } catch {
    // best-effort
  }
}

/** Récupère les notifications de l'utilisateur connecté. */
export function getNotifications(): AppNotification[] {
  const id = localStorage.getItem("lcl_user_id");
  if (!id) return [];
  try {
    return JSON.parse(localStorage.getItem(`${NOTIFICATIONS_KEY}:${id}`) || "[]");
  } catch {
    return [];
  }
}

/** Supprime toutes les notifications de l'utilisateur connecté. */
export function clearNotifications(): void {
  const id = localStorage.getItem("lcl_user_id");
  if (!id) return;
  localStorage.removeItem(`${NOTIFICATIONS_KEY}:${id}`);
}

/** Construit les notifications : connexions + virements de l'utilisateur. */
export function buildNotifications(user: NonNullable<ReturnType<typeof useUser>["user"]>): AppNotification[] {
  const out: AppNotification[] = [];
  if (user.lastConnection) {
    out.push({
      id: "notif_login_last",
      type: "login",
      date: new Date().toISOString(),
      title: "Connexion réussie",
      message: `Vous vous êtes connecté(e) à l'application LCL le ${new Date(user.lastConnection).toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}.`,
    });
  }
  const transfers = getTransfers().filter((t) => t.sourceAccountId);
  for (const t of transfers) {
    out.push({
      id: `notif_transfer_${t.id}`,
      type: "transfer",
      date: t.date,
      title: `Virement effectué de ${formatEuro(t.amount)}`,
      message: `Virement vers ${t.firstName} ${t.lastName} (${t.iban.slice(-8)}) prélevé sur ${t.sourceAccountType}.`,
    });
  }
  return out;
}

export default function Notifications() {
  const [, navigate] = useLocation();
  const { user } = useUser();
  // Compteur incrémenté pour forcer un re-rendu après suppression
  const [version, setVersion] = useState(0);
  const list = user ? buildNotifications(user) : [];

  if (!user) {
    return (
      <AppShell title="NOTIFICATIONS" activeTab="/notifications">
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

  // Marquer toutes les notifications comme lues à l'ouverture de l'écran
  try {
    localStorage.setItem(`lcl_notif_read:${user.identifiant}`, String(Date.now()));
  } catch {
    // best-effort
  }

  return (
    <AppShell title="NOTIFICATIONS" activeTab="/notifications">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-[#231f20]">Mes alertes</p>
        {list.length > 0 && (
          <button
            onClick={() => {
              clearNotifications();
              setVersion((v) => v + 1);
            }}
            className="lcl-press rounded-full border-2 border-[#c0392b] px-4 py-1.5 text-[13px] font-bold text-[#c0392b]">
            Tout effacer
          </button>
        )}
      </div>

      {list.length === 0 && (
        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <svg viewBox="0 0 24 24" className="h-14 w-14 text-[#c6ccd8]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <p className="text-[15px] font-medium text-[#8a8a8a]">Aucune notification pour le moment.</p>
          <p className="max-w-[280px] text-[13px] text-[#b0b5c0]">
            Vos alertes de connexion et de virement apparaîtront ici dès que vous effectuerez une opération.
          </p>
        </div>
      )}

      <div key={version} className="mt-4 flex flex-col">
        {list.map((n: AppNotification) => (
          <div
            key={n.id}
            className="flex items-start gap-4 border-t border-[#eef1f5] py-4"
            style={{
              borderLeft: `4px solid ${n.type === "login" ? "#2b3990" : "#16a34a"}`,
              paddingLeft: "0.75rem",
            }}>
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{
                backgroundColor: n.type === "login" ? "#eef1fd" : "#ecfdf5",
                color: n.type === "login" ? "#2b3990" : "#16a34a",
              }}>
              {n.type === "login" ? (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-bold text-[#1e293b]">{n.title}</p>
              <p className="mt-0.5 text-[13px] text-[#8a8a8a]">{n.message}</p>
              <p className="mt-1 text-[12px] font-semibold text-[#2b3990]">{fmtDate(n.date)}</p>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
