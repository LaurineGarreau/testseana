# Prompt : parcours Capteurs, étape 1, dans le mode « Prod » (Seanapps Pro)

Tu travailles sur le prototype **Seanapps Pro** (HTML/CSS/JS sans framework : `index.html`, `app.js`, `style.css`, `versions/`, `versions.json`, `README.md`). Toutes les données sont des données d'exemple.

Le prototype a deux modes, choisis en haut de l'écran :
- **Exploratoire** : toutes les idées testées. **N'y touche pas.**
- **Prod** : la copie fidèle de l'app Seanapps Pro actuelle. **C'est ici que tu travailles.**

L'objectif est d'ajouter au mode Prod le premier pas d'un nouveau parcours : **le pro part du tableau de bord, voit le capteur en alerte, ouvre sa courbe et trouve la cause en croisant deux courbes.** On reste au plus près de l'app actuelle : on améliore ce qui existe, on n'ajoute pas de nouvelle rubrique au menu.

## Avant de coder

1. Lis `versions.json` (la dernière version est en tête), puis le code du mode Prod dans `app.js` : le tableau de bord, la liste Bateaux, la fiche bateau (cartes capteurs et lien « Voir plus ») et la page Capteurs du bateau (« Ajouter des capteurs », sélecteur de période, une courbe par capteur).
2. Repère dans le mode Exploratoire le code des courbes (zoom, survol, min · moyenne · max, ligne de seuil, « Séparés / Croiser », vue d'ensemble superposée) : tu peux le **réutiliser**, en l'adaptant au style du mode Prod.
3. Repère où sont les seuils d'alerte (Paramètres > Fleet > « Gérer les seuils des alertes ») pour les afficher sur les courbes.
4. Donne-moi un plan court : ce que tu modifies, ce que tu réutilises, et ce que tu ne touches pas. Attends mon accord.

## Ce qu'il faut faire

### 1. Tableau de bord : une liste « À traiter »
- Ajoute un bloc **« À traiter »** au tableau de bord actuel, **en haut**, avant « Mon activité ». Ne change pas les blocs existants (Mon activité, Connectivité, Clientèle).
- Il liste **tous les bateaux qui ont un capteur hors seuil**, une ligne par capteur : pastille d'état, nom du bateau, capteur et valeur (« Batterie de service : 11,4 V »), depuis quand (« depuis ce matin 6 h »).
- Ajoute un **filtre par état** en haut du bloc : Tous, Alerte, À surveiller, avec le nombre pour chacun.
- Trie par défaut par gravité (Alerte avant À surveiller), puis par ancienneté.
- **Un clic sur une ligne** ouvre la page capteurs de ce bateau, avec la courbe de ce capteur déjà ouverte.
- Aucun capteur hors seuil : le bloc affiche « Aucun capteur à regarder » sur une ligne.

### 2. Page capteurs du bateau : tous les capteurs par famille
- La page reste celle d'aujourd'hui (on y arrive depuis « Voir plus » dans la fiche, ou depuis « À traiter »).
- Remplace la liste à composer avec « Ajouter des capteurs » par **tous les capteurs du bateau, rangés par famille** : Système, Énergie, Sécurité, Environnement, Usage.
- Chaque capteur est une ligne : icône, nom, valeur actuelle et état (OK, À surveiller, Alerte, Pas de donnée).
- Les familles qui ont un capteur en problème passent en premier. Dans chaque famille, le capteur en problème passe en premier.
- Une famille où tout va bien reste visible, avec l'indication « tout est normal ».

### 3. La courbe d'un capteur
- **Un clic sur un capteur ouvre sa courbe juste sous sa famille.** Un deuxième clic la referme.
- Période : **deux boutons, « 7 jours » et « Mois »**. Ils remplacent les choix actuels (dernière heure, 12 h, 24 h, semaine dernière, 14 jours, mois dernier) et le calendrier.
- **Zoom** : on glisse sur la courbe pour choisir une période, et la molette ou un clic zoome à cet endroit. Un bouton « Voir toute la période » revient à la vue complète.
- **La ligne du seuil d'alerte** en pointillé, avec son libellé (« Seuil d'alerte 11,8 V »), reprise des seuils réglés dans Paramètres > Fleet.
- **Au survol**, une ligne verticale et une bulle avec la date et la valeur.
- En haut à droite, la valeur « Maintenant », qui devient « Moyenne » pendant un zoom. En bas : « Sur la période : min · moyenne · max ».
- Corrige les dates répétées sur l'axe horizontal : chaque libellé n'apparaît qu'une fois.

### 4. Croiser deux capteurs
- Un deuxième clic sur **un autre capteur de la même famille** l'ajoute. Les deux capteurs sont sélectionnés, avec un contour.
- Le sélecteur **« Séparés / Croiser »** apparaît :
  - « Séparés » : les courbes côte à côte, sur la même période, avec le même survol ;
  - « Croiser » : **les courbes superposées sur un seul graphique**, chacune ramenée entre son minimum et son maximum, avec une légende par couleur et l'explication « Chaque courbe est ramenée entre son minimum et son maximum pour comparer leurs variations ».
- **Pas de score de corrélation** (pas de « +0,83 », pas de « Résultat du croisement »).
- Un capteur seul dans sa famille : pas de « Croiser » proposé.

### 5. Ce qu'on ne fait pas dans cette étape
Pas d'IA, pas de « Je m'en occupe », pas d'appel ou de message depuis la courbe, pas de page Capteurs du parc dans le menu, pas de vue par métier. Le parcours s'arrête quand le pro a compris.

## Cas à prévoir

- **Boîtier hors ligne** : courbe grisée, et « Dernière valeur reçue le 2 nov. à 10 h ».
- **Capteur sans historique** : « Pas encore de données pour ce capteur », à la place de la courbe.
- **Pas de donnée sur la période** : « Aucune donnée sur cette période », avec un lien « Voir le mois ».
- **Valeur « 0 V »** : distingue une vraie valeur de 0 d'une absence de donnée. Une absence affiche « — » et « Pas de donnée », jamais « 0 V ».

## Règles

- Garde le style du mode Prod (couleurs, typo, composants de l'app actuelle). Ne reprends du mode Exploratoire que le comportement des courbes.
- Accessible : texte d'au moins 14 px, zones cliquables d'au moins 44 px, jamais la couleur seule pour porter une information (toujours un mot ou une icône avec).
- Les lignes de capteurs ont `aria-pressed`, et les boutons de période et « Séparés / Croiser » sont utilisables au clavier.

## Version

Une seule nouvelle version (la suivante après celle en tête de `versions.json`) :
1. copie l'état complet dans `versions/vNN/` ;
2. ajoute l'entrée en tête de `versions.json` (« Prod · parcours Capteurs étape 1 : À traiter au tableau de bord, capteurs par famille, courbe avec seuil et zoom, croiser deux capteurs ») ;
3. ajoute la ligne dans le tableau « Versions » du `README.md` ;
4. mets à jour `BUILD` dans `app.js` ;
5. fais un commit `vNN : Prod, parcours Capteurs étape 1` et un tag `vNN`.

Ne modifie jamais une version déjà archivée. À la fin, montre-moi une capture du tableau de bord, de la page capteurs avec une courbe ouverte, et d'un croisement, et vérifie que le mode Exploratoire n'a pas changé.
