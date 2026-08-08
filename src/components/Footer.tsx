import Link from 'next/link';
import { siteConfig, routes } from '@/lib/site-config';

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
      <div className="container-shell grid gap-10 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <h3 className="text-lg font-semibold text-[color:var(--color-primary)]">{siteConfig.name}</h3>
          <p className="mt-4 max-w-md text-sm leading-8 text-[color:var(--color-muted)]">
            منصة عربية حديثة لتقديم المعلومات الواضحة والخدمات الموجهة للحجاج والمعتمرين من مصر، مع تركيز على الوضوح والثقة والراحة.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[color:var(--color-text)]">الحج والعمرة</h4>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-muted)]">
            <li><Link href={routes.hajj}>الحج</Link></li>
            <li><Link href={routes.umrah}>العمرة</Link></li>
            <li><Link href={routes.hajjPrograms}>برامج الحج</Link></li>
            <li><Link href={routes.umrahPrograms}>برامج العمرة</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[color:var(--color-text)]">الدليل</h4>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-muted)]">
            <li><Link href={routes.blog}>المقالات</Link></li>
            <li><Link href={routes.faq}>الأسئلة الشائعة</Link></li>
            <li><Link href={routes.about}>من نحن</Link></li>
            <li><Link href={routes.contact}>تواصل معنا</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[color:var(--color-text)]">السياسات</h4>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-muted)]">
            <li><Link href={routes.privacy}>سياسة الخصوصية</Link></li>
            <li><Link href={routes.terms}>الشروط والأحكام</Link></li>
            <li><Link href={routes.cancellation}>سياسة الإلغاء والاسترداد</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--color-border)] bg-[color:var(--color-ivory)]/60">
        <div className="container-shell flex flex-col gap-3 py-4 text-sm text-[color:var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة.</p>
          <p>مبني مع التركيز على الثقة والوضوح والراحة.</p>
        </div>
      </div>
    </footer>
  );
}
