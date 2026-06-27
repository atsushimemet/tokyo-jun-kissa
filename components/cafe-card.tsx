import type { Cafe } from "@/lib/cafes"
import { ExternalLink } from "@/components/external-link"

export function CafeCard({ cafe }: { cafe: Cafe }) {
  return (
    <article className="border border-border bg-card">
      <div className="border-b border-border px-5 py-5">
        <h3 className="text-balance font-serif text-xl font-bold leading-tight text-card-foreground">
          {cafe.name}
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="text-sm tracking-wide text-muted-foreground">
            最寄り駅：{cafe.station}駅
            {cafe.walkMinutes != null && `（徒歩${cafe.walkMinutes}分）`}
          </p>
          {cafe.smokingPolicy && (
            <span className="font-mono text-[10px] tracking-wide text-muted-foreground">
              {cafe.smokingPolicy === "禁煙" ? "🚭" : "🚬"} {cafe.smokingPolicy}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <ExternalLink
          href={cafe.googleMapUrl}
          className="flex min-h-[44px] items-center justify-between px-5 py-4 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary"
        >
          <span>Google Mapで開く</span>
          <span aria-hidden="true" className="text-muted-foreground">
            ↗
          </span>
        </ExternalLink>

        {cafe.seatingInfo && (
          <div className="border-t border-border px-5 py-4">
            <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              席・空間
            </p>
            <p className="text-sm leading-relaxed text-card-foreground">
              {cafe.seatingInfo}
            </p>
          </div>
        )}

        <div className="border-t border-border px-5 py-4">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            おすすめ記事 / SNS
          </p>
          <ul className="flex flex-col gap-1">
            {cafe.recommendationLinks.map((link, index) => (
              <li key={`${cafe.id}-link-${index}`}>
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
