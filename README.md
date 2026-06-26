# 東京純喫茶 — Design Doc

駅名から東京の純喫茶を探し、Google Map と「おすすめ記事 / SNS」リンクへ遷移するための、スマホファーストでシンプルな静的 Web アプリです。本ドキュメントは設計方針・アーキテクチャ・実装の責務をまとめたものです。

---

## 1. プロダクト概要

- **目的**: 東京の純喫茶を「最寄り駅」から選び、各店舗の Google Map と紹介記事/SNS へ最短で遷移できるようにする。
- **スコープ外（意図的に作らないもの）**: 店舗詳細ページ、検索機能、ログイン、お気に入り、口コミ、地図埋め込み、管理画面、ユーザー投稿。
- **設計哲学**: 「駅 → 店舗一覧 → 外部リンク」という単一の導線だけを持つ。機能を足さないことを品質と捉える。

---

## 2. 技術スタック

| 領域 | 採用技術 |
| --- | --- |
| フレームワーク | Next.js (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS v4（`@theme` によるトークン定義） |
| UI 部品 | 自前の軽量コンポーネント（shadcn/ui ベースのトークン体系） |
| データ | `data/cafes.ts` の静的配列（DB なし） |
| ホスティング | Vercel |

**データベース・API Routes・Server Actions・状態管理ライブラリは一切使用していません。** すべてビルド時に静的生成されます。

---

## 3. ディレクトリ構成と責務

```
app/
  layout.tsx                     ルートレイアウト。メタデータ / viewport / フォント / 背景色
  globals.css                    デザイントークン（生成り×黒の配色、明朝/ゴシックのフォント）
  page.tsx                       トップページ。駅名一覧（重複排除・店舗数つき）
  stations/
    [stationSlug]/page.tsx       駅別店舗一覧ページ。動的ルート + 静的生成
components/
  cafe-card.tsx                  店舗カード（プレゼンテーション層）
  external-link.tsx              外部リンク用クライアントコンポーネント
lib/
  cafes.ts                       データアクセス層（取得関数のみ）
data/
  cafes.ts                       Cafe 型定義 + 静的店舗データ
```

### 各層の責務

- **`data/`（データソース）**: `Cafe` 型と `cafes` 配列だけを持つ。唯一の「真実の源（source of truth）」。
- **`lib/`（アクセス層）**: `data/` を直接画面から触らせず、関数経由でのみ参照させる。将来 DB へ移行する際の差し替えポイント。
- **`app/`（ルーティング / ページ）**: Server Component。`lib/` から取得したデータを画面構造に組み立てる。
- **`components/`（表示）**: 受け取った props を描画するだけ。データ取得はしない。

---

## 4. システムアーキテクチャ

```
            ┌─────────────────┐
            │   data/cafes.ts │  静的配列（Cafe[]）
            └────────┬────────┘
                     │ import
            ┌────────▼────────┐
            │   lib/cafes.ts  │  getStations / getCafesByStationSlug ...
            └────────┬────────┘
        ┌────────────┴────────────┐
        │ import                  │ import
┌───────▼────────┐       ┌────────▼─────────────────┐
│  app/page.tsx  │       │ app/stations/[slug]/page │  Server Components
└───────┬────────┘       └────────┬─────────────────┘
        │ <Link>                  │ <CafeCard cafe={...} />
        │                ┌────────▼────────┐
        │                │ components/      │
        │                │  cafe-card.tsx   │  Presentation
        │                └────────┬─────────┘
        │                         │ <ExternalLink>
        │                ┌────────▼────────┐
        │                │ external-link   │  "use client"（唯一のクライアント境界）
        └────────────────┴─────────────────┘
```

- **レンダリング戦略**: 全ページを静的生成（SSG）。`generateStaticParams()` が `getStations()` から駅 slug を列挙し、駅ページをビルド時に事前生成する。
- **クライアント境界**: `external-link.tsx` のみ `"use client"`。それ以外はすべて Server Component で、JS バンドルを最小化している。
- **データフロー**: 単方向（data → lib → page → component）。逆流や副作用はない。

---

## 5. データモデル

```ts
export type Cafe = {
  id: string                  // 一意なスラッグ（例: "coffee-hall-kugutsusou"）
  name: string                // 店舗名
  station: string             // 最寄り駅の表示名（例: "吉祥寺"）
  stationSlug: string         // 駅の URL スラッグ（例: "kichijoji"）
  googleMapUrl: string        // ftid 付き maps.google.com URL
  recommendationLinks: {      // おすすめ記事 / SNS（複数可）
    label: string             // 「サイト名：記事タイトル」形式
    url: string
  }[]
}
```

### 設計上の決定

- **`station` と `stationSlug` を分離**: 表示名（日本語）と URL（ローマ字）を分けることで、ルーティングと表示を独立させる。同一駅は `stationSlug` で名寄せされる。
- **`googleMapUrl` は `ftid` 付き正規 URL を保持**: `maps.app.goo.gl` の短縮 URL は中間ページで環境判定が走り、iframe / アプリ内ブラウザでブロックされることがあるため、店舗を一意に指す `ftid`（Google の場所 ID）付き `maps.google.com` URL に統一している。
- **`recommendationLinks.label` は「サイト名：記事タイトル」形式**: 出典が一目で分かるよう統一フォーマットを採用。

### データアクセス関数（`lib/cafes.ts`）

| 関数 | 役割 |
| --- | --- |
| `getAllCafes()` | 全店舗を返す |
| `getStations()` | `stationSlug` で重複排除し、`{ name, slug, count }` を駅名の五十音順（`localeCompare(..., "ja")`）で返す |
| `getCafesByStationSlug(slug)` | 指定駅の店舗のみを `filter` で抽出 |
| `getStationBySlug(slug)` | 指定 slug の駅メタ情報を取得 |

店舗数が数百件規模でも、配列の `filter` / `Map` 集計で十分な性能を満たす想定。

---

## 6. フロントエンド実装

### ページ構成

| ルート | ファイル | 内容 |
| --- | --- | --- |
| `/` | `app/page.tsx` | サイト名・サブコピー・説明文・駅名一覧（各駅の店舗数つき） |
| `/stations/[stationSlug]` | `app/stations/[stationSlug]/page.tsx` | 駅名・「この駅の純喫茶」見出し・店舗数・カード一覧・トップへ戻るリンク |

- 駅ページの `params` は Next.js (App Router) の仕様に従い `await` して取得する。
- 存在しない駅 slug は `notFound()` で 404 にフォールバック。

### 店舗カード（`cafe-card.tsx`）

カード内に表示するのはデータが持つ項目のみ：店舗名 / 最寄り駅 / Google Map リンク / おすすめ記事・SNS リンク。

**クリック可能な要素は 2 種類だけ**という不変条件を厳守している：

1. Google Map リンク
2. `recommendationLinks` の各 URL

店舗名・駅名・カード全体はクリックしても何も起きない（リンク化しない）。これは仕様上の中心的な制約で、カードを `<article>` にし、リンクは内部の特定要素にのみ付与することで担保している。

---

## 7. UI / UX デザイン

雑誌・Web メディア（BRUTUS）のような「編集感のある誌面」を志向している。

- **配色**: 生成り（cream）を基調に、文字は黒に近いインク色。アクセントは抑えた赤茶。`globals.css` の `@theme` でトークン化（`--background` / `--foreground` / `--accent` ...）。直接の `bg-white` などは使わない。
- **タイポグラフィ**: 見出しは明朝系（`font-serif`）を太く大きく見せ、ラベルは等幅（`font-mono`）で `tracking` を広げて誌面のキャプション風に。本文はゴシック系（`font-sans`）。日本語の巨大 Web フォント読み込みはパフォーマンス・クラッシュ要因になるため避け、OS の標準日本語フォント（ヒラギノ / 游書体など）にフォールバックする。
- **レイアウト**: `max-w-2xl` の単一カラムを中央寄せ。Flexbox 中心、カード一覧のみ 1 カラム Grid。余白を大きく、罫線（`border-border`）は細く。
- **モバイルファースト**: viewport で `maximumScale: 1`（iOS の入力ズーム抑止）。インタラクティブ要素は最小 44px のタッチターゲットを確保。
- **角丸**: カード・ボタンは過度に丸めず、直線的で落ち着いた印象に。

---

## 8. 「バックエンド」と外部連携

本アプリに自前バックエンドは存在しない（DB / API Routes / Server Actions なし）。「バックエンド的責務」は次の 2 つに集約される。

1. **ビルド時のデータ確定**: `data/cafes.ts` を source of truth とし、`lib/cafes.ts` の関数で集計・抽出した結果を静的 HTML として書き出す。実行時のデータ取得は発生しない。
2. **外部サービスへの遷移**: Google Maps（経路・営業時間・写真・電話番号）と記事/SNS（雰囲気・おすすめポイント）への送客のみを担う。

### 外部リンクの遷移制御（`external-link.tsx`）

- 通常は `<a target="_blank" rel="noopener noreferrer">` で新規タブ遷移。
- v0 プレビュー等の **iframe 内（`window.self !== window.top`）** では、サンドボックス制約で通常遷移がブロックされることがあるため、`window.open(href, "_blank", "noopener,noreferrer")` でトップレベルの新規タブに確実に開く。
- これにより、開発プレビューでも実機でも一貫して外部ページへ遷移できる。

---

## 9. 将来の拡張方針

- **DB 移行**: 画面は `lib/cafes.ts` の関数経由でのみデータを参照しているため、関数の中身を DB クエリへ差し替えるだけで移行できる。型 `Cafe` とページ側は変更不要。
- **店舗追加**: `data/cafes.ts` の配列に追記するだけ。新しい駅は `getStations()` が自動で拾い、トップと駅ページに反映される。`id` 重複を避けること。
- **不変条件の維持**: 「クリック可能なのは Google Map と記事/SNS リンクだけ」「詳細・検索・ログイン等は作らない」という制約を、機能追加時にも崩さないこと。

---

## Built with v0

このリポジトリは [v0](https://v0.app) プロジェクトと連携しています。`main` へのマージで Vercel に自動デプロイされます。

[Continue working on v0 →](https://v0.app/chat/projects/prj_CIbLDqlOBO47j6lV5Vy5mHOjedDN)

## Getting Started

```bash
npm run dev
# or pnpm dev / yarn dev
```

[http://localhost:3000](http://localhost:3000) を開いて確認できます。
