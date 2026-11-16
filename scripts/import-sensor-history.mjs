/**
 * Imports the Seanapps sensor exports of data/ into the prototype's sample data.
 *
 *   npm run import-sensors
 *
 * - data/sensors-6-months.csv: one reading per sensor and per day (the last one of the day).
 * - data/sensors-1-week.csv: every reading of the last days (no header line).
 *
 * Writes, in src/gateways/implementations/sensorService/data/:
 * - realBoats.json: the sensor list and last value of each boat (other boats are kept),
 * - realSensorHistory.json: the readings of each sensor, in the order of the sensor list,
 *   one point per day, then one point per hour over the detailed week.
 */
import { readFileSync, writeFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const DAILY_FILE = path.join(ROOT, "data/sensors-6-months.csv")
const DETAILED_FILE = path.join(ROOT, "data/sensors-1-week.csv")
const OUTPUT_DIR = path.join(ROOT, "src/gateways/implementations/sensorService/data")
const BOATS_FILE = path.join(OUTPUT_DIR, "realBoats.json")
const HISTORY_FILE = path.join(OUTPUT_DIR, "realSensorHistory.json")

/** Seanapps box serial number → boat of the prototype. Name and owner of existing boats are kept. */
const BOATS = [
  { serialNumber: "3425101525", id: "r2" },
  { serialNumber: "3323302856", id: "r3" },
  { serialNumber: "3323303145", id: "r4" },
  { serialNumber: "3323305673", id: "r5" },
]

const CATEGORY_ORDER = ["energy", "environment", "other", "safety", "system", "usage"]

/** Category of the sensors the Seanapps export did not contain yet, by measure type. */
const CATEGORY_BY_MEASURE = {
  voltage_volts: "energy",
  current_ampere: "energy",
  temperature_celsius: "environment",
  temperature_kelvin: "environment",
  pressure_mbar: "environment",
  speed_mps: "environment",
  angle_radians: "environment",
  relative_humidity: "other",
  length_meters: "other",
  boolean_connected: "other",
  boolean_power: "other",
  boolean_activated: "safety",
  power_dbm: "system",
  rssi_lookup: "system",
  gps_integer: "system",
  relative_percentage: "usage",
  boolean_open: "usage",
  angular_velocity_rpm: "usage",
  time_hours: "usage",
  rate_liters_per_hour: "usage",
  pressure_hpa: "usage",
  capacity_liters: "usage",
}

const DAILY_COLUMNS = ["serial_number", "sensor_id", "sensor_name", "measure_type", "sensor_location", "measurement_day", "measured_at_utc", "sensor_value"]
const DETAILED_COLUMNS = ["serial_number", "sensor_id", "sensor_name", "measure_type", "sensor_location", "measured_at_utc", "sensor_value"]

const HOUR_SECONDS = 3600

/** Rows of a Seanapps CSV export (the header line is optional). */
function readCsv(file, defaultColumns) {
  const lines = readFileSync(file, "utf8").trim().split(/\r?\n/)
  const columns = lines[0].startsWith("serial_number") ? lines.shift().split(",") : defaultColumns
  return lines.map((line, index) => {
    const cells = line.split(",")
    if (cells.length !== columns.length)
      throw new Error(`${path.basename(file)}, line ${index + 2}: ${cells.length} columns`)
    const row = Object.fromEntries(columns.map((column, i) => [column, cells[i]]))
    return {
      serialNumber: row.serial_number,
      sensorId: row.sensor_id,
      rawName: row.sensor_name,
      measureType: row.measure_type,
      time: Date.parse(row.measured_at_utc.replace(" ", "T") + "Z") / 1000,
      rawValue: row.sensor_value,
      value: Number(row.sensor_value),
    }
  })
}

const round = (value) => Math.round(value * 1000) / 1000

/** One point per hour: the average, or the maximum for yes / no sensors (so an alarm is never lost). */
function hourlyPoints(readings, measureType) {
  const hours = new Map()
  readings.forEach(({ time, value }) => {
    const hour = Math.floor(time / HOUR_SECONDS) * HOUR_SECONDS
    hours.set(hour, [...(hours.get(hour) ?? []), value])
  })
  const isBinary = measureType.startsWith("boolean_")
  return [...hours.entries()].map(([hour, values]) => [
    hour,
    isBinary ? Math.max(...values) : round(values.reduce((a, b) => a + b, 0) / values.length),
  ])
}

const byTime = (a, b) => a.time - b.time
const minTime = (readings) => readings.reduce((min, r) => Math.min(min, r.time), Infinity)
const maxTime = (readings) => readings.reduce((max, r) => Math.max(max, r.time), -Infinity)
const isoDate = (seconds) => new Date(seconds * 1000).toISOString().slice(0, 10)

const existingBoats = JSON.parse(readFileSync(BOATS_FILE, "utf8"))
const knownCategories = new Map(
  existingBoats.flatMap((boat) =>
    boat.rawSensors.map(([category, rawName, measureType]) => [`${rawName}|${measureType}`, category]),
  ),
)
const categoryOf = (rawName, measureType) =>
  knownCategories.get(`${rawName}|${measureType}`) ?? CATEGORY_BY_MEASURE[measureType] ?? "other"

const daily = readCsv(DAILY_FILE, DAILY_COLUMNS)
const detailed = readCsv(DETAILED_FILE, DETAILED_COLUMNS)

const importedBoats = []
const histories = {}
BOATS.forEach(({ serialNumber, id }) => {
  const dailyReadings = daily.filter((r) => r.serialNumber === serialNumber)
  const detailedReadings = detailed.filter((r) => r.serialNumber === serialNumber)
  if (!dailyReadings.length) throw new Error(`No reading for the box ${serialNumber}`)
  const detailedFrom = minTime(detailedReadings)

  const sensors = new Map()
  ;[...dailyReadings, ...detailedReadings].forEach((reading) => {
    const sensor = sensors.get(reading.sensorId) ?? {
      ...reading,
      category: categoryOf(reading.rawName, reading.measureType),
      daily: [],
      detailed: [],
    }
    if (sensor.measureType !== reading.measureType)
      throw new Error(`Sensor ${reading.sensorId}: two measure types`)
    sensors.set(reading.sensorId, sensor)
  })
  dailyReadings.forEach((r) => sensors.get(r.sensorId).daily.push(r))
  detailedReadings.forEach((r) => sensors.get(r.sensorId).detailed.push(r))

  const sorted = [...sensors.values()].sort(
    (a, b) =>
      CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category) ||
      a.rawName.localeCompare(b.rawName, "en", { sensitivity: "base" }) ||
      a.sensorId.localeCompare(b.sensorId),
  )
  const history = sorted.map((sensor) => [
    ...sensor.daily
      .filter((r) => r.time < detailedFrom)
      .sort(byTime)
      .map((r) => [r.time, r.value]),
    ...hourlyPoints(sensor.detailed.sort(byTime), sensor.measureType),
  ])
  const lastTime = Math.max(maxTime(dailyReadings), maxTime(detailedReadings))
  const firstTime = minTime(dailyReadings)
  const existing = existingBoats.find((boat) => boat.id === id)

  importedBoats.push({
    id,
    name: existing?.name ?? `Bateau ${serialNumber}`,
    owner: existing?.owner ?? `Historique capteurs Seanapps · boîtier ${serialNumber}`,
    serialNumber,
    historyPeriod: {
      from: isoDate(firstTime),
      detailedFrom: isoDate(detailedFrom),
      to: isoDate(lastTime),
    },
    rawSensors: sorted.map((sensor) => {
      const last = [...sensor.daily, ...sensor.detailed].sort(byTime).at(-1)
      return [sensor.category, sensor.rawName, sensor.measureType, last.rawValue]
    }),
  })
  histories[id] = history
})

const importedIds = new Set(importedBoats.map((boat) => boat.id))
const boats = [
  ...existingBoats.map((boat) => importedBoats.find((b) => b.id === boat.id) ?? boat),
  ...importedBoats.filter((boat) => !existingBoats.some((b) => b.id === boat.id)),
]
writeFileSync(BOATS_FILE, JSON.stringify(boats, null, 2) + "\n")

/** One line per sensor, so that the file stays readable and its diffs small. */
const historyJson =
  "{\n" +
  [...importedIds]
    .map(
      (id) =>
        `  ${JSON.stringify(id)}: [\n` +
        histories[id].map((points) => "    " + JSON.stringify(points)).join(",\n") +
        "\n  ]",
    )
    .join(",\n") +
  "\n}\n"
writeFileSync(HISTORY_FILE, historyJson)

importedBoats.forEach((boat) => {
  const points = histories[boat.id].reduce((total, points) => total + points.length, 0)
  console.log(
    `${boat.id} · ${boat.serialNumber} · ${boat.rawSensors.length} sensors · ${points} points · ${boat.historyPeriod.from} → ${boat.historyPeriod.to}`,
  )
})
