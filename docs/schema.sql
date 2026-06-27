-- ============================================================
-- 東京純喫茶 Supabase スキーマ定義
-- Supabase ダッシュボード > SQL Editor で実行する
-- ============================================================

-- ------------------------------------------------------------
-- 1. cafes テーブル
-- ------------------------------------------------------------
CREATE TABLE cafes (
  id                   text        PRIMARY KEY,
  name                 text        NOT NULL,
  station              text        NOT NULL,
  station_slug         text        NOT NULL,
  google_map_url       text        NOT NULL,
  recommendation_links jsonb       NOT NULL DEFAULT '[]',
  created_at           timestamptz NOT NULL DEFAULT now(),
  updated_at           timestamptz NOT NULL DEFAULT now()
);

-- station_slug でのフィルタリング高速化
CREATE INDEX idx_cafes_station_slug ON cafes (station_slug);

-- ------------------------------------------------------------
-- 2. updated_at 自動更新トリガー
-- ------------------------------------------------------------
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

-- ------------------------------------------------------------
-- 3. Row Level Security (RLS)
-- ------------------------------------------------------------
ALTER TABLE cafes ENABLE ROW LEVEL SECURITY;

-- ロールへのアクセス権限付与（RLS ポリシーとは別に必要）
GRANT SELECT ON public.cafes TO anon;
GRANT ALL ON public.cafes TO authenticated;

-- 誰でも読み取り可能（公開ページ用）
CREATE POLICY "cafes_public_read"
  ON cafes
  FOR SELECT
  USING (true);

-- 認証済みユーザー（管理者）のみ INSERT / UPDATE / DELETE 可能
CREATE POLICY "cafes_admin_insert"
  ON cafes
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "cafes_admin_update"
  ON cafes
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "cafes_admin_delete"
  ON cafes
  FOR DELETE
  TO authenticated
  USING (true);
