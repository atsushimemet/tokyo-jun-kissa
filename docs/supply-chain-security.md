# サプライチェーン攻撃対策

## サプライチェーン攻撃とは

npm レジストリに公開された悪意あるパッケージ（または正規パッケージの改ざん版）を
依存関係として引き込むことで、ビルド時・実行時に任意コードを実行される攻撃。
代表例：`event-stream` 事件（2018）、`ua-parser-js` ハイジャック（2021）

---

## 主対策：Takumi Guard（ブロックのみ・匿名利用）

[Takumi Guard](https://shisho.dev/docs/ja/t/guard/quickstart/npm/)（Flatt Security）は
npm レジストリのセキュリティプロキシ。すべてのパッケージインストールを
`https://npm.flatt.tech/` 経由にすることで、悪意あるパッケージを **403 でブロック**する。

トークン登録なしで利用可能。

### 設定（pnpm）

```bash
pnpm config set registry https://npm.flatt.tech/
```

または `.npmrc` に直接記載：

```ini
# .npmrc
registry=https://npm.flatt.tech/
```

### 動作確認

```bash
pnpm add @panda-guard/test-malicious
# → 403 Forbidden が返れば正常
```

### 解除方法

```bash
pnpm config delete registry
```

`.npmrc` に書いた場合は該当行を削除する。

---

## pnpm が持つ標準の防御（Takumi Guard と併用）

Takumi Guard は「既知の悪意あるパッケージ」をブロックする。
それに加えて pnpm 自体が持つ以下の機能で多層防御を構成する。

### sha512 整合性ハッシュ（ロックファイル）

`pnpm-lock.yaml` にはすべてのパッケージの sha512 ハッシュが記録される。
インストール時にレジストリのパッケージと照合し、**1ビットでも異なれば即エラー**。

```yaml
# pnpm-lock.yaml（抜粋）
clsx:
  resolution: {integrity: sha512-IdU...}
```

### `--frozen-lockfile`（CI 向け）

Vercel では `pnpm-lock.yaml` が存在する場合に **自動で frozen install が適用される**
ため、追加設定不要。ロックファイルの書き換えを禁止し、意図しない依存関係の
変化をブロックする。

---

## パッケージ追加時のチェックリスト

```bash
# 追加前：既知の脆弱性スキャン
pnpm audit

# 追加後：ロックファイルの差分を確認
git diff pnpm-lock.yaml
# → 意図していないパッケージが増えていないかを確認
```
