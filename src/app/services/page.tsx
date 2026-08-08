import PageShell from '@/components/PageShell';
import { StaggerGroup, StaggerItem } from '@/components/motion/StaggerGroup';
import { CompassIcon, ShieldIcon, DocumentIcon, GroupIcon } from '@/components/icons';

export const metadata = {
  title: 'خدماتنا',
  description: 'استكشف الخدمات الرئيسية التي تقدمها شركة الشيخ حسن عوض لدعم رحلة الحج والعمرة من التسجيل وحتى العودة.',
  alternates: { canonical: '/services' }
};

const services = [
  {
    icon: CompassIcon,
    title: 'إرشاد وتوجيه قبل السفر',
    text: 'شرح مبسط لخطوات الرحلة والمناسك والأوراق المطلوبة، لضمان استعداد كامل للحاج والمعتمر قبل الانطلاق.'
  },
  {
    icon: ShieldIcon,
    title: 'متابعة ميدانية أثناء الرحلة',
    text: 'مرافقة ومتابعة على مدار الرحلة في مكة المكرمة والمدينة المنورة، لتيسير أداء المناسك بطمأنينة.'
  },
  {
    icon: DocumentIcon,
    title: 'تنظيم إجراءات السفر',
    text: 'مساعدة في استكمال الأوراق والتأشيرات والحجوزات وفق الجهات الرسمية المعتمدة.'
  },
  {
    icon: GroupIcon,
    title: 'برامج مصممة لفئات مختلفة',
    text: 'برامج حج وعمرة تراعي احتياجات كبار السن والعائلات، مع خيارات متعددة للمدة ومستوى الخدمة.'
  }
];

export default function ServicesPage() {
  return (
    <PageShell title="خدماتنا" eyebrow="خدمات" description="نقدم خدمات موجهة لتسهيل رحلة الحج والعمرة مع وضوح المعلومات وتوجيه مريح من قبل وأثناء وبعد الرحلة.">
      <StaggerGroup className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <StaggerItem key={service.title}>
            <div className="flex h-full flex-col gap-3 rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-primary)]/10">
                <service.icon className="h-5 w-5 text-[color:var(--color-primary)]" />
              </div>
              <h2 className="text-lg font-semibold text-[color:var(--color-primary)]">{service.title}</h2>
              <p className="text-sm leading-8 text-[color:var(--color-muted)]">{service.text}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </PageShell>
  );
}
