import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const locales = ["en", "es", "de", "la", "gn"];
const LAST_MODIFIED = new Date("2025-06-28");

const sitemap = (): MetadataRoute.Sitemap =>
  locales.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: lang === "es" ? 1 : 0.8,
    alternates: {
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}`])),
        "x-default": `${SITE_URL}/es`,
      },
    },
  }));

export default sitemap;
