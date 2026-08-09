import PageShell from '@/components/PageShell';
import { faqs } from '@/lib/faqs';
import { StaggerGroup, StaggerItem } from '@/components/motion/StaggerGroup';
import { buildMetadata } from '@/lib/metadata';
import { StarTagIcon, MosqueIcon } from '@/components/icons';

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
            <div className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--color-gold-soft)] hover:shadow-soft">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--color-primary)]/10">
                  <StarTagIcon className="h-4 w-4 text-[color:var(--color-gold)]" />
                </span>
                <h2 className="text-lg font-semibold text-[color:var(--color-primary)]">{faq.question}</h2>
              </div>
              <div className="mt-3 flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--color-gold)]/10">
                  <MosqueIcon className="h-3.5 w-3.5 text-[color:var(--color-primary)]" />
                </span>
                <p className="text-sm leading-8 text-[color:var(--color-muted)]">{faq.answer}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </PageShell>
  );
}
