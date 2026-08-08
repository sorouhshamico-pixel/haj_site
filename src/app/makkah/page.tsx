import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { StaggerGroup, StaggerItem } from '@/components/motion/StaggerGroup';
import { siteConfig } from '@/lib/site-config';
import { breadcrumbJsonLd } from '@/lib/breadcrumbs';

const breadcrumbs = breadcrumbJsonLd([
  { name: 'الرئيسية', path: '/' },
  { name: 'مكة المكرمة', path: '/makkah' }
]);

export const metadata = {
  title: 'مكة المكرمة: أهم المعالم والمعلومات للحاج والمعتمر',
  description: 'دليل تعريفي بأبرز المعالم المقدسة في مكة المكرمة: المسجد الحرام، المشاعر المقدسة، وأهم النصائح العملية للحاج والمعتمر القادم من مصر.',
  alternates: { canonical: '/makkah' }
};

const landmarks = [
  {
    title: 'المسجد الحرام والكعبة المشرفة',
    text: 'أقدس بقعة على وجه الأرض عند المسلمين، وتتوسطه الكعبة المشرفة التي يتجه إليها المسلمون في صلاتهم أينما كانوا. يؤدى فيه الطواف على مدار الساعة طوال أيام السنة.'
  },
  {
    title: 'المشاعر المقدسة: منى وعرفة ومزدلفة',
    text: 'ثلاثة مواقع أساسية في أداء مناسك الحج؛ منى حيث يبيت الحجاج ويرمون الجمرات، وعرفة حيث يقف الحجاج يوم التاسع من ذي الحجة في ركن الحج الأعظم، ومزدلفة التي يُبات بها بين الدفع من عرفة والتوجه إلى منى.'
  },
  {
    title: 'جبل النور وغار حراء',
    text: 'يقع خارج مكة المكرمة، ويحتضن الغار الذي نزل فيه أول الوحي على النبي محمد صلى الله عليه وسلم. يقصده بعض الزوار للاطلاع على الموقع التاريخي، مع مراعاة صعوبة الصعود إليه.'
  },
  {
    title: 'جبل ثور',
    text: 'موقع تاريخي جنوب مكة المكرمة، يحتضن الغار الذي اختبأ فيه النبي صلى الله عليه وسلم وصاحبه أبو بكر الصديق أثناء الهجرة إلى المدينة المنورة.'
  }
];

const tips = [
  'التزم بأوقات الصلاة عند التوجه للحرم لتجنب الزحام الشديد في الدخول والخروج.',
  'احرص على ارتداء حذاء مريح وسهل الخلع، والإكثار من شرب الماء خاصة في فترات الظهيرة.',
  'احتفظ ببطاقة تعريفية تحمل بيانات التواصل الخاصة بمجموعتك تحسبًا للانفصال في الزحام.',
  'تجنب أوقات الذروة إن أمكن (بعد صلاة المغرب مباشرة وليالي الجمعة) لأداء الطواف بارتياح أكبر.'
];

export default function MakkahPage() {
  const placeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'المسجد الحرام',
    address: { '@type': 'PostalAddress', addressLocality: 'مكة المكرمة', addressCountry: 'SA' },
    description: 'أقدس مسجد عند المسلمين وتتوسطه الكعبة المشرفة، قبلة المسلمين في الصلاة.'
  };

  return (
    <PageShell
      title="مكة المكرمة: أهم المعالم والمعلومات"
      eyebrow="المدن المقدسة"
      description="نظرة تعريفية على أبرز المعالم المقدسة والتاريخية في مكة المكرمة، مع نصائح عملية تساعد الحاج والمعتمر القادم من مصر على تنظيم وقته هناك."
      image={{ src: '/images/sections/makkah-haram-panorama.jpg', alt: 'المسجد الحرام والكعبة المشرفة ليلًا في مكة المكرمة' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <StaggerGroup className="grid gap-4 md:grid-cols-2">
        {landmarks.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex h-full flex-col gap-2 rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <h2 className="text-lg font-semibold text-[color:var(--color-primary)]">{item.title}</h2>
              <p className="text-sm leading-8 text-[color:var(--color-muted)]">{item.text}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="mt-10 rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-ivory)] p-6">
        <h2 className="text-lg font-semibold text-[color:var(--color-primary)]">نصائح عملية أثناء التواجد في مكة المكرمة</h2>
        <ul className="mt-4 space-y-3">
          {tips.map((tip) => (
            <li key={tip} className="flex items-start gap-3 text-sm leading-8 text-[color:var(--color-muted)]">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--color-gold)]" />
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 text-sm leading-8 text-[color:var(--color-muted)] shadow-sm">
        هذه المعلومات للتعريف العام بمعالم مكة المكرمة، ولا تغني عن إرشادات فريق {siteConfig.shortName} الميدانية أثناء الرحلة بخصوص أفضل التوقيتات والتنظيم اليومي.
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/hajj/guide" className="rounded-full bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[color:var(--color-primary-dark)]">
          دليل مناسك الحج
        </Link>
        <Link href="/madinah" className="rounded-full border border-[color:var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-primary)] transition hover:bg-[color:var(--color-ivory)]">
          تعرف على المدينة المنورة
        </Link>
      </div>
    </PageShell>
  );
}
