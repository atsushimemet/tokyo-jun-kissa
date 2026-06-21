import Link from "next/link"
import { getStations } from "@/lib/cafes"

export default function HomePage() {
  const stations = getStations()
  const totalCafes = stations.reduce((sum, s) => sum + s.count, 0)

  return (
    <main className="mx-auto min-h-dvh max-w-2xl px-6 pb-20">
      {/* ヘッダー / 誌面風タイトル */}
      <header className="border-b border-border pb-10 pt-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Tokyo Junkissa Index
        </p>
        <h1 className="mt-5 font-serif text-5xl font-black leading-none tracking-tight text-foreground sm:text-6xl">
          東京純喫茶
        </h1>
        <p className="mt-6 font-serif text-lg text-foreground text-pretty">
          駅から選ぶ、東京の純喫茶メモ。
        </p>
        <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground text-pretty">
          気になる駅名を選ぶと、その駅の近くにある純喫茶と、Google
          Map・おすすめ記事/SNSへのリンクだけを表示します。
        </p>
      </header>

      {/* 駅名一覧 */}
      <section className="pt-10">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-serif text-xl font-bold text-foreground">
            駅から探す
          </h2>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {stations.length} stations / {totalCafes} cafes
          </p>
        </div>

        <ul className="border-t border-border">
          {stations.map((station) => (
            <li key={station.slug}>
              <Link
                href={`/stations/${station.slug}`}
                className="flex min-h-[56px] items-center justify-between border-b border-border py-4 transition-colors hover:bg-secondary"
              >
                <span className="font-serif text-2xl font-bold text-foreground">
                  {station.name}
                </span>
                <span className="flex items-center gap-3">
                  <span className="font-mono text-sm tabular-nums text-muted-foreground">
                    {station.count}
                  </span>
                  <span aria-hidden="true" className="text-muted-foreground">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
