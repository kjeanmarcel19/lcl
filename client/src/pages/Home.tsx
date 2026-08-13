/*
 * Site LCL — Écran d'accueil bleu (capture 21.01.59) :
 * fond bleu uni, formes décoratives, logo circulaire stylisé,
 * "Bonjour, connectez-vous à l'application LCL",
 * boutons pilules "Je me connecte" / "Je deviens client".
 */
import { Link } from "wouter";

export default function Home() {
  return (
    <div
      className="fade-up relative mx-auto flex min-h-screen w-full flex-col items-center px-8 pt-16 text-center"
      style={{ background: "linear-gradient(170deg,#2a42ae 0%,#1b3fab 60%,#14297a 100%)" }}>
      {/* Container adaptatif : 430px sur mobile, plein écran sur desktop */}
      <div className="mx-auto flex w-full max-w-[430px] flex-col items-center px-4 text-center md:max-w-[600px] lg:max-w-[680px] xl:max-w-[720px]" style={{ minHeight: "100vh" }}>
      {/* Formes décoratives haut-gauche */}
      <div className="pointer-events-none absolute left-0 top-0 flex flex-col gap-2 p-4">
        <div className="h-4 w-24 rounded-sm bg-[#4258e3]/80" />
        <div className="h-8 w-36 rounded-sm bg-[#3a50d8]/70" />
      </div>

      {/* Logo circulaire stylisé LCL */}
      <div className="relative mt-10 flex h-36 w-36 items-center justify-center rounded-full bg-[#6b7cf0]">
        <div className="flex h-20 w-20 items-end justify-center overflow-hidden rounded-full bg-[#2a42ae]">
          <div className="mb-[-6px] h-10 w-10 rounded-full bg-[#ffc20e]" />
        </div>
      </div>

      <h1 className="mt-14 text-[26px] font-bold leading-snug text-white">
        Bonjour, connectez-vous à
        <br />
        l'application LCL
      </h1>

      <Link
        href="/connexion"
        className="lcl-press mt-12 block w-full max-w-[280px] rounded-full border-2 border-white py-4 text-lg font-bold text-white transition-colors hover:bg-white/10">
        Je me connecte
      </Link>

      <div className="mt-24 flex flex-col gap-2 text-[19px] font-semibold text-white">
        <span>Pas encore client ?</span>
        <span>Ouvrez votre compte en 10 minutes !</span>
      </div>

      <Link
        href="/connexion"
        className="lcl-press mt-8 block w-full max-w-[280px] rounded-full bg-white py-4 text-center text-lg font-bold text-[#1b3fab] transition-transform hover:brightness-95">
        Je deviens client
      </Link>
      </div>
      </div>
    );
  }
