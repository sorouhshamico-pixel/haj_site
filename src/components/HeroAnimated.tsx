'use client';

import { motion } from 'framer-motion';

export default function HeroAnimated() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[color:var(--color-gold)]/20 blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -left-10 top-1/3 h-56 w-56 rounded-full bg-white/10 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-[color:var(--color-gold-soft)]/10 blur-3xl"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
    </div>
  );
}
