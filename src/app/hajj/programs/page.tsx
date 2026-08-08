import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'برامج الحج',
  description: 'صفحة برامج الحج مع بنية جاهزة لعرض تفاصيل الرحلات لاحقًا.'
};

const programs = [
  { name: 'برنامج الحج الأساسي', type: 'حج', duration: '10 أيام' },
  { name: 'برنامج الحج المريح', type: 'حج', duration: '12 يومًا' }
];

export default function HajjProgramsPage() {
  return (
    <PageShell title="برامج الحج" eyebrow="برامج" description="هذه الصفحة مبنية لتكون نقطة دخول احترافية لعرض برامج الحج عند توفر البيانات.">
      <div className="grid gap-4 md:grid-cols-2">
        {programs.map((program) => (
          <div key={program.name} className="rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-sm">
            <p className="text-sm font-semibold text-[color:var(--color-gold)]">{program.type}</p>
            <h2 className="mt-3 text-xl font-semibold text-[color:var(--color-primary)]">{program.name}</h2>
            <p className="mt-3 text-sm text-[color:var(--color-muted)]">المدة: {program.duration}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
