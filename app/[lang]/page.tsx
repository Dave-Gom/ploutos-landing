import { notFound } from "next/navigation";
import type { Locale } from "@/infrastructure/types";
import {
  getDictionary,
  hasLocale,
} from "../../infrastructure/translations/dictionaries";
import HeroSection from "@/lib/components/HeroSection";
import FeaturesSection from "@/lib/components/FeaturesSection";
import HowItWorksSection from "@/lib/components/HowItWorksSection";
import ShowcaseSection from "@/lib/components/ShowcaseSection";
import NameSection from "@/lib/components/NameSection";
import DeveloperSection from "@/lib/components/DeveloperSection";

const Home = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <HeroSection t={dict.hero} />
      <FeaturesSection t={dict.features} />
      <HowItWorksSection t={dict.howItWorks} />
      <ShowcaseSection t={dict.showcase} />
      <NameSection t={dict.name} />
      <DeveloperSection t={dict.developer} />
    </>
  );
};

export default Home;
