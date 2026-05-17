import type { ShowcaseTranslations } from "@/infrastructure/types/translations/sections";
import PhoneFrame from "./PhoneFrame";

interface ShowcaseSectionProps {
  t: ShowcaseTranslations;
}

const ShowcaseSection = ({ t }: ShowcaseSectionProps) => {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-bg-2 to-white py-24">
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

        <div className="flex min-h-[640px] flex-col items-center justify-center gap-7 pt-5 md:flex-row md:gap-8">
          <PhoneFrame
            src="/assets/screenshots/transactions.png"
            alt={t.altTransactions}
            width={270}
            className="reveal md:-rotate-6 md:translate-y-5"
          />
          <PhoneFrame
            src="/assets/screenshots/statistics.png"
            alt={t.altStatistics}
            width={270}
            className="reveal z-10"
          />
          <PhoneFrame
            src="/assets/screenshots/accounts.png"
            alt={t.altAccounts}
            width={270}
            className="reveal md:rotate-6 md:translate-y-5"
          />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
