# パッケージマネージャーについて

## 結論：このプロジェクトは pnpm を使う

## 判断根拠

| 確認事項 | 状態 |
|---|---|
| `pnpm-lock.yaml` が存在する | ✅ |
| `package.json` に `"pnpm"` セクションがある | ✅ |
| `npm-lock.json` / `yarn.lock` は存在しない | ✅ |

ロックファイルはどのパッケージマネージャーで依存関係を管理しているかを示す唯一の情報源。
`pnpm-lock.yaml` が存在する以上、npm や yarn でインストールすると以下の問題が起きる。

- ロックファイルが競合・破損する（`pnpm-lock.yaml` と `package-lock.json` が混在）
- `node_modules` の構造が pnpm 独自のシンボリックリンク方式と異なるため挙動が変わる可能性がある

## コマンド対応表

| 操作 | pnpm | npm（非推奨） |
|---|---|---|
| パッケージ追加 | `pnpm add <pkg>` | `npm install <pkg>` |
| 開発依存追加 | `pnpm add -D <pkg>` | `npm install -D <pkg>` |
| 全依存インストール | `pnpm install` | `npm install` |
| スクリプト実行 | `pnpm dev` / `pnpm build` | `npm run dev` |

## pnpm が未インストールの場合

```bash
npm install -g pnpm
```
