import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { posts, getPostBySlug } from '@/lib/blog-posts';
import { siteConfig } from '@/lib/site-config';
import { breadcrumbJsonLd } from '@/lib/breadcrumbs';
import { buildMetadata } from '@/lib/metadata';

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {};
  }
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: 'article'
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'الرئيسية', path: '/' },
    { name: 'المدونة', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` }
  ]);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.image}`,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: { '@type': 'Organization', name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    inLanguage: 'ar'
  };

  return (
    <PageShell
      title={post.title}
      eyebrow={post.category}
      description={post.excerpt}
      image={{ src: post.image, alt: post.imageAlt }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="space-y-8 rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-sm">
        {post.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="text-lg font-semibold text-[color:var(--color-primary)]">{section.heading}</h2>
            <div className="mt-3 space-y-3">
              {section.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-sm leading-8 text-[color:var(--color-muted)]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-wrap gap-3 border-t border-[color:var(--color-border)] pt-6">
          <Link href="/blog" className="rounded-full bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white">
            العودة للمدونة
          </Link>
          <Link href="/contact" className="rounded-full border border-[color:var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-primary)]">
            تواصل معنا للاستفسار
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
