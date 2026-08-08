import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { umrahPrograms, getProgramBySlug } from '@/lib/programs';
import { siteConfig, routes } from '@/lib/site-config';

export async function generateStaticParams() {
  return umrahPrograms.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const program = getProgramBySlug('umrah', params.slug);
  if (!program) {
    return {};
  }
  return {
    title: program.name,
    description: program.summary,
    alternates: { canonical: `/umrah/programs/${program.slug}` }
  };
}

export default function UmrahProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = getProgramBySlug('umrah', params.slug);

  if (!program) {
    notFound();
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: program.name,
    description: program.summary,
    serviceType: 'Umrah travel program',
    provider: { '@type': 'TravelAgency', name: siteConfig.name },
    areaServed: { '@type': 'Country', name: 'مصر' }
  };

  return (
    <PageShell title={program.name} eyebrow="برنامج عمرة" description={program.summary}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <div className="rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-sm">
        <h2 className="text-lg font-semibold text-[color:var(--color-primary)]">ماذا يشمل هذا البرنامج؟</h2>
        <ul className="mt-4 space-y-3">
          {program.highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-8 text-[color:var(--color-muted)]">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--color-gold)]" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mt-8 text-lg font-semibold text-[color:var(--color-primary)]">الأنسب لمن؟</h2>
        <p className="mt-3 text-sm leading-8 text-[color:var(--color-muted)]">{program.idealFor}</p>

        <div className="mt-8 rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-ivory)] p-6 text-sm leading-8 text-[color:var(--color-muted)]">
          الأسعار والمواعيد وتفاصيل الإقامة الدقيقة تختلف من فترة لأخرى. تواصل معنا للحصول على أحدث البيانات المتاحة حاليًا.
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={routes.contact} className="rounded-full bg-[color:var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-primary-dark)]">
            تواصل معنا الآن
          </Link>
          <Link href={routes.umrahPrograms} className="rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-[color:var(--color-primary)] transition hover:bg-[color:var(--color-ivory)]">
            استعرض باقي برامج العمرة
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
