import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main-content" className="container-shell flex min-h-[70vh] items-center justify-center py-20">
      <div className="max-w-2xl text-center">
        <p className="text-sm font-semibold text-[color:var(--color-gold)]">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-primary)]">الصفحة غير موجودة</h1>
        <p className="mt-6 text-lg leading-8 text-[color:var(--color-muted)]">
          قد تكون الصفحة التي تبحث عنها غير متاحة أو تم نقلها. يمكنك العودة إلى الرئيسية أو تصفح الأقسام المهمة.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[color:var(--color-primary)] px-6 py-3 font-semibold text-white">
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}
