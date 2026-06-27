"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export async function upsertCafe(
  _prevState: { error: string } | null,
  formData: FormData,
): Promise<{ error: string } | null> {
  const supabase = await createClient()
  const stationSlug = formData.get("stationSlug") as string
  const id = formData.get("id") as string
  const recommendationLinks = JSON.parse(
    formData.get("recommendationLinks") as string,
  )

  const walkMinutesRaw = formData.get("walkMinutes") as string
  const smokingPolicy = (formData.get("smokingPolicy") as string) || null

  const { error } = await supabase.from("cafes").upsert({
    id,
    name: formData.get("name"),
    station: formData.get("station"),
    station_slug: stationSlug,
    google_map_url: formData.get("googleMapUrl"),
    recommendation_links: recommendationLinks,
    walk_minutes: walkMinutesRaw ? Number(walkMinutesRaw) : null,
    smoking_policy: smokingPolicy,
    seating_info: (formData.get("seatingInfo") as string) || null,
  })

  if (error) return { error: error.message }

  revalidatePath("/")
  revalidatePath(`/stations/${stationSlug}`)
  revalidatePath("/admin")
  revalidatePath(`/admin/stations/${stationSlug}`)
  redirect(`/admin/stations/${stationSlug}`)
}

export async function deleteCafe(id: string, stationSlug: string) {
  const supabase = await createClient()
  const { error } = await supabase.from("cafes").delete().eq("id", id)
  if (error) throw new Error(error.message)

  revalidatePath("/")
  revalidatePath(`/stations/${stationSlug}`)
  revalidatePath("/admin")
  revalidatePath(`/admin/stations/${stationSlug}`)
  redirect(`/admin/stations/${stationSlug}`)
}
