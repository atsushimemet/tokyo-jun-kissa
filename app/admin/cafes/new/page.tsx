import Link from "next/link"
import { CafeForm } from "@/app/admin/_components/cafe-form"

export default async function NewCafePage({
  searchParams,
}: {
  searchParams: Promise<{ station?: string; stationSlug?: string }>
}) {
  const { station, stationSlug } = await searchParams

  const defaultCafe = station && stationSlug
    ? { station, stationSlug, id: "", name: "", googleMapUrl: "", recommendationLinks: [] }
    : undefined

  return (
    <div>
      <div className="border-b border-border pb-6">
        <Link
          href={stationSlug ? `/admin/stations/${stationSlug}` : "/admin"}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← 戻る
        </Link>
        <h1 className="mt-3 font-serif text-3xl font-black text-foreground">
          新規喫茶店追加
        </h1>
      </div>
      <div className="mt-8">
        <CafeForm cafe={defaultCafe as Parameters<typeof CafeForm>[0]["cafe"]} />
      </div>
    </div>
  )
}
