# Données capteurs réelles

Exports de la base Seanapps reçus le 16/11/2026, pour 4 boîtiers. Ce sont les seules **vraies données** du prototype, tout le reste est inventé.

| Fichier | Période (UTC) | Contenu |
|---|---|---|
| `sensors-6-months.csv` | 16/05/2026 → 14/11/2026 | Une valeur par capteur et par jour (la dernière de la journée) |
| `sensors-1-week.csv` | 09/11/2026 15 h → 14/11/2026 | Toutes les valeurs, jusqu'à une par minute. Pas de ligne d'en-tête. |

Colonnes : `serial_number, sensor_id, sensor_name, measure_type, sensor_location, [measurement_day,] measured_at_utc, sensor_value` (`measurement_day` seulement dans le fichier 6 mois, `sensor_location` toujours vide).

## Boîtiers → bateaux du prototype

| Boîtier | Bateau | Capteurs |
|---|---|---|
| 3425101525 | r2 · Bateau 682ad9b3 (déjà dans le prototype, mêmes capteurs) | 40 |
| 3323302856 | r3 · Bateau 3323302856 | 44 |
| 3323303145 | r4 · Bateau 3323303145 | 43 |
| 3323305673 | r5 · Bateau 3323305673 | 36 |

## Dans le prototype

Les 4 bateaux apparaissent dans Capteurs et dans Mes bateaux avec le badge « Données réelles » : dernière valeur de chaque capteur, courbes réelles (un relevé par jour, puis par heure sur la semaine détaillée), et « relevé le JJ/MM » quand une valeur est plus ancienne que la dernière remontée du boîtier. Pour ces bateaux, les courbes vont jusqu’au dernier relevé (14/11) ; les bateaux d’exemple gardent leur « maintenant » du mar. 10 nov. à 14 h.

Les données sont dans `real-data.js` (à la racine, chargé par `index.html` avant `app.js`). `app.js` y prend les bateaux (`REAL_IMPORT.boats`, qui remplacent ou complètent `REALS`) et l’historique (`REAL_IMPORT.history`, une liste de `[secondes UTC, valeur]` par capteur, dans l’ordre de la liste des capteurs).

## Mise à jour

Remplacer les CSV puis lancer `node scripts/import-sensor-history.mjs`. Le script lit les bateaux déjà présents dans `app.js` (pour garder leur nom et la famille des capteurs connus) et réécrit `real-data.js`. Les libellés en français des nouveaux capteurs s’ajoutent à la main dans `RFR`, dans `app.js`.

La correspondance boîtier → bateau est en tête de `scripts/import-sensor-history.mjs`. Penser ensuite à copier les fichiers dans une nouvelle version (`versions/vN`), comme pour toute version importante.
