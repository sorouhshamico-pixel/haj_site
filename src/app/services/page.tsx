import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'خدماتنا',
  description: 'استكشف الخدمات الرئيسية التي تدعم الحج والعمرة من مصر عبر منصة عربية منظمة ومريحة.',
  alternates: { canonical: '/services' }
};

const services = [
  {
    title: 'إرشاد وتوجيه قبل السفر',
    text: 'شرح مبسط لخطوات الرحلة والمناسك والأوراق المطلوبة، لضمان استعداد كامل للحاج والمعتمر قبل الانطلاق.'
  },
  {
    title: 'متابعة ميدانية أثناء الرحلة',
    text: 'مرافقة ومتابعة على مدار الرحلة في مكة المكرمة والمدينة المنورة، لتيسير أداء المناسك بطمأنينة.'
  },
  {
    title: 'تنظيم إجراءات السفر',
    text: 'مساعدة في استكمال الأوراق والتأشيرات والحجوزات وفق الجهات الرسمية المعتمدة.'
  },
  {
    title: 'برامج مصممة لفئات مختلفة',
    text: 'برامج حج وعمرة تراعي احتياجات كبار السن والعائلات، مع خيارات متعددة للمدة ومستوى الخدمة.'
  }
];

export default function ServicesPage() {
  return (
    <PageShell title="خدماتنا" eyebrow="خدمات" description="نقدم خدمات موجهة لتسهيل رحلة الحج والعمرة مع وضوح المعلومات وتوجيه مريح من قبل وأثناء وبعد الرحلة.">
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[color:var(--color-primary)]">{service.title}</h2>
            <p className="mt-3 text-sm leading-8 text-[color:var(--color-muted)]">{service.text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
