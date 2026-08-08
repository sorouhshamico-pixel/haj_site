import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'المدونة',
  description: 'مقالات ومحتوى دليلي حول الحج والعمرة والاستعداد للسفر.'
};

export default function BlogPage() {
  const posts = [
    { title: 'دليل الحج من مصر', href: '/blog/guide-hajj-from-egypt', category: 'حج' },
    { title: 'نصائح قبل العمرة', href: '/blog/umrah-preparation-tips', category: 'عمرة' }
  ];

  return (
    <>
      <Header />
      <main className="container-shell py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[color:var(--color-gold)]">المدونة</p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-primary)]">محتوى عربي ذي قيمة حول الحج والعمرة</h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--color-muted)]">
            تم بناء نظام مدونة أولي يركز على المقالات المفيدة، مع روابط داخلية واضحة وتنسيق موحد.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.href} href={post.href} className="rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <p className="text-sm font-semibold text-[color:var(--color-gold)]">{post.category}</p>
              <h2 className="mt-3 text-xl font-semibold text-[color:var(--color-primary)]">{post.title}</h2>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
