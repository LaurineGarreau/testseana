# Prompt 1 : corrections de la page Capteurs (Seanapps Pro)

Tu travailles sur le prototype **Seanapps Pro** (HTML/CSS/JS sans framework : `index.html`, `app.js`, `style.css`, `versions/`, `versions.json`, `README.md`). Toutes les données sont des données d'exemple.

La page Capteurs propose **plusieurs modes d'affichage : Grille, Liste, Tableau, Carte**. Ce sont **des propositions différentes à comparer** : il est normal qu'elles montrent les mêmes informations. **Ne supprime ni ne fusionne aucun mode.**

## Avant de coder

1. Lis `versions.json` (la version en tête est la dernière), puis le code de la page Capteurs dans `app.js` (les 4 modes, le panneau latéral de la carte, la fiche capteurs d'un bateau).
2. Pour chaque correction, dis-moi où se trouve le problème dans le code et ce que tu vas changer. Attends mon accord.

## Corrections

### 1. Position non partagée, mais bateau placé sur la carte
Exemple : Princess 1 affiche « Position : non partagée par le propriétaire », mais il apparaît à un point précis sur la carte.
- Si le propriétaire ne partage pas son GPS, place le bateau à sa **place attribuée au port** (ponton et place), jamais à une position GPS.
- Utilise un picto différent (position barrée ou pastille en pointillé) et une infobulle : « Place au port. Position réelle non partagée par le propriétaire. »
- Applique la même règle partout : marqueur de carte, panneau latéral, fiche bateau, plan du port, cartes et lignes des modes Grille, Liste et Tableau.
- Si le bateau n'a pas de place attribuée, ne l'affiche pas sur la carte. Mets-le dans la ligne « 5 bateaux sans position » sous la carte.

### 2. Les mêmes chiffres dans tous les modes
Aujourd'hui, les onglets indiquent Alerte 2 et OK 27, mais le mode Tableau indique Alerte 3 et OK 30, parce qu'il compte les bateaux aux données réelles.
- Crée **une seule fonction** qui calcule l'état de chaque bateau (alerte, à surveiller, hors ligne, OK, position non partagée), et utilise-la dans les 4 modes et dans les filtres.
- Décide une seule fois si les bateaux aux données réelles sont comptés, et applique ce choix partout.
- « Hors ligne » et « Position non partagée » doivent être comptés de la même façon dans les onglets et dans les filtres de la carte.
- Ajoute une vérification simple : au chargement, si les totaux diffèrent d'un mode à l'autre, affiche un avertissement dans la console.

### 3. Noms des bateaux aux données réelles
« Bateau 3323305673 (réel) » est difficile à lire et à reconnaître.
- Affiche un nom lisible (nom d'exemple ou « Boîtier 3323305673 » en petit sous le nom), avec le badge « Données réelles » existant au lieu de « (réel) » dans le nom.

### 4. Cohérence des états « En mer »
- Un bateau en mer affiche « En mer · place au retour : Ponton C, place 18 » dans tous les modes, avec le même picto.
- Sur la carte, si sa position est partagée, il apparaît en mer. Sinon, il n'apparaît pas (voir la correction 1).

## Version

Regroupe les corrections dans **une seule nouvelle version** (la suivante après celle en tête de `versions.json`) :
1. copie l'état complet dans `versions/vNN/` ;
2. ajoute l'entrée en tête de `versions.json` (« Corrections Capteurs : position non partagée, mêmes chiffres dans tous les modes, noms des bateaux réels, état En mer ») ;
3. ajoute la ligne dans le tableau « Versions » du `README.md` ;
4. mets à jour `BUILD` dans `app.js` ;
5. fais un commit `vNN : corrections Capteurs` et un tag `vNN`.

Ne modifie jamais une version déjà archivée dans `versions/`. À la fin, donne-moi la liste de ce qui a changé et les points que tu n'as pas pu corriger.
