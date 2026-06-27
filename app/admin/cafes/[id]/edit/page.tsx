import Link from "next/link"
import { notFound } from "next/navigation"
import { getCafeById } from "@/lib/cafes"
import { CafeForm } from "@/app/admin/_components/cafe-form"

export default async function EditCafePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const cafe = await getCafeById(id)
  if (!cafe) notFound()

  return (
    <div>
      <div className="border-b border-border pb-6">
        <Link
          href={`/admin/stations/${cafe.stationSlug}`}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← {cafe.station}
        </Link>
        <h1 className="mt-3 font-serif text-3xl font-black text-foreground">
          {cafe.name}
        </h1>
      </div>
      <div className="mt-8">
        <CafeForm cafe={cafe} />
      </div>
    </div>
  )
}
