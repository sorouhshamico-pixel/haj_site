'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, routes, phoneInternational } from '@/lib/site-config';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-border)]/80 bg-[color:var(--color-surface)]/95 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href={routes.home} className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
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

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${phoneInternational}`}
            aria-label={`اتصل بنا على ${siteConfig.phone}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-primary)] transition hover:bg-[color:var(--color-ivory)] sm:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h.75a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 0 0 .417-1.173L5.963 3.852a1.125 1.125 0 0 0-1.091-.852H3.5A1.25 1.25 0 0 0 2.25 4.25v2.5Z" />
            </svg>
          </a>
          <a
            href={`tel:${phoneInternational}`}
            className="hidden rounded-full bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[color:var(--color-primary-dark)] sm:inline-flex"
          >
            اتصل بنا: {siteConfig.phone}
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-primary)] lg:hidden"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav id="mobile-nav" className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)] lg:hidden">
          <div className="container-shell flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-[color:var(--color-text)] transition hover:bg-[color:var(--color-ivory)] hover:text-[color:var(--color-primary)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
