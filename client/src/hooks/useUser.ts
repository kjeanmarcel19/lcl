/*
 * Site LCL — Gestion de l'utilisateur connecté.
 *
 * Persiste l'identifiant et le code personnel validés dans localStorage
 * (clé "lcl_user_id") et fournit l'objet DefaultUser complet correspondant
 * depuis DEFAULT_USERS. Toutes les pages internes utilisent ce hook
 * pour afficher les données réelles du compte connecté.
 */
import { useCallback } from "react";
import { useLocation } from "wouter";
import { DEFAULT_USERS } from "@/data/comptes";
import type { DefaultUser } from "@/data/comptes";

const STORAGE_KEY = "lcl_user_id";
const BALANCES_KEY = "lcl_user_balances"; // soldes ajustés par virements : { accountId: newBalance }

function loadUser(): DefaultUser | null {
  const id = localStorage.getItem(STORAGE_KEY);
  if (!id) return null;
  return DEFAULT_USERS.find((u) => u.identifiant === id) ?? null;
}

/** Hook simple : utilisateur connecté (ou null) + helpers. */
export function useUser() {
  const [, navigate] = useLocation();
  const user = loadUser();

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    navigate("/");
  }, [navigate]);

  return { user, logout };
}

/** Récupère l'utilisateur connecté ou null (utilisable hors composant, après hydration). */
export function getUser(): DefaultUser | null {
  return loadUser();
}

/** Met en session l'utilisateur identifié par son identifiant (appelé après validation du code). */
export function setUser(identifiant: string): DefaultUser | null {
  const user = DEFAULT_USERS.find((u) => u.identifiant === identifiant) ?? null;
  if (user) localStorage.setItem(STORAGE_KEY, user.identifiant);
  return user;
}

/** Vide la session de l'utilisateur connecté (bouton Se déconnecter). */
export function clearUser(): void {
  localStorage.removeItem(STORAGE_KEY);
}

/** Ajoute un ajustement de solde après virement (persisté par compte connecté). */
export function adjustBalance(accountId: string, delta: number): void {
  const id = localStorage.getItem(STORAGE_KEY);
  if (!id) return;
  try {
    const raw = localStorage.getItem(`${BALANCES_KEY}:${id}`) || "{}";
    const map: Record<string, number> = JSON.parse(raw);
    const current = getAdjustedBalance(id, accountId);
    map[accountId] = Math.round((current + delta) * 100) / 100;
    localStorage.setItem(`${BALANCES_KEY}:${id}`, JSON.stringify(map));
  } catch {
    // ignore — la persistance reste best-effort côté client
  }
}

/** Récupère le solde ajusté d'un compte, ou son solde d'origine. */
export function getAdjustedBalance(identifiant: string, accountId: string): number {
  const user = DEFAULT_USERS.find((u) => u.identifiant === identifiant);
  const base = user?.accounts.find((a) => a.id === accountId)?.balance ?? 0;
  try {
    const raw = localStorage.getItem(`${BALANCES_KEY}:${identifiant}`) || "{}";
    const map: Record<string, number> = JSON.parse(raw);
    return map[accountId] !== undefined ? map[accountId] : base;
  } catch {
    return base;
  }
}

/** Formate un montant (nombre) en string "X XXX,XX €". */
export function formatEuro(v: number): string {
  return v.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}
