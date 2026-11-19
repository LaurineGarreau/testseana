# Prompt : parcours Capteurs, étape 1, dans le mode « Prod » (Seanapps Pro)

Tu travailles sur le prototype **Seanapps Pro** (HTML/CSS/JS sans framework : `index.html`, `app.js`, `style.css`, `versions/`, `versions.json`, `README.md`). Toutes les données sont des données d'exemple.

Le prototype a deux modes, choisis en haut de l'écran :
- **Exploratoire** : toutes les idées testées. **N'y touche pas.**
- **Prod** : la copie fidèle de l'app Seanapps Pro actuelle. **C'est ici que tu travailles.**

Objectif : ajouter au mode Prod le premier pas d'un nouveau parcours. **Le pro part du tableau de bord ou de la barre de recherche, ouvre un bateau, voit le capteur en alerte, ouvre sa courbe et trouve la cause en croisant deux courbes.** On améliore ce qui existe. **Tout se passe dans la page Bateaux** : pas de rubrique « Capteurs » dans le menu du mode Prod.

## Avant de coder

1. Lis `versions.json` (la dernière version est en tête), puis le code du mode Prod dans `app.js` : le tableau de bord, la page Bateaux (liste, fiche à droite, cartes capteurs et « Voir plus ») et la page Capteurs du bateau actuelle (« Ajouter des capteurs », sélecteur de période, une courbe par capteur).
2. Dans le mode Exploratoire, repère et **réutilise** (en gardant le style du mode Prod) :
   - la **barre de recherche universelle** en haut des pages ;
   - la **page Bateaux allégée** : la liste « Mes bateaux » (Nom du bateau, Client, Statut, pastille de notifications), puis l'**aperçu à droite** quand on clique sur un bateau (HIN copiable, n° de commande, notifications en cartes, dernière mise à jour, dernier document, boutons « Voir la fiche » et « Voir les capteurs ») ;
   - la **vue détaillée des capteurs d'un bateau** (familles, courbe au clic, zoom, survol, min · moyenne · max, ligne de seuil, « Séparés / Croiser », vue superposée).
3. Repère où sont les seuils d'alerte (Paramètres > Fleet > « Gérer les seuils des alertes ») pour les afficher sur les courbes.
4. Donne-moi un plan court : ce que tu modifies, ce que tu reprends de l'Exploratoire, et ce que tu ne touches pas. Attends mon accord.

## Ce qu'il faut faire

### 1. Barre de recherche universelle (toutes les pages du mode Prod)
- En haut de chaque page, une barre « Rechercher un bateau, un client, un HIN, un capteur… », avec le raccourci `/`.
- Elle trouve : un **bateau** (nom, modèle, n° de coque HIN, n° de commande), un **client**, et un **capteur d'un bateau** (« batterie Princess 2 »).
- Les résultats sont groupés (Bateaux, Clients, Capteurs), au clavier (flèches, Entrée) comme à la souris.
- Un bateau ouvre la page Bateaux avec **ce bateau sélectionné et son aperçu ouvert**. Un client ouvre sa fiche client. Un capteur ouvre **la vue détaillée des capteurs du bateau avec sa courbe ouverte**.

### 2. Tableau de bord : une liste « À traiter »
- Ajoute un bloc **« À traiter »** en haut du tableau de bord actuel, avant « Mon activité ». Ne change pas les autres blocs (Mon activité, Connectivité, Clientèle).
- Il liste **tous les bateaux qui ont un capteur hors seuil**, une ligne par capteur : pastille d'état, bateau, capteur et valeur (« Batterie de service : 11,4 V »), depuis quand.
- **Filtre par état** en haut du bloc : Tous, Alerte, À surveiller, avec le nombre pour chacun. Tri par défaut : gravité, puis ancienneté.
- **Un clic sur une ligne** ouvre la page Bateaux, sur la vue détaillée des capteurs de ce bateau, avec la courbe de ce capteur ouverte.
- Aucun capteur hors seuil : « Aucun capteur à regarder ».

### 3. Page Bateaux : liste, puis aperçu
- La page Bateaux devient la page allégée de l'Exploratoire : **d'abord la liste**, puis **l'aperçu à droite** au clic sur un bateau. La ligne sélectionnée est entourée.
- L'aperçu montre : nom, modèle et statut, HIN copiable, n° de commande, **les notifications du bateau en cartes** (capteur, valeur, depuis quand, explication, bouton « Voir la courbe »), la dernière mise à jour et le dernier document.
- En bas de l'aperçu, deux boutons : **« Voir la fiche »** (la fiche bateau actuelle, inchangée) et **« Voir les capteurs »**.
- Un bateau qui n'envoie pas de données : à la place des notifications, « Ce bateau n'envoie pas encore de données », et pas de bouton « Voir les capteurs ».

### 4. Vue détaillée des capteurs du bateau (dans la page Bateaux)
- « Voir les capteurs », « Voir la courbe » sur une notification, une ligne « À traiter » ou un capteur trouvé par la recherche ouvrent **la vue détaillée en grand** : la liste et l'aperçu se masquent, un bouton retour revient à la liste avec le bateau toujours sélectionné. L'adresse reste dans la page Bateaux.
- En tête : nom du bateau, état, client, modèle, et le bouton « Voir la fiche bateau ».
- Puis **tous les capteurs du bateau, par famille** (Système, Énergie, Sécurité, Environnement, Usage), chacun sur une ligne : icône, nom, valeur actuelle et état (OK, À surveiller, Alerte, Pas de donnée). Les familles et capteurs en problème passent en premier. Une famille où tout va bien affiche « tout est normal ».
- Cette liste remplace « Ajouter des capteurs » : il n'y a plus de liste à composer.

### 5. La courbe d'un capteur
- **Clic sur un capteur : sa courbe s'ouvre juste sous sa famille.** Un deuxième clic la referme.
- Période : **« 7 jours » et « Mois »**. Ils remplacent les choix actuels (dernière heure… mois dernier) et le calendrier.
- **Zoom** : glisser pour choisir une période, molette ou clic pour zoomer à un endroit, « Voir toute la période » pour revenir.
- **Ligne du seuil d'alerte** en pointillé avec son libellé (« Seuil d'alerte 11,8 V »).
- **Survol** : ligne verticale et bulle avec la date et la valeur.
- En haut à droite, « Maintenant » (« Moyenne » pendant un zoom) ; en bas, « Sur la période : min · moyenne · max ».
- Corrige les dates répétées sur l'axe horizontal : chaque libellé une seule fois.

### 6. Croiser deux capteurs
- Un clic sur **un autre capteur de la même famille** l'ajoute (les deux lignes sont entourées) et fait apparaître **« Séparés / Croiser »** :
  - « Séparés » : les courbes côte à côte, même période, même survol ;
  - « Croiser » : **superposées sur un seul graphique**, chacune ramenée entre son minimum et son maximum, avec une légende et la phrase « Chaque courbe est ramenée entre son minimum et son maximum pour comparer leurs variations ».
- **Pas de score de corrélation** (pas de « +0,83 », pas de « Résultat du croisement »).
- Un capteur seul dans sa famille : pas de « Croiser ».

### 7. Hors de cette étape
Pas d'IA, pas de « Je m'en occupe », pas d'appel ni de message depuis la courbe, pas de « Parler au bateau », de carnet de santé ou de capteurs virtuels, pas de rubrique Capteurs du parc, pas de vue par métier. Le parcours s'arrête quand le pro a compris.

## Cas à prévoir

- **Boîtier hors ligne** : courbe grisée, « Dernière valeur reçue le 2 nov. à 10 h ».
- **Capteur sans historique** : « Pas encore de données pour ce capteur ».
- **Pas de donnée sur la période** : « Aucune donnée sur cette période », avec « Voir le mois ».
- **Pas de donnée ≠ 0 V** : une absence affiche « — » et « Pas de donnée », jamais « 0 V » (y compris sur les cartes capteurs de la fiche).
- **Recherche sans résultat** : « Aucun résultat pour « … » », avec la liste des types cherchés.

## Règles

- Garde le style du mode Prod (couleurs, typo, composants de l'app actuelle). De l'Exploratoire, ne reprends que la structure et le comportement listés ici.
- Accessible : texte d'au moins 14 px, zones cliquables d'au moins 44 px, jamais la couleur seule pour porter une information, tout utilisable au clavier (`aria-pressed` sur les capteurs sélectionnés, `aria-expanded` sur les courbes).

## Version

Une seule nouvelle version (la suivante après celle en tête de `versions.json`) :
1. copie l'état complet dans `versions/vNN/` ;
2. ajoute l'entrée en tête de `versions.json` (« Prod · parcours Capteurs étape 1 : recherche universelle, À traiter au tableau de bord, page Bateaux avec aperçu et capteurs en grand, courbe avec seuil et zoom, croiser deux capteurs ») ;
3. ajoute la ligne dans le tableau « Versions » du `README.md` ;
4. mets à jour `BUILD` dans `app.js` ;
5. fais un commit `vNN : Prod, parcours Capteurs étape 1` et un tag `vNN`.

Ne modifie jamais une version déjà archivée. À la fin, montre-moi une capture de : la recherche avec des résultats, le tableau de bord, la page Bateaux avec l'aperçu, la vue capteurs avec une courbe ouverte, et un croisement. Vérifie que le mode Exploratoire n'a pas changé.
