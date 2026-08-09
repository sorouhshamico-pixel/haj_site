import { NextResponse, type NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getSql, isDatabaseConfigured } from '@/lib/db';

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  if (!isDatabaseConfigured) {
    return NextResponse.json({ status: 'not_configured' }, { status: 503 });
  }

  const id = Number(params.id);
  if (!Number.isInteger(id)) {
    return NextResponse.json({ status: 'error', message: 'معرف غير صالح.' }, { status: 400 });
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
  await sql`UPDATE faqs SET question = ${question}, answer = ${answer} WHERE id = ${id}`;

  revalidatePath('/faq');
  revalidatePath('/');

  return NextResponse.json({ status: 'ok' });
}

export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  if (!isDatabaseConfigured) {
    return NextResponse.json({ status: 'not_configured' }, { status: 503 });
  }

  const id = Number(params.id);
  if (!Number.isInteger(id)) {
    return NextResponse.json({ status: 'error', message: 'معرف غير صالح.' }, { status: 400 });
  }

  const sql = getSql();
  await sql`DELETE FROM faqs WHERE id = ${id}`;

  revalidatePath('/faq');
  revalidatePath('/');

  return NextResponse.json({ status: 'ok' });
}
