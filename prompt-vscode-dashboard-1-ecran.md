# Prompt : tableau de bord en UN SEUL écran, sans défilement (Seanapps Pro)

Le tableau de bord est **encore trop long**. Cette fois, la règle est stricte et vérifiable.

## Règle absolue

**La page Tableau de bord ne défile pas.** À 1440 × 900 (et à 1280 × 720), tout tient dans la fenêtre. La barre de défilement de la page n'apparaît jamais. Ça vaut pour les 4 versions (Classique, Synthèse, Activité, Pilotage) et les 4 profils (directeur, commercial, technicien, atelier).

Si un contenu ne tient pas, **il quitte le tableau de bord** : il va dans sa page (Capteurs, Bateaux, Messages, Historique…) avec un lien « Tout voir ». On ne réduit pas la taille du texte en dessous de 14 px pour le faire tenir.

## Ce qui reste sur le tableau de bord, et rien d'autre

1. **Une ligne de titre** (48 px) : « Tableau de bord », la date, le sélecteur de version. Pas de phrase d'intro, pas de « Bonjour Laurine ».
2. **4 indicateurs** sur une ligne (hauteur fixe 88 px) : un chiffre, un libellé, une tendance. Cliquables. Différents selon le profil.
3. **Deux blocs côte à côte** qui remplissent le reste de la hauteur :
   - à gauche, **« À traiter »** : 5 lignes maximum, une ligne de 56 px chacune (bateau, problème, depuis quand, une action). « Personne ne s'en occupe » est une étiquette sur la ligne, pas un bloc. En bas : « Tout voir (8) » ;
   - à droite, **un seul bloc propre à la version** :
     - Classique : 3 cases repliées (Ma journée, État du parc, Ventes), qui s'ouvrent **dans un panneau latéral**, pas dans la page ;
     - Synthèse : un graphique des alertes sur 8 semaines ;
     - Activité : le planning du jour (5 lignes maximum) ;
     - Pilotage : l'analyse IA en 3 lignes et un mini-graphique.

**Tout le reste sort du tableau de bord** : journal d'activité, liste des interventions, bateaux suivis, « D'où viennent les alertes », « Bateaux à regarder », arrivées du jour en liste complète, tendance du parc détaillée. Mets-le dans la page concernée, ou dans un panneau latéral ouvert au clic, et garde un lien depuis le tableau de bord.

## Technique

- La zone principale du tableau de bord fait `height: calc(100vh - hauteur de l'en-tête)` avec `overflow: hidden`. Les blocs utilisent une grille CSS avec des hauteurs fixes ou `minmax(0, 1fr)`.
- Si une liste a plus d'éléments que de place, elle affiche les premiers et « + N autres », **jamais** un défilement interne.
- Les panneaux qui s'ouvrent (détail d'une case, liste complète) s'ouvrent **par-dessus** (panneau latéral à droite, 480 px), sans allonger la page.
- Supprime les marges verticales inutiles : 24 px autour de la page, 16 px entre les blocs, rien de plus.

## Vérification automatique (obligatoire)

Ajoute une fonction de contrôle appelée après chaque affichage du tableau de bord :

```js
function checkDashboardFits(){
  const main = document.querySelector('<sélecteur de la zone principale>');
  const over = main.scrollHeight - main.clientHeight;
  if (over > 0) console.warn(`Tableau de bord trop long de ${over}px (version ${S.dashVersion}, profil ${S.role})`);
}
```

Puis, avec Playwright (déjà installable via `npx playwright`), fais une boucle qui ouvre les **4 versions × 4 profils** à 1440 × 900 et à 1280 × 720, et qui vérifie que `document.scrollingElement.scrollHeight <= innerHeight` et qu'aucun avertissement n'est affiché. **Tant qu'un cas dépasse, continue à alléger.** Donne-moi le tableau des 32 cas avec « OK » ou le nombre de pixels en trop.

## Avant de coder

Montre-moi, pour chaque version, la liste de ce qui reste et de ce qui part (et où ça part). Attends mon accord.

## Version

Une seule nouvelle version (la suivante après celle en tête de `versions.json`) : copie dans `versions/vNN/`, entrée en tête de `versions.json` (« Tableau de bord en un seul écran, sans défilement »), ligne dans le `README.md`, `BUILD` à jour, commit `vNN : tableau de bord en un écran` et tag `vNN`. Ne modifie jamais une version archivée.

À la fin : les captures des 4 versions pour le profil directeur, et le tableau des 32 vérifications.
