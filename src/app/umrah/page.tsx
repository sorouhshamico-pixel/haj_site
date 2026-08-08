import Link from 'next/link';

export const metadata = {
  title: 'العمرة',
  description: 'صفحة عمرة موجهة للمسافرين من مصر، مع محتوى واضح حول الخطوات والوثائق والاستعداد.'
};

const sections = [
  { title: 'برامج العمرة', href: '/umrah/programs', text: 'تعرف على فئات برامج العمرة المتاحة وتواصل معنا لمعرفة المواعيد والأسعار.' },
  { title: 'الأوراق المطلوبة', href: '/umrah/documents', text: 'قائمة إرشادية بالمستندات التي يحتاجها المعتمر المصري قبل السفر.' },
  { title: 'مناسك العمرة', href: '/umrah/guide', text: 'دليل مرتب خطوة بخطوة لمناسك العمرة من الإحرام حتى الحلق أو التقصير.' },
  { title: 'الأسئلة الشائعة', href: '/faq', text: 'إجابات سريعة على أكثر الأسئلة تكرارًا حول الحج والعمرة.' }
];

export default function UmrahPage() {
  return (
    <main className="container-shell py-20">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold text-[color:var(--color-gold)]">العمرة</p>
        <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-primary)]">العمرة من مصر: معلومات عملية ومباشرة</h1>
        <p className="mt-6 text-lg leading-8 text-[color:var(--color-muted)]">
          يركز هذا القسم على توضيح خطوات العمرة، الاستعدادات اللازمة، والتفاصيل الأساسية التي يحتاجها المعتمر قبل السفر. يمكن أداء العمرة في أي وقت من العام، وتتكون من أربع خطوات رئيسية: الإحرام من الميقات، الطواف بالبيت، السعي بين الصفا والمروة، ثم الحلق أو التقصير.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
          >
            <h2 className="text-lg font-semibold text-[color:var(--color-primary)]">{section.title}</h2>
            <p className="mt-3 text-sm leading-8 text-[color:var(--color-muted)]">{section.text}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
