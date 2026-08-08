import Link from 'next/link';
import { routes, siteConfig, phoneInternational } from '@/lib/site-config';

export default function CTASection() {
  return (
    <section className="bg-[linear-gradient(135deg,rgba(15,77,58,0.95),rgba(8,50,38,0.9))] py-20 text-white">
      <div className="container-shell flex flex-col gap-6 rounded-[2rem] border border-white/15 bg-white/10 p-10 shadow-soft backdrop-blur lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[color:var(--color-gold-soft)]">استفسار سريع</p>
          <h2 className="mt-3 text-3xl font-semibold">ابدأ رحلتك مع معلومات واضحة قبل أي قرار</h2>
          <p className="mt-4 text-lg leading-8 text-white/75">
            يمكن التواصل معنا للاستفسار عن البرامج والمحتوى الأساسي حول الحج أو العمرة.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={`tel:${phoneInternational}`} className="rounded-full bg-[color:var(--color-gold)] px-6 py-3 font-semibold text-[color:var(--color-primary-dark)]">
            اتصل بنا: {siteConfig.phone}
          </a>
          <Link href={routes.contact} className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white">تواصل معنا</Link>
        </div>
      </div>
    </section>
  );
}
