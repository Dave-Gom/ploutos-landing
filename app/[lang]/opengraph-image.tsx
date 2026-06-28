import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import path from "path";
import {
  getDictionary,
  hasLocale,
  locales,
} from "@/infrastructure/translations/dictionaries";
import { SITE_URL } from "@/lib/constants";
import type { Locale } from "@/infrastructure/types";

export const alt = "Ploutos — Personal Finance App";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const generateStaticParams = async () =>
  locales.map((lang) => ({ lang }));

export default async function OGImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = hasLocale(lang) ? (lang as Locale) : ("es" as Locale);
  const dict = await getDictionary(locale);

  const logoBuffer = readFileSync(
    path.join(process.cwd(), "public/assets/logo.png")
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  const [, tagline] = dict.metadata.title.split(" — ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0d1f14 0%, #162d1e 50%, #1e3a27 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #5FB376, #8BCF9B, #5FB376)",
          }}
        />

        {/* Logo + App name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "28px",
          }}
        >
          <img
            src={logoSrc}
            width={80}
            height={80}
            style={{ borderRadius: "18px" }}
          />
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            Ploutos
          </span>
        </div>

        {/* Locale tagline */}
        <div
          style={{
            fontSize: 30,
            color: "#8BCF9B",
            lineHeight: 1.4,
            maxWidth: "820px",
          }}
        >
          {tagline}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{ fontSize: 20, color: "#4a9960", letterSpacing: "1px" }}
          >
            ploutosapp.com.py
          </span>
          <div style={{ display: "flex", gap: "10px", fontSize: 16 }}>
            {locales.map((l) => (
              <span
                key={l}
                style={{
                  color: l === locale ? "#8BCF9B" : "#2d5a3e",
                  fontWeight: l === locale ? 700 : 400,
                }}
              >
                {l.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            border: "1px solid rgba(139, 207, 155, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            right: "80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            border: "1px solid rgba(139, 207, 155, 0.05)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
