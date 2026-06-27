import Link from "next/link"
import { notFound } from "next/navigation"
import { getCafesByStationSlug, getStationBySlug } from "@/lib/cafes"
import { deleteCafe } from "@/app/admin/cafes/actions"
import { DeleteButton } from "@/app/admin/_components/delete-button"

export default async function AdminStationPage({
  params,
}: {
  params: Promise<{ stationSlug: string }>
}) {
  const { stationSlug } = await params
  const station = await getStationBySlug(stationSlug)
  if (!station) notFound()

  const cafes = await getCafesByStationSlug(stationSlug)

  return (
    <div>
      <div className="flex items-baseline justify-between border-b border-border pb-6">
        <div>
          <Link
            href="/admin"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            ← 駅一覧
          </Link>
          <h1 className="mt-3 font-serif text-3xl font-black text-foreground">
            {station.name}
          </h1>
        </div>
        <Link
          href={`/admin/cafes/new?station=${station.name}&stationSlug=${stationSlug}`}
          className="border border-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          + 新規追加
        </Link>
      </div>

      <ul className="mt-6 flex flex-col gap-4">
        {cafes.map((cafe) => {
          const deleteAction = deleteCafe.bind(null, cafe.id, stationSlug)
          return (
            <li
              key={cafe.id}
              className="flex items-center justify-between border border-border px-4 py-3"
            >
              <div>
                <p className="font-serif font-bold text-foreground">
                  {cafe.name}
                </p>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                  {cafe.id}
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/admin/cafes/${cafe.id}/edit`}
                  className="border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-foreground transition-colors hover:bg-secondary"
                >
                  編集
                </Link>
                <DeleteButton action={deleteAction} cafeName={cafe.name} />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
