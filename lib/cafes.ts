import { cafes } from "@/data/cafes"

export function getAllCafes() {
  return cafes
}

export function getStations() {
  const map = new Map<string, { name: string; slug: string; count: number }>()
  cafes.forEach((cafe) => {
    const current = map.get(cafe.stationSlug)
    if (current) {
      current.count += 1
    } else {
      map.set(cafe.stationSlug, {
        name: cafe.station,
        slug: cafe.stationSlug,
        count: 1,
      })
    }
  })
  return Array.from(map.values()).sort((a, b) =>
    a.name.localeCompare(b.name, "ja"),
  )
}

export function getCafesByStationSlug(stationSlug: string) {
  return cafes.filter((cafe) => cafe.stationSlug === stationSlug)
}

export function getStationBySlug(stationSlug: string) {
  return getStations().find((station) => station.slug === stationSlug)
}
