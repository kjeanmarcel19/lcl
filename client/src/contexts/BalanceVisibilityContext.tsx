/*
 * Site LCL — Contexte de visibilité des soldes.
 *
 * Permet de masquer/afficher tous les montants sensibles de l'application
 * (comme dans l'app LCL réelle, bouton œil). L'état est persisté en
 * localStorage (clé "lcl_show_balances") et partagé entre tous les écrans.
 */
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "lcl_show_balances";

type BalanceVisibilityCtx = {
  showBalances: boolean;
  toggleBalances: () => void;
};

const Ctx = createContext<BalanceVisibilityCtx>({
  showBalances: true,
  toggleBalances: () => undefined,
});

export function BalanceVisibilityProvider({ children }: { children: React.ReactNode }) {
  const [showBalances, setShowBalances] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw === null ? true : raw === "1";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, showBalances ? "1" : "0");
  }, [showBalances]);

  const toggleBalances = useCallback(() => setShowBalances((v) => !v), []);

  return <Ctx.Provider value={{ showBalances, toggleBalances }}>{children}</Ctx.Provider>;
}

export function useBalanceVisibility() {
  return useContext(Ctx);
}
