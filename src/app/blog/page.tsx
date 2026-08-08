import Link from 'next/link';
import { posts } from '@/lib/blog-posts';
import Reveal from '@/components/motion/Reveal';
import { StaggerGroup, StaggerItem } from '@/components/motion/StaggerGroup';

export const metadata = {
  title: 'المدونة',
  description: 'مقالات ودلائل موثوقة حول الحج والعمرة، مناسك الأداء، والاستعداد للسفر من مصر.',
  alternates: { canonical: '/blog' }
};

export default function BlogPage() {
  return (
    <main id="main-content" className="container-shell py-20">
      <Reveal>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[color:var(--color-gold)]">المدونة</p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-primary)]">محتوى عربي ذي قيمة حول الحج والعمرة</h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--color-muted)]">
            مقالات ودلائل عملية تساعدك على الاستعداد لرحلة الحج أو العمرة، من المناسك خطوة بخطوة إلى النصائح العملية قبل السفر.
          </p>
        </div>
      </Reveal>
      <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <StaggerItem key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block h-full rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <p className="text-sm font-semibold text-[color:var(--color-gold)]">{post.category}</p>
              <h2 className="mt-3 text-xl font-semibold text-[color:var(--color-primary)]">{post.title}</h2>
              <p className="mt-3 text-sm leading-8 text-[color:var(--color-muted)]">{post.excerpt}</p>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </main>
  );
}
