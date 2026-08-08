import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { hajjPrograms } from '@/lib/programs';
import { routes } from '@/lib/site-config';
import { breadcrumbJsonLd } from '@/lib/breadcrumbs';

const breadcrumbs = breadcrumbJsonLd([
  { name: 'الرئيسية', path: '/' },
  { name: 'الحج', path: '/hajj' },
  { name: 'برامج الحج', path: '/hajj/programs' }
]);

export const metadata = {
  title: 'برامج الحج',
  description: 'فئات برامج الحج المتاحة من مصر مع الشيخ حسن عوض، تواصل معنا للحصول على التفاصيل الكاملة والمواعيد والأسعار المحدثة.',
  alternates: { canonical: '/hajj/programs' }
};

export default function HajjProgramsPage() {
  return (
    <PageShell
      title="برامج الحج"
      eyebrow="برامج"
      description="نقدم أكثر من فئة لبرامج الحج تناسب احتياجات وميزانيات مختلفة. تواصل معنا لمعرفة المواعيد والأسعار والتفاصيل الكاملة للموسم الحالي."
      image={{ src: '/images/sections/hajj-programs-group-kaaba.jpg', alt: 'مجموعة من الحجاج مع فريق الإشراف أمام الكعبة المشرفة' }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="grid gap-4 md:grid-cols-3">
        {hajjPrograms.map((program) => (
          <Link
            key={program.slug}
            href={`/hajj/programs/${program.slug}`}
            className="rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
          >
            <h2 className="text-xl font-semibold text-[color:var(--color-primary)]">{program.name}</h2>
            <p className="mt-3 text-sm leading-8 text-[color:var(--color-muted)]">{program.summary}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-[color:var(--color-gold)]">عرض التفاصيل ←</span>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-ivory)] p-6">
        <p className="text-sm leading-8 text-[color:var(--color-muted)]">
          الأسعار والمواعيد وتفاصيل الإقامة تختلف من موسم لآخر. تواصل معنا للحصول على أحدث البيانات المتاحة حاليًا.
        </p>
        <Link href={routes.contact} className="whitespace-nowrap rounded-full bg-[color:var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-primary-dark)]">
          تواصل معنا الآن
        </Link>
      </div>
    </PageShell>
  );
}
