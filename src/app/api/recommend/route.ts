import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: NextRequest) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const { policies, condition } = await req.json();

    if (!policies || !condition) {
      return NextResponse.json({ error: 'Missing data' }, { status: 400 });
    }

    // 상위 20개만 Groq에 전달 (토큰 절약)
    const top = policies.slice(0, 20).map((p: any, i: number) => ({
      idx: i,
      name: p.name,
      summary: p.summary,
      benefit: p.benefit,
      category: p.category,
      org: p.org_name,
      apply_end: p.apply_end,
    }));

    const userDesc = [
      `만 ${new Date().getFullYear() - condition.birthYear}세`,
      condition.sido + (condition.sigungu ? ` ${condition.sigungu}` : ''),
      condition.employment,
      condition.incomePct < 999 ? `소득 중위${condition.incomePct}% 이하` : '',
      condition.education ? `학력: ${condition.education}` : '',
      condition.married === true ? '기혼' : condition.married === false ? '미혼' : '',
      condition.homeless === true ? '무주택' : '',
      condition.interests?.length ? `관심: ${condition.interests.join(', ')}` : '',
    ].filter(Boolean).join(', ');

    const prompt = `당신은 한국 청년정책 전문 상담사입니다. 사용자 조건과 정책 목록을 보고 가장 적합한 정책 5개를 추천해주세요.

사용자: ${userDesc}

정책 목록:
${JSON.stringify(top, null, 0)}

응답 형식 (JSON만, 다른 텍스트 없이):
{"picks":[{"idx":0,"reason":"추천 이유 1줄","priority":"높음|보통"},{"idx":1,"reason":"...","priority":"..."}],"tip":"전체적인 조언 1-2문장"}`;

    const chat = await groq.chat.completions.create({
      model: 'qwen/qwen3.6-27b',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 800,
      response_format: { type: 'json_object' },
    });

    const raw = chat.choices[0]?.message?.content || '{}';
    const result = JSON.parse(raw);

    return NextResponse.json(result);
  } catch (e: any) {
    console.error('Groq API error:', e);
    return NextResponse.json(
      { error: e.message || 'AI 추천 실패' },
      { status: 500 }
    );
  }
}
