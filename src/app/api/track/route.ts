import { NextResponse, type NextRequest } from 'next/server';
import { getSql, isDatabaseConfigured } from '@/lib/db';

export async function POST(request: NextRequest) {
  if (!isDatabaseConfigured) {
    return NextResponse.json({ status: 'not_configured' });
  }

  let body: { path?: string; referrer?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ status: 'error' }, { status: 400 });
  }

  const path = typeof body.path === 'string' ? body.path.slice(0, 300) : null;
  if (!path || !path.startsWith('/') || path.startsWith('/admin')) {
    return NextResponse.json({ status: 'error' }, { status: 400 });
  }
  const referrer = typeof body.referrer === 'string' ? body.referrer.slice(0, 300) : null;

  const sql = getSql();
  await sql`INSERT INTO page_views (path, referrer) VALUES (${path}, ${referrer})`;

  return NextResponse.json({ status: 'ok' });
}
