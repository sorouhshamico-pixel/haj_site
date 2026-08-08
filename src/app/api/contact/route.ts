import { NextRequest, NextResponse } from 'next/server';
import { isFormDeliveryConfigured } from '@/lib/site-config';

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

  if (!isFormDeliveryConfigured) {
    return NextResponse.json(
      {
        status: 'not_configured',
        message: 'خدمة الإرسال المباشر قيد الإعداد حاليًا ولم تُفعّل بعد. لم يتم إرسال رسالتك.'
      },
      { status: 503 }
    );
  }

  // TODO: once siteConfig.email is filled in with a real address and an
  // email provider is wired up here (or a confirmed WhatsApp Business API
  // integration exists), deliver the message and return { status: 'sent' }
  // only after confirmed successful delivery. Until that code exists, keep
  // returning 'not_configured' below — never report success without it.
  return NextResponse.json(
    { status: 'not_configured', message: 'خدمة الإرسال المباشر قيد الإعداد حاليًا ولم تُفعّل بعد. لم يتم إرسال رسالتك.' },
    { status: 503 }
  );
}
