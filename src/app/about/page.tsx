import Image from 'next/image';
import Reveal from '@/components/motion/Reveal';
import { StaggerGroup, StaggerItem } from '@/components/motion/StaggerGroup';
import { ShieldIcon, StarTagIcon, HeartHandIcon, CompassIcon } from '@/components/icons';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'من نحن',
  description: 'شركة الشيخ حسن عوض لتنظيم رحلات الحج والعمرة من مصر، بإشراف ميداني مباشر على كل رحلة.',
  path: '/about',
  image: '/images/sections/about-group-prophets-mosque.jpg'
});

const values = [
  { icon: ShieldIcon, title: 'الأمانة', text: 'نلتزم بالوضوح والصدق في كل معلومة نقدمها، من الحجز وحتى تفاصيل الرحلة.' },
  { icon: StarTagIcon, title: 'الإتقان', text: 'نحرص على تنظيم كل تفصيلة في الرحلة بعناية، من الإقامة إلى مواعيد المناسك.' },
  { icon: HeartHandIcon, title: 'الرعاية', text: 'نولي اهتمامًا خاصًا لكبار السن والعائلات لضمان راحتهم طوال الرحلة.' },
  { icon: CompassIcon, title: 'المتابعة', text: 'فريقنا معكم ميدانيًا في كل خطوة، من الإحرام وحتى العودة إلى أرض الوطن.' }
];

export default function AboutPage() {
  return (
    <main id="main-content" className="container-shell py-20">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-right">
          <p className="eyebrow">من نحن</p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-primary)]">شركة الشيخ حسن عوض لرحلات الحج والعمرة</h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--color-muted)]">
            ننظم رحلات الحج والعمرة للمسافرين من مصر بإشراف ميداني مباشر من الشيخ حسن عوض وفريقه، في مكة المكرمة والمدينة المنورة، من لحظة التسجيل وحتى العودة إلى أرض الوطن.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="mt-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.75rem] border border-[color:var(--color-border)] shadow-sm sm:aspect-[21/8]">
          <Image
            src="/images/sections/about-group-prophets-mosque.jpg"
            alt="الشيخ حسن عوض وفريقه مع مجموعة من الحجاج في المسجد النبوي الشريف"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
        </div>
      </Reveal>

      <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <StaggerItem key={value.title}>
            <div className="flex h-full flex-col gap-3 rounded-[1.25rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-primary)]/10">
                <value.icon className="h-5 w-5 text-[color:var(--color-primary)]" />
              </div>
              <p className="font-semibold text-[color:var(--color-primary)]">{value.title}</p>
              <p className="text-sm leading-7 text-[color:var(--color-muted)]">{value.text}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Reveal className="mx-auto mt-14 max-w-3xl text-center lg:mx-0 lg:text-right">
        <p className="eyebrow">كلمة المدير</p>
        <h2 className="section-title mt-2">تعرف على الشيخ حسن عوض</h2>
        <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-right shadow-sm">
          <video
            controls
            preload="none"
            poster="/images/gallery/trip-highlights-poster.jpg"
            className="aspect-video w-full bg-black"
          >
            <source src="/videos/trip-highlights.mp4" type="video/mp4" />
          </video>
        </div>
      </Reveal>

      <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2">
        <StaggerItem>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] border border-[color:var(--color-border)] shadow-sm">
            <Image
              src="/images/sections/about-team-lobby.jpg"
              alt="فريق شركة الشيخ حسن عوض قبل انطلاق إحدى رحلات الحج والعمرة"
              fill
              sizes="(min-width: 640px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="flex h-full flex-col justify-center gap-3 rounded-[1.5rem] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 text-center shadow-sm sm:text-right">
            <p className="eyebrow">فريق العمل</p>
            <h3 className="text-xl font-semibold text-[color:var(--color-primary)]">فريق ميداني مجرّب يعرف الطريق جيدًا</h3>
            <p className="text-sm leading-8 text-[color:var(--color-muted)]">
              يضم فريقنا مرشدين ومشرفين مروا بأنفسهم برحلات حج وعمرة عديدة، ويرافقون كل مجموعة على أرض الواقع لضمان راحة الحاج والمعتمر في كل خطوة.
            </p>
          </div>
        </StaggerItem>
      </StaggerGroup>
    </main>
  );
}
