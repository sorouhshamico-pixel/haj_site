import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'الأوراق والمستندات المطلوبة للحج',
  description: 'قائمة إرشادية بالأوراق والمستندات التي يحتاجها الحاج المصري قبل السفر: جواز السفر، التطعيمات، والصور الشخصية.',
  alternates: { canonical: '/hajj/documents' }
};

const documents = [
  {
    title: 'جواز سفر ساري المفعول',
    text: 'يُفضل أن يكون جواز السفر ساري الصلاحية لمدة لا تقل عن 6 أشهر من تاريخ السفر، مع التأكد من وجود صفحات فارغة كافية للتأشيرة والأختام.'
  },
  {
    title: 'تأشيرة الحج',
    text: 'تُصدر تأشيرة الحج عادة عبر الجهات والبعثات الرسمية المرخصة، وترتبط بمنظومة الحج الإلكترونية المعتمدة من الجهات السعودية.'
  },
  {
    title: 'شهادة التطعيمات',
    text: 'تشترط الجهات الصحية السعودية عادة تطعيم الحمى الشوكية (المكورات السحائية)، وقد تُطلب تطعيمات موسمية إضافية بحسب تعليمات وزارة الصحة المصرية والسعودية في موسم الحج.'
  },
  {
    title: 'صور شخصية حديثة',
    text: 'عدد من الصور الشخصية بخلفية بيضاء بالمواصفات المطلوبة لاستخراج التأشيرة والبطاقات التعريفية الخاصة بالبعثة.'
  },
  {
    title: 'بطاقة الرقم القومي',
    text: 'نسخة من بطاقة الرقم القومي سارية الصلاحية، وتُستخدم في إجراءات التسجيل مع الجهات المنظمة داخل مصر.'
  },
  {
    title: 'إثبات السداد المالي',
    text: 'ما يفيد سداد قيمة البرنامج أو الحجز مع الجهة المنظمة، وفق الآلية المعتمدة لدى شركة الحج والعمرة.'
  }
];

export default function HajjDocumentsPage() {
  return (
    <PageShell
      title="الأوراق والمستندات المطلوبة للحج"
      eyebrow="الحج"
      description="قائمة إرشادية بأهم الأوراق التي يحتاجها الحاج المصري عادة قبل السفر، مع نصيحة بالتأكد من آخر التحديثات الرسمية قبل موسم كل حج."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {documents.map((doc) => (
          <div key={doc.title} className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[color:var(--color-primary)]">{doc.title}</h2>
            <p className="mt-3 text-sm leading-8 text-[color:var(--color-muted)]">{doc.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-ivory)] p-6 text-sm leading-8 text-[color:var(--color-muted)]">
        تتغير بعض الاشتراطات (خاصة الصحية منها) من موسم لآخر بقرار من الجهات الرسمية في مصر والسعودية، لذلك يُنصح دائمًا بالتواصل معنا للتأكد من آخر المستجدات قبل استكمال إجراءات السفر.
      </div>
    </PageShell>
  );
}
