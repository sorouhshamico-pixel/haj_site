import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();
  const paths = [
    '',
    '/about',
    '/services',
    '/hajj',
    '/hajj/programs',
    '/hajj/guide',
    '/hajj/documents',
    '/umrah',
    '/umrah/programs',
    '/umrah/guide',
    '/umrah/documents',
    '/blog',
    '/blog/guide-hajj-from-egypt',
    '/blog/umrah-preparation-tips',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
    '/cancellation'
  ];

  return paths.map((path) => ({ url: `${baseUrl}${path}`, lastModified }));
}
