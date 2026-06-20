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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ploutos",
    applicationCategory: "FinanceApplication",
    operatingSystem: "iOS, Android",
    description: dict.metadata.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "David Gomez",
      url: "https://davegzarca.dev",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection lang={lang as Locale} t={dict.hero} />
      <FeaturesSection t={dict.features} />
      <HowItWorksSection t={dict.howItWorks} />
      <ShowcaseSection lang={lang as Locale} t={dict.showcase} />
      <NameSection t={dict.name} />
      <DeveloperSection t={dict.developer} />
    </>
  );
};

export default Home;
