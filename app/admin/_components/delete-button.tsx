"use client"

import { useTransition } from "react"

export function DeleteButton({
  action,
  cafeName,
}: {
  action: () => Promise<void>
  cafeName: string
}) {
  const [pending, startTransition] = useTransition()

  function handleClick() {
    if (!confirm(`「${cafeName}」を削除しますか？`)) return
    startTransition(() => action())
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={pending}
      className="border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:border-destructive hover:text-destructive disabled:opacity-50"
    >
      {pending ? "削除中..." : "削除"}
    </button>
  )
}
