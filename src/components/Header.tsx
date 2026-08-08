import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, routes } from '@/lib/site-config';

const navItems = [
  { label: 'الرئيسية', href: routes.home },
  { label: 'الحج', href: routes.hajj },
  { label: 'العمرة', href: routes.umrah },
  { label: 'البرامج', href: routes.hajjPrograms },
  { label: 'الدليل', href: routes.blog },
  { label: 'من نحن', href: routes.about },
  { label: 'الأسئلة الشائعة', href: routes.faq },
  { label: 'تواصل معنا', href: routes.contact }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-border)]/80 bg-[color:var(--color-surface)]/95 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href={routes.home} className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-ivory)] p-1">
            <Image src={siteConfig.logo} alt={siteConfig.name} fill className="object-contain" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-[color:var(--color-primary)]">{siteConfig.shortName}</p>
            <p className="text-xs text-[color:var(--color-muted)]">للحج والعمرة</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-[color:var(--color-text)] transition hover:text-[color:var(--color-primary)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href={routes.contact} className="hidden rounded-full bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[color:var(--color-primary-dark)] sm:inline-flex">
            استفسر الآن
          </Link>
          <Link href={routes.contact} className="inline-flex rounded-full border border-[color:var(--color-border)] px-3 py-2 text-sm font-semibold text-[color:var(--color-primary)] lg:hidden">
            تواصل
          </Link>
        </div>
      </div>
    </header>
  );
}
