import Link from "next/link"
import { notFound } from "next/navigation"
import { CafeCard } from "@/components/cafe-card"
import { getCafesByStationSlug, getStationBySlug } from "@/lib/cafes"

export default async function StationPage({
  params,
}: {
  params: Promise<{ stationSlug: string }>
}) {
  const { stationSlug } = await params
  const station = await getStationBySlug(stationSlug)

  if (!station) {
    notFound()
  }

  const cafes = await getCafesByStationSlug(stationSlug)

  return (
    <main className="mx-auto min-h-dvh max-w-2xl px-6 pb-20">
      <header className="border-b border-border pb-10 pt-14">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
        >
          ← 東京純喫茶トップへ
        </Link>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          {station.name} Station
        </p>
        <h1 className="mt-4 font-serif text-5xl font-black leading-none tracking-tight text-foreground">
          {station.name}
        </h1>
        <p className="mt-6 flex items-baseline gap-3 font-serif text-lg text-foreground">
          この駅の純喫茶
          <span className="font-mono text-sm tabular-nums text-muted-foreground">
            {cafes.length}軒
          </span>
        </p>
      </header>

      <section className="grid grid-cols-1 gap-6 pt-10">
        {cafes.map((cafe) => (
          <CafeCard key={cafe.id} cafe={cafe} />
        ))}
      </section>
    </main>
  )
}
