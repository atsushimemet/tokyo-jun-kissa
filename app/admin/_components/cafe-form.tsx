"use client"

import { useActionState, useState } from "react"
import { upsertCafe } from "@/app/admin/cafes/actions"
import type { Cafe } from "@/lib/cafes"

type Link = { label: string; url: string }

export function CafeForm({ cafe }: { cafe?: Cafe }) {
  const [state, action, pending] = useActionState(upsertCafe, null)
  const [links, setLinks] = useState<Link[]>(
    cafe?.recommendationLinks.length
      ? cafe.recommendationLinks
      : [{ label: "", url: "" }],
  )

  function addLink() {
    setLinks((prev) => [...prev, { label: "", url: "" }])
  }

  function removeLink(index: number) {
    setLinks((prev) => prev.filter((_, i) => i !== index))
  }

  function updateLink(index: number, field: keyof Link, value: string) {
    setLinks((prev) =>
      prev.map((link, i) => (i === index ? { ...link, [field]: value } : link)),
    )
  }

  async function handleSubmit(formData: FormData) {
    formData.set(
      "recommendationLinks",
      JSON.stringify(links.filter((l) => l.label || l.url)),
    )
    await action(formData)
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-6">
      <Field label="ID（URL スラッグ）" name="id" required>
        <input
          name="id"
          defaultValue={cafe?.id}
          readOnly={!!cafe}
          required
          placeholder="e.g. coffee-hall-kugutsusou"
          className="input"
        />
      </Field>

      <Field label="店名" name="name" required>
        <input
          name="name"
          defaultValue={cafe?.name}
          required
          className="input"
        />
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label="駅名（日本語）" name="station" required>
          <input
            name="station"
            defaultValue={cafe?.station}
            required
            placeholder="e.g. 吉祥寺"
            className="input"
          />
        </Field>
        <Field label="駅スラッグ（英語）" name="stationSlug" required>
          <input
            name="stationSlug"
            defaultValue={cafe?.stationSlug}
            required
            placeholder="e.g. kichijoji"
            className="input"
          />
        </Field>
      </div>

      <Field label="Google Map URL" name="googleMapUrl" required>
        <input
          name="googleMapUrl"
          defaultValue={cafe?.googleMapUrl}
          required
          type="url"
          className="input"
        />
      </Field>

      <div className="flex flex-col gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          おすすめリンク
        </p>
        {links.map((link, index) => (
          <div key={index} className="flex gap-2">
            <div className="flex flex-1 flex-col gap-2">
              <input
                value={link.label}
                onChange={(e) => updateLink(index, "label", e.target.value)}
                placeholder="ラベル"
                className="input"
              />
              <input
                value={link.url}
                onChange={(e) => updateLink(index, "url", e.target.value)}
                placeholder="URL"
                type="url"
                className="input"
              />
            </div>
            <button
              type="button"
              onClick={() => removeLink(index)}
              className="self-start border border-border px-3 py-2 font-mono text-[11px] text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
            >
              削除
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addLink}
          className="self-start border border-border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
        >
          + リンクを追加
        </button>
      </div>

      {state?.error && (
        <p className="text-sm text-destructive">{state.error}</p>
      )}

      <div className="border-t border-border pt-6">
        <button
          type="submit"
          disabled={pending}
          className="border border-foreground bg-foreground px-6 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-80 disabled:opacity-50"
        >
          {pending ? "保存中..." : "保存"}
        </button>
      </div>
    </form>
  )
}

function Field({
  label,
  name,
  required,
  children,
}: {
  label: string
  name: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
        {required && <span className="ml-1 text-destructive">*</span>}
      </label>
      {children}
    </div>
  )
}
