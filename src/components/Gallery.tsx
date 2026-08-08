import GalleryGrid from '@/components/GalleryGrid';
import Reveal from '@/components/motion/Reveal';

const photos = [
  { src: '/images/gallery/kaaba-ihram-night-01.jpg', alt: 'حجاج بالإحرام أمام الكعبة المشرفة ليلًا' },
  { src: '/images/gallery/arafat-hajj-group-05.jpg', alt: 'مجموعة حجاج في يوم الوقوف بعرفة' },
  { src: '/images/gallery/medina-mosque-group-04.jpg', alt: 'مجموعة معتمرين أمام المسجد النبوي الشريف' },
  { src: '/images/gallery/kaaba-group-women-02.jpg', alt: 'مجموعة من المعتمرات أمام الكعبة المشرفة' },
  { src: '/images/gallery/kaaba-group-elders-06.jpg', alt: 'حجاج من كبار السن حول الكعبة المشرفة' },
  { src: '/images/gallery/medina-mosque-pilgrims-08.jpg', alt: 'معتمرون أمام قبة المسجد النبوي الخضراء' },
  { src: '/images/gallery/medina-mosque-group-03.jpg', alt: 'مجموعة حجاج وسط ساحات المسجد النبوي' },
  { src: '/images/gallery/trip-guides-07.jpg', alt: 'فريق الإشراف والمتابعة أثناء رحلة الحج والعمرة' }
];

export default function Gallery() {
  return (
    <section className="bg-[color:var(--color-background)] py-20">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[color:var(--color-gold)]">من رحلاتنا</p>
              <h2 className="section-title mt-2">لحظات حقيقية من رحلات الحج والعمرة السابقة</h2>
            </div>
          </div>
        </Reveal>
        <GalleryGrid photos={photos} />
      </div>
    </section>
  );
}
