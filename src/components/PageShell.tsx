import Reveal from '@/components/motion/Reveal';

export default function PageShell({
  title,
  eyebrow,
  description,
  children
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <main id="main-content" className="container-shell py-20">
      <Reveal className="max-w-4xl">
        {eyebrow ? <p className="text-sm font-semibold text-[color:var(--color-gold)]">{eyebrow}</p> : null}
        <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-primary)]">{title}</h1>
        {description ? <p className="mt-6 text-lg leading-8 text-[color:var(--color-muted)]">{description}</p> : null}
      </Reveal>
      <Reveal delay={0.1} className="mt-10">{children}</Reveal>
    </main>
  );
}
