export const siteConfig = {
  name: 'الشيخ حسن عوض للحج والعمرة',
  shortName: 'الشيخ حسن عوض',
  description: 'منصة عربية مخصصة للحج والعمرة تقدم معلومات موثوقة وبرامج موجهة للمسافرين من مصر.',
  url: 'https://hassanhaj.com',
  logo: '/images/logo.jpg',
  ogImage: '/images/hero-banner.jpg',
  phone: '01025050898',
  phoneSecondary: '01004734146',
  // Candidate number for WhatsApp — kept separate from isWhatsAppEnabled
  // because WhatsApp support on this line hasn't been confirmed yet.
  whatsappNumber: '201025050898',
  isWhatsAppEnabled: false,
  email: '',
  address: '',
  city: 'مصر',
  country: 'مصر',
  googleMaps: '',
  socialLinks: {
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: ''
  },
  businessHours: '',
  defaultWhatsAppMessage: 'السلام عليكم، أرغب في الاستفسار عن برامج الحج والعمرة.'
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

/**
 * True only once a channel that can automatically deliver the contact
 * form's message exists (an email provider, or a confirmed WhatsApp Business
 * API integration) — a phone number for direct calls doesn't count. Update
 * siteConfig.email above (or wire real WhatsApp delivery) and this flips
 * automatically; no other file needs to change.
 */
export const isFormDeliveryConfigured = Boolean(siteConfig.email);

export const routes = {
  home: '/',
  about: '/about',
  services: '/services',
  hajj: '/hajj',
  hajjPrograms: '/hajj/programs',
  umrah: '/umrah',
  umrahPrograms: '/umrah/programs',
  blog: '/blog',
  contact: '/contact',
  faq: '/faq',
  privacy: '/privacy',
  terms: '/terms',
  cancellation: '/cancellation'
};
