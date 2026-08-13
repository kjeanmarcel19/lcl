/*
 * Site LCL — Écran "Votre identifiant" (capture 21.01.57) :
 * logo carré LCL bleu + slogan, champ dashed, checkbox,
 * bouton gris "Continuer", liens bleus soulignés,
 * section "Pas encore client ?" + bouton bleu "Ouvrir un compte".
 * Deuxième étape : saisie du code personnel (6 chiffres),
 * authentification contre DEFAULT_USERS (100 comptes).
 */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { IconFlecheBlanche, IconFlecheGauche } from "@/components/lcl/Icons";
import { DEFAULT_USERS } from "@/data/comptes";
import { setUser } from "@/hooks/useUser";
import { addNotification } from "@/pages/Notifications";

export default function Connexion() {
  const [identifiant, setIdentifiant] = useState("");
  const [code, setCode] = useState("");
  const [etape, setEtape] = useState<1 | 2>(1);
  const [erreur, setErreur] = useState("");
  const [, navigate] = useLocation();

  const filled = identifiant.length >= 10;
  const codeFilled = code.length === 6;

  function continuerIdentifiant() {
    if (!filled) return;
    const trouve = DEFAULT_USERS.find((u) => u.identifiant === identifiant.trim());
    if (!trouve) {
      setErreur("Identifiant introuvable. Essayez l'un des 100 comptes par défaut.");
      return;
    }
    setErreur("");
    setEtape(2);
  }

  function validerCode() {
    if (!codeFilled) return;
    const trouve = DEFAULT_USERS.find(
      (u) => u.identifiant === identifiant.trim() && u.codepersonnel === code.trim(),
    );
    if (!trouve) {
      setErreur("Code personnel incorrect.");
      return;
    }
    setErreur("");
    setUser(trouve.identifiant);
    addNotification({
      type: "login",
      date: new Date().toISOString(),
      title: "Connexion réussie",
      message: `Bonjour ${trouve.prenom}, vous vous êtes connecté(e) à l'application LCL.`,
    });
    navigate("/synthese");
  }

  return (
    <div className="fade-up mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-white px-7 pb-10 pt-14 md:max-w-[600px] md:px-10 lg:max-w-[680px] xl:max-w-[720px]">
      {etape === 2 && (
        <button
          aria-label="Retour"
          onClick={() => {
            setEtape(1);
            setCode("");
            setErreur("");
          }}
          className="lcl-press mb-4 flex w-fit items-center gap-1 text-xl font-bold text-[#1b3fab]">
          <IconFlecheGauche className="h-7 w-7" />
        </button>
      )}

      {/* Logo LCL carré */}
      <div className="flex justify-center">
        <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-lg bg-[#1b3fab]">
          <svg viewBox="0 0 100 70" className="absolute left-1/2 top-1/2 w-[92px] -translate-x-1/2 -translate-y-1/2 opacity-90">
            <path
              d="M8 60 C 10 20, 40 6, 92 10"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <span className="relative text-[34px] font-black tracking-wide text-[#ffc20e]">LCL</span>
          <span className="relative mt-0.5 text-[7px] font-bold tracking-[0.22em] text-white">
            BANQUE ET ASSURANCE
          </span>
        </div>
      </div>
      <p className="mt-4 text-center text-[17px] font-bold text-[#1b3fab]">
        Ma vie. Ma ville. Ma banque.
      </p>

      {etape === 1 && (
        <>
          <h1 className="mt-16 text-center text-[38px] font-extrabold text-[#1b3fab]">
            Votre identifiant
          </h1>

          <input
            className="dashed-input mt-10 text-center"
            placeholder="Saisissez votre identifiant"
            value={identifiant}
            maxLength={100}
            onChange={(e) => {
              setIdentifiant(e.target.value.replace(/\D/g, ""));
              setErreur("");
            }}
            autoFocus
          />

          <label className="mt-6 flex cursor-pointer items-center gap-4">
            <span className="flex h-9 w-9 items-center justify-center rounded border-[2.5px] border-[#c9cbd1]" />
            <span className="text-[19px] text-[#3a3f4a]">Mémoriser mon identifiant</span>
          </label>

          {erreur && (
            <p className="mt-5 text-center text-base font-semibold text-[#c00000]">{erreur}</p>
          )}

          <button
            onClick={continuerIdentifiant}
            className={`lcl-press mt-10 flex items-center justify-center gap-3 rounded-full py-4.5 text-[19px] font-bold text-white ${
              filled ? "bg-[#2b3990]" : "bg-[#b9bfc7]"
            }`}
            style={{ paddingTop: "1.15rem", paddingBottom: "1.15rem" }}>
            Continuer <IconFlecheBlanche className="h-5 w-5" />
          </button>
        </>
      )}

      {etape === 2 && (
        <>
          <h1 className="mt-12 text-center text-[34px] font-extrabold text-[#1b3fab]">
            Votre code personnel
          </h1>

          <input
            className="dashed-input mt-10 text-center tracking-[0.6em]"
            placeholder="••••••"
            value={code}
            maxLength={6}
            inputMode="numeric"
            onChange={(e) => {
              setCode(e.target.value.replace(/\D/g, ""));
              setErreur("");
            }}
            autoFocus
          />

          {erreur && (
            <p className="mt-5 text-center text-base font-semibold text-[#c00000]">{erreur}</p>
          )}

          <button
            onClick={validerCode}
            className={`lcl-press mt-10 flex items-center justify-center gap-3 rounded-full py-4.5 text-[19px] font-bold text-white ${
              codeFilled ? "bg-[#2b3990]" : "bg-[#b9bfc7]"
            }`}
            style={{ paddingTop: "1.15rem", paddingBottom: "1.15rem" }}>
            Continuer <IconFlecheBlanche className="h-5 w-5" />
          </button>
        </>
      )}

      <div className="mt-7 flex flex-col items-center gap-4">
        <button className="border-b-[2.5px] border-[#1b3fab] pb-0.5 text-xl font-bold text-[#1b3fab] lcl-press">
          Identifiant oublié ?
        </button>
        <button className="border-b-[2.5px] border-[#1b3fab] pb-0.5 text-xl font-bold text-[#1b3fab] lcl-press">
          Code personnel oublié ?
        </button>
      </div>

      <h2 className="mt-16 text-center text-[30px] font-extrabold text-[#1b3fab]">
        Pas encore client ?
      </h2>

      <Link
        href="/"
        className="lcl-press mt-6 flex items-center justify-center gap-3 rounded-full bg-[#2b3990] py-5 text-[19px] font-bold text-white">
        Ouvrir un compte <IconFlecheBlanche className="h-5 w-5" />
      </Link>
    </div>
  );
}
