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

## Mise à jour

Remplacer les CSV puis lancer `npm run import-sensors`. Le script réécrit, dans `src/gateways/implementations/sensorService/data/` :

- `realBoats.json` : liste des capteurs et dernière valeur de chaque bateau (r1 n'est pas touché),
- `realSensorHistory.json` : un point par jour, puis un point par heure sur la semaine détaillée (moyenne de l'heure, maximum pour les capteurs oui / non pour ne perdre aucune alarme).

La correspondance boîtier → bateau est en tête de `scripts/import-sensor-history.mjs`.
