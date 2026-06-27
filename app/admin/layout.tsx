import Link from "next/link"
import { logout } from "@/app/admin/login/actions"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-dvh">
      <nav className="border-b border-border px-6 py-3">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/admin"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground"
            >
              管理画面
            </Link>
            <Link
              href="/"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              ← 公開サイト
            </Link>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              ログアウト
            </button>
          </form>
        </div>
      </nav>
      <div className="mx-auto max-w-4xl px-6 py-10">{children}</div>
    </div>
  )
}
