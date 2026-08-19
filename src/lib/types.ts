export interface Policy {
  id: string;
  api_id: string;
  name: string;
  summary: string;
  category: string;
  subcategory: string | null;
  min_age: number | null;
  max_age: number | null;
  regions: string[] | null;
  income_pct: number | null;
  employment: string[] | null;
  housing_req: string | null;
  education: string | null;
  marriage: string | null;
  benefit: string;
  benefit_monthly?: number | null;
  benefit_total?: number | null;
  benefit_duration?: number | null;
  benefit_type?: string | null;
  benefit_unknown?: boolean;
  how_to_apply: string | null;
  apply_start: string | null;
  apply_end: string | null;
  apply_url: string | null;
  org_name: string | null;
  status: 'active' | 'closed';
  needs_review: boolean;
  raw_eligibility: string | null;
  source_url: string | null;
  fetched_at: string;
  created_at: string;
  updated_at: string;
}

export interface UserCondition {
  birthYear: number;
  sido: string;
  sigungu: string;
  employment: string;
  incomePct: number;
  education?: string;
  married?: boolean;
  homeless?: boolean;
  category?: string;
  interests?: string[];
}
