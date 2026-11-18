# Prompt : un tableau de bord qui tient sur un écran (Seanapps Pro)

Tu travailles sur le prototype **Seanapps Pro** (HTML/CSS/JS sans framework : `index.html`, `app.js`, `style.css`, `versions/`, `versions.json`, `README.md`). Toutes les données sont des données d'exemple.

## Le problème

Le tableau de bord a 4 versions à comparer : **Classique, Synthèse, Activité, Pilotage** (sélecteur « Version » en haut à droite). **Garde-les toutes.** Mais dans les 4 :
- un **gros bloc rouge « Personne ne s'en occupe »** prend tout le haut de l'écran dès l'arrivée ;
- puis une phrase d'intro (« Bonjour Laurine. Vue directeur… »), puis les vraies infos ;
- **il faut faire défiler pour tout voir.** Ce n'est pas un tableau de bord : un tableau de bord se lit d'un coup d'œil, sans défiler.

## L'objectif

**Sur un écran de 1440 × 900, tout l'essentiel est visible sans défiler**, dans les 4 versions et pour les 4 profils (directeur, commercial, technicien, atelier). Ce qui est en dessous n'est que du complément.

## Avant de coder

1. Lis `versions.json`, puis le code du tableau de bord dans `app.js` (`vDashboard`, les 4 versions, les onglets par profil) et le CSS associé.
2. Fais une capture de chaque version à 1440 × 900 et note ce qui est visible sans défiler.
3. Propose-moi, pour chaque version, la disposition au-dessus de la ligne de flottaison (un schéma en texte suffit). Attends mon accord.

## Règles de hiérarchie (les mêmes pour les 4 versions)

L'ordre de lecture, de haut en bas et de gauche à droite :

### 1. Ce que je dois faire maintenant (la zone la plus importante)
- Une **liste « À traiter »** compacte, en haut à gauche : **5 lignes maximum**, triées par urgence, une ligne par élément : pastille d'état, bateau, problème, depuis quand, **une action** (« Je m'en occupe », « Répondre », « Voir »).
- « Personne ne s'en occupe depuis 2 jours » **n'est plus un bloc séparé** : c'est une étiquette sur la ligne concernée, et ces lignes passent en tête. Un compteur à côté du titre : « À traiter · 8 dont 3 sans personne ».
- Un lien « Tout voir (8) » pour le reste.

### 2. L'état en chiffres
- **Une rangée de 4 indicateurs maximum**, compacts (hauteur ~88 px) : un chiffre, un libellé court, une tendance (« +2 cette semaine »). Chaque indicateur est cliquable et ouvre la bonne page déjà filtrée.
- Les indicateurs dépendent du profil :
  - **Directeur** : alertes ouvertes, temps moyen de prise en charge, problèmes réglés avant que le client appelle, ventes issues des capteurs ;
  - **Technicien** : alertes à traiter, boîtiers hors ligne, interventions du jour, arrivées du jour ;
  - **Atelier** : révisions dues dans 7 jours, interventions prévues, pièces à commander, bateaux en hivernage ;
  - **Commercial** : capteurs à proposer, propositions envoyées, ventes du mois, bateaux en stock à déclarer.

### 3. Le contexte
- **Un seul graphique** au-dessus de la ligne de flottaison (ex. alertes des 8 dernières semaines, ou tendance du parc), à droite ou sous les indicateurs, hauteur 200 px maximum.
- Le reste (journal d'activité, interventions, bateaux suivis, d'où viennent les alertes…) va **en dessous**, ou dans des onglets, ou derrière « Voir plus ».

### À supprimer ou réduire
- La phrase d'intro : remplace-la par une ligne discrète à côté du titre (« Mardi 10 novembre · vue directeur »).
- Les doublons : une même alerte ne doit pas apparaître dans « Personne ne s'en occupe », dans « Alertes en cours » et dans « Bateaux à regarder » en même temps.
- Les grands blocs de couleur : la couleur sert seulement à l'état (rouge, orange, vert, gris), en pastille ou en badge, jamais en grand fond ou en bordure épaisse.

## Disposition

- Grille de 12 colonnes, marges de 24 px, espacement de 16 px entre les blocs, échelle d'espacement unique (4, 8, 12, 16, 24, 32 px).
- Exemple de disposition au-dessus de la ligne de flottaison :
  - rangée 1 : titre + date + sélecteur de version (une seule ligne, 48 px) ;
  - rangée 2 : les 4 indicateurs (12 colonnes) ;
  - rangée 3 : « À traiter » (7 colonnes) + le graphique ou le bloc propre à la version (5 colonnes).
- Chaque version garde sa personnalité **dans la rangée 3 et en dessous** :
  - **Classique** : les cases à déplier, en plus compact ;
  - **Synthèse** : un grand chiffre et la liste des alertes ;
  - **Activité** : la semaine, le bateau à la une, le planning ;
  - **Pilotage** : l'analyse IA du jour en 3 lignes maximum (« Ce matin : 3 actions ») et un graphique ; l'aperçu flouté de l'offre IA tient dans un bloc, pas plus.
- Sur un écran plus petit (1280 × 720), « À traiter » et les indicateurs restent visibles sans défiler ; le graphique passe en dessous.

## Idées à intégrer si elles tiennent dans l'écran

- **Arrivées du jour** (technicien) : une ligne compacte « 3 bateaux rentrent aujourd'hui avec un point à voir », cliquable.
- **Le tableau du lundi** (directeur) : la tendance de la semaine dans les indicateurs (« 12 alertes, 9 réglées, 4 avant l'appel du client »).
- **L'alerte qui fait vendre** (commercial) : dans « À traiter », une ligne « Batterie de Princess 2 en fin de vie : proposer le remplacement ».

## Vérification

- Fais une capture de chaque version (4) pour chaque profil (4) à 1440 × 900, avant et après.
- Vérifie que tout ce qui est dans les règles 1 et 2 est visible sans défiler. Si ce n'est pas le cas, réduis jusqu'à ce que ça tienne.
- Vérifie que rien n'a disparu : tout ce qui est enlevé du haut est accessible en dessous ou en un clic.

## Version

Une seule nouvelle version (la suivante après celle en tête de `versions.json`) :
1. copie l'état complet dans `versions/vNN/` ;
2. ajoute l'entrée en tête de `versions.json` (« Tableau de bord sur un écran : À traiter en premier, 4 indicateurs par profil, un graphique, le reste en dessous ») ;
3. ajoute la ligne dans le tableau « Versions » du `README.md` ;
4. mets à jour `BUILD` dans `app.js` ;
5. fais un commit `vNN : tableau de bord sur un écran` et un tag `vNN`.

Ne modifie jamais une version déjà archivée. À la fin, montre-moi les captures avant/après et la liste de ce qui a été déplacé.
