import { createClient } from "@/lib/supabase/server"

export type Cafe = {
  id: string
  name: string
  station: string
  stationSlug: string
  googleMapUrl: string
  recommendationLinks: { label: string; url: string }[]
}

function rowToCafe(row: Record<string, unknown>): Cafe {
  return {
    id: row.id as string,
    name: row.name as string,
    station: row.station as string,
    stationSlug: row.station_slug as string,
    googleMapUrl: row.google_map_url as string,
    recommendationLinks: row.recommendation_links as Cafe["recommendationLinks"],
  }
}

export async function getAllCafes(): Promise<Cafe[]> {
  const supabase = await createClient()
  const { data, error } = await supabase.from("cafes").select("*").order("name")
  if (error) console.error("[cafes] getAllCafes error:", error)
  return (data ?? []).map(rowToCafe)
}

export async function getStations() {
  const cafes = await getAllCafes()
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

export async function getCafesByStationSlug(stationSlug: string): Promise<Cafe[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from("cafes")
    .select("*")
    .eq("station_slug", stationSlug)
    .order("name")
  return (data ?? []).map(rowToCafe)
}

export async function getStationBySlug(stationSlug: string) {
  const stations = await getStations()
  return stations.find((s) => s.slug === stationSlug)
}

export async function getCafeById(id: string): Promise<Cafe | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("cafes")
    .select("*")
    .eq("id", id)
    .single()
  if (error) return null
  return rowToCafe(data)
}
