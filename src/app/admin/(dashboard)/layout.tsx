import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import LogoutButton from '@/components/admin/LogoutButton';

export const metadata: Metadata = {
  robots: { index: false, follow: false }
};

const navItems = [
  { label: 'نظرة عامة', href: '/admin' },
  { label: 'رسائل التواصل', href: '/admin/messages' },
  { label: 'الأسئلة الشائعة', href: '/admin/faqs' }
];

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[color:var(--color-background)]" dir="rtl">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 flex-shrink-0 border-l border-[color:var(--color-border)] bg-[color:var(--color-surface)] lg:block">
          <div className="flex h-full flex-col p-6">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-ivory)] p-1">
                <Image src={siteConfig.logo} alt={siteConfig.name} fill className="object-contain" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-[color:var(--color-primary)]">لوحة التحكم</p>
                <p className="text-xs text-[color:var(--color-muted)]">{siteConfig.shortName}</p>
              </div>
            </div>

            <nav className="mt-8 flex flex-1 flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-[color:var(--color-text)] transition hover:bg-[color:var(--color-ivory)] hover:text-[color:var(--color-primary)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link href="/" className="mt-6 text-xs text-[color:var(--color-muted)] transition hover:text-[color:var(--color-primary)]">
              ← العودة إلى الموقع
            </Link>
          </div>
        </aside>

        <div className="flex flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-6 py-4">
            <nav className="flex gap-4 lg:hidden">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-medium text-[color:var(--color-text)] hover:text-[color:var(--color-primary)]">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden lg:block" />
            <LogoutButton />
          </header>
          <main className="flex-1 p-6 lg:p-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
