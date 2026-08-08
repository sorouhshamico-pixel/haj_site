import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { breadcrumbJsonLd } from '@/lib/breadcrumbs';

const breadcrumbs = breadcrumbJsonLd([
  { name: 'الرئيسية', path: '/' },
  { name: 'الحج', path: '/hajj' },
  { name: 'دليل مناسك الحج', path: '/hajj/guide' }
]);

export const metadata = {
  title: 'دليل مناسك الحج خطوة بخطوة',
  description: 'دليل شامل لمناسك الحج بالترتيب: الإحرام، الطواف، السعي، يوم عرفة، مزدلفة، رمي الجمرات، والتحلل، بشرح مبسط للحاج القادم من مصر.',
  alternates: { canonical: '/hajj/guide' }
};

const rituals = [
  {
    title: 'الإحرام',
    day: 'اليوم الأول (8 ذو الحجة - يوم التروية)',
    text: 'يبدأ الحاج إحرامه من الميقات، بنية الحج ولبس ملابس الإحرام، ثم يتوجه إلى منى للمبيت بها استعدادًا ليوم عرفة، مع الإكثار من التلبية.'
  },
  {
    title: 'يوم عرفة',
    day: 'اليوم الثاني (9 ذو الحجة)',
    text: 'الوقوف بعرفة هو ركن الحج الأعظم، ويكون من زوال شمس يوم عرفة حتى فجر يوم النحر، ويُستحب الإكثار من الدعاء والذكر خلاله.'
  },
  {
    title: 'مزدلفة',
    day: 'ليلة اليوم الثالث',
    text: 'بعد الدفع من عرفة يتوجه الحاج إلى مزدلفة للمبيت بها وجمع الحصى اللازم لرمي الجمرات في الأيام التالية.'
  },
  {
    title: 'رمي جمرة العقبة والنحر والحلق',
    day: 'يوم النحر (10 ذو الحجة)',
    text: 'يبدأ اليوم برمي جمرة العقبة الكبرى، يليه ذبح الهدي، ثم الحلق أو التقصير، وبذلك يحل التحلل الأول للحاج.'
  },
  {
    title: 'طواف الإفاضة والسعي',
    day: 'يوم النحر أو ما بعده',
    text: 'التوجه إلى مكة المكرمة لأداء طواف الإفاضة (ركن الحج) والسعي بين الصفا والمروة لمن لم يكن قد سعى مسبقًا، ويحل بعده التحلل الكامل.'
  },
  {
    title: 'أيام التشريق ورمي الجمرات',
    day: '11، 12، (و13) ذو الحجة',
    text: 'المبيت في منى ورمي الجمرات الثلاث (الصغرى والوسطى والكبرى) في كل يوم من أيام التشريق، مع جواز التعجل بيومين لمن أراد.'
  },
  {
    title: 'طواف الوداع',
    day: 'قبل مغادرة مكة',
    text: 'آخر مناسك الحج، حيث يودع الحاج البيت الحرام بطواف قبل التوجه للسفر، وهو واجب على غير الحائض والنفساء.'
  }
];

export default function HajjGuidePage() {
  return (
    <PageShell
      title="دليل مناسك الحج خطوة بخطوة"
      eyebrow="دليل الحج"
      description="ترتيب مبسط لمناسك الحج من الإحرام حتى طواف الوداع، ليكون مرجعًا سريعًا للحاج قبل السفر وأثناء أداء المناسك."
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
              <span className="text-xs font-semibold text-[color:var(--color-gold)]">{step.day}</span>
            </div>
            <p className="mt-3 text-sm leading-8 text-[color:var(--color-muted)]">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-ivory)] p-6 text-sm leading-8 text-[color:var(--color-muted)]">
        هذا الدليل للتعريف العام بترتيب المناسك، ولا يغني عن استشارة أهل العلم أو المرشدين المرافقين للبعثة بخصوص التفاصيل الفقهية والحالات الخاصة.
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/hajj/documents" className="rounded-full bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[color:var(--color-primary-dark)]">
          الأوراق المطلوبة للحج
        </Link>
        <Link href="/hajj/programs" className="rounded-full border border-[color:var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-primary)] transition hover:bg-[color:var(--color-ivory)]">
          استعرض برامج الحج
        </Link>
      </div>
    </PageShell>
  );
}
