import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'الأوراق المطلوبة للحج',
  description: 'مراجعة مختصرة للأوراق والمستندات التي قد تحتاجها الرحلة.'
};

const documents = ['جواز سفر ساري', 'مستندات شخصية', 'معلومات الرحلة', 'مستندات إضافية بحسب الجهة'];

export default function HajjDocumentsPage() {
  return (
    <PageShell title="الأوراق المطلوبة للحج" eyebrow="الحج" description="صفحة توضح بوضوح العناصر الأساسية التي قد يحتاجها الحاج قبل السفر.">
      <div className="grid gap-4">
        {documents.map((item) => (
          <div key={item} className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm text-[color:var(--color-primary)]">
            {item}
          </div>
        ))}
      </div>
    </PageShell>
  );
}
