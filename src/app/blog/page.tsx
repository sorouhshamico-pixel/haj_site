import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/blog-posts';
import Reveal from '@/components/motion/Reveal';
import { StaggerGroup, StaggerItem } from '@/components/motion/StaggerGroup';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'المدونة',
  description: 'مقالات ودلائل موثوقة حول الحج والعمرة، مناسك الأداء، والاستعداد للسفر من مصر.',
  path: '/blog',
  image: '/images/gallery/trip-guides-07.jpg'
});

export default function BlogPage() {
  return (
    <main id="main-content" className="container-shell py-20">
      <Reveal>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[color:var(--color-gold)]">المدونة</p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-primary)]">دليلك الكامل لرحلة الحج والعمرة</h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--color-muted)]">
            مقالات ودلائل عملية تساعدك على الاستعداد لرحلة الحج أو العمرة، من المناسك خطوة بخطوة إلى النصائح العملية قبل السفر.
          </p>
        </div>
      </Reveal>
      <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <StaggerItem key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block h-full overflow-hidden rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[color:var(--color-primary)] backdrop-blur">
                  {post.category}
                </span>
              </div>
              <div className="p-7">
                <h2 className="text-xl font-semibold text-[color:var(--color-primary)]">{post.title}</h2>
                <p className="mt-3 text-sm leading-8 text-[color:var(--color-muted)]">{post.excerpt}</p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </main>
  );
}
