import type { Locale } from "@/infrastructure/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getDictionary,
  hasLocale,
  locales,
} from "../../infrastructure/translations/dictionaries";
import Navbar from "@/lib/components/Navbar";
import Footer from "@/lib/components/Footer";
import RevealObserver from "@/lib/components/RevealObserver";

const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  de: "de_DE",
  la: "la_VA",
  gn: "gn_PY",
};

export const generateStaticParams = async () =>
  locales.map((lang) => ({ lang }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> => {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    authors: [{ name: "David Gomez", url: "https://davegzarca.dev" }],
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocaleMap[l]),
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [ogLocaleMap[l], `/${l}`]),
      ),
    },
  };
};

const LangLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) => {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Navbar lang={lang as Locale} labels={dict.navbar} />
      <main>{children}</main>
      <Footer lang={lang as Locale} labels={dict.footer} />
      <RevealObserver />
    </>
  );
};

export default LangLayout;
