# ideas.md — Site LCL (reproduction fidèle)

## Approche choisie : Réplication exacte des captures d'écran fournies

L'utilisateur a fourni 8 captures d'écran de l'application mobile LCL et demande un site identique.
Ce projet est donc une **réplication de référence** : les images sont la spécification ground-truth.
Toute décision stylistique non visible dans les images doit suivre la charte LCL (bleu #1B3FAB / #2B3990, jaune #FFC20E).

## Pages à reproduire
1. `/` — Écran d'accueil bleu : logo circulaire stylisé, "Bonjour, connectez-vous à l'application LCL", boutons "Je me connecte" (pilule bordure blanche) et "Je deviens client" (pilule blanche).
2. `/connexion` — "Votre identifiant" : logo LCL carré bleu + slogan, champ dashed, checkbox "Mémoriser mon identifiant", bouton gris "Continuer", liens bleus soulignés, "Pas encore client ?" + bouton bleu "Ouvrir un compte".
3. `/synthese` — Ma Synthèse : header bleu, onglets Compte/Épargne/Crédit/Assurance, total comptes, cartes comptes, liste services (Prélèvements, Crédit renouvelable, Compte pour mon enfant, Ajouter une banque), tab bar (Synthèse, Virements, Cartes, Conseiller, Mes actus).
4. `/synthese/credit` — Onglet Crédit : montant disponible crédit renouvelable, boutons Rembourser/Utiliser, section Immobilier (Immoflash, Mon Espace Immobilier), début de section Crédit conso.
5. `/virement` — VIREMENT : carte bleue "Faire un virement vers un IBAN", carte wero, section "Gestion et paramétrage" (Mes bénéficiaires, Mes plafonds et pays autorisés, Mes virements programmés).
6. `/cartes` — MES CARTES : carrousel de carte Visa PREMIER dorée, pastilles, bouton "SOS Carte", sous-onglets Paramètres/Options, bouton "Configurer Pay", toggles (Verrouillage, Code confidentiel, Paiement sans contact).

## Design tokens (issus des images)
- Bleu royal profond : #2B3990 (boutons, cartes CTA) — couleur signature
- Bleu foncé header : #1B3FAB / dégradé vers #16328C
- Bleu clair pilule active : #3552D0 environ (utilisé pour les onglets actifs)
- Bleu clair décoratif : #4258E3, #6B7CF0 (cercle du logo)
- Jaune LCL : #FFC20E (logo, traits de section, surlignage wero)
- Fond de page interne : #F4F5F8 (gris très clair)
- Texte sombre : #231F20 / noir ; gris secondaire : #7A7A7A / #8A8A8A
- Polices : sans-serif système LCL-like (Source Sans Pro / Open Sans), gras pour titres
- Formes : pilules (radius plein) pour les boutons, cartes blanches radius ~16px avec ombres douces, header fixe avec coins arrondis inférieurs sur la carte blanche qui déborde

## Comportement
- Layout type application mobile centré (max-width ~430px) pour reproduire les captures
- Tab bar fixe en bas sur les écrans internes
- Icônes SVG line-art bleues (recréées inline) pour chaque service
