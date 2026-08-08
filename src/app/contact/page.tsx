export const metadata = {
  title: 'تواصل معنا',
  description: 'استخدم نموذج التواصل أو واتساب للاستفسار عن الحج والعمرة.'
};

export default function ContactPage() {
  return (
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
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[color:var(--color-text)]">الاسم</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3"
                placeholder="الاسم بالكامل"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[color:var(--color-text)]">رقم الهاتف</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3"
                placeholder="01xxxxxxxxx"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[color:var(--color-text)]">البريد الإلكتروني</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[color:var(--color-text)]">الرسالة</label>
              <textarea
                id="message"
                name="message"
                required
                className="min-h-32 w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3"
                placeholder="اكتب استفسارك هنا"
              />
            </div>
            <button type="submit" className="rounded-full bg-[color:var(--color-primary)] px-6 py-3 font-semibold text-white transition hover:bg-[color:var(--color-primary-dark)]">
              إرسال الاستفسار
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
