'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogout() {
    setIsLoading(true);
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isLoading}
      className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] px-4 py-2 text-sm font-semibold text-[color:var(--color-muted)] transition hover:border-red-300 hover:text-red-600 disabled:cursor-wait disabled:opacity-60"
    >
      {isLoading ? 'جارٍ الخروج...' : 'تسجيل الخروج'}
    </button>
  );
}
