# Prompt : alléger les cartes de notification capteur (mode « Prod », Seanapps Pro)

Tu travailles sur le prototype **Seanapps Pro** (HTML/CSS/JS sans framework : `index.html`, `app.js`, `style.css`, `versions/`, `versions.json`, `README.md`). Travaille uniquement dans le mode **Prod**. Ne touche pas au mode Exploratoire.

## Le problème

Dans le bloc « Notifications » (aperçu du bateau, fiche bateau, partout où une carte de notification capteur apparaît), l'état est répété **quatre fois** : bordure colorée, cercle coloré autour du picto, titre en couleur, et badge « Alerte » ou « À surveiller ». Résultat : tout crie pareil, et « À surveiller » paraît presque aussi grave qu'« Alerte ».

Autre souci : « Prise de quai (0 V) ». Le pro doit traduire lui-même que 0 V veut dire « débranchée ».

## Ce qu'il faut faire

### 1. Deux signaux d'état, pas quatre
On garde :
- **le badge d'état**, avec l'icône et le mot (« Alerte », « À surveiller ») : c'est le signal principal, lisible même sans voir les couleurs ;
- **la couleur du picto** (le cercle autour de l'icône) : pour repérer l'état d'un coup d'œil dans une liste.

On retire :
- **la bordure colorée** de la carte : bordure grise neutre, comme les autres cartes du mode Prod ;
- **la couleur du titre** : le nom du capteur et sa valeur en texte foncé normal (couleur du texte principal), la ligne « depuis… » en gris.

### 2. Une valeur lisible, jamais un chiffre trompeur
- Les capteurs « oui / non » affichent un mot, pas un chiffre :
  - prise de quai : « Branchée » ou « Débranchée » ;
  - porte : « Ouverte » ou « Fermée » ;
  - eau dans la cale : « Sec » ou « Eau détectée ».
- Exemple : « Prise de quai (Débranchée) · depuis hier 18 h ».
- Une absence de donnée affiche « Pas de donnée », jamais « 0 V ».

### 3. Partout pareil
- Applique la même carte à tous les endroits du mode Prod qui affichent une notification capteur : aperçu du bateau, fiche bateau, liste « À traiter » du tableau de bord, page Notifications.
- Fais-en **un seul composant** (une fonction de rendu réutilisée), pour que tous les endroits restent identiques.

## Règles

- Contraste suffisant pour le texte (AA). L'état n'est jamais porté par la couleur seule : le badge garde toujours son mot.
- Ne change ni l'ordre des notifications, ni le bouton « Voir plus ».

## Avant de coder

Repère toutes les fonctions qui dessinent ces cartes, liste-les, et dis-moi ce que tu vas regrouper. Attends mon accord.

## Version

Une nouvelle version (la suivante après celle en tête de `versions.json`) : copie dans `versions/vNN/`, entrée en tête de `versions.json` (« Prod · cartes de notification allégées : badge et picto seulement, valeurs en mots »), ligne dans le `README.md`, `BUILD` à jour, commit `vNN : cartes de notification allégées` et tag `vNN`. Ne modifie jamais une version archivée.

À la fin, montre-moi une capture avant / après du bloc Notifications avec une alerte et un « À surveiller ».
