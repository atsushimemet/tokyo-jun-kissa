# Supabase 移行手順書

## 概要

現在 `data/cafes.ts` の静的配列で管理している喫茶店データを Supabase (PostgreSQL) へ移行する。
あわせて管理者ログインと駅ページからの喫茶店データ編集機能を実装する。

### 移行前後の比較

| 項目 | 移行前 | 移行後 |
|------|--------|--------|
| データソース | `data/cafes.ts`（静的配列） | Supabase PostgreSQL |
| レンダリング | 静的生成（SSG） | 動的レンダリング（SSR）|
| データ更新 | コード変更 → git push → 再デプロイ | 管理画面から即時反映 |
| 認証 | なし | Supabase Auth（管理者のみ）|

---

## 前提条件

- Node.js 18+ / pnpm
- Supabase アカウント（[supabase.com](https://supabase.com) で無料作成可）
- Vercel アカウント（現行デプロイ先）

---

## Step 1: Supabase プロジェクト作成

1. Supabase ダッシュボードで「New project」を作成
2. プロジェクト名: `tokyo-jun-kissa`（任意）
3. データベースパスワードを設定してメモしておく
4. リージョン: `Northeast Asia (Tokyo)` を選択

作成後、**Project Settings > API** から以下2つを控える：

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxxxxx...   # 管理画面API用
```

---

## Step 2: データベーススキーマ作成

Supabase ダッシュボードの **SQL Editor** で以下を実行する。

### テーブル定義

```sql
-- 喫茶店テーブル
CREATE TABLE cafes (
  id              text PRIMARY KEY,
  name            text NOT NULL,
  station         text NOT NULL,
  station_slug    text NOT NULL,
  google_map_url  text NOT NULL,
  -- おすすめリンクは常に喫茶店と一緒に読み書きするため JSONB で保持
  recommendation_links jsonb NOT NULL DEFAULT '[]',
  created_at      timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now()
);

-- station_slug でのフィルタリングを高速化
CREATE INDEX idx_cafes_station_slug ON cafes (station_slug);

-- updated_at 自動更新トリガー
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER cafes_updated_at
  BEFORE UPDATE ON cafes
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
```

### Row Level Security (RLS) 設定

```sql
-- RLS を有効化
ALTER TABLE cafes ENABLE ROW LEVEL SECURITY;

-- 誰でも読み取り可能
CREATE POLICY "cafes_public_read"
  ON cafes FOR SELECT
  USING (true);

-- 認証済みユーザー（管理者）のみ書き込み可能
CREATE POLICY "cafes_admin_write"
  ON cafes FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');
```

---

## Step 3: 既存データの移行（シード SQL）

Supabase SQL Editor で以下を実行して既存71件を投入する。

> **注意**: 以下は `data/cafes.ts` の全データを SQL INSERT 文に変換したものを用意する必要がある。
> 変換には後述の `scripts/export-seed.ts` スクリプトを使用する。

### シード生成スクリプトの作成

```typescript
// scripts/export-seed.ts
import { cafes } from "../data/cafes"

const rows = cafes.map((c) => {
  const links = JSON.stringify(c.recommendationLinks).replace(/'/g, "''")
  const name = c.name.replace(/'/g, "''")
  const googleMapUrl = c.googleMapUrl.replace(/'/g, "''")
  return `  ('${c.id}', '${name}', '${c.station}', '${c.stationSlug}', '${googleMapUrl}', '${links}'::jsonb)`
})

console.log(`INSERT INTO cafes (id, name, station, station_slug, google_map_url, recommendation_links) VALUES`)
console.log(rows.join(",\n") + ";")
```

実行コマンド:

```bash
pnpm tsx scripts/export-seed.ts > docs/seed.sql
# 出力された seed.sql を Supabase SQL Editor にペーストして実行
```

---

## Step 4: Next.js に Supabase クライアントを導入

### パッケージインストール

```bash
pnpm add @supabase/supabase-js @supabase/ssr
```

### 環境変数の設定

`.env.local` を作成:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxxxxx...
```

`.gitignore` に `.env.local` が含まれていることを確認する。

### Supabase クライアントの作成

```typescript
// lib/supabase/client.ts  ← ブラウザ用（管理画面のフォームで使用）
import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}
```

```typescript
// lib/supabase/server.ts  ← サーバー用（ページ・Server Actions で使用）
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function createClient() {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        },
      },
    },
  )
}
```

```typescript
// lib/supabase/admin.ts  ← 管理操作用（service_role キーで RLS をバイパス）
import { createClient } from "@supabase/supabase-js"

export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  )
}
```

---

## Step 5: `lib/cafes.ts` の更新

静的インポートから Supabase フェッチに切り替える。

```typescript
// lib/cafes.ts（移行後）
import { createClient } from "@/lib/supabase/server"

export type Cafe = {
  id: string
  name: string
  station: string
  stationSlug: string
  googleMapUrl: string
  recommendationLinks: { label: string; url: string }[]
}

// DB行 → アプリ型への変換
function rowToCafe(row: Record<string, unknown>): Cafe {
  return {
    id: row.id as string,
    name: row.name as string,
    station: row.station as string,
    stationSlug: row.station_slug as string,
    googleMapUrl: row.google_map_url as string,
    recommendationLinks: row.recommendation_links as Cafe["recommendationLinks"],
  }
}

export async function getAllCafes(): Promise<Cafe[]> {
  const supabase = await createClient()
  const { data } = await supabase.from("cafes").select("*").order("name")
  return (data ?? []).map(rowToCafe)
}

export async function getStations() {
  const cafes = await getAllCafes()
  const map = new Map<string, { name: string; slug: string; count: number }>()
  cafes.forEach((cafe) => {
    const current = map.get(cafe.stationSlug)
    if (current) {
      current.count += 1
    } else {
      map.set(cafe.stationSlug, { name: cafe.station, slug: cafe.stationSlug, count: 1 })
    }
  })
  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name, "ja"))
}

export async function getCafesByStationSlug(stationSlug: string): Promise<Cafe[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from("cafes")
    .select("*")
    .eq("station_slug", stationSlug)
    .order("name")
  return (data ?? []).map(rowToCafe)
}

export async function getStationBySlug(stationSlug: string) {
  const stations = await getStations()
  return stations.find((s) => s.slug === stationSlug)
}
```

---

## Step 6: 静的生成から動的レンダリングへの切り替え

`app/stations/[stationSlug]/page.tsx` の `generateStaticParams` を削除し、動的にする。

変更点:
1. `generateStaticParams()` を削除
2. 各関数の呼び出しに `await` を追加（関数が async になったため）
3. ファイル先頭に `export const dynamic = 'force-dynamic'` を追加（任意）

```typescript
// app/stations/[stationSlug]/page.tsx（変更後の冒頭）
// generateStaticParams() を削除する
export default async function StationPage({ ... }) {
  const station = await getStationBySlug(stationSlug)   // await 追加
  const cafes = await getCafesByStationSlug(stationSlug) // await 追加
  ...
}
```

同様に `app/page.tsx` も `getStations()` に `await` を追加する。

---

## Step 7: 管理者アカウントの作成

Supabase ダッシュボードの **Authentication > Users > Invite user** から管理者メールアドレスを招待する。

またはSQL Editorで直接作成:

```sql
-- パスワードは Supabase Auth の管理画面から設定する
SELECT auth.create_user(
  uid       := gen_random_uuid(),
  email     := 'admin@example.com',
  password  := 'your-secure-password',
  email_confirm := true
);
```

---

## Step 8: 管理者ログイン機能の実装

### ログインページ

```
app/admin/login/page.tsx   ← ログインフォーム（Client Component）
app/admin/login/actions.ts ← Server Action（Supabase Auth でログイン）
```

```typescript
// app/admin/login/actions.ts
"use server"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export async function login(formData: FormData) {
  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  })
  if (error) return { error: error.message }
  redirect("/admin")
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/admin/login")
}
```

### 認証ミドルウェア

```typescript
// middleware.ts（プロジェクトルート）
import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => request.cookies.getAll(), setAll: (cs) => cs.forEach(({ name, value, options }) => response.cookies.set(name, value, options)) } }
  )
  const { data: { user } } = await supabase.auth.getUser()
  if (!user && request.nextUrl.pathname.startsWith("/admin") && !request.nextUrl.pathname.startsWith("/admin/login")) {
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }
  return response
}

export const config = { matcher: ["/admin/:path*"] }
```

---

## Step 9: 管理画面（喫茶店 CRUD）の実装

### ファイル構成

```
app/admin/
  page.tsx                     ← 駅一覧 → 喫茶店一覧へのナビゲーション
  layout.tsx                   ← 管理画面共通レイアウト（ログアウトボタン）
  login/
    page.tsx                   ← ログインフォーム
    actions.ts                 ← login / logout Server Actions
  stations/[stationSlug]/
    page.tsx                   ← その駅の喫茶店一覧（編集・削除ボタン付き）
  cafes/
    new/page.tsx               ← 新規登録フォーム
    [id]/edit/page.tsx         ← 編集フォーム
    actions.ts                 ← upsert / delete Server Actions
```

### 喫茶店の更新 Server Action（例）

```typescript
// app/admin/cafes/actions.ts
"use server"
import { revalidatePath } from "next/cache"
import { createAdminClient } from "@/lib/supabase/admin"

export async function upsertCafe(formData: FormData) {
  const supabase = createAdminClient()
  const recommendationLinks = JSON.parse(formData.get("recommendationLinks") as string)
  const { error } = await supabase.from("cafes").upsert({
    id: formData.get("id"),
    name: formData.get("name"),
    station: formData.get("station"),
    station_slug: formData.get("stationSlug"),
    google_map_url: formData.get("googleMapUrl"),
    recommendation_links: recommendationLinks,
  })
  if (error) throw error
  revalidatePath("/")
  revalidatePath(`/stations/${formData.get("stationSlug")}`)
}

export async function deleteCafe(id: string, stationSlug: string) {
  const supabase = createAdminClient()
  await supabase.from("cafes").delete().eq("id", id)
  revalidatePath("/")
  revalidatePath(`/stations/${stationSlug}`)
}
```

---

## Step 10: Vercel への環境変数設定

Vercel ダッシュボードの **Settings > Environment Variables** に以下を追加:

| 変数名 | 値 | 対象環境 |
|--------|----|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxxxx.supabase.co` | Production / Preview / Development |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJxxxxxx...` | Production / Preview / Development |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJxxxxxx...` | Production / Preview / Development |

> `SUPABASE_SERVICE_ROLE_KEY` は秘密鍵のため `NEXT_PUBLIC_` を付けないこと。

---

## Step 11: 動作確認チェックリスト

### データ移行の確認
- [ ] Supabase Table Editor で71件のデータが投入されていること
- [ ] `station_slug` のインデックスが作成されていること

### 公開ページの確認
- [ ] トップページ（駅一覧）が表示されること
- [ ] 各駅ページ（`/stations/[stationSlug]`）が喫茶店を表示すること
- [ ] Google Map・おすすめリンクが正しく表示されること

### 管理画面の確認
- [ ] `/admin/login` にアクセスできること
- [ ] 正しい資格情報でログインできること
- [ ] 誤った資格情報でエラーが表示されること
- [ ] 未ログイン状態で `/admin` にアクセスすると `/admin/login` にリダイレクトされること
- [ ] ログアウト後に `/admin/login` にリダイレクトされること
- [ ] 喫茶店の名前・Google Map URL・おすすめリンクを編集して保存できること
- [ ] 編集後に公開ページへ即時反映されること
- [ ] 新規喫茶店を追加できること
- [ ] 喫茶店を削除できること

---

## 移行後に削除できるもの

移行完了・動作確認後、以下を削除する:

- `data/cafes.ts`（データが Supabase へ移行済みのため）
- `scripts/export-seed.ts`（シード生成スクリプト、用済み）
- `docs/seed.sql`（シード SQL ファイル、機密情報は含まないが整理のため）

---

## 参考リンク

- [Supabase Docs: Next.js App Router クイックスタート](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Supabase Docs: Auth with Next.js](https://supabase.com/docs/guides/auth/server-side/nextjs)
- [Next.js Docs: Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
