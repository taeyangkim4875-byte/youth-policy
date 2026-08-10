const YOUTH_API_URL = 'https://www.youthcenter.go.kr/go/ythip/getPlcy';
const API_KEY = process.argv[2];
const SUPABASE_URL = process.argv[3];
const SERVICE_KEY = process.argv[4];

function mapCategory(lclsf, mclsf) {
  const c = (lclsf || '') + ' ' + (mclsf || '');
  if (c.includes('주거') || c.includes('전세') || c.includes('월세') || c.includes('임대')) return '주거';
  if (c.includes('취업') || c.includes('일자리') || c.includes('채용') || c.includes('인턴') || c.includes('창업')) return '취업';
  if (c.includes('교육') || c.includes('학자금') || c.includes('훈련')) return '교육';
  if (c.includes('금융') || c.includes('저축') || c.includes('대출') || c.includes('자산')) return '금융·자산';
  if (c.includes('복지') || c.includes('문화') || c.includes('건강') || c.includes('심리') || c.includes('취약')) return '복지·문화';
  if (lclsf && lclsf.includes('일자리')) return '취업';
  if (lclsf && lclsf.includes('금융')) return '금융·자산';
  return '복지·문화';
}

function fmtDate(d) {
  if (!d) return null;
  const c = d.replace(/\s/g, '');
  return c.length === 8 ? c.slice(0, 4) + '-' + c.slice(4, 6) + '-' + c.slice(6, 8) : null;
}

function toPolicy(raw) {
  const aplyParts = (raw.aplyYmd || '').split('~').map(s => s.trim());
  const minAge = raw.sprtTrgtAgeLmtYn === 'Y' ? parseInt(raw.sprtTrgtMinAge) || null : null;
  const maxAge = raw.sprtTrgtAgeLmtYn === 'Y' ? parseInt(raw.sprtTrgtMaxAge) || null : null;
  return {
    api_id: raw.plcyNo,
    name: raw.plcyNm,
    summary: raw.plcyExplnCn || '',
    category: mapCategory(raw.lclsfNm, raw.mclsfNm),
    subcategory: raw.mclsfNm || null,
    min_age: minAge,
    max_age: maxAge,
    regions: [raw.rgtrHghrkInstCdNm || '전국'],
    income_pct: null,
    employment: [],
    housing_req: null,
    education: null,
    marriage: null,
    benefit: raw.plcySprtCn || '',
    how_to_apply: raw.plcyAplyMthdCn || null,
    apply_start: aplyParts[0] ? fmtDate(aplyParts[0]) : null,
    apply_end: aplyParts[1] ? fmtDate(aplyParts[1]) : null,
    apply_url: raw.aplyUrlAddr || raw.refUrlAddr1 || null,
    org_name: raw.operInstCdNm || raw.sprvsnInstCdNm || null,
    status: 'active',
    needs_review: true,
    raw_eligibility: [raw.addAplyQlfcCndCn, raw.ptcpPrpTrgtCn].filter(Boolean).join(' / ') || null,
    source_url: 'https://www.youthcenter.go.kr',
    fetched_at: new Date().toISOString(),
  };
}

async function run() {
  let page = 1;
  let totalFetched = 0;
  let totalOk = 0;
  let totalFail = 0;
  const pageSize = 100;

  while (true) {
    const params = new URLSearchParams({
      apiKeyNm: API_KEY,
      pageNum: String(page),
      pageSize: String(pageSize),
      rtnType: 'json',
    });
    const res = await fetch(YOUTH_API_URL + '?' + params);
    const data = await res.json();
    const policies = data.result?.youthPolicyList || [];
    const totCount = data.result?.pagging?.totCount || 0;

    if (policies.length === 0) break;
    totalFetched += policies.length;

    const bodies = policies.map(toPolicy);
    const r = await fetch(SUPABASE_URL + '/rest/v1/policies', {
      method: 'POST',
      headers: {
        'apikey': SERVICE_KEY,
        'Authorization': 'Bearer ' + SERVICE_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates',
      },
      body: JSON.stringify(bodies),
    });

    if (r.ok) {
      totalOk += policies.length;
    } else {
      totalFail += policies.length;
      const t = await r.text();
      console.log('BATCH FAIL page', page, ':', t.slice(0, 200));
    }

    console.log('Page', page, ':', policies.length, 'items. Total:', totalFetched, '/', totCount);

    if (totalFetched >= totCount || policies.length < pageSize) break;
    page++;
  }

  console.log('=== DONE ===');
  console.log('Total fetched:', totalFetched);
  console.log('OK:', totalOk, 'Failed:', totalFail);
}

run().catch(e => console.error(e));
