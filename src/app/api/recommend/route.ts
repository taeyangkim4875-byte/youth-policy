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

    const top = policies.slice(0, 15).map((p: any, i: number) => ({
      i,
      n: p.name,
      s: p.summary?.slice(0, 60),
      b: p.benefit?.slice(0, 40),
      c: p.category,
    }));

    const userDesc = [
      `만 ${new Date().getFullYear() - condition.birthYear}세`,
      condition.sido + (condition.sigungu ? ` ${condition.sigungu}` : ''),
      condition.employment,
      condition.incomePct < 999 ? `소득 중위${condition.incomePct}%이하` : '',
      condition.education || '',
      condition.married === true ? '기혼' : condition.married === false ? '미혼' : '',
      condition.homeless === true ? '무주택' : '',
      condition.interests?.length ? `관심:${condition.interests.join(',')}` : '',
    ].filter(Boolean).join(', ');

    const prompt = `You are a Korean youth policy expert. Pick the 5 best policies for this user. Output ONLY a JSON object, no other text.

User: ${userDesc}

Policies:
${JSON.stringify(top)}

JSON format:
{"picks":[{"idx":0,"reason":"한국어 추천이유","priority":"높음"},{"idx":1,"reason":"이유","priority":"보통"}],"tip":"한국어 조언 1문장"}

idx = "i" field. reason/tip in Korean. priority: "높음" or "보통". Pick up to 5.`;

    const MODELS = ['openai/gpt-oss-20b', 'qwen/qwen3.6-27b'];

    let raw = '';
    for (const model of MODELS) {
      try {
        const chat = await groq.chat.completions.create({
          model,
          messages: [
            { role: 'system', content: 'You output only valid JSON. No markdown fences, no thinking tags, no extra text.' },
            { role: 'user', content: prompt },
          ],
          temperature: 0.2,
          max_tokens: 800,
        });
        raw = chat.choices[0]?.message?.content || '';
        // <think> 제거
        raw = raw.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
        const jsonMatch = raw.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const result = JSON.parse(jsonMatch[0]);
          return NextResponse.json(result);
        }
      } catch (err) {
        console.error(`Model ${model} failed:`, err);
        continue;
      }
    }

    console.error('All models failed. Last raw:', raw.slice(0, 300));
    return NextResponse.json({ error: 'AI 응답 파싱 실패' }, { status: 500 });
  } catch (e: any) {
    console.error('Groq API error:', e);
    return NextResponse.json(
      { error: e.message || 'AI 추천 실패' },
      { status: 500 }
    );
  }
}
