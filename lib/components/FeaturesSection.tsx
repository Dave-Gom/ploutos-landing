import type { FeaturesTranslations, FeatureItem } from "@/infrastructure/types/translations/sections";

interface FeaturesSectionProps {
  t: FeaturesTranslations;
}

const featureConfig: {
  key: keyof Pick<FeaturesTranslations, "accounts" | "transactions" | "statistics" | "multiCurrency" | "privacy" | "languages">;
  icon: React.ReactNode;
  bg: string;
  color: string;
}[] = [
  {
    key: "accounts",
    bg: "bg-cat-green",
    color: "text-[#3a7a4d]",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
        <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4h-5a2 2 0 0 1 0-4h5" />
        <circle cx="17" cy="14" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "transactions",
    bg: "bg-cat-blue",
    color: "text-[#3f6c95]",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" /><rect x="5" y="10" width="3" height="9" /><rect x="10.5" y="6" width="3" height="13" /><rect x="16" y="13" width="3" height="6" />
      </svg>
    ),
  },
  {
    key: "statistics",
    bg: "bg-cat-purple",
    color: "text-[#6c4fa3]",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12A9 9 0 1 1 12 3v9z" /><path d="M21 12A9 9 0 0 0 12 3" />
      </svg>
    ),
  },
  {
    key: "multiCurrency",
    bg: "bg-accent-soft",
    color: "text-[#a0822b]",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="5" /><circle cx="16" cy="16" r="5" /><path d="M11.5 11.5L14 14" />
      </svg>
    ),
  },
  {
    key: "privacy",
    bg: "bg-cat-pink",
    color: "text-[#a85770]",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
      </svg>
    ),
  },
  {
    key: "languages",
    bg: "bg-cat-yellow",
    color: "text-[#8a7220]",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </svg>
    ),
  },
];

const FeaturesSection = ({ t }: FeaturesSectionProps) => {
  return (
    <section id="features" className="bg-bg-2 py-24">
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureConfig.map((f) => {
            const item: FeatureItem = t[f.key];
            return (
              <div
                key={f.key}
                className="reveal rounded-[22px] border border-hairline bg-white p-7 transition-all duration-250 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_6px_24px_-8px_rgba(15,23,32,0.10),0_2px_6px_rgba(15,23,32,0.04)]"
              >
                <div className={`mb-5 grid h-12 w-12 place-items-center rounded-xl ${f.bg} ${f.color}`}>
                  {f.icon}
                </div>
                <h3 className="mb-2 text-[19px] font-bold tracking-[-0.01em]">{item.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-text-2 [text-wrap:pretty]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
