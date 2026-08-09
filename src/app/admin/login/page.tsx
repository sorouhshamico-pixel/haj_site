'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();

      if (response.ok && data.status === 'ok') {
        router.push('/admin');
        router.refresh();
      } else {
        setError(data.message ?? 'حدث خطأ غير متوقع.');
      }
    } catch {
      setError('تعذر الاتصال بالخادم، حاول مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(160deg,rgba(8,50,38,0.98),rgba(6,42,32,0.98))] px-4 py-16 text-white">
      <div className="w-full max-w-sm rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/20 bg-white/10 p-1.5">
            <Image src={siteConfig.logo} alt={siteConfig.name} fill className="object-contain" />
          </div>
          <p className="mt-4 text-sm font-semibold text-[color:var(--color-gold-soft)]">لوحة التحكم</p>
          <h1 className="mt-1 text-xl font-semibold">تسجيل الدخول</h1>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="mb-1.5 block text-sm text-white/80">اسم المستخدم</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[color:var(--color-gold-soft)] focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm text-white/80">كلمة المرور</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-[color:var(--color-gold-soft)] focus:outline-none"
            />
          </div>

          {error ? (
            <p role="alert" className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-200">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-[color:var(--color-gold)] px-6 py-3 text-sm font-semibold text-[color:var(--color-primary-dark)] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 disabled:cursor-wait disabled:opacity-70"
          >
            {isSubmitting ? 'جارٍ الدخول...' : 'دخول'}
          </button>
        </form>
      </div>
    </main>
  );
}
