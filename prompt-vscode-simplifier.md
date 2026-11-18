# Prompt : simplifier la page Capteurs et retrouver les courbes (Seanapps Pro)

Tu travailles sur le prototype **Seanapps Pro** (HTML/CSS/JS sans framework : `index.html`, `app.js`, `style.css`, `versions/`, `versions.json`, `README.md`). Toutes les données sont des données d'exemple.

## Le problème

La page Capteurs et le détail capteurs d'un bateau sont devenus trop chargés :
- **de gros espaces vides** : dans la grille, une carte haute (avec le bloc IA) étire toute la ligne, et les cartes OK ont un grand vide au milieu ;
- **trop de couleurs** : rouge, orange, bleu, vert, fond bleu IA, texte rouge, texte orange… on ne sait plus ce qui est important ;
- **trop d'infos par carte** : problème, compte à rebours, prévision IA, ponton, GPS, prise en charge, pastilles et deux boutons, tout en même temps ;
- **le clic sur un capteur n'affiche plus sa courbe**, alors que le texte dit « Touchez un capteur pour voir sa courbe ».

Objectif : **des pages plus simples, plus calmes, où l'essentiel se voit en 3 secondes**, sans perdre les fonctionnalités. Elles restent accessibles en un clic.

Les modes Grille, Liste, Tableau et Carte sont **des propositions à comparer** : garde-les tous et applique les règles ci-dessous à chacun.

## Avant de coder

1. Lis `versions.json` (la dernière version est en tête), le CSS et le code de la page Capteurs et du détail capteurs d'un bateau dans `app.js`.
2. Ouvre aussi **`versions/v25/app.js`** pour voir comment les courbes s'affichaient avant : `explorerHTML`, `renderExplorer`, les attributs `data-cview` (voir la courbe) et `data-csen` (croiser plusieurs capteurs), l'objet `S.ex`.
3. Fais-moi un plan court : ce que tu enlèves, ce que tu caches derrière un clic, ce que tu gardes. Attends mon accord.

## 1. Espacements

- Définis une échelle d'espacement unique dans `:root` (4, 8, 12, 16, 24, 32 px) et remplace les valeurs en dur du CSS de la page Capteurs.
- Dans une carte : 16 px de marge intérieure, 8 px entre les lignes d'info, 12 px avant les boutons.
- Entre les cartes : 16 px. Entre les sections : 24 px.
- **Pas de hauteur forcée** : chaque carte prend la hauteur de son contenu (`align-items: start` dans la grille). Plus de grand vide sous les cartes courtes.
- Supprime les zones vides réservées pour un contenu absent (pastilles vides, bloc IA vide, ligne de prise en charge vide).

## 2. Couleurs

- **La couleur sert uniquement à l'état** : rouge pour une alerte, orange pour « à surveiller », vert pour OK, gris pour hors ligne. Rien d'autre n'est coloré.
- Une seule touche de couleur par carte : le badge d'état en haut à droite. Le titre, le compte à rebours, « Personne ne s'en occupe » et la prévision restent **en texte neutre** (noir et gris), avec une icône si besoin.
- Le bloc « Prévu par l'IA » n'a plus de fond bleu ni de texte rouge : une simple ligne grise avec l'icône IA, par exemple « IA : batterie à plat d'ici 10 jours · Voir ».
- Les pastilles OK sont grises. Seules les pastilles en problème gardent leur couleur d'état.
- Les puces de la liste « Capteurs du bateau » sont neutres (contour gris), sans fond bleu.
- Vérifie le contraste AA du texte gris.

## 3. Moins d'infos par carte

Chaque carte de bateau montre **au maximum 4 éléments**, dans cet ordre :

1. le nom du bateau et le badge d'état ;
2. le problème principal en une ligne : « Prise de quai débranchée · depuis 18 h » (le compte à rebours s'ajoute à cette ligne s'il existe, en gris) ;
3. une ligne d'info, la plus utile selon le cas : prise en charge (« Laurine G. s'en occupe »), sinon « Personne ne s'en occupe », sinon la place (« Ponton A · place 7 ») ;
4. **une seule action** : « Je m'en occupe » s'il n'y a personne, sinon « Voir les capteurs ». Toute la carte est cliquable vers le détail.

Ce qui passe dans le détail, au survol ou dans un menu « ⋯ » : la prévision IA, le GPS non partagé, la liste des pastilles, « Voir la fiche », les autres problèmes (« + 1 autre point »).

- Les bateaux OK sont **une ligne compacte** : nom, badge OK, dernier envoi. Dans la Grille, ils sont regroupés en bas sous « 28 bateaux OK », replié par défaut.
- Le texte d'intro en haut de page tient en une phrase.
- Les filtres (Tous, Alerte, À surveiller, OK, Pannes probables), le tri et « Comparer » tiennent sur une seule ligne.

## 4. Le détail capteurs d'un bateau

L'ordre de la page devient :

1. **En-tête** : nom, badge d'état, propriétaire, modèle, et les boutons « Appeler » et « Envoyer un message » à droite.
2. **Ce qui ne va pas** : seulement les capteurs en problème, chacun sur une ligne avec sa valeur, et sa courbe ouverte par défaut.
3. **Tous les capteurs**, par famille (Système, Énergie, Sécurité, Environnement, Usage). Les familles sans problème sont repliées sur une ligne : « Sécurité · 1 capteur · tout est normal ».
4. **Repliés par défaut** : « Où trouver le bateau » (plan du port), « Journal de bord », « Capteurs du bateau » (de série et ajoutés), « Capteurs à proposer » (visible pour le commercial seulement).

Supprime les répétitions : la prise de quai ne doit apparaître qu'une fois en haut, puis dans sa famille.

## 5. Retrouver les courbes au clic (comme avant)

- **Clic sur un capteur → sa courbe s'ouvre juste en dessous de la ligne**, dans la même famille, sans changer de page ni défiler ailleurs. Reprends le fonctionnement et le style de la v25 (`explorerHTML`, `data-cview`).
- Elle affiche la valeur actuelle, la moyenne, le minimum et le maximum, le seuil en pointillé, et les onglets 24 h, 7 jours, Mois et Tout l'historique.
- Un deuxième clic sur le même capteur referme la courbe.
- **Croiser** : un bouton « Croiser » (ou Ctrl/Cmd + clic) ajoute un autre capteur de la même famille sur le même graphique, avec une légende. Reprends `data-csen` de la v25.
- La ligne cliquée est mise en évidence (contour), avec `aria-expanded` sur le bouton.
- Le texte d'aide « Touchez un capteur pour voir sa courbe » n'apparaît qu'une fois en haut de la page, pas sous chaque famille.
- Ça marche aussi dans le panneau latéral du mode Carte (onglet Capteurs).

## 6. Vérification

- Fais une capture de chaque mode (Grille, Liste, Tableau, Carte) et du détail d'un bateau, avant et après, et dis-moi ce qui a été retiré ou caché.
- Vérifie qu'aucune fonctionnalité n'a disparu : chacune doit rester accessible en un clic au plus.

## Version

Fais **deux versions**, pour pouvoir revenir en arrière séparément :
- **vNN** : espacements, couleurs, cartes simplifiées (sections 1 à 3) ;
- **vNN+1** : détail du bateau simplifié et courbes au clic (sections 4 et 5).

Pour chaque version :
1. copie l'état complet dans `versions/vNN/` ;
2. ajoute l'entrée en tête de `versions.json` ;
3. ajoute la ligne dans le tableau « Versions » du `README.md` ;
4. mets à jour `BUILD` dans `app.js` ;
5. fais un commit `vNN : <description>` et un tag `vNN`.

Ne modifie jamais une version déjà archivée. Arrête-toi après la première version et attends mon « ok ».
