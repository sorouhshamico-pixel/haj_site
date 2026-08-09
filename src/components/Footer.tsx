import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, routes, phoneInternational, phoneSecondaryInternational, whatsappLink } from '@/lib/site-config';
import GeometricPattern from '@/components/GeometricPattern';
import IslamicMotifs from '@/components/IslamicMotifs';
import { FacebookIcon, InstagramIcon, TiktokIcon } from '@/components/SocialIcons';

const navColumns = [
  {
    title: 'الحج والعمرة',
    links: [
      { label: 'الحج', href: routes.hajj },
      { label: 'العمرة', href: routes.umrah },
      { label: 'برامج الحج', href: routes.hajjPrograms },
      { label: 'برامج العمرة', href: routes.umrahPrograms },
      { label: 'مكة المكرمة', href: routes.makkah },
      { label: 'المدينة المنورة', href: routes.madinah }
    ]
  },
  {
    title: 'الدليل',
    links: [
      { label: 'المقالات', href: routes.blog },
      { label: 'الأسئلة الشائعة', href: routes.faq },
      { label: 'من نحن', href: routes.about },
      { label: 'تواصل معنا', href: routes.contact }
    ]
  },
  {
    title: 'السياسات',
    links: [
      { label: 'سياسة الخصوصية', href: routes.privacy },
      { label: 'الشروط والأحكام', href: routes.terms },
      { label: 'سياسة الإلغاء والاسترداد', href: routes.cancellation }
    ]
  }
];

const socialItems = [
  { key: 'facebook', href: siteConfig.socialLinks.facebook, label: 'صفحتنا على فيسبوك', Icon: FacebookIcon },
  { key: 'instagram', href: siteConfig.socialLinks.instagram, label: 'صفحتنا على إنستغرام', Icon: InstagramIcon },
  { key: 'tiktok', href: siteConfig.socialLinks.tiktok, label: 'صفحتنا على تيك توك', Icon: TiktokIcon }
];

const footerLinkClass =
  'group relative inline-block text-white/70 transition hover:text-[color:var(--color-gold-soft)] after:absolute after:-bottom-1 after:right-0 after:h-px after:w-0 after:bg-[color:var(--color-gold-soft)] after:transition-all after:duration-300 after:content-[\'\'] hover:after:w-full';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(160deg,rgba(8,50,38,0.98),rgba(11,59,44,0.95))] text-white">
      <GeometricPattern id="footer-geo" className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.05]" />
      <IslamicMotifs tone="light" />

      <div className="container-shell relative grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/20 bg-white/10 p-1">
              <Image src={siteConfig.logo} alt={siteConfig.name} fill className="object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-white">{siteConfig.name}</h3>
          </div>
          <p className="mt-5 max-w-md text-sm leading-8 text-white/70">
            شركة متخصصة في تنظيم رحلات الحج والعمرة من مصر، بإشراف ميداني مباشر ومتابعة مستمرة لضمان رحلة مريحة وواضحة من التسجيل وحتى العودة.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 text-sm text-white/80">
            <a href={`tel:${phoneInternational}`} className="inline-flex w-fit items-center gap-2 transition hover:text-[color:var(--color-gold-soft)]">
              {siteConfig.phone}
            </a>
            <a href={`tel:${phoneSecondaryInternational}`} className="inline-flex w-fit items-center gap-2 transition hover:text-[color:var(--color-gold-soft)]">
              {siteConfig.phoneSecondary}
            </a>
            {whatsappLink ? (
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 transition hover:text-[color:var(--color-gold-soft)]">
                تواصل عبر واتساب
              </a>
            ) : null}
          </div>

          <div className="mt-7 flex items-center gap-3">
            {socialItems.map(({ key, href, label, Icon }) =>
              href ? (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:-translate-y-1 hover:border-transparent hover:bg-[color:var(--color-gold)] hover:text-[color:var(--color-primary-dark)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ) : (
                <span
                  key={key}
                  aria-hidden="true"
                  title={`${label} (قريبًا)`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/25"
                >
                  <Icon className="h-4 w-4" />
                </span>
              )
            )}
          </div>
        </div>

        {navColumns.map((column) => (
          <div key={column.title}>
            <h4 className="text-sm font-semibold tracking-normal text-[color:var(--color-gold-soft)]">{column.title}</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة.</p>
          <p className="hidden sm:block">معكم بثقة في رحلة الحج والعمرة، من التسجيل وحتى العودة.</p>
        </div>
      </div>
    </footer>
  );
}
