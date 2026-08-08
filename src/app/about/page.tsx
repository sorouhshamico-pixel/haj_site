import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'من نحن',
  description: 'تعرف على هويتنا وماذا نسعى لتقديمه في مجال الحج والعمرة للمسافرين من مصر.'
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container-shell py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[color:var(--color-gold)]">من نحن</p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-primary)]">منصة عربية متخصصة في الحج والعمرة</h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--color-muted)]">
            نعمل على تقديم تجربة معلوماتية مريحة ومميزة للمسافرين الراغبين في الحج أو العمرة، مع ترجمة المعلومات إلى محتوى واضح ومنظم يركز على الفائدة والوضوح.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
