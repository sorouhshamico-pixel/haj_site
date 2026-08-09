import { getFaqs } from '@/lib/faqs';
import { isDatabaseConfigured } from '@/lib/db';
import FaqManager from '@/components/admin/FaqManager';

export const dynamic = 'force-dynamic';

export default async function AdminFaqsPage() {
  if (!isDatabaseConfigured) {
    return (
      <div className="rounded-[1.25rem] border border-[color:var(--color-gold-soft)] bg-[color:var(--color-ivory)] p-6 text-sm leading-8 text-[color:var(--color-primary-dark)]">
        قاعدة البيانات غير مُعدّة بعد. راجع <code className="rounded bg-white/60 px-1.5 py-0.5">docs/ADMIN-SETUP.md</code>.
      </div>
    );
  }

  const faqs = await getFaqs();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-[color:var(--color-primary)]">الأسئلة الشائعة</h1>
      <p className="mt-1 text-sm text-[color:var(--color-muted)]">
        التعديلات هنا تظهر مباشرة في صفحة الأسئلة الشائعة والصفحة الرئيسية بالموقع.
      </p>
      <FaqManager initialFaqs={faqs} />
    </div>
  );
}
