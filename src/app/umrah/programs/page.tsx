import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { routes } from '@/lib/site-config';

export const metadata = {
  title: 'برامج العمرة',
  description: 'فئات برامج العمرة المتاحة من مصر مع الشيخ حسن عوض، تواصل معنا للحصول على التفاصيل الكاملة والمواعيد والأسعار المحدثة.'
};

const programCategories = [
  {
    name: 'برنامج العمرة القصيرة',
    text: 'مناسب لمن يرغب في أداء العمرة خلال مدة قصيرة، مع التركيز على أداء المناسك بيسر.'
  },
  {
    name: 'برنامج العمرة المريحة',
    text: 'إقامة أقرب للحرم المكي مع وقت أوسع لأداء العمرة وزيارة المدينة المنورة.'
  },
  {
    name: 'برنامج العمرة العائلي',
    text: 'برنامج يراعي احتياجات العائلات وكبار السن، مع متابعة ميدانية طوال الرحلة.'
  }
];

export default function UmrahProgramsPage() {
  return (
    <PageShell
      title="برامج العمرة"
      eyebrow="برامج"
      description="نقدم أكثر من فئة لبرامج العمرة تناسب احتياجات وميزانيات مختلفة. تواصل معنا لمعرفة المواعيد والأسعار والتفاصيل الكاملة."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {programCategories.map((program) => (
          <div key={program.name} className="rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-[color:var(--color-primary)]">{program.name}</h2>
            <p className="mt-3 text-sm leading-8 text-[color:var(--color-muted)]">{program.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-ivory)] p-6">
        <p className="text-sm leading-8 text-[color:var(--color-muted)]">
          الأسعار والمواعيد وتفاصيل الإقامة تختلف من فترة لأخرى. تواصل معنا للحصول على أحدث البيانات المتاحة حاليًا.
        </p>
        <Link href={routes.contact} className="whitespace-nowrap rounded-full bg-[color:var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-primary-dark)]">
          تواصل معنا الآن
        </Link>
      </div>
    </PageShell>
  );
}
