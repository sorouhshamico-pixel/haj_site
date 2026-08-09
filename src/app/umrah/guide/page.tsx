import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { breadcrumbJsonLd } from '@/lib/breadcrumbs';
import { buildMetadata } from '@/lib/metadata';

const breadcrumbs = breadcrumbJsonLd([
  { name: 'الرئيسية', path: '/' },
  { name: 'العمرة', path: '/umrah' },
  { name: 'دليل مناسك العمرة', path: '/umrah/guide' }
]);

export const metadata = buildMetadata({
  title: 'دليل مناسك العمرة خطوة بخطوة',
  description: 'دليل شامل لمناسك العمرة بالترتيب: الإحرام، الطواف، السعي بين الصفا والمروة، والحلق أو التقصير، بشرح مبسط للمعتمر القادم من مصر.',
  path: '/umrah/guide',
  image: '/images/sections/umrah-guide-prophets-mosque.jpg'
});

const rituals = [
  {
    title: 'الإحرام من الميقات',
    text: 'يبدأ المعتمر إحرامه من الميقات المحدد بحسب خط رحلته، بنية العمرة ولبس ملابس الإحرام، مع الإكثار من التلبية حتى الوصول إلى مكة المكرمة.'
  },
  {
    title: 'الطواف بالبيت',
    text: 'عند الوصول إلى المسجد الحرام، يبدأ المعتمر بطواف سبعة أشواط حول الكعبة المشرفة، ابتداءً من الحجر الأسود.'
  },
  {
    title: 'صلاة ركعتين خلف مقام إبراهيم',
    text: 'بعد إتمام الطواف يُستحب صلاة ركعتين خلف مقام إبراهيم إن أمكن، أو في أي مكان مناسب من المسجد الحرام.'
  },
  {
    title: 'السعي بين الصفا والمروة',
    text: 'يؤدي المعتمر سبعة أشواط بين جبلي الصفا والمروة، بدءًا من الصفا وانتهاءً بالمروة.'
  },
  {
    title: 'الحلق أو التقصير',
    text: 'يختم المعتمر عمرته بحلق شعر رأسه أو تقصيره، وبذلك يتم التحلل من الإحرام وتكتمل مناسك العمرة.'
  }
];

export default function UmrahGuidePage() {
  return (
    <PageShell
      title="دليل مناسك العمرة خطوة بخطوة"
      eyebrow="دليل العمرة"
      description="ترتيب مبسط لمناسك العمرة من الإحرام حتى الحلق أو التقصير، ليكون مرجعًا سريعًا للمعتمر قبل السفر وأثناء الأداء."
      image={{ src: '/images/sections/umrah-guide-prophets-mosque.jpg', alt: 'معتمرون في ساحات المسجد النبوي الشريف نهارًا' }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="space-y-5">
        {rituals.map((step, index) => (
          <div key={step.title} className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-primary)] text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h2 className="text-lg font-semibold text-[color:var(--color-primary)]">{step.title}</h2>
            </div>
            <p className="mt-3 text-sm leading-8 text-[color:var(--color-muted)]">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-ivory)] p-6 text-sm leading-8 text-[color:var(--color-muted)]">
        هذا الدليل للتعريف العام بترتيب مناسك العمرة، ولا يغني عن استشارة أهل العلم أو المرشدين المرافقين بخصوص التفاصيل الفقهية والحالات الخاصة.
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/umrah/documents" className="rounded-full bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[color:var(--color-primary-dark)]">
          الأوراق المطلوبة للعمرة
        </Link>
        <Link href="/umrah/programs" className="rounded-full border border-[color:var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-primary)] transition hover:bg-[color:var(--color-ivory)]">
          استعرض برامج العمرة
        </Link>
      </div>
    </PageShell>
  );
}
