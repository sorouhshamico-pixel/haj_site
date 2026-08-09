import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { StaggerGroup, StaggerItem } from '@/components/motion/StaggerGroup';
import { StarTagIcon, DocumentIcon, CompassIcon, HeartHandIcon, MapPinIcon } from '@/components/icons';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbJsonLd } from '@/lib/breadcrumbs';

export const metadata = buildMetadata({
  title: 'الحج',
  description: 'دليل شامل للحج من مصر، يشمل المعلومات الأساسية والروابط الداخلية للخطوات والوثائق والاستعداد.',
  path: '/hajj',
  image: '/images/sections/hajj-hub-haram-night.jpg'
});

const breadcrumbs = breadcrumbJsonLd([
  { name: 'الرئيسية', path: '/' },
  { name: 'الحج', path: '/hajj' }
]);

const sections = [
  { icon: StarTagIcon, title: 'برامج الحج', href: '/hajj/programs', text: 'تعرف على فئات برامج الحج المتاحة وتواصل معنا لمعرفة المواعيد والأسعار.' },
  { icon: DocumentIcon, title: 'الأوراق المطلوبة', href: '/hajj/documents', text: 'قائمة إرشادية بالمستندات التي يحتاجها الحاج المصري قبل السفر.' },
  { icon: CompassIcon, title: 'مناسك الحج', href: '/hajj/guide', text: 'دليل مرتب خطوة بخطوة لمناسك الحج من الإحرام حتى طواف الوداع.' },
  { icon: MapPinIcon, title: 'مكة المكرمة', href: '/makkah', text: 'أبرز المعالم المقدسة والتاريخية في مكة المكرمة ونصائح عملية للحاج.' },
  { icon: MapPinIcon, title: 'المدينة المنورة', href: '/madinah', text: 'المسجد النبوي وأبرز معالم المدينة المنورة ونصائح عملية للزيارة.' },
  { icon: HeartHandIcon, title: 'الأسئلة الشائعة', href: '/faq', text: 'إجابات سريعة على أكثر الأسئلة تكرارًا حول الحج والعمرة.' }
];

export default function HajjPage() {
  return (
    <PageShell
      title="الحج من مصر: دليل موثوق ومبسط"
      eyebrow="الحج"
      description="يهدف هذا القسم إلى توجيه الحاج من خلال المعلومات الأساسية حول البرامج، الخطوات، الوثائق، والاستعداد للسفر، بما يساعد على فهم الرحلة ومراحلها قبل البدء. رحلة الحج تمر بعدة مراحل أساسية: التسجيل مع جهة منظمة موثوقة، استكمال الأوراق والتطعيمات، ثم أداء المناسك بترتيبها الصحيح من الإحرام وحتى طواف الوداع."
      image={{ src: '/images/sections/hajj-hub-haram-night.jpg', alt: 'المسجد الحرام ليلًا بالأنوار المحيطة بالكعبة المشرفة' }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <StaggerGroup className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <StaggerItem key={section.href}>
            <Link
              href={section.href}
              className="group flex h-full flex-col gap-3 rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--color-gold-soft)] hover:shadow-soft"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-ivory)] transition group-hover:bg-[color:var(--color-gold)]/15">
                <section.icon className="h-5 w-5 text-[color:var(--color-gold)]" />
              </div>
              <h2 className="text-lg font-semibold text-[color:var(--color-primary)]">{section.title}</h2>
              <p className="text-sm leading-8 text-[color:var(--color-muted)]">{section.text}</p>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </PageShell>
  );
}
