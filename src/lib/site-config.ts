// Resolves in this order: an explicit SITE_URL override, Vercel's
// auto-injected production domain (updates itself once a custom domain like
// hassanhaj.com is attached in the Vercel dashboard — no code change
// needed), Vercel's per-deployment URL, then the intended final domain.
function resolveSiteUrl() {
  if (process.env.SITE_URL) return process.env.SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'https://hassanhaj.com';
}

export const siteConfig = {
  name: 'الشيخ حسن عوض للحج والعمرة',
  shortName: 'الشيخ حسن عوض',
  description: 'شركة الشيخ حسن عوض لتنظيم رحلات الحج والعمرة من مصر، بإشراف ميداني مباشر وبرامج موثوقة لمختلف الفئات.',
  url: resolveSiteUrl(),
  logo: '/images/logo.jpg',
  ogImage: '/images/hero-banner.jpg',
  phone: '01025050898',
  phoneSecondary: '01004734146',
  whatsappNumber: '201025050898',
  whatsappNumberSecondary: '201004734146',
  isWhatsAppEnabled: true,
  email: '',
  address: '',
  city: 'مصر',
  country: 'مصر',
  googleMaps: '',
  socialLinks: {
    facebook: '',
    instagram: '',
    tiktok: '',
    twitter: '',
    youtube: ''
  },
  businessHours: '',
  defaultWhatsAppMessage: 'السلام عليكم ورحمة الله، أرغب في الاستفسار عن برامج الحج والعمرة لديكم.'
};

function toEgyptInternational(localNumber: string) {
  return localNumber ? `+20${localNumber.replace(/^0/, '')}` : '';
}

export const phoneInternational = toEgyptInternational(siteConfig.phone);
export const phoneSecondaryInternational = toEgyptInternational(siteConfig.phoneSecondary);

export const whatsappLink =
  siteConfig.isWhatsAppEnabled && siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.defaultWhatsAppMessage)}`
    : '';

export const whatsappLinkSecondary =
  siteConfig.isWhatsAppEnabled && siteConfig.whatsappNumberSecondary
    ? `https://wa.me/${siteConfig.whatsappNumberSecondary}?text=${encodeURIComponent(siteConfig.defaultWhatsAppMessage)}`
    : '';

/**
 * True once a channel that can actually deliver the contact form's message
 * exists — either the admin dashboard's database inbox (DATABASE_URL set) or
 * a real email address. A phone number for direct calls doesn't count. Set
 * DATABASE_URL (see docs/ADMIN-SETUP.md) or fill in siteConfig.email above and
 * this flips automatically; no other file needs to change.
 */
export const isFormDeliveryConfigured = Boolean(siteConfig.email) || Boolean(process.env.DATABASE_URL);

export const routes = {
  home: '/',
  about: '/about',
  services: '/services',
  hajj: '/hajj',
  hajjPrograms: '/hajj/programs',
  umrah: '/umrah',
  umrahPrograms: '/umrah/programs',
  makkah: '/makkah',
  madinah: '/madinah',
  blog: '/blog',
  contact: '/contact',
  faq: '/faq',
  privacy: '/privacy',
  terms: '/terms',
  cancellation: '/cancellation'
};
