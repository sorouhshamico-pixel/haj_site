import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'الأسئلة الشائعة',
  description: 'إجابات واضحة حول الحج والعمرة والاستعداد قبل الرحلة.'
};

const faqs = [
  {
    question: 'ما الفرق بين الحج والعمرة؟',
    answer: 'الحج ركن من أركان الإسلام له وقت محدد في ذي الحجة ويشمل مناسك مثل الوقوف بعرفة، بينما العمرة يمكن أداؤها في أي وقت من العام وتقتصر مناسكها على الإحرام والطواف والسعي والحلق أو التقصير.'
  },
  {
    question: 'ما هي الأوراق المطلوبة للحج أو العمرة؟',
    answer: 'تشمل غالبًا جواز سفر ساري لمدة 6 أشهر على الأقل، شهادة التطعيمات المطلوبة، صور شخصية حديثة، وبطاقة الرقم القومي. التفاصيل الكاملة موجودة في صفحتي الأوراق المطلوبة للحج والعمرة، وقد تختلف بحسب الموسم.'
  },
  {
    question: 'كيف أبدأ الاستعداد للسفر؟',
    answer: 'ابدأ باستكمال الأوراق والتطعيمات مبكرًا، ثم راجع دليل المناسك المناسب لرحلتك (حج أو عمرة)، وتواصل معنا لمعرفة تفاصيل البرنامج المناسب لك.'
  },
  {
    question: 'هل توجد برامج تناسب كبار السن والعائلات؟',
    answer: 'نعم، نوفر فئات مختلفة من البرامج تراعي احتياجات كبار السن والعائلات مع متابعة ميدانية طوال الرحلة. تواصل معنا لمعرفة الخيار الأنسب لحالتك.'
  },
  {
    question: 'متى يجب أن أبدأ الحجز؟',
    answer: 'يُفضّل الحجز والتسجيل مبكرًا، خاصة في مواسم الازدحام مثل رمضان وموسم الحج، لضمان توفر المكان المناسب والإقامة القريبة من الحرمين.'
  },
  {
    question: 'هل تتغير الأوراق والاشتراطات كل عام؟',
    answer: 'نعم، قد تتغير بعض الاشتراطات (خاصة الصحية والخاصة بالتأشيرات) من موسم لآخر بقرار من الجهات الرسمية في مصر والسعودية، لذلك ننصح دائمًا بالتواصل معنا للتأكد من آخر المستجدات.'
  }
];

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
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[color:var(--color-primary)]">{faq.question}</h2>
            <p className="mt-3 text-sm leading-8 text-[color:var(--color-muted)]">{faq.answer}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
