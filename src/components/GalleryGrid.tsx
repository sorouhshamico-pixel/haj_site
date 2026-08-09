'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, m } from 'framer-motion';
import { StaggerGroup, StaggerItem } from '@/components/motion/StaggerGroup';

type Photo = { src: string; alt: string };

export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;

  const goPrev = useCallback(() => {
    setActiveIndex((current) => (current === null ? null : (current - 1 + photos.length) % photos.length));
  }, [photos.length]);

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current === null ? null : (current + 1) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, goPrev, goNext]);

  return (
    <>
      <StaggerGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <StaggerItem key={photo.src}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`عرض الصورة: ${photo.alt}`}
              className="group relative block aspect-square w-full overflow-hidden rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </button>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <AnimatePresence>
        {activePhoto ? (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setActiveIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.alt}
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goPrev();
              }}
              aria-label="الصورة السابقة"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:right-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15 19-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goNext();
              }}
              aria-label="الصورة التالية"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:left-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
              </svg>
            </button>

            <div className="relative max-h-[85vh] w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
              <AnimatePresence mode="wait">
                <m.div
                  key={activePhoto.src}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
                >
                  <Image src={activePhoto.src} alt={activePhoto.alt} fill sizes="90vw" className="object-contain bg-black" />
                </m.div>
              </AnimatePresence>

              <p className="mt-3 text-center text-xs text-white/50">{activeIndex! + 1} / {photos.length}</p>

              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="إغلاق"
                className="absolute -top-4 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-white text-[color:var(--color-primary-dark)] shadow-lg sm:-right-4 sm:left-auto sm:top-0 sm:translate-x-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
