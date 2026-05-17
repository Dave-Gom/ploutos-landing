import type { HowItWorksTranslations } from "@/infrastructure/types/translations/sections";

interface HowItWorksSectionProps {
  t: HowItWorksTranslations;
}

const HowItWorksSection = ({ t }: HowItWorksSectionProps) => {
  const steps = [
    { num: "01", ...t.step1, hasArrow: true },
    { num: "02", ...t.step2, hasArrow: true },
    { num: "03", ...t.step3, hasArrow: false },
  ];

  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="reveal mx-auto mb-14 max-w-[760px] text-center">
          <span className="mb-3 inline-block text-[13px] font-semibold uppercase tracking-[0.08em] text-primary-deep">
            {t.eyebrow}
          </span>
          <h2 className="mb-3.5 text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.05] tracking-[-0.025em] [text-wrap:balance]">
            {t.title}
          </h2>
          <p className="text-lg text-text-2 [text-wrap:pretty]">{t.subtitle}</p>
        </div>

        <div className="relative grid grid-cols-1 gap-7 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.num}
              className="reveal relative rounded-[22px] border border-hairline bg-white px-7 py-9"
            >
              <div className="mb-5 text-[64px] font-extrabold leading-none tracking-[-0.04em] text-primary">
                {s.num}
              </div>
              <h3 className="mb-2.5 text-[22px] font-bold tracking-[-0.015em]">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-text-2">{s.desc}</p>

              {s.hasArrow && (
                <div className="absolute -right-[22px] top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-hairline bg-white text-neutral md:grid">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
