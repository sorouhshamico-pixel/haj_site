'use client';

import { useState } from 'react';

type ContactMessage = {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
};

export default function MessagesList({ initialMessages }: { initialMessages: ContactMessage[] }) {
  const [messages, setMessages] = useState(initialMessages);

  async function toggleRead(id: number, isRead: boolean) {
    setMessages((current) => current.map((m) => (m.id === id ? { ...m, is_read: isRead } : m)));
    await fetch(`/api/admin/messages/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_read: isRead })
    });
  }

  if (messages.length === 0) {
    return (
      <div className="mt-8 rounded-[1.25rem] border border-dashed border-[color:var(--color-border)] p-10 text-center text-sm text-[color:var(--color-muted)]">
        لا توجد رسائل حتى الآن.
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-3">
      {messages.map((item) => (
        <div
          key={item.id}
          className={`rounded-[1.25rem] border p-5 shadow-sm transition ${
            item.is_read ? 'border-[color:var(--color-border)] bg-[color:var(--color-surface)]' : 'border-[color:var(--color-gold-soft)] bg-[color:var(--color-ivory)]'
          }`}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                {!item.is_read ? <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[color:var(--color-gold)]" aria-hidden="true" /> : null}
                <p className="font-semibold text-[color:var(--color-primary)]">{item.name}</p>
              </div>
              <p className="mt-1 text-xs text-[color:var(--color-muted)]">
                {new Date(item.created_at).toLocaleString('ar-EG', { dateStyle: 'medium', timeStyle: 'short' })}
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggleRead(item.id, !item.is_read)}
              className="rounded-full border border-[color:var(--color-border)] px-3 py-1.5 text-xs font-semibold text-[color:var(--color-primary)] transition hover:bg-white"
            >
              {item.is_read ? 'غير مقروءة' : 'اجعلها مقروءة'}
            </button>
          </div>

          <p className="mt-3 text-sm leading-7 text-[color:var(--color-text)]">{item.message}</p>

          <div className="mt-4 flex flex-wrap gap-3 border-t border-[color:var(--color-border)] pt-3 text-sm">
            <a href={`tel:${item.phone}`} className="font-semibold text-[color:var(--color-primary)] hover:underline">
              {item.phone}
            </a>
            {item.email ? (
              <a href={`mailto:${item.email}`} className="text-[color:var(--color-muted)] hover:underline">
                {item.email}
              </a>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
