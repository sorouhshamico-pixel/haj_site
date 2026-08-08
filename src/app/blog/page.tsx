import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'المدونة',
  description: 'مقالات ومحتوى دليلي حول الحج والعمرة والاستعداد للسفر.'
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="container-shell py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[color:var(--color-gold)]">المدونة</p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-primary)]">محتوى عربي ذي قيمة حول الحج والعمرة</h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--color-muted)]">
            سيتم توسيع هذه الصفحة لاحقًا بمقالات مخصصة، مما يعزز المحتوى والاستراتيجية السيو.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
