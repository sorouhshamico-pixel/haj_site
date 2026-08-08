export const metadata = {
  title: 'من نحن',
  description: 'شركة الشيخ حسن عوض لتنظيم رحلات الحج والعمرة من مصر، بإشراف ميداني مباشر على كل رحلة.',
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <main id="main-content" className="container-shell py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-[color:var(--color-gold)]">من نحن</p>
        <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-primary)]">شركة الشيخ حسن عوض لرحلات الحج والعمرة</h1>
        <p className="mt-6 text-lg leading-8 text-[color:var(--color-muted)]">
          ننظم رحلات الحج والعمرة للمسافرين من مصر بإشراف ميداني مباشر من الشيخ حسن عوض وفريقه، في مكة المكرمة والمدينة المنورة، من لحظة التسجيل وحتى العودة إلى أرض الوطن.
        </p>
      </div>

      <div className="mt-14 max-w-3xl">
        <p className="text-sm font-semibold text-[color:var(--color-gold)]">كلمة المدير</p>
        <h2 className="section-title mt-2">تعرف على الشيخ حسن عوض</h2>
        <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-sm">
          <video
            controls
            preload="none"
            poster="/images/gallery/trip-highlights-poster.jpg"
            className="aspect-video w-full bg-black"
          >
            <source src="/videos/trip-highlights.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
}
