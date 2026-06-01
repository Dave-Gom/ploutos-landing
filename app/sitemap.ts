import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const locales = ["en", "es", "de", "la", "gn"];

const sitemap = (): MetadataRoute.Sitemap =>
  locales.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: lang === "es" ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${SITE_URL}/${l}`]),
      ),
    },
  }));

export default sitemap;
