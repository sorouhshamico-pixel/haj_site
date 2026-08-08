import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'الأسئلة الشائعة',
  description: 'إجابات واضحة حول الحج والعمرة والاستعداد قبل الرحلة.'
};

const faqs = [
  {
    question: 'ما هي الأوراق المطلوبة للحج أو العمرة؟',
    answer: 'تعتمد المستندات المطلوبة على نوع الرحلة والجهة المعنية. يُفضّل مراجعة الصفحة المخصصة لكل موضوع قبل التقديم.'
  },
  {
    question: 'كيف أبدأ الاستعداد للسفر؟',
    answer: 'يمكن البدء من خلال الاطلاع على دليل الاستعداد والنصائح قبل السفر ومراجعة المعلومات الأساسية الخاصة بالرحلة.'
  },
  {
    question: 'هل توجد معلومات عن مناسك الحج والعمرة؟',
    answer: 'نعم، يتم تنظيم المحتوى في صفحات مخصصة لتسهيل التصفح وفهم الخطوات بشكل واضح.'
  }
];

export default function FaqPage() {
  return (
    <PageShell title="الأسئلة الشائعة" eyebrow="FAQ" description="إجابات مبسطة ومركزة على الأسئلة الأكثر شيوعًا حول الحج والعمرة.">
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[color:var(--color-primary)]">{faq.question}</h2>
            <p className="mt-3 text-sm leading-8 text-[color:var(--color-muted)]">{faq.answer}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
