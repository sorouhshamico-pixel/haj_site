import Link from 'next/link';

export const metadata = {
  title: 'الحج',
  description: 'دليل شامل للحج من مصر، يشمل المعلومات الأساسية والروابط الداخلية للخطوات والوثائق والاستعداد.'
};

const sections = [
  { title: 'برامج الحج', href: '/hajj/programs', text: 'تعرف على فئات برامج الحج المتاحة وتواصل معنا لمعرفة المواعيد والأسعار.' },
  { title: 'الأوراق المطلوبة', href: '/hajj/documents', text: 'قائمة إرشادية بالمستندات التي يحتاجها الحاج المصري قبل السفر.' },
  { title: 'مناسك الحج', href: '/hajj/guide', text: 'دليل مرتب خطوة بخطوة لمناسك الحج من الإحرام حتى طواف الوداع.' },
  { title: 'الأسئلة الشائعة', href: '/faq', text: 'إجابات سريعة على أكثر الأسئلة تكرارًا حول الحج والعمرة.' }
];

export default function HajjPage() {
  return (
    <main className="container-shell py-20">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold text-[color:var(--color-gold)]">الحج</p>
        <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-primary)]">الحج من مصر: دليل موثوق ومبسط</h1>
        <p className="mt-6 text-lg leading-8 text-[color:var(--color-muted)]">
          يهدف هذا القسم إلى توجيه الحاج من خلال المعلومات الأساسية حول البرامج، الخطوات، الوثائق، والاستعداد للسفر، بما يساعد على فهم الرحلة ومراحلها قبل البدء. رحلة الحج تمر بعدة مراحل أساسية: التسجيل مع جهة منظمة موثوقة، استكمال الأوراق والتطعيمات، ثم أداء المناسك بترتيبها الصحيح من الإحرام وحتى طواف الوداع.
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
