"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createAdminClient } from "@/lib/supabase/admin"

export async function upsertCafe(
  _prevState: { error: string } | null,
  formData: FormData,
): Promise<{ error: string } | null> {
  const supabase = createAdminClient()
  const stationSlug = formData.get("stationSlug") as string
  const id = formData.get("id") as string
  const recommendationLinks = JSON.parse(
    formData.get("recommendationLinks") as string,
  )

  const { error } = await supabase.from("cafes").upsert({
    id,
    name: formData.get("name"),
    station: formData.get("station"),
    station_slug: stationSlug,
    google_map_url: formData.get("googleMapUrl"),
    recommendation_links: recommendationLinks,
  })

  if (error) return { error: error.message }

  revalidatePath("/")
  revalidatePath(`/stations/${stationSlug}`)
  revalidatePath("/admin")
  revalidatePath(`/admin/stations/${stationSlug}`)
  redirect(`/admin/stations/${stationSlug}`)
}

export async function deleteCafe(id: string, stationSlug: string) {
  const supabase = createAdminClient()
  const { error } = await supabase.from("cafes").delete().eq("id", id)
  if (error) throw new Error(error.message)

  revalidatePath("/")
  revalidatePath(`/stations/${stationSlug}`)
  revalidatePath("/admin")
  revalidatePath(`/admin/stations/${stationSlug}`)
  redirect(`/admin/stations/${stationSlug}`)
}
