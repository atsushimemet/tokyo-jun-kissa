"use client"

import type { MouseEvent, ReactNode } from "react"

export function ExternalLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: ReactNode
}) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    // v0プレビューなどiframe内で開いている場合、サンドボックスの制約で
    // 通常の target="_blank" 遷移がブロックされることがある。
    // その場合はトップレベル（新規タブ）で確実に開く。
    if (typeof window !== "undefined" && window.self !== window.top) {
      event.preventDefault()
      window.open(href, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
