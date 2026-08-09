import Link from 'next/link';
import { getSql, isDatabaseConfigured } from '@/lib/db';

export const dynamic = 'force-dynamic';

type TopPage = { path: string; views: number };

export default async function AdminDashboardPage() {
  if (!isDatabaseConfigured) {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-[color:var(--color-primary)]">نظرة عامة</h1>
        <div className="mt-6 rounded-[1.25rem] border border-[color:var(--color-gold-soft)] bg-[color:var(--color-ivory)] p-6 text-sm leading-8 text-[color:var(--color-primary-dark)]">
          لوحة التحكم شغالة، لكن قاعدة البيانات لسه مش متصلة، فمفيش إحصائيات أو رسائل تظهر هنا حاليًا. اتبع خطوات الإعداد
          في <code className="rounded bg-white/60 px-1.5 py-0.5">docs/ADMIN-SETUP.md</code> لتفعيلها.
        </div>
      </div>
    );
  }

  const sql = getSql();

  const [messageStats, viewStats, topPagesRaw] = await Promise.all([
    sql`SELECT count(*)::int AS total, count(*) FILTER (WHERE NOT is_read)::int AS unread FROM contact_messages`,
    sql`SELECT count(*)::int AS total FROM page_views WHERE created_at > now() - interval '30 days'`,
    sql`
      SELECT path, count(*)::int AS views
      FROM page_views
      WHERE created_at > now() - interval '30 days'
      GROUP BY path
      ORDER BY views DESC
      LIMIT 5
    `
  ]);

  const totalMessages = (messageStats[0]?.total as number) ?? 0;
  const unreadMessages = (messageStats[0]?.unread as number) ?? 0;
  const totalViews = (viewStats[0]?.total as number) ?? 0;
  const topPages = topPagesRaw as unknown as TopPage[];

  const stats = [
    { label: 'زيارات آخر 30 يوم', value: totalViews },
    { label: 'رسائل التواصل', value: totalMessages },
    { label: 'رسائل غير مقروءة', value: unreadMessages }
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-[color:var(--color-primary)]">نظرة عامة</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm">
            <p className="text-3xl font-semibold text-[color:var(--color-primary)]">{stat.value}</p>
            <p className="mt-1 text-sm text-[color:var(--color-muted)]">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[color:var(--color-primary)]">أكثر الصفحات زيارة (آخر 30 يوم)</h2>
        {topPages.length === 0 ? (
          <p className="mt-4 text-sm text-[color:var(--color-muted)]">لا توجد بيانات كافية بعد.</p>
        ) : (
          <ul className="mt-4 space-y-2">
            {topPages.map((page) => (
              <li key={page.path} className="flex items-center justify-between border-b border-[color:var(--color-border)] py-2 text-sm last:border-0">
                <span className="text-[color:var(--color-text)]" dir="ltr">{page.path}</span>
                <span className="font-semibold text-[color:var(--color-primary)]">{page.views}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {unreadMessages > 0 ? (
        <Link
          href="/admin/messages"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[color:var(--color-primary-dark)]"
        >
          عرض {unreadMessages} رسالة غير مقروءة
        </Link>
      ) : null}
    </div>
  );
}
