import Link from 'next/link';
import TrustStrip from '@/components/TrustStrip';
import Gallery from '@/components/Gallery';
import CTASection from '@/components/CTASection';
import GeometricPattern from '@/components/GeometricPattern';
import Reveal from '@/components/motion/Reveal';
import { StaggerGroup, StaggerItem } from '@/components/motion/StaggerGroup';
import { CompassIcon, DocumentIcon, StarTagIcon, ShieldIcon, GroupIcon, HeartHandIcon } from '@/components/icons';
import { routes } from '@/lib/site-config';
import HeroAnimated from '@/components/HeroAnimated';

const trustItems = [
  'إرشاد قبل السفر',
  'معلومات واضحة ومحدثة',
  'متابعة رحلة مريحة',
  'خدمة متخصصة للحاج والمعتمر'
];

const quickLinks = [
  { icon: CompassIcon, title: 'دليل الحج', href: '/hajj/guide', text: 'مناسك الحج مرتبة خطوة بخطوة، من الإحرام حتى طواف الوداع.', category: 'حج' },
  { icon: StarTagIcon, title: 'دليل العمرة', href: '/umrah/guide', text: 'خطوات العمرة والاحتياطات اللازمة قبل أداء المناسك.', category: 'عمرة' },
  { icon: DocumentIcon, title: 'الأوراق المطلوبة', href: '/hajj/documents', text: 'كل مستند تحتاجه قبل السفر، في قائمة واضحة ومباشرة.', category: 'وثائق' }
];

const whyUs = [
  { icon: ShieldIcon, title: 'إشراف ميداني مباشر' },
  { icon: GroupIcon, title: 'مجموعات منظمة لكل رحلة' },
  { icon: CompassIcon, title: 'دعم وتواصل مستمر' },
  { icon: HeartHandIcon, title: 'برامج تناسب جميع الفئات' }
];

export default function HomePage() {
  return (
    <>
      <main id="main-content">
        <section className="relative overflow-hidden bg-[linear-gradient(150deg,rgba(11,59,44,0.97),rgba(15,77,58,0.94)_45%,rgba(8,50,38,0.98))] text-white">
          <div className="absolute inset-0 bg-[url('/images/hero-banner.jpg')] bg-cover bg-center opacity-[0.14]" />
          <GeometricPattern id="hero-geo" className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.06]" />
          <HeroAnimated />

          <div className="container-shell relative grid gap-10 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
            <div className="max-w-3xl">
              <Reveal>
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                  <StarTagIcon className="h-4 w-4 text-[color:var(--color-gold-soft)]" />
                  رحلة إيمانية تبدأ بالاختيار الصحيح
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  مع الشيخ حسن عوض، رحلتك إلى بيت الله في أيدٍ أمينة.
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                  برامج حج وعمرة من مصر بإشراف ميداني مباشر، ومتابعة لصيقة في كل خطوة من رحلتك إلى مكة المكرمة والمدينة المنورة.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href={routes.hajjPrograms}
                    className="group rounded-full bg-[color:var(--color-gold)] px-6 py-3 font-semibold text-[color:var(--color-primary-dark)] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
                  >
                    استكشف البرامج
                    <span className="mr-2 inline-block transition-transform group-hover:-translate-x-1">←</span>
                  </Link>
                  <Link href={routes.contact} className="rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20">
                    تواصل معنا
                  </Link>
                </div>
              </Reveal>
              <StaggerGroup className="mt-10 grid gap-3 sm:grid-cols-2">
                {trustItems.map((item) => (
                  <StaggerItem key={item}>
                    <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm backdrop-blur transition hover:border-white/30 hover:bg-white/15">
                      {item}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>

            <Reveal delay={0.3} className="lg:pt-4">
              <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-soft backdrop-blur">
                <div className="rounded-[1.5rem] bg-[color:var(--color-ivory)] p-6 text-[color:var(--color-text)]">
                  <p className="text-sm font-semibold text-[color:var(--color-primary)]">ماذا ستجد هنا؟</p>
                  <ul className="mt-4 space-y-3 text-sm leading-8 text-[color:var(--color-muted)]">
                    <li>• معلومات موثوقة عن الحج والعمرة من منظور عربي واضح.</li>
                    <li>• دليل شامل لخطوات السفر والاستعدادات.</li>
                    <li>• برامج متعددة تناسب احتياجات وميزانيات مختلفة.</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <TrustStrip />

        <Gallery />

        <section className="bg-[color:var(--color-background)] py-20">
          <div className="container-shell">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-[color:var(--color-gold)]">محتوى ذي قيمة</p>
                  <h2 className="section-title mt-2">الصفحات الأساسية التي تبني تجربة موثوقة</h2>
                </div>
              </div>
            </Reveal>
            <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
              {quickLinks.map((card) => (
                <StaggerItem key={card.href}>
                  <Link
                    href={card.href}
                    className="group block h-full rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-7 shadow-sm transition hover:-translate-y-1.5 hover:border-[color:var(--color-gold-soft)] hover:shadow-soft"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-ivory)] transition group-hover:bg-[color:var(--color-gold)]/15">
                      <card.icon className="h-5 w-5 text-[color:var(--color-gold)]" />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-[color:var(--color-gold)]">{card.category}</p>
                    <h3 className="mt-1 text-xl font-semibold text-[color:var(--color-primary)]">{card.title}</h3>
                    <p className="mt-3 text-sm leading-8 text-[color:var(--color-muted)]">{card.text}</p>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[color:var(--color-ivory)] py-20">
          <GeometricPattern id="why-geo" className="pointer-events-none absolute inset-0 h-full w-full text-[color:var(--color-primary)]/[0.04]" />
          <div className="container-shell relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <div>
                <p className="text-sm font-semibold text-[color:var(--color-gold)]">لماذا الشيخ حسن عوض؟</p>
                <h2 className="section-title mt-3">إشراف ميداني حقيقي على كل رحلة حج وعمرة</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--color-muted)]">
                  نرافق حجاجنا ومعتمرينا خطوة بخطوة من التسجيل وحتى العودة، مع متابعة ميدانية مباشرة في مكة المكرمة والمدينة المنورة، وبرامج مصممة لتناسب مختلف الفئات والميزانيات.
                </p>
              </div>
            </Reveal>
            <StaggerGroup className="grid gap-4 sm:grid-cols-2">
              {whyUs.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex h-full flex-col items-center gap-3 rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 text-center transition hover:-translate-y-1 hover:shadow-soft">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-primary)]/10">
                      <item.icon className="h-5 w-5 text-[color:var(--color-primary)]" />
                    </div>
                    <p className="text-sm font-semibold text-[color:var(--color-primary)]">{item.title}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      </main>
      <CTASection />
    </>
  );
}
