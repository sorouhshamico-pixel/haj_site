import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'الأوراق المطلوبة للعمرة',
  description: 'معلومات مختصرة حول المستندات الأساسية للعمرة.'
};

const documents = ['جواز سفر', 'مستندات شخصية', 'معلومات السفر', 'مستندات إضافية حسب الجهة'];

export default function UmrahDocumentsPage() {
  return (
    <PageShell title="الأوراق المطلوبة للعمرة" eyebrow="العمرة" description="صفحة مبسطة لعرض مستندات العمرة الأساسية قبل السفر.">
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
