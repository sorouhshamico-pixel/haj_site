import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'الحج',
  description: 'دليل شامل للحج من مصر، يشمل المعلومات الأساسية والروابط الداخلية للخطوات والوثائق والاستعداد.'
};

export default function HajjPage() {
  return (
    <>
      <Header />
      <main className="container-shell py-20">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-[color:var(--color-gold)]">الحج</p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-primary)]">الحج من مصر: دليل موثوق ومبسط</h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--color-muted)]">
            يهدف هذا القسم إلى توجيه الحاج من خلال المعلومات الأساسية حول البرامج، الخطوات، الوثائق، والاستعداد للسفر، بما يساعد على فهم الرحلة ومراحلها قبل البدء.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {['البرامج', 'الأوراق المطلوبة', 'مناسك الحج', 'دليل السفر'].map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 text-center text-sm font-semibold text-[color:var(--color-primary)]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
