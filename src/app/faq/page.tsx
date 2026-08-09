import PageShell from '@/components/PageShell';
import { faqs } from '@/lib/faqs';
import { StaggerGroup, StaggerItem } from '@/components/motion/StaggerGroup';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'الأسئلة الشائعة',
  description: 'إجابات واضحة حول الحج والعمرة والاستعداد قبل الرحلة.',
  path: '/faq',
  image: '/images/gallery/medina-mosque-group-03.jpg'
});

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
};

export default function FaqPage() {
  return (
    <PageShell title="الأسئلة الشائعة" eyebrow="FAQ" description="إجابات مبسطة ومركزة على الأسئلة الأكثر شيوعًا حول الحج والعمرة.">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <StaggerGroup className="space-y-4">
        {faqs.map((faq) => (
          <StaggerItem key={faq.question}>
            <div className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm transition hover:border-[color:var(--color-gold-soft)]">
              <h2 className="text-lg font-semibold text-[color:var(--color-primary)]">{faq.question}</h2>
              <p className="mt-3 text-sm leading-8 text-[color:var(--color-muted)]">{faq.answer}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </PageShell>
  );
}
