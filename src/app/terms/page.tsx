import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'الشروط والأحكام',
  description: 'الشروط القانونية لاستخدام الموقع والمحتوى المعروض عليه.'
};

export default function TermsPage() {
  return (
    <PageShell title="الشروط والأحكام" eyebrow="السياسات" description="يرجى قراءة الشروط قبل استخدام الموقع أو التواصل من خلاله.">
      <div className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 text-sm leading-8 text-[color:var(--color-muted)] shadow-sm">
        <p>يُقدَّم المحتوى على الموقع لأغراض المعلومات العامة ويجب مراجعة التفاصيل الرسمية قبل اتخاذ أي قرار يتعلق بالسفر أو الحج أو العمرة.</p>
      </div>
    </PageShell>
  );
}
