import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ploutos",
    short_name: "Ploutos",
    description:
      "A frictionless personal finance app. No accounts, no clouds, no complications. Your data, only on your device.",
    start_url: "/es",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#8BCF9B",
    icons: [
      {
        src: "/assets/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
