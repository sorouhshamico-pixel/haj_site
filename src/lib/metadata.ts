import type { Metadata } from 'next';
import { siteConfig } from './site-config';

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = 'website'
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
}): Metadata {
  const ogImage = image ?? siteConfig.ogImage;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      type,
      locale: 'ar_EG',
      url: path,
      siteName: siteConfig.name,
      images: [{ url: ogImage }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  };
}
