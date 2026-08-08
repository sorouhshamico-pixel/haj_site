export const metadata = {
  title: 'العمرة',
  description: 'صفحة عمرة موجهة للمسافرين من مصر، مع محتوى واضح حول الخطوات والوثائق والاستعداد.'
};

export default function UmrahPage() {
  return (
    <main className="container-shell py-20">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold text-[color:var(--color-gold)]">العمرة</p>
        <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-primary)]">العمرة من مصر: معلومات عملية ومباشرة</h1>
        <p className="mt-6 text-lg leading-8 text-[color:var(--color-muted)]">
          يركز هذا القسم على توضيح خطوات العمرة، الاستعدادات اللازمة، والتفاصيل الأساسية التي يحتاجها المعتمر قبل السفر.
        </p>
      </div>
    </main>
  );
}
