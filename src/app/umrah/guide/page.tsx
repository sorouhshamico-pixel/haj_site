import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'دليل العمرة',
  description: 'محتوى مبسط يشرح رحلة العمرة والخطوات الأساسية قبل السفر.'
};

const steps = ['التحضير', 'الاستعدادات الأساسية', 'الانتقال إلى مكة', 'أداء العمرة بمراحل واضحة'];

export default function UmrahGuidePage() {
  return (
    <PageShell title="دليل العمرة" eyebrow="العمرة" description="صفحة موجهة لتوضيح رحلة العمرة بشكل مبسط ومفيد.">
      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <div key={step} className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm">
            <p className="text-sm font-semibold text-[color:var(--color-gold)]">الخطوة {index + 1}</p>
            <h2 className="mt-3 text-lg font-semibold text-[color:var(--color-primary)]">{step}</h2>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
