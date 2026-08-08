import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'تواصل معنا',
  description: 'استخدم نموذج التواصل أو واتساب للاستفسار عن الحج والعمرة.'
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="container-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold text-[color:var(--color-gold)]">تواصل معنا</p>
            <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-primary)]">نحن هنا للإجابة على استفساراتك</h1>
            <p className="mt-6 text-lg leading-8 text-[color:var(--color-muted)]">
              يمكنك التواصل معنا للاستفسار عن البرامج أو طلب المساعدة في ترتيبات السفر.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-sm">
            <form className="space-y-4">
              <input className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3" placeholder="الاسم" />
              <input className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3" placeholder="رقم الهاتف" />
              <input className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3" placeholder="البريد الإلكتروني" />
              <textarea className="min-h-32 w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3" placeholder="الرسالة" />
              <button className="rounded-full bg-[color:var(--color-primary)] px-6 py-3 font-semibold text-white">إرسال الاستفسار</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
