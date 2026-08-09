import { NextRequest, NextResponse } from 'next/server';
import { getSql, isDatabaseConfigured } from '@/lib/db';

type ContactPayload = {
  name: string;
  phone: string;
  email?: string;
  message: string;
};

function isValidPayload(value: unknown): value is ContactPayload {
  if (!value || typeof value !== 'object') return false;
  const payload = value as Record<string, unknown>;
  return (
    typeof payload.name === 'string' &&
    payload.name.trim().length > 0 &&
    typeof payload.phone === 'string' &&
    payload.phone.trim().length > 0 &&
    typeof payload.message === 'string' &&
    payload.message.trim().length > 0
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { status: 'invalid', message: 'يرجى تعبئة الاسم ورقم الهاتف والرسالة.' },
      { status: 400 }
    );
  }

  if (!isDatabaseConfigured) {
    return NextResponse.json(
      {
        status: 'not_configured',
        message: 'خدمة الإرسال المباشر قيد الإعداد حاليًا ولم تُفعّل بعد. لم يتم إرسال رسالتك.'
      },
      { status: 503 }
    );
  }

  const sql = getSql();
  await sql`
    INSERT INTO contact_messages (name, phone, email, message)
    VALUES (${body.name.trim()}, ${body.phone.trim()}, ${body.email?.trim() || null}, ${body.message.trim()})
  `;

  return NextResponse.json({ status: 'sent', message: 'تم إرسال رسالتك بنجاح، سنتواصل معك قريبًا.' });
}
