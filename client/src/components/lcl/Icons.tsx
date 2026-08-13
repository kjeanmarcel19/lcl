/*
 * Site LCL — Icônes SVG line-art bleues recréées d'après les captures d'écran.
 * Style : trait fin (~2px), couleur #2b3990, sans remplissage (ou léger).
 */
import type { SVGProps } from "react";

const BLUE = "#2b3990";

export function IconPrerelevements(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="8" y="8" width="32" height="32" rx="4" stroke={BLUE} strokeWidth="2.4" />
      <line x1="8" y1="16" x2="40" y2="16" stroke={BLUE} strokeWidth="2.4" />
      <circle cx="30" cy="30" r="10" fill="#ffffff" stroke={BLUE} strokeWidth="2.4" />
      <path d="M30 25v5.5l3.5 2" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconCreditRenouvelable(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M16 26c-2 0-3.5.5-4.5 1.3.6 2.5 2.9 4.4 5.7 4.4 1.8 0 3.4-.8 4.5-2" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M24 20c.7-2.4 2.9-4.2 5.5-4.2 3.2 0 5.8 2.5 5.8 5.6 0 3-2.6 5.5-5.8 5.5-1.1 0-2.2-.3-3.1-.9" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="30" cy="21" r="6" stroke={BLUE} strokeWidth="2.2" />
      <text x="30" y="24" fontSize="9" fontWeight="800" fill={BLUE} textAnchor="middle">€</text>
      <path d="M10 33c1.2-4.5 3.5-8 7-11" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconCompteEnfant(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <circle cx="16" cy="17" r="6" stroke={BLUE} strokeWidth="2.4" />
      <path d="M6 36c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="32" cy="20" r="5" stroke={BLUE} strokeWidth="2.4" />
      <path d="M24 36c0-4.5 3.6-8.5 8-8.5s8 4 8 8.5" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconPortefeuille(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="7" y="12" width="34" height="26" rx="5" stroke={BLUE} strokeWidth="2.4" />
      <path d="M7 18h34" stroke={BLUE} strokeWidth="2.4" />
      <circle cx="33" cy="25" r="2.6" fill={BLUE} />
      <circle cx="16" cy="8" r="4" stroke={BLUE} strokeWidth="2.4" fill="#ffffff" />
    </svg>
  );
}

export function IconImmoFlash(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M8 24L24 10l16 14" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 21.5V38h22V21.5" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="10" y1="30" x2="22" y2="30" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="10" y1="35" x2="22" y2="35" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="32" cy="30" r="7" fill="#ffffff" stroke={BLUE} strokeWidth="2.4" />
      <text x="32" y="33.5" fontSize="10" fontWeight="800" fill={BLUE} textAnchor="middle">€</text>
    </svg>
  );
}

export function IconImmeuble(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="8" y="6" width="14" height="34" rx="2" stroke={BLUE} strokeWidth="2.4" />
      <rect x="26" y="16" width="14" height="24" rx="2" stroke={BLUE} strokeWidth="2.4" />
      <rect x="11.5" y="11" width="3" height="3" fill={BLUE} />
      <rect x="17" y="11" width="3" height="3" fill={BLUE} />
      <rect x="11.5" y="18" width="3" height="3" fill={BLUE} />
      <rect x="17" y="18" width="3" height="3" fill={BLUE} />
      <rect x="11.5" y="25" width="3" height="3" fill={BLUE} />
      <rect x="17" y="25" width="3" height="3" fill={BLUE} />
      <rect x="13" y="33" width="5" height="7" fill={BLUE} />
      <rect x="29.5" y="21" width="3" height="3" fill={BLUE} />
      <rect x="34.5" y="21" width="3" height="3" fill={BLUE} />
      <rect x="29.5" y="28" width="3" height="3" fill={BLUE} />
      <rect x="34.5" y="28" width="3" height="3" fill={BLUE} />
      <rect x="31" y="33" width="4" height="7" fill={BLUE} />
    </svg>
  );
}

export function IconVirement(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M14 24l20-14v11h8L22 35V24H14z" fill="#ffffff" stroke={BLUE} strokeWidth="2.4" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPersonnePlus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <circle cx="20" cy="15" r="6.5" stroke={BLUE} strokeWidth="2.4" />
      <path d="M7 37c0-6 5.5-10.5 13-10.5S33 31 33 37" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="37" cy="33" r="7" fill="#ffffff" stroke={BLUE} strokeWidth="2.4" />
      <path d="M37 29.5v7M33.5 33h7" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconPieces(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <ellipse cx="20" cy="16" rx="13" ry="5" stroke={BLUE} strokeWidth="2.4" />
      <ellipse cx="20" cy="26" rx="13" ry="5" stroke={BLUE} strokeWidth="2.4" />
      <ellipse cx="20" cy="36" rx="13" ry="5" fill="#ffffff" stroke={BLUE} strokeWidth="2.4" />
      <ellipse cx="34" cy="12" rx="9" ry="4" fill="#ffffff" stroke={BLUE} strokeWidth="2.4" />
      <ellipse cx="34" cy="20" rx="9" ry="4" stroke={BLUE} strokeWidth="2.4" />
    </svg>
  );
}

export function IconProgramme(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="8" y="8" width="32" height="32" rx="4" stroke={BLUE} strokeWidth="2.4" />
      <line x1="8" y1="16" x2="40" y2="16" stroke={BLUE} strokeWidth="2.4" />
      <circle cx="30" cy="30" r="9" fill="#ffffff" stroke={BLUE} strokeWidth="2.4" />
      <path d="M30 26v4.5l3 1.8" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconCarte(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="6" y="12" width="36" height="24" rx="4" stroke={BLUE} strokeWidth="2.4" />
      <line x1="6" y1="20" x2="42" y2="20" stroke={BLUE} strokeWidth="2.4" />
      <line x1="12" y1="29" x2="22" y2="29" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="12" y1="33" x2="18" y2="33" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconCadrePlus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="8" y="12" width="32" height="24" rx="4" stroke={BLUE} strokeWidth="2.4" />
      <path d="M24 12v4.5M24 12l-4 4.5M24 12l4 4.5" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="34" cy="30" r="7" fill="#ffffff" stroke={BLUE} strokeWidth="2.4" />
      <path d="M34 26.5v7M30.5 30h7" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconCadreOeil(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="6" y="10" width="30" height="20" rx="4" stroke={BLUE} strokeWidth="2.4" />
      <path d="M12 10v-2.5M21 10V6M30 10V7.5" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M12 30v3c0 2 1.5 3.5 3.5 3.5h14c2 0 3.5-1.5 3.5-3.5v-3" stroke={BLUE} strokeWidth="2.4" />
      <circle cx="37" cy="24" r="6" fill="#ffffff" stroke={BLUE} strokeWidth="2.4" />
      <circle cx="37" cy="24" r="2.5" fill={BLUE} />
    </svg>
  );
}

export function IconCadreCadenas(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="6" y="10" width="30" height="20" rx="4" stroke={BLUE} strokeWidth="2.4" />
      <path d="M12 10v-2.5M21 10V6M30 10V7.5" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M12 30v3c0 2 1.5 3.5 3.5 3.5h14c2 0 3.5-1.5 3.5-3.5v-3" stroke={BLUE} strokeWidth="2.4" />
      <rect x="28" y="22" width="12" height="14" rx="6" fill="#ffffff" stroke={BLUE} strokeWidth="2.4" />
      <path d="M31 22v-2.5a2.5 2.5 0 015 0V22" stroke={BLUE} strokeWidth="2.2" />
      <circle cx="34" cy="29" r="1.6" fill={BLUE} />
      <path d="M34 30.6v2.6" stroke={BLUE} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconCadreWifi(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="6" y="10" width="30" height="20" rx="4" stroke={BLUE} strokeWidth="2.4" />
      <path d="M12 10v-2.5M21 10V6M30 10V7.5" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M12 30v3c0 2 1.5 3.5 3.5 3.5h14c2 0 3.5-1.5 3.5-3.5v-3" stroke={BLUE} strokeWidth="2.4" />
      <path d="M36 28a6 6 0 016-6" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M38.4 25.5a2.8 2.8 0 012.8 2.8" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M36 28a6 6 0 006 6" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheckCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="16" cy="16" r="11" fill="#ffffff" stroke={BLUE} strokeWidth="2.4" />
      <path d="M10.5 16.5l3.8 3.8 7-7.6" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFleche(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 12h14M12 6l6 6-6 6" stroke="#4258e3" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFlecheBlanche(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 12h14M12 6l6 6-6 6" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconVirementBidirectionnel(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6 10h9M11 6l4 4-4 4" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 14H9m4-4l-4 4 4 4" stroke={BLUE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCartePetite(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="2.5" stroke={BLUE} strokeWidth="2" />
      <line x1="2.5" y1="10.5" x2="21.5" y2="10.5" stroke={BLUE} strokeWidth="2" />
      <line x1="6" y1="14.5" x2="11" y2="14.5" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconConseiller(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 5c0-1.1.9-2 2-2h12a2 2 0 012 2v10a2 2 0 01-2 2h-5.5l-4.3 3.8c-.4.3-1-.1-.9-.7L7 17H6a2 2 0 01-2-2V5z" stroke={BLUE} strokeWidth="2" strokeLinejoin="round" />
      <line x1="8" y1="10" x2="16" y2="10" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconCloche(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 3a6 6 0 00-6 6v4l-1.6 3.2A1 1 0 005.3 18h13.4a1 1 0 00.9-1.8L18 13V9a6 6 0 00-6-6z" stroke={BLUE} strokeWidth="2" strokeLinejoin="round" />
      <path d="M9.5 18a2.7 2.7 0 005 0" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconPortefeuillePetit(props: SVGProps<SVGSVGElement>) {
  // L'icône hérite de la couleur du parent (currentColor) pour rester lisible
  // sur fond blanc (tab bar) comme sur le header bleu.
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="6" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M3 9.5h18" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="13" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function IconHamburger(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <line x1="4" y1="7" x2="15" y2="7" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="4" y1="12" x2="20" y2="12" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="4" y1="17" x2="12" y2="17" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconProfil(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="7.5" r="4.2" stroke="#ffffff" strokeWidth="2.2" />
      <path d="M4.5 20.5c0-3.8 3.4-6.8 7.5-6.8s7.5 3 7.5 6.8" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconFlecheGauche(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 4l-8 8 8 8M7 12h14" />
    </svg>
  );
}

export function IconDeconnexion(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M16 4h2.5A1.5 1.5 0 0120 5.5v13a1.5 1.5 0 01-1.5 1.5H16M12 12H4M8 8l-4 4 4 4" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconConseillerPetit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 5c0-1.1.9-2 2-2h12a2 2 0 012 2v10a2 2 0 01-2 2h-5.5l-4.3 3.8c-.4.3-1-.1-.9-.7L7 17H6a2 2 0 01-2-2V5z" stroke="#ffffff" strokeWidth="1.8" strokeLinejoin="round" />
      <line x1="8" y1="10" x2="16" y2="10" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
