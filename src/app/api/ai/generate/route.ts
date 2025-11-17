import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prompt, platform, tone } = await request.json();
    await new Promise(resolve => setTimeout(resolve, 1500));
    const content = "Conteúdo para " + platform + " com tom " + tone + ": " + prompt;
    return NextResponse.json({ content: content });
  } catch (error) {
    return NextResponse.json({ error: 'Falha na geração' }, { status: 500 });
  }
}
