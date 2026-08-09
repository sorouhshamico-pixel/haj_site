import { getSql, isDatabaseConfigured } from '@/lib/db';
import MessagesList from '@/components/admin/MessagesList';

export const dynamic = 'force-dynamic';

type ContactMessage = {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
};

export default async function AdminMessagesPage() {
  if (!isDatabaseConfigured) {
    return (
      <div className="rounded-[1.25rem] border border-[color:var(--color-gold-soft)] bg-[color:var(--color-ivory)] p-6 text-sm leading-8 text-[color:var(--color-primary-dark)]">
        قاعدة البيانات غير مُعدّة بعد، فرسائل نموذج التواصل مش بتتحفظ حاليًا. راجع{' '}
        <code className="rounded bg-white/60 px-1.5 py-0.5">docs/ADMIN-SETUP.md</code> لخطوات الإعداد.
      </div>
    );
  }

  const sql = getSql();
  const messages = (await sql`
    SELECT id, name, phone, email, message, is_read, created_at
    FROM contact_messages
    ORDER BY created_at DESC
  `) as unknown as ContactMessage[];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[color:var(--color-primary)]">رسائل التواصل</h1>
          <p className="mt-1 text-sm text-[color:var(--color-muted)]">
            {messages.length} رسالة، منها {messages.filter((m) => !m.is_read).length} غير مقروءة
          </p>
        </div>
      </div>

      <MessagesList initialMessages={messages} />
    </div>
  );
}
