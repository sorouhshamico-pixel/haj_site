import { NextResponse, type NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import { createSession } from '@/lib/auth';
import { isRateLimited, resetRateLimit } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { status: 'error', message: 'محاولات كثيرة جدًا، حاول مرة أخرى بعد قليل.' },
      { status: 429 }
    );
  }

  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminUsername || !adminPasswordHash || !process.env.SESSION_SECRET) {
    return NextResponse.json(
      { status: 'not_configured', message: 'لوحة التحكم غير مُعدّة بعد. راجع docs/ADMIN-SETUP.md.' },
      { status: 503 }
    );
  }

  let body: { username?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ status: 'error', message: 'طلب غير صالح.' }, { status: 400 });
  }

  const { username, password } = body;
  if (!username || !password) {
    return NextResponse.json({ status: 'error', message: 'من فضلك أدخل اسم المستخدم وكلمة المرور.' }, { status: 400 });
  }

  const isUsernameValid = username === adminUsername;
  const isPasswordValid = await bcrypt.compare(password, adminPasswordHash);

  if (!isUsernameValid || !isPasswordValid) {
    return NextResponse.json({ status: 'error', message: 'اسم المستخدم أو كلمة المرور غير صحيحة.' }, { status: 401 });
  }

  resetRateLimit(ip);
  await createSession();
  return NextResponse.json({ status: 'ok' });
}
