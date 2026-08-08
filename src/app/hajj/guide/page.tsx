import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'دليل الحج',
  description: 'دليل واضح ومبسط لخطوات الحج ومراحل الرحلة قبل السفر.'
};

const steps = [
  'التحضير قبل السفر',
  'التسجيل والاستعدادات الأساسية',
  'الانتقال إلى الأراضي المقدسة',
  'الالتزام بالخطوات المنظمة خلال الرحلة'
];

export default function HajjGuidePage() {
  return (
    <PageShell title="دليل الحج" eyebrow="الحج" description="محتوى مختصر ومبسط يشرح الفكرة العامة لرحلة الحج ويعزز التصفح الداخلي.">
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
