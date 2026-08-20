import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Supabase env vars not set');
  return createClient(url, key);
}

const YOUTH_API_URL = 'https://www.youthcenter.go.kr/go/ythip/getPlcy';
const YOUTH_API_KEY = process.env.YOUTH_API_KEY || '';
const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY || '';
const BATCH_SECRET = process.env.BATCH_SECRET || '';

interface YouthPolicyRaw {
  plcyNo: string;
  plcyNm: string;
  plcyExplnCn: string;
  plcySprtCn: string;
  plcyAplyMthdCn: string;
  aplyUrlAddr: string;
  refUrlAddr1: string;
  refUrlAddr2: string;
  sprvsnInstCdNm: string;
  operInstCdNm: string;
  lclsfNm: string;
  mclsfNm: string;
  sprtTrgtMinAge: string;
  sprtTrgtMaxAge: string;
  sprtTrgtAgeLmtYn: string;
  mrgSttsCd: string;
  earnCndSeCd: string;
  earnMinAmt: string;
  earnMaxAmt: string;
  earnEtcCn: string;
  addAplyQlfcCndCn: string;
  ptcpPrpTrgtCn: string;
  aplyYmd: string;
  bizPrdBgngYmd: string;
  bizPrdEndYmd: string;
  bizPrdEtcCn: string;
  sprtSclCnt: string;
  sprtArvlSeqYn: string;
  srngMthdCn: string;
  sbmsnDcmntCn: string;
  etcMttrCn: string;
  rgtrInstCdNm: string;
  rgtrUpInstCdNm: string;
  rgtrHghrkInstCdNm: string;
  zipCd: string;
  frstRegDt: string;
  lastMdfcnDt: string;
}

// 온통청년 API에서 정책 리스트 가져오기
async function fetchPoliciesFromApi(page: number = 1, pageSize: number = 100): Promise<{ policies: YouthPolicyRaw[]; totalCount: number }> {
  const params = new URLSearchParams({
    apiKeyNm: YOUTH_API_KEY,
    pageNum: String(page),
    pageSize: String(pageSize),
    rtnType: 'json',
  });

  const res = await fetch(`${YOUTH_API_URL}?${params}`);

  if (!res.ok) {
    throw new Error(`Youth API error: ${res.status}`);
  }

  const data = await res.json();

  if (data.resultCode !== 200) {
    throw new Error(`Youth API error: ${data.resultMessage}`);
  }

  return {
    policies: data.result?.youthPolicyList || [],
    totalCount: data.result?.pagging?.totCount || 0,
  };
}

// 대분류 → 카테고리 매핑
function mapCategory(lclsfNm: string): string {
  if (lclsfNm.includes('주거')) return '주거';
  if (lclsfNm.includes('일자리')) return '취업';
  if (lclsfNm.includes('교육')) return '교육';
  if (lclsfNm.includes('금융') || lclsfNm.includes('복지') || lclsfNm.includes('문화')) return '복지·문화';
  return '기타';
}

// 중분류로 더 정밀한 카테고리 매핑
function mapCategoryPrecise(lclsfNm: string, mclsfNm: string): string {
  const combined = `${lclsfNm} ${mclsfNm}`;
  if (combined.includes('주거') || combined.includes('전세') || combined.includes('월세') || combined.includes('임대')) return '주거';
  if (combined.includes('취업') || combined.includes('일자리') || combined.includes('채용') || combined.includes('인턴')) return '취업';
  if (combined.includes('교육') || combined.includes('학자금') || combined.includes('훈련')) return '교육';
  if (combined.includes('금융') || combined.includes('저축') || combined.includes('대출') || combined.includes('자산')) return '금융·자산';
  if (combined.includes('복지') || combined.includes('문화') || combined.includes('건강') || combined.includes('심리')) return '복지·문화';
  return mapCategory(lclsfNm);
}

// 신청기간 파싱 (예: "20260812 ~ 20260814")
function parseApplyDates(aplyYmd: string): { start: string | null; end: string | null } {
  if (!aplyYmd || !aplyYmd.trim()) return { start: null, end: null };

  const parts = aplyYmd.split('~').map((s) => s.trim());
  const formatDate = (d: string) => {
    const clean = d.replace(/\s/g, '');
    if (clean.length !== 8) return null;
    return `${clean.slice(0, 4)}-${clean.slice(4, 6)}-${clean.slice(6, 8)}`;
  };

  return {
    start: parts[0] ? formatDate(parts[0]) : null,
    end: parts[1] ? formatDate(parts[1]) : null,
  };
}

// 지역 추출 (기관명에서)
function extractRegions(raw: YouthPolicyRaw): string[] {
  const instName = raw.rgtrHghrkInstCdNm || raw.sprvsnInstCdNm || '';
  const regions: string[] = [];

  const REGION_MAP: Record<string, string> = {
    '서울': '서울특별시', '부산': '부산광역시', '대구': '대구광역시',
    '인천': '인천광역시', '광주': '광주광역시', '대전': '대전광역시',
    '울산': '울산광역시', '세종': '세종특별자치시', '경기': '경기도',
    '강원': '강원특별자치도', '충북': '충청북도', '충남': '충청남도',
    '전북': '전북특별자치도', '전남': '전라남도', '경북': '경상북도',
    '경남': '경상남도', '제주': '제주특별자치도',
    '전남광주': '전남광주통합특별시',
  };

  for (const [key, value] of Object.entries(REGION_MAP)) {
    if (instName.includes(key)) {
      regions.push(value);
      break;
    }
  }

  // 중앙부처 등은 전국
  if (regions.length === 0) {
    const centralOrgs = ['고용노동부', '중소벤처기업부', '국토교통부', '금융위원회', '서민금융진흥원', '한국장학재단'];
    if (centralOrgs.some((o) => instName.includes(o))) {
      regions.push('전국');
    }
  }

  return regions.length > 0 ? regions : ['전국'];
}

// Claude API로 자격요건 정규화 (선택적)
async function normalizeWithClaude(raw: YouthPolicyRaw) {
  if (!CLAUDE_API_KEY) return null;

  const prompt = `아래 청년정책 정보를 분석해서 JSON으로 변환해줘.

정책명: ${raw.plcyNm}
대분류: ${raw.lclsfNm} / 중분류: ${raw.mclsfNm}
지원내용: ${raw.plcySprtCn}
자격조건: ${raw.addAplyQlfcCndCn}
참여제한: ${raw.ptcpPrpTrgtCn}
소득조건코드: ${raw.earnCndSeCd} (최소: ${raw.earnMinAmt}, 최대: ${raw.earnMaxAmt}, 기타: ${raw.earnEtcCn})

아래 JSON 형식으로만 응답해. 확실하지 않은 필드는 null로:
{
  "income_pct": number | null,
  "employment": string[] | null,
  "housing_req": string | null,
  "education": string | null,
  "subcategory": string | null,
  "needs_review": boolean
}`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 300,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!res.ok) return null;

    const data = await res.json();
    const text = data.content?.[0]?.text || '';
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return null;

    return JSON.parse(jsonMatch[0]);
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  if (secret !== BATCH_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabaseAdmin = getSupabaseAdmin();

  try {
    let allPolicies: YouthPolicyRaw[] = [];
    let page = 1;
    const pageSize = 100;
    const maxPages = 30; // 2700건 / 100 = 27페이지

    while (page <= maxPages) {
      const { policies, totalCount } = await fetchPoliciesFromApi(page, pageSize);
      if (policies.length === 0) break;
      allPolicies = allPolicies.concat(policies);
      if (allPolicies.length >= totalCount || policies.length < pageSize) break;
      page++;
    }

    let upserted = 0;
    let failed = 0;

    for (const raw of allPolicies) {
      try {
        const category = mapCategoryPrecise(raw.lclsfNm, raw.mclsfNm);
        const dates = parseApplyDates(raw.aplyYmd);
        const regions = extractRegions(raw);
        const minAge = raw.sprtTrgtAgeLmtYn === 'Y' ? parseInt(raw.sprtTrgtMinAge) || null : null;
        const maxAge = raw.sprtTrgtAgeLmtYn === 'Y' ? parseInt(raw.sprtTrgtMaxAge) || null : null;

        // Claude 정규화 (API 키가 있을 때만)
        const normalized = await normalizeWithClaude(raw);

        const policyData = {
          api_id: raw.plcyNo,
          name: raw.plcyNm,
          summary: raw.plcyExplnCn || '',
          category,
          subcategory: normalized?.subcategory || raw.mclsfNm || null,
          min_age: minAge,
          max_age: maxAge,
          regions,
          income_pct: normalized?.income_pct ?? null,
          employment: normalized?.employment ?? [],
          housing_req: normalized?.housing_req ?? null,
          education: normalized?.education ?? null,
          marriage: null,
          benefit: raw.plcySprtCn || '',
          how_to_apply: raw.plcyAplyMthdCn || null,
          apply_start: dates.start,
          apply_end: dates.end,
          apply_url: raw.aplyUrlAddr || raw.refUrlAddr1 || null,
          org_name: raw.operInstCdNm || raw.sprvsnInstCdNm || null,
          status: 'active' as const,
          needs_review: normalized?.needs_review ?? true,
          raw_eligibility: [
            raw.addAplyQlfcCndCn,
            raw.ptcpPrpTrgtCn,
            raw.earnEtcCn,
          ].filter(Boolean).join(' / ') || null,
          source_url: 'https://www.youthcenter.go.kr',
          fetched_at: new Date().toISOString(),
        };

        const { error } = await supabaseAdmin
          .from('policies')
          .upsert(policyData, { onConflict: 'api_id' });

        if (error) {
          console.error('Upsert error:', raw.plcyNo, error);
          failed++;
        } else {
          upserted++;
        }
      } catch (e) {
        console.error('Processing error:', raw.plcyNo, e);
        failed++;
      }
    }

    // ── 마감된 정책 status → 'closed' 처리 ──
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
    const { data: expiredRows, error: expErr } = await supabaseAdmin
      .from('policies')
      .update({ status: 'closed' })
      .eq('status', 'active')
      .lt('apply_end', today)
      .not('apply_end', 'is', null)
      .select('id');
    const expiredCount = expiredRows?.length ?? 0;
    if (expErr) console.error('Expire update error:', expErr);

    // ── API에서 사라진 정책 status → 'closed' 처리 ──
    const fetchedApiIds = allPolicies.map((p) => p.plcyNo);
    let orphanedCount = 0;
    if (fetchedApiIds.length > 0) {
      const { data: activeInDb } = await supabaseAdmin
        .from('policies')
        .select('id, api_id')
        .eq('status', 'active');

      if (activeInDb) {
        const orphaned = activeInDb.filter((row) => !fetchedApiIds.includes(row.api_id));
        if (orphaned.length > 0) {
          const orphanIds = orphaned.map((r) => r.id);
          const { error: orphErr } = await supabaseAdmin
            .from('policies')
            .update({ status: 'closed' })
            .in('id', orphanIds);
          if (orphErr) console.error('Orphan update error:', orphErr);
          orphanedCount = orphaned.length;
        }
      }
    }

    return NextResponse.json({
      success: true,
      fetched: allPolicies.length,
      upserted,
      failed,
      expired: expiredCount,
      orphaned: orphanedCount,
      timestamp: new Date().toISOString(),
    });
  } catch (e) {
    console.error('Batch error:', e);
    return NextResponse.json(
      { error: 'Batch failed', message: String(e) },
      { status: 500 }
    );
  }
}
