import Link from "next/link"
import { getStations } from "@/lib/cafes"

export default async function AdminPage() {
  const stations = await getStations()

  return (
    <div>
      <div className="flex items-baseline justify-between border-b border-border pb-6">
        <h1 className="font-serif text-3xl font-black text-foreground">
          駅一覧
        </h1>
        <Link
          href="/admin/cafes/new"
          className="border border-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          + 新規追加
        </Link>
      </div>

      <ul className="mt-6 border-t border-border">
        {stations.map((station) => (
          <li key={station.slug}>
            <Link
              href={`/admin/stations/${station.slug}`}
              className="flex min-h-[52px] items-center justify-between border-b border-border py-3 transition-colors hover:bg-secondary"
            >
              <span className="font-serif text-xl font-bold text-foreground">
                {station.name}
              </span>
              <span className="font-mono text-sm tabular-nums text-muted-foreground">
                {station.count}軒 →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
