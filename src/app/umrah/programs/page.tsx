import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'برامج العمرة',
  description: 'صفحة برامج العمرة مع بنية جاهزة لعرض المعلومات لاحقًا.'
};

const programs = [
  { name: 'برنامج العمرة القصير', type: 'عمرة', duration: '7 أيام' },
  { name: 'برنامج العمرة المريح', type: 'عمرة', duration: '10 أيام' }
];

export default function UmrahProgramsPage() {
  return (
    <PageShell title="برامج العمرة" eyebrow="برامج" description="هذه الصفحة مبنية لتكون نقطة دخول احترافية لعرض برامج العمرة عند توفر البيانات.">
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
