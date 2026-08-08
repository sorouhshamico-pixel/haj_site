import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'خدماتنا',
  description: 'استكشف الخدمات الرئيسية التي تدعم الحج والعمرة من مصر عبر منصة عربية منظمة ومريحة.'
};

const services = [
  'إرشاد قبل السفر',
  'توضيح الأوراق المطلوبة',
  'تنظيم رحلة الحج والعمرة',
  'محتوى موثوق ومُراجع'
];

export default function ServicesPage() {
  return (
    <PageShell title="خدماتنا" eyebrow="خدمات" description="نقدم خدمات موجهة لتسهيل رحلة الحج والعمرة مع وضوح المعلومات وتوجيه مريح.">
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div key={service} className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 text-[color:var(--color-primary)] shadow-sm">
            {service}
          </div>
        ))}
      </div>
    </PageShell>
  );
}
