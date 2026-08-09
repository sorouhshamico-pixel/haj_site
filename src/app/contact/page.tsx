import ContactForm from '@/components/ContactForm';
import { siteConfig, phoneInternational, phoneSecondaryInternational, whatsappLink } from '@/lib/site-config';
import Reveal from '@/components/motion/Reveal';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'تواصل معنا',
  description: 'اتصل بنا مباشرة أو استخدم نموذج التواصل للاستفسار عن برامج الحج والعمرة.',
  path: '/contact',
  image: '/images/sections/services-field-support.jpg'
});

export default function ContactPage() {
  return (
    <main id="main-content" className="container-shell py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-sm font-semibold text-[color:var(--color-gold)]">تواصل معنا</p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-primary)]">نحن هنا للإجابة على استفساراتك</h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--color-muted)]">
            يمكنك التواصل معنا للاستفسار عن البرامج أو طلب المساعدة في ترتيبات السفر.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`tel:${phoneInternational}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--color-primary-dark)]"
            >
              اتصل بنا: {siteConfig.phone}
            </a>
            <a
              href={`tel:${phoneSecondaryInternational}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-[color:var(--color-primary)] transition hover:bg-[color:var(--color-ivory)]"
            >
              رقم إضافي: {siteConfig.phoneSecondary}
            </a>
            {whatsappLink ? (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-[color:var(--color-primary)] transition hover:bg-[color:var(--color-ivory)]"
              >
                تواصل عبر واتساب
              </a>
            ) : null}
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <ContactForm />
        </Reveal>
      </div>
    </main>
  );
}
