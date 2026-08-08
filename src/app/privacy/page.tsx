import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'سياسة الخصوصية',
  description: 'تفاصيل سياسة الخصوصية والاستخدام للموقع.'
};

export default function PrivacyPage() {
  return (
    <PageShell title="سياسة الخصوصية" eyebrow="السياسات" description="نلتزم بحماية البيانات والخصوصية وفقًا لمبادئ الاستخدام الواضحة والشفافة.">
      <div className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 text-sm leading-8 text-[color:var(--color-muted)] shadow-sm">
        <p>يتم استخدام المعلومات التي تقدمها عبر النموذج فقط للأغراض المتصلة بالاستفسارات والردود المرسلة من خلال الموقع.</p>
      </div>
    </PageShell>
  );
}
