'use client';

import { useState, type FormEvent } from 'react';

type Faq = { id?: number; question: string; answer: string };

export default function FaqManager({ initialFaqs }: { initialFaqs: Faq[] }) {
  const [faqs, setFaqs] = useState(initialFaqs);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editQuestion, setEditQuestion] = useState('');
  const [editAnswer, setEditAnswer] = useState('');
  const [error, setError] = useState('');

  async function handleCreate(event: FormEvent) {
    event.preventDefault();
    if (!newQuestion.trim() || !newAnswer.trim()) return;
    setIsSubmitting(true);
    setError('');

    const response = await fetch('/api/admin/faqs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: newQuestion, answer: newAnswer })
    });
    const data = await response.json();

    if (response.ok && data.status === 'ok') {
      setFaqs((current) => [...current, data.faq]);
      setNewQuestion('');
      setNewAnswer('');
    } else {
      setError(data.message ?? 'حدث خطأ أثناء الإضافة.');
    }
    setIsSubmitting(false);
  }

  function startEdit(faq: Faq) {
    setEditingId(faq.id ?? null);
    setEditQuestion(faq.question);
    setEditAnswer(faq.answer);
  }

  async function saveEdit(id: number) {
    if (!editQuestion.trim() || !editAnswer.trim()) return;
    await fetch(`/api/admin/faqs/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: editQuestion, answer: editAnswer })
    });
    setFaqs((current) => current.map((f) => (f.id === id ? { ...f, question: editQuestion, answer: editAnswer } : f)));
    setEditingId(null);
  }

  async function handleDelete(id: number) {
    if (!window.confirm('متأكد إنك عايز تحذف السؤال ده؟')) return;
    await fetch(`/api/admin/faqs/${id}`, { method: 'DELETE' });
    setFaqs((current) => current.filter((f) => f.id !== id));
  }

  return (
    <div className="mt-8 space-y-8">
      <form onSubmit={handleCreate} className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm">
        <h2 className="font-semibold text-[color:var(--color-primary)]">إضافة سؤال جديد</h2>
        <div className="mt-4 space-y-3">
          <input
            type="text"
            value={newQuestion}
            onChange={(event) => setNewQuestion(event.target.value)}
            placeholder="السؤال"
            required
            className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3 text-sm"
          />
          <textarea
            value={newAnswer}
            onChange={(event) => setNewAnswer(event.target.value)}
            placeholder="الإجابة"
            required
            rows={3}
            className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3 text-sm"
          />
        </div>
        {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 rounded-full bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[color:var(--color-primary-dark)] disabled:cursor-wait disabled:opacity-70"
        >
          {isSubmitting ? 'جارٍ الإضافة...' : 'إضافة السؤال'}
        </button>
      </form>

      <div className="space-y-3">
        {faqs.map((faq) => (
          <div key={faq.id} className="rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-sm">
            {editingId === faq.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={editQuestion}
                  onChange={(event) => setEditQuestion(event.target.value)}
                  className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-2.5 text-sm"
                />
                <textarea
                  value={editAnswer}
                  onChange={(event) => setEditAnswer(event.target.value)}
                  rows={3}
                  className="w-full rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-2.5 text-sm"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => faq.id && saveEdit(faq.id)}
                    className="rounded-full bg-[color:var(--color-primary)] px-4 py-2 text-xs font-semibold text-white"
                  >
                    حفظ
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="rounded-full border border-[color:var(--color-border)] px-4 py-2 text-xs font-semibold text-[color:var(--color-muted)]"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="font-semibold text-[color:var(--color-primary)]">{faq.question}</p>
                  <div className="flex flex-shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={() => startEdit(faq)}
                      className="rounded-full border border-[color:var(--color-border)] px-3 py-1.5 text-xs font-semibold text-[color:var(--color-primary)] transition hover:bg-[color:var(--color-ivory)]"
                    >
                      تعديل
                    </button>
                    <button
                      type="button"
                      onClick={() => faq.id && handleDelete(faq.id)}
                      className="rounded-full border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                    >
                      حذف
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted)]">{faq.answer}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
