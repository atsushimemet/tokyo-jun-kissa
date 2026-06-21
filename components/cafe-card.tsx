import type { Cafe } from "@/data/cafes"
import { ExternalLink } from "@/components/external-link"

export function CafeCard({ cafe }: { cafe: Cafe }) {
  return (
    <article className="border border-border bg-card">
      <div className="border-b border-border px-5 py-5">
        {/* 店舗名・駅名はリンクにしない（クリックしても何も起きない） */}
        <h3 className="font-serif text-xl font-bold leading-tight text-card-foreground text-balance">
          {cafe.name}
        </h3>
        <p className="mt-2 text-sm tracking-wide text-muted-foreground">
          最寄り駅：{cafe.station}駅
        </p>
      </div>

      <div className="flex flex-col">
        {/* クリック可能なのは Google Map リンクのみ */}
        <ExternalLink
          href={cafe.googleMapUrl}
          className="flex min-h-[44px] items-center justify-between px-5 py-4 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary"
        >
          <span>Google Mapで開く</span>
          <span aria-hidden="true" className="text-muted-foreground">
            ↗
          </span>
        </ExternalLink>

        <div className="border-t border-border px-5 py-4">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            おすすめ記事 / SNS
          </p>
          <ul className="flex flex-col gap-1">
            {cafe.recommendationLinks.map((link, index) => (
              <li key={`${cafe.id}-link-${index}`}>
                {/* クリック可能なのは記事・SNSリンクのみ */}
                <ExternalLink
                  href={link.url}
                  className="flex min-h-[44px] items-center gap-2 text-sm text-card-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  <span aria-hidden="true" className="text-muted-foreground">
                    —
                  </span>
                  {link.label}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
