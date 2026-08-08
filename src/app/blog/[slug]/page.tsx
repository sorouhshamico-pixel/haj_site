import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/PageShell';

const posts = [
  {
    slug: 'guide-hajj-from-egypt',
    title: 'دليل الحج من مصر',
    excerpt: 'مقال مختصر يربط بين المعلومات الأساسية والتوجيه قبل الرحلة.',
    category: 'حج'
  },
  {
    slug: 'umrah-preparation-tips',
    title: 'نصائح قبل العمرة',
    excerpt: 'مقال يوضح بعض الخطوات الأساسية للاستعداد قبل الرحلة.',
    category: 'عمرة'
  }
];

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PageShell title={post.title} eyebrow={post.category} description={post.excerpt}>
      <div className="rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-sm">
        <p className="text-sm leading-8 text-[color:var(--color-muted)]">
          هذا نموذج مقال مبدئي داخل نظام المدونة، جاهز لاستبداله بمقالات حقيقية لاحقًا مع تحسين SEO وملفات صور مناسبة.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/blog" className="rounded-full bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white">العودة للمدونة</Link>
        </div>
      </div>
    </PageShell>
  );
}
