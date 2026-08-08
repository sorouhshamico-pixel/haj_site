import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { hajjPrograms, umrahPrograms } from '@/lib/programs';
import { posts } from '@/lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();
  const paths = [
    '',
    '/about',
    '/services',
    '/hajj',
    '/hajj/programs',
    ...hajjPrograms.map((program) => `/hajj/programs/${program.slug}`),
    '/hajj/guide',
    '/hajj/documents',
    '/umrah',
    '/umrah/programs',
    ...umrahPrograms.map((program) => `/umrah/programs/${program.slug}`),
    '/umrah/guide',
    '/umrah/documents',
    '/makkah',
    '/madinah',
    '/blog',
    ...posts.map((post) => `/blog/${post.slug}`),
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
    '/cancellation'
  ];

  return paths.map((path) => ({ url: `${baseUrl}${path}`, lastModified }));
}
