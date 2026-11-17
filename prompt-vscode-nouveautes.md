# Prompt 2 : nouveautés de la page Capteurs (Seanapps Pro)

Tu travailles sur le prototype **Seanapps Pro** (HTML/CSS/JS sans framework : `index.html`, `app.js`, `style.css`, `versions/`, `versions.json`, `README.md`). Toutes les données sont des données d'exemple.

La page Capteurs propose **plusieurs modes d'affichage : Grille, Liste, Tableau, Carte**. Ce sont **des propositions différentes à comparer**. Ne supprime ni ne remplace aucun mode existant. Une nouveauté qui change la façon d'afficher le parc s'ajoute comme **un nouveau mode à comparer**.

## Ce qui existe déjà (à réutiliser, pas à refaire)

- La prise en charge : « Je m'en occupe », « Pris en charge », « Client prévenu », avec la personne et l'heure.
- Le ponton et la place au port, le plan du port, l'état « En mer · place au retour ».
- « Appeler » et « Envoyer un message », avec la préférence du client.
- La carte Leaflet avec les grappes, les filtres par état et le panneau latéral (Vue d'ensemble, Capteurs, Journal).
- Les courbes 24 h et 7 jours avec seuil, le sélecteur « Offre : Pro », l'aperçu « Panne probable · offre IA » et « Découvrir l'offre ».

## Avant de coder

1. Lis `versions.json`, puis le code de la page Capteurs dans `app.js`.
2. Pour chaque nouveauté, vérifie si une partie existe déjà et dis-le.
3. Donne-moi un plan court et attends mon accord.

## Règles

- Design System Seanapps déjà appliqué : un seul bouton plein par zone, libellés au verbe à l'infinitif, icônes de la bibliothèque Seanapps (objet `I`), cartes bordées, un seul badge d'état.
- Accessible : texte d'au moins 14 px, zones cliquables d'au moins 44 px, jamais la couleur seule pour porter une information.
- Les vues dépendent du profil (directeur, commercial, technicien, atelier) et de l'offre (sélecteur « Offre »).
- Pas de vrai service ni de vraie IA : tout est simulé avec des données d'exemple crédibles.
- Une version par nouveauté (voir en bas).

## Nouveautés

### 1. Mode « Suivi » : le travail, pas l'état
Nouveau mode à côté de Grille, Liste, Tableau et Carte. Les colonnes suivent la prise en charge :

**À prendre → Pris en charge → Client prévenu → Intervention prévue → Réglé**

- Seuls les bateaux avec un problème y figurent. Les bateaux OK n'apparaissent pas.
- On déplace une carte d'une colonne à l'autre (glisser-déposer, plus un menu « Déplacer vers » pour le clavier).
- Chaque carte montre : le bateau, le problème, qui s'en occupe, depuis quand, et l'action suivante.

### 2. Le capteur confirme la réparation
- Quand une carte est en « Client prévenu » ou « Intervention prévue », elle surveille le capteur concerné.
- Quand la valeur redevient normale, la carte passe toute seule en « Réglé » avec la preuve : « Le capteur confirme : prise rebranchée à 18 h 04 ».
- La personne qui s'en occupait reçoit une notification dans l'app.
- Dans le prototype, ajoute un bouton discret « Simuler le retour à la normale » pour montrer l'effet.

### 3. Alerte si personne ne s'en occupe
- Un problème sans prise en charge depuis plus de 24 h affiche « Personne ne s'en occupe depuis 2 jours » et remonte en tête dans tous les modes.
- Il apparaît aussi dans la vue du directeur, au tableau de bord.

### 4. Un aperçu IA concret
Remplace le lien générique « Une panne probable · offre IA » par un aperçu précis, avec le délai masqué :
- « Batterie de service : panne probable dans ██ jours », et une mini-courbe floutée.
- Avec « Offre : Pro+ » (ou le niveau IA), le délai, la tendance, le niveau de confiance et l'action proposée sont visibles.
- Montre cet aperçu seulement sur les bateaux où la prévision est forte, pas sur tous.

### 5. Préparer la tournée au port
- Sur la carte ou dans la liste, on sélectionne plusieurs bateaux du même port, puis on clique sur « Préparer la tournée ».
- La tournée liste les bateaux dans l'ordre des pontons (Ponton A place 6, puis Ponton B place 2…), avec pour chacun le problème, quoi prendre (chargeur, batterie, outil) et le contact du propriétaire.
- Le tracé à pied s'affiche sur le plan du port.
- Ajoute une vue simple à ouvrir sur téléphone et un bouton « Imprimer ».
- Les bateaux « En mer » sont ajoutés avec la mention « Au retour ».

### 6. Les arrivées du jour
- Une liste des bateaux en mer qui ont un problème « À voir au retour », triée par retour estimé (heure, port, place).
- Quand un bateau rentre au port, une notification apparaît : « Ulysse est rentré, place C 18 : eau dans la cale à vérifier », avec « Je m'en occupe ».
- Dans le prototype, ajoute « Simuler l'arrivée » pour montrer l'effet.

### 7. Problème commun sur un ponton
- Si au moins 3 bateaux du même ponton ont le même problème au même moment (ex. prise de quai coupée depuis 18 h), affiche **une seule alerte groupée** : « Ponton F : 3 bateaux sans courant depuis 18 h, coupure probable du ponton ».
- Action : « Appeler la capitainerie » (numéro d'exemple). Les alertes individuelles restent visibles dans le détail.
- Sur la carte et le plan du port, entoure le ponton concerné.

### 8. Compte à rebours sur les alertes
- Pour les valeurs qui évoluent (batterie, réservoirs, humidité, révision moteur), affiche le temps restant au rythme actuel : « 11,4 V · à plat dans 14 h environ ».
- Calcul simple à partir de la pente des dernières heures. Il reste dans l'offre Pro, sans IA.
- Ajoute un tri « Le plus urgent d'abord » qui utilise ce temps restant, dans tous les modes.

## Versions : pouvoir revenir en arrière

**Une nouveauté = une version**, en partant de la version en tête de `versions.json`. À la fin de chaque nouveauté :

1. copie l'état complet dans `versions/vNN/` ;
2. ajoute l'entrée en tête de `versions.json` (une phrase qui décrit la nouveauté) ;
3. ajoute la ligne dans le tableau « Versions » du `README.md` ;
4. mets à jour `BUILD` dans `app.js` ;
5. fais un commit `vNN : <description>` et un tag `vNN`.

Ne modifie jamais une version déjà archivée. Si je te dis « reviens à la vNN », remets les fichiers de `versions/vNN/` à la racine, puis crée une nouvelle version qui l'indique.

Après chaque nouveauté, arrête-toi et donne-moi : ce qui a changé (3 à 5 lignes), ce que tu as réutilisé, le numéro de version et les questions ouvertes. Attends mon « ok » avant de passer à la suivante.
