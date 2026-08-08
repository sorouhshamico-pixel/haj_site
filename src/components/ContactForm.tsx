'use client';

import { useState, type FormEvent } from 'react';
import { isFormDeliveryConfigured } from '@/lib/site-config';

type SubmitState = 'idle' | 'submitting' | 'sent' | 'not_configured' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<SubmitState>('idle');
  const [feedback, setFeedback] = useState<string>('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('submitting');

    const form = event.currentTarget;
    const payload = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();

      if (response.ok && data.status === 'sent') {
        setState('sent');
        setFeedback(data.message ?? 'تم إرسال رسالتك بنجاح، سنتواصل معك قريبًا.');
        form.reset();
      } else if (data.status === 'not_configured') {
        setState('not_configured');
        setFeedback(data.message ?? 'خدمة الإرسال المباشر قيد الإعداد حاليًا.');
      } else {
        setState('error');
        setFeedback(data.message ?? 'حدث خطأ أثناء إرسال النموذج، يرجى المحاولة لاحقًا.');
      }
    } catch {
      setState('error');
      setFeedback('تعذر الاتصال بالخادم، يرجى المحاولة لاحقًا.');
    }
  }

  return (
    <div className="rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-sm">
      {!isFormDeliveryConfigured ? (
        <div className="mb-6 rounded-xl border border-[color:var(--color-gold-soft)] bg-[color:var(--color-ivory)] px-4 py-3 text-sm leading-7 text-[color:var(--color-primary-dark)]">
          نعمل حاليًا على تفعيل الإرسال المباشر لهذا النموذج. للرد السريع يمكنكم الاتصال بنا مباشرة على الأرقام الموضحة بجانب النموذج.
        </div>
      ) : null}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[color:var(--color-text)]">الاسم</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3"
            placeholder="الاسم بالكامل"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[color:var(--color-text)]">رقم الهاتف</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3"
            placeholder="01xxxxxxxxx"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[color:var(--color-text)]">البريد الإلكتروني</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3"
            placeholder="example@email.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[color:var(--color-text)]">الرسالة</label>
          <textarea
            id="message"
            name="message"
            required
            className="min-h-32 w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3"
            placeholder="اكتب استفسارك هنا"
          />
        </div>

        <button
          type="submit"
          disabled={state === 'submitting'}
          className="rounded-full bg-[color:var(--color-primary)] px-6 py-3 font-semibold text-white transition hover:bg-[color:var(--color-primary-dark)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === 'submitting' ? 'جارٍ الإرسال...' : 'إرسال الاستفسار'}
        </button>

        {feedback ? (
          <p
            role="status"
            className={
              state === 'sent'
                ? 'text-sm font-medium text-[color:var(--color-primary)]'
                : 'text-sm font-medium text-[color:var(--color-gold)]'
            }
          >
            {feedback}
          </p>
        ) : null}
      </form>
    </div>
  );
}
