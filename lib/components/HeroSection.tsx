import type { Locale } from "@/infrastructure/types";
import type { HeroTranslations } from "@/infrastructure/types/translations/sections";
import PhoneFrame from "./PhoneFrame";

interface HeroSectionProps {
  lang: Locale;
  t: HeroTranslations;
}

const HeroSection = ({ lang, t }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden py-20">
      <div
        className="pointer-events-none absolute -inset-x-[10%] -top-[10%] -z-10 h-[720px] blur-[20px]"
        style={{
          background: `
            radial-gradient(60% 60% at 80% 20%, rgba(139, 207, 155, 0.25), transparent 70%),
            radial-gradient(50% 50% at 10% 30%, rgba(247, 220, 111, 0.18), transparent 70%)
          `,
        }}
      />

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[60px]">
        <div className="reveal">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1.5 text-[13px] font-semibold text-primary-deep">
            <span className="h-[7px] w-[7px] rounded-full bg-primary-deep" />
            {t.eyebrow}
          </span>

          <h1 className="mb-4 text-[clamp(48px,7vw,88px)] font-extrabold leading-[0.98] tracking-[-0.035em]">
            <span className="bg-gradient-to-b from-text from-60% to-primary-deep to-60% bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>

          <p className="mb-3.5 max-w-[540px] text-[clamp(20px,2.2vw,26px)] leading-[1.35] text-text-2 [text-wrap:pretty]">
            {t.tagline}
          </p>

          <p className="mb-9 max-w-[520px] text-base leading-relaxed text-neutral [text-wrap:pretty]">
            {t.subtitle}
          </p>

          <div className="flex flex-wrap gap-3" id="download">
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-[14px] bg-text py-3 pl-4 pr-5 font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#0e1620] hover:shadow-md"
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12-1.17.486-2.34 1.177-3.08.769-.83 2.062-1.48 2.987-1.57zM21 17.34c-.36.84-.79 1.62-1.31 2.36-.71 1-1.29 1.69-1.74 2.07-.69.6-1.43.91-2.22.93-.57.01-1.26-.16-2.06-.51-.81-.35-1.55-.51-2.24-.51-.72 0-1.49.16-2.31.51-.83.35-1.5.53-2.01.55-.76.04-1.51-.28-2.26-.96-.5-.43-1.11-1.15-1.83-2.17C2.27 18.4 1.66 17 1.18 15.4.66 13.66.4 11.98.4 10.36.4 8.49.81 6.88 1.63 5.55 2.27 4.49 3.13 3.66 4.21 3.04c1.08-.62 2.24-.94 3.5-.96.6 0 1.39.18 2.39.55s1.64.55 1.92.55c.21 0 .92-.22 2.13-.65 1.14-.4 2.11-.57 2.91-.5 2.16.17 3.79 1.03 4.86 2.58-1.94 1.18-2.9 2.83-2.88 4.94.02 1.64.61 3 1.78 4.08.53.5 1.13.88 1.79 1.16-.14.42-.29.81-.46 1.19z" />
              </svg>
              <span className="flex flex-col text-left leading-tight">
                <span className="text-[11px] font-medium opacity-75 tracking-wide">
                  {t.appStoreLabel}
                </span>
                <span className="text-base font-bold tracking-tight">
                  {t.appStoreName}
                </span>
              </span>
            </a>

            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=dev.davegzarca.ploutos"
              className="inline-flex items-center gap-3 rounded-[14px] bg-text py-3 pl-4 pr-5 font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#0e1620] hover:shadow-md"
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1 1 0 01-.61-.918V2.732a1 1 0 01.609-.918zm10.89 10.893l2.302 2.302-10.937 6.158 8.635-8.46zm3.658-3.581l2.281 1.281a1 1 0 010 1.748l-2.4 1.35-2.532-2.532 2.651-1.847zM5.864 2.658L16.802 8.815l-2.303 2.303L5.864 2.658z" />
              </svg>
              <span className="flex flex-col text-left leading-tight">
                <span className="text-[11px] font-medium opacity-75 tracking-wide">
                  {t.playStoreLabel}
                </span>
                <span className="text-base font-bold tracking-tight">
                  {t.playStoreName}
                </span>
              </span>
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-7 text-[13.5px] text-neutral">
            {[t.badgeNoAccount, t.badgeEncryption, t.badgeOffline].map(
              (badge) => (
                <span key={badge} className="inline-flex items-center gap-2">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-primary text-[11px] font-extrabold text-[#1c3a26]">
                    ✓
                  </span>
                  {badge}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="reveal relative grid min-h-[560px] place-items-center lg:min-h-[620px]">
          <div
            className="pointer-events-none absolute inset-[5%_8%] -z-10 blur-[40px]"
            style={{
              background:
                "radial-gradient(closest-side, rgba(139, 207, 155, 0.35), transparent 70%)",
            }}
          />
          <PhoneFrame
            src={`/assets/screenshots/${lang}/dashboard.png`}
            alt="Ploutos dashboard"
            width={320}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
