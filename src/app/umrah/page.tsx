import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { StaggerGroup, StaggerItem } from '@/components/motion/StaggerGroup';
import { StarTagIcon, DocumentIcon, CompassIcon, HeartHandIcon, MapPinIcon } from '@/components/icons';
import { buildMetadata } from '@/lib/metadata';
import { breadcrumbJsonLd } from '@/lib/breadcrumbs';

export const metadata = buildMetadata({
  title: 'العمرة',
  description: 'صفحة عمرة موجهة للمسافرين من مصر، مع محتوى واضح حول الخطوات والوثائق والاستعداد.',
  path: '/umrah',
  image: '/images/sections/umrah-hub-kaaba-family.jpg'
});

const breadcrumbs = breadcrumbJsonLd([
  { name: 'الرئيسية', path: '/' },
  { name: 'العمرة', path: '/umrah' }
]);

const sections = [
  { icon: StarTagIcon, title: 'برامج العمرة', href: '/umrah/programs', text: 'تعرف على فئات برامج العمرة المتاحة وتواصل معنا لمعرفة المواعيد والأسعار.' },
  { icon: DocumentIcon, title: 'الأوراق المطلوبة', href: '/umrah/documents', text: 'قائمة إرشادية بالمستندات التي يحتاجها المعتمر المصري قبل السفر.' },
  { icon: CompassIcon, title: 'مناسك العمرة', href: '/umrah/guide', text: 'دليل مرتب خطوة بخطوة لمناسك العمرة من الإحرام حتى الحلق أو التقصير.' },
  { icon: MapPinIcon, title: 'مكة المكرمة', href: '/makkah', text: 'أبرز المعالم المقدسة والتاريخية في مكة المكرمة ونصائح عملية للمعتمر.' },
  { icon: MapPinIcon, title: 'المدينة المنورة', href: '/madinah', text: 'المسجد النبوي وأبرز معالم المدينة المنورة ونصائح عملية للزيارة.' },
  { icon: HeartHandIcon, title: 'الأسئلة الشائعة', href: '/faq', text: 'إجابات سريعة على أكثر الأسئلة تكرارًا حول الحج والعمرة.' }
];

export default function UmrahPage() {
  return (
    <PageShell
      title="العمرة من مصر: معلومات عملية ومباشرة"
      eyebrow="العمرة"
      description="يركز هذا القسم على توضيح خطوات العمرة، الاستعدادات اللازمة، والتفاصيل الأساسية التي يحتاجها المعتمر قبل السفر. يمكن أداء العمرة في أي وقت من العام، وتتكون من أربع خطوات رئيسية: الإحرام من الميقات، الطواف بالبيت، السعي بين الصفا والمروة، ثم الحلق أو التقصير."
      image={{ src: '/images/sections/umrah-hub-kaaba-family.jpg', alt: 'عائلة من المعتمرين أمام الكعبة المشرفة' }}
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
