import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'سياسة الإلغاء والاسترداد',
  description: 'معلومات عامة حول سياسة الإلغاء والاسترداد المتعلقة بالاستفسارات والخدمات.',
  alternates: { canonical: '/cancellation' }
};

export default function CancellationPage() {
  return (
    <PageShell title="سياسة الإلغاء والاسترداد" eyebrow="السياسات" description="يتم توضيح المبادئ العامة المتعلقة بالإلغاء والاسترداد عند وجود خدمات أو برامج معلنة لاحقًا.">
      <div className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 text-sm leading-8 text-[color:var(--color-muted)] shadow-sm">
        <p>يرجى مراجعة التفاصيل الرسمية قبل أي طلب أو حجز، لأن سياسات الإلغاء قد تختلف بحسب البرنامج والجهة المعنية.</p>
      </div>
    </PageShell>
  );
}
