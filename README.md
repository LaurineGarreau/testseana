# Seanapps Pro · prototype

Prototype d'interface pour une concession de bateaux : tableau de bord par métier (directeur, commercial, technicien, atelier), fiche bateau avec plan interactif et journal, grille des capteurs de tout le parc et recherche universelle dans les 169 capteurs.

Les bateaux, clients et valeurs affichés sont des **données d'exemple**.

Ouvrir `index.html` dans un navigateur, ou visiter la version en ligne (GitHub Pages).

La page d'accueil affiche une double vue : l'app Pro à gauche, l'arborescence Seanapps Pro avant / après à droite (cliquable, reliée à l'app).

## Versions

Chaque version importante est conservée dans `versions/vN/` et listée dans `versions.json`. Les petits ajustements (icône, alignement) sont intégrés à la version suivante sans en créer une nouvelle. Le bouton « Versions » en haut de la page permet de les rouvrir.

| Version | Date | Contenu |
|---|---|---|
| v13 | 12/11/2026 | Page Bateaux allégée : la liste ou la fiche, une seule à la fois, avec « À faire » en tête |
| v12 | 12/11/2026 | Profil fixé à la connexion (choix hors application), le directeur voit toutes les vues |
| v11 | 12/11/2026 | Guides : visite de bienvenue et nouveautés, écran assombri sauf la fonctionnalité montrée |
| v10 | 12/11/2026 | Déclaration de stock : bateaux à régulariser, mise en service en un clic |
| v9 | 12/11/2026 | Nouvelle vue du bateau : silhouette avec pastilles et liste des zones |
| v8 | 12/11/2026 | Toutes les icônes reprises de la bibliothèque Seanapps (bouton ⓘ compris) |
| v7 | 12/11/2026 | Guide des capteurs dans un bouton ⓘ, en haut de la page Capteurs |
| v6 | 12/11/2026 | Courbes : cartes comme avant, mois ou tout l’historique, vue d’ensemble qui croise les données |
| v5 | 12/11/2026 | Double vue app + arborescence avant / après, versions |
| v4 | 12/11/2026 | Courbes : historique au mois, vues ensemble / individuelle, zoom |
| v3 | 10/11/2026 | Proposition commerciale avec message et lien produit |
| v2 | 10/11/2026 | Page Bateaux alignée sur Seanapps Pro |
| v1 | 10/11/2026 | Premier prototype : tableau de bord par métier et capteurs |

## Prototypes gamification

Deux prototypes cliquables issus des benchmarks gamification (données d'exemple) :

- [`pro-gamification/`](pro-gamification/) : Seanapps Pro avec Ma journée, État du parc, checklist de mise en service, bilan du lundi, statut concession et délai de réponse.
- [`mobile-gamification/`](mobile-gamification/) : prototype de l'app propriétaire de Killian Hocquet (React, version compilée), avec les ajouts gamification : bilan de saison, missions, codes boutique, avantages du réseau, carte qui se dévoile, saisons, objectif de la flotte, registre pré-rempli, délai de réponse.
