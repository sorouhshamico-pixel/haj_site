import { NextResponse, type NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getSql, isDatabaseConfigured } from '@/lib/db';

export async function POST(request: NextRequest) {
  if (!isDatabaseConfigured) {
    return NextResponse.json({ status: 'not_configured' }, { status: 503 });
  }

  let body: { question?: string; answer?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ status: 'error', message: 'طلب غير صالح.' }, { status: 400 });
  }

  const question = body.question?.trim();
  const answer = body.answer?.trim();
  if (!question || !answer) {
    return NextResponse.json({ status: 'error', message: 'السؤال والإجابة مطلوبان.' }, { status: 400 });
  }

  const sql = getSql();
  const rows = await sql`INSERT INTO faqs (question, answer) VALUES (${question}, ${answer}) RETURNING id, question, answer`;

  revalidatePath('/faq');
  revalidatePath('/');

  return NextResponse.json({ status: 'ok', faq: rows[0] });
}
