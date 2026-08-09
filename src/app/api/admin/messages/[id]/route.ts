import { NextResponse, type NextRequest } from 'next/server';
import { getSql, isDatabaseConfigured } from '@/lib/db';

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  if (!isDatabaseConfigured) {
    return NextResponse.json({ status: 'not_configured' }, { status: 503 });
  }

  const id = Number(params.id);
  if (!Number.isInteger(id)) {
    return NextResponse.json({ status: 'error', message: 'معرف غير صالح.' }, { status: 400 });
  }

  let body: { is_read?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ status: 'error', message: 'طلب غير صالح.' }, { status: 400 });
  }

  const sql = getSql();
  await sql`UPDATE contact_messages SET is_read = ${Boolean(body.is_read)} WHERE id = ${id}`;

  return NextResponse.json({ status: 'ok' });
}
