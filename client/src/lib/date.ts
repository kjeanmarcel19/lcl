/**
 * Parse une date de démo au format "14 Avril 2025" (utilisé dans comptes.ts)
 * ou une chaîne ISO standard. Retourne un objet Date valide.
 */
export function parseDemoDate(iso: string): Date {
  if (/^\d{1,2} [A-Z][a-zéû]{2,} \d{4}$/.test(iso)) {
    const mois: Record<string, number> = {
      janvier: 0,
      février: 1,
      mars: 2,
      avril: 3,
      mai: 4,
      juin: 5,
      juillet: 6,
      août: 7,
      septembre: 8,
      octobre: 9,
      novembre: 10,
      décembre: 11,
    };
    const [j, m, a] = iso.toLowerCase().split(" ");
    return new Date(Number(a), mois[m] ?? 0, Number(j));
  }
  return new Date(iso);
}

/** Formate une date de démo au format "14 avr. 2025". */
export function formatDemoDate(iso: string): string {
  return parseDemoDate(iso).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
