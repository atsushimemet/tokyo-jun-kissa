"use client"

import { useActionState } from "react"
import { login } from "./actions"

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, null)

  return (
    <main className="mx-auto flex min-h-dvh max-w-sm items-center px-6">
      <div className="w-full">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Admin
        </p>
        <h1 className="mt-4 font-serif text-3xl font-black text-foreground">
          東京純喫茶
        </h1>

        <form action={action} className="mt-10 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-foreground"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-foreground"
            />
          </div>

          {state?.error && (
            <p className="text-sm text-destructive">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="mt-2 border border-foreground bg-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-80 disabled:opacity-50"
          >
            {pending ? "ログイン中..." : "ログイン"}
          </button>
        </form>
      </div>
    </main>
  )
}
