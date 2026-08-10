-- 청년정책 매칭 서비스 DB 스키마
-- Supabase SQL Editor에서 실행

CREATE TABLE IF NOT EXISTS policies (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  api_id         TEXT UNIQUE NOT NULL,
  name           TEXT NOT NULL,
  summary        TEXT NOT NULL DEFAULT '',
  category       TEXT NOT NULL DEFAULT '',
  subcategory    TEXT,

  -- AI 정규화 매칭 필드
  min_age        INT,
  max_age        INT,
  regions        TEXT[] DEFAULT '{}',
  income_pct     INT,
  employment     TEXT[] DEFAULT '{}',
  housing_req    TEXT,
  education      TEXT,
  marriage       TEXT,

  -- 표시용 필드
  benefit        TEXT NOT NULL DEFAULT '',
  how_to_apply   TEXT,
  apply_start    DATE,
  apply_end      DATE,
  apply_url      TEXT,
  org_name       TEXT,

  -- 메타
  status         TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'closed')),
  needs_review   BOOLEAN NOT NULL DEFAULT false,
  raw_eligibility TEXT,
  source_url     TEXT,
  fetched_at     TIMESTAMPTZ,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 매칭 쿼리 최적화 인덱스
CREATE INDEX IF NOT EXISTS idx_policies_status ON policies (status);
CREATE INDEX IF NOT EXISTS idx_policies_category ON policies (category);
CREATE INDEX IF NOT EXISTS idx_policies_regions ON policies USING GIN (regions);
CREATE INDEX IF NOT EXISTS idx_policies_age ON policies (min_age, max_age);
CREATE INDEX IF NOT EXISTS idx_policies_api_id ON policies (api_id);

-- RLS (Row Level Security) - 읽기 전용 공개
ALTER TABLE policies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "policies_read_all" ON policies
  FOR SELECT USING (true);

-- updated_at 자동 갱신 트리거
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_updated_at
  BEFORE UPDATE ON policies
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
