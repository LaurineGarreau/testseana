# Prompt : page Capteurs de Seanapps Pro

Tu travailles sur le prototype **Seanapps Pro** (repo `testseana`, à la racine : `index.html`, `app.js`, `style.css`, `versions/`, `versions.json`, `README.md`). C'est un prototype d'interface pour les concessionnaires Bénéteau, en HTML/CSS/JS sans framework. Toutes les données sont des **données d'exemple**. La dernière version est la **v21**.

## Avant de coder

1. Lis `README.md`, `versions.json`, puis `app.js` (fonctions `vCapteursGrid`, `capDetail`, `sCard`, `fiche`, `vBateaux`, `boatPlan`, `vDashboard`, `oppList`) pour comprendre ce qui existe.
2. **Vérifie si une fonctionnalité existe déjà avant de l'ajouter.** Le prototype a déjà, entre autres : la localisation et l'équipement dans la fiche bateau (v18), le guide des capteurs avec recherche dans les 169 capteurs (v7, v20), la proposition commerciale avec message et lien produit (v3), les messages avec le délai de réponse (v21), les alertes et « À faire » (v19). Si c'est déjà là, **améliore l'existant** au lieu de créer un doublon, et dis-le.
3. Donne-moi un plan court (lot par lot, ce que tu modifies, ce que tu réutilises) et **attends mon accord** avant de commencer.

## Règles à respecter

- **Design System Seanapps** déjà appliqué dans le prototype : 5 types de boutons (un seul bouton plein par zone), libellés au verbe à l'infinitif, icônes de la bibliothèque Seanapps (objet `I` dans `app.js`, style Lucide, trait 1,5), cartes bordées sans bande de couleur, un seul badge d'état. Réutilise les fonctions et les classes CSS existantes.
- Accessible : texte d'au moins 14 px, zones cliquables d'au moins 44 px, contraste suffisant, jamais la couleur seule pour porter une information (toujours une icône ou un texte en plus).
- Les vues dépendent du profil (directeur, commercial, technicien, atelier). Respecte cette logique : le technicien et le commercial ne voient pas la même chose.
- Pas d'appel à un vrai service ni à une vraie IA. Tout est simulé avec des données d'exemple crédibles (bateaux Bénéteau, Jeanneau, Lagoon, ports français).
- Une bibliothèque externe (carte, par exemple) seulement via CDN avec une version exacte (ex. `maplibre-gl@4.7.1`). Prévois un affichage de secours si la carte ne charge pas.
- Textes en français, simples et courts.

## Versions : pouvoir revenir en arrière

**Un lot = une version.** À la fin de chaque lot :

1. Copie l'état complet (`index.html`, `app.js`, `style.css` et les autres fichiers nécessaires) dans `versions/vNN/` (v22, v23, etc.).
2. Ajoute l'entrée en tête de `versions.json` (`v`, `date`, `t` = une phrase qui décrit le contenu), comme les entrées existantes.
3. Ajoute la ligne dans le tableau « Versions » du `README.md`.
4. Mets à jour `BUILD` en haut de `app.js`.
5. Fais un commit git `vNN : <description>` et un tag `vNN`.
6. Ne modifie **jamais** une version déjà archivée dans `versions/`.

Si je te dis « reviens à la vNN », remets les fichiers de `versions/vNN/` à la racine (ou `git checkout vNN -- .`), puis crée une nouvelle version qui l'indique. Ne supprime rien.

Les petits ajustements (alignement, texte) vont dans la version suivante, sans en créer une nouvelle.

## Ce qu'il faut ajouter (un lot par version)

L'entrée principale est la **page Capteurs**. Les autres écrans (fiche bateau, tableau de bord) y renvoient.

### Lot 1 · Identité et position du bateau (v22)
- En tête de la fiche bateau : **nom, modèle, numéro de coque** (format HIN, ex. `FR-BEN12345A626`), toujours visibles et copiables.
- **Trouver son bateau** dans la fiche : mini-carte avec la dernière position, l'heure de la position, et l'état « Au port » ou « En mer ».
- **Picto quand le client refuse de partager son GPS** : icône de position barrée avec le texte « Position non partagée par le propriétaire ». Elle s'affiche à la place de la carte et sur la liste du parc. Pas de couleur d'alerte : ce n'est pas un problème, c'est un choix du client.

### Lot 2 · Carte du parc (v23)
- Carte du monde (zoom sur la France par défaut) avec **tous les bateaux du parc**, regroupés en grappes quand on dézoome.
- Pastille par bateau selon son état (OK, alerte, hors ligne, position non partagée), avec la légende.
- Filtres par état, zoom avant et arrière, recentrer. Un clic sur un bateau ouvre un aperçu (nom, modèle, état, dernière alerte), puis sa fiche.
- La liste des bateaux et la carte restent synchronisées (survol de l'une = mise en avant sur l'autre).

### Lot 3 · Contacter le client (v24)
- Sur une alerte (ex. **prise de quai débranchée**), deux actions : **Appeler** et **Envoyer un message**, avec un message prérempli à modifier (« Bonjour, votre bateau n'est plus alimenté par la prise de quai depuis 14 h 20. Pouvez-vous la rebrancher ou nous dire si on doit passer ? »).
- Bloc **« À appeler en cas de problème »** dans la fiche : propriétaire, contact secondaire (gardien de port, proche), avec le rôle, le numéro et la préférence (appel ou message).
- Réutilise la messagerie existante (v21) au lieu d'en créer une autre.

### Lot 4 · Alertes quand le bateau est en mer (v25)
- Si un problème non urgent est détecté en mer : badge **« À voir au retour au port »**.
- Une liste « À voir au retour » dans « À faire ». Quand le bateau revient au port, l'élément passe en « Bateau revenu : à traiter », avec l'heure d'arrivée.
- Les alertes urgentes (eau dans la cale, etc.) restent immédiates, même en mer.

### Lot 5 · Capteurs installés et capteurs recommandés (v26)
- **Commercial** : pour chaque bateau, les capteurs **de série** sur ce modèle, les capteurs **installés**, et les **recommandations** d'autres capteurs avec une raison simple (« Le bateau reste à quai l'hiver : un capteur de prise de quai évite la batterie à plat »). Branche la proposition commerciale existante (v3).
- **Technicien** : des **suggestions techniques** de capteurs additionnels selon ce qu'il observe (ex. pompe de cale qui se déclenche souvent → capteur d'eau dans la cale). Pas de prix ni d'argument de vente pour lui.

### Lot 6 · Aider le client à régler le boîtier lui-même (v27)
- **Guide d'installation et de dépannage du boîtier** pas à pas, avec des illustrations simples : boîtier hors ligne, capteur qui ne remonte plus, pile faible, appairage.
- Un bouton **« Envoyer le guide au client »** depuis l'alerte ou la fiche, avant de l'appeler.
- Une page « Questions fréquentes » que le client peut consulter seul, pour moins appeler la concession.
- Côté pro, indique si le client a ouvert le guide (« Guide consulté hier à 18 h »).

### Lot 7 · Détecter le problème avant le client : offre supérieure (v28)
- Concept d'une offre au-dessus de Seanapps Pro (nom provisoire « Seanapps Pro+ », à valider) : **maintenance prédictive** à partir des courbes des capteurs.
- Exemples : tension de batterie qui baisse un peu plus chaque semaine, pompe de cale qui tourne de plus en plus souvent, température moteur qui dérive.
- Pour chaque prévision : ce qui est observé, la tendance (petit graphique), une estimation (« Batterie à plat probable d'ici 10 jours »), le niveau de confiance, et l'action proposée (prévenir le client, planifier une intervention).
- Mentionne clairement que c'est une estimation et montre sur quelles données elle repose. Badge « Pro+ » sur ces éléments, et un aperçu flouté avec « Découvrir l'offre » pour ceux qui ne l'ont pas.

### Lot 8 · Tableau de bord capteurs dynamique (v29)
- Une **vue d'ensemble générale** du parc, très visuelle et interactive (esprit « poste de commande »), qui reste lisible et conforme au Design System. Pas de gadget.
- **Recherche directe** d'un bateau (nom, modèle, n° de coque, propriétaire) depuis cette vue.
- **On part du capteur, pas du bateau** : choisir un type de capteur (ex. prise de quai) affiche tous les bateaux concernés et leur état. On descend ensuite par zoom et clic : parc → famille de capteurs → capteur → bateau → courbe.
- Chiffres clés animés à l'arrivée, transitions douces entre les niveaux, fil d'Ariane pour remonter. Respecte `prefers-reduced-motion`.

## À la fin de chaque lot

Arrête-toi et donne-moi :
- ce qui a changé, en 3 à 5 lignes ;
- ce que tu as réutilisé de l'existant ;
- le numéro de version créé ;
- les questions ouvertes (ex. vrais numéros, nom de l'offre, règles métier à confirmer).

Attends mon « ok » avant de passer au lot suivant.
