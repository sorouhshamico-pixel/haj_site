import Link from 'next/link';
import TrustStrip from '@/components/TrustStrip';
import Gallery from '@/components/Gallery';
import CTASection from '@/components/CTASection';
import { routes } from '@/lib/site-config';

const trustItems = [
  'إرشاد قبل السفر',
  'معلومات واضحة ومحدثة',
  'متابعة رحلة مريحة',
  'خدمة متخصصة للحاج والمعتمر'
];

const quickLinks = [
  { title: 'دليل الحج', href: '/hajj/guide', text: 'اكتشف خطوات الحج ومراحل الرحلة.', category: 'حج' },
  { title: 'دليل العمرة', href: '/umrah/guide', text: 'تعرف على مناسك العمرة والاحتياطات.', category: 'عمرة' },
  { title: 'الأوراق المطلوبة', href: '/hajj/documents', text: 'اعرف المستندات الأساسية قبل التقديم.', category: 'وثائق' }
];

export default function HomePage() {
  return (
    <>
      <main id="main-content">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(15,77,58,0.95),rgba(8,50,38,0.88))] text-white">
          <div className="absolute inset-0 bg-[url('/images/hero-banner.jpg')] bg-cover bg-center opacity-20" />
          <div className="container-shell relative grid gap-10 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">رحلة إيمانية تبدأ بالاختيار الصحيح</p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                برامج الحج والعمرة من مصر مع معلومات واضحة ومتابعة مريحة.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                استكشف برامج الحج والعمرة والخطوات الأساسية قبل السفر، مع محتوى عربي ذي قيمة ومهيكل يسهل الوصول إليه.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={routes.hajjPrograms} className="rounded-full bg-[color:var(--color-gold)] px-6 py-3 font-semibold text-[color:var(--color-primary-dark)] transition hover:opacity-90">
                  استكشف البرامج
                </Link>
                <Link href={routes.contact} className="rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20">
                  تواصل معنا
                </Link>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {trustItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm backdrop-blur">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-soft backdrop-blur">
              <div className="rounded-[1.5rem] bg-[color:var(--color-ivory)] p-6 text-[color:var(--color-text)]">
                <p className="text-sm font-semibold text-[color:var(--color-primary)]">ماذا ستجد هنا؟</p>
                <ul className="mt-4 space-y-3 text-sm leading-8 text-[color:var(--color-muted)]">
                  <li>• معلومات موثوقة عن الحج والعمرة من منظور عربي واضح.</li>
                  <li>• دليل شامل لخطوات السفر والاستعدادات.</li>
                  <li>• هيكل واضح للبرامج والصفحات المساعدة للسيو.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <TrustStrip />

        <Gallery />

        <section className="bg-[color:var(--color-background)] py-20">
          <div className="container-shell">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-[color:var(--color-gold)]">محتوى ذي قيمة</p>
                <h2 className="section-title mt-2">الصفحات الأساسية التي تبني تجربة موثوقة</h2>
              </div>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {quickLinks.map((card) => (
                <Link key={card.href} href={card.href} className="rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <p className="text-sm font-semibold text-[color:var(--color-gold)]">{card.category}</p>
                  <h3 className="mt-3 text-xl font-semibold text-[color:var(--color-primary)]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-[color:var(--color-muted)]">{card.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--color-ivory)] py-20">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-[color:var(--color-gold)]">لماذا هذا الموقع؟</p>
              <h2 className="section-title mt-3">تصميم يركز على الثقة والوضوح في رحلة السفر الديني</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--color-muted)]">
                يهدف الموقع إلى أن يكون مرجعًا عربيًا مريحًا للمسافرين قبل الحج أو العمرة، مع مجموعة من الصفحات المنظمة التي تدعم البحث والتصفح والاحتياطات الأساسية.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['هيكل معلوماتي واضح', 'محتوى موجه للسوق المصري', 'تصميم ذكي ومريح للهواتف', 'SEO جاهز للانتشار'].map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 text-center text-sm font-semibold text-[color:var(--color-primary)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CTASection />
    </>
  );
}
