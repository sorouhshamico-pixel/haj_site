const highlights = [
  'معلومات موثوقة',
  'توجيه واضح',
  'عناصر سفر منظمة',
  'تصميم مناسب للهواتف'
];

export default function TrustStrip() {
  return (
    <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-surface)]/80">
      <div className="container-shell flex flex-wrap items-center justify-center gap-3 py-4 text-sm text-[color:var(--color-muted)]">
        {highlights.map((item) => (
          <span key={item} className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-ivory)] px-4 py-2">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
