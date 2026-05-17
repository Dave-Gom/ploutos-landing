import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ploutos — Entiende y organiza tu dinero con claridad",
  description:
    "Una app de finanzas personales sin friccion. Sin cuentas, sin nubes, sin complicaciones. Tus datos, solo en tu dispositivo.",
  keywords: [
    "finanzas personales",
    "app",
    "iOS",
    "Android",
    "presupuesto",
    "gastos",
    "ingresos",
    "multi-moneda",
    "offline",
    "privacidad",
  ],
  authors: [{ name: "David Gomez", url: "https://davegzarca.dev" }],
  openGraph: {
    title: "Ploutos — Entiende y organiza tu dinero con claridad",
    description:
      "Una app de finanzas personales sin friccion. Sin cuentas, sin nubes, sin complicaciones.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ploutos — Entiende y organiza tu dinero con claridad",
    description:
      "Una app de finanzas personales sin friccion. Tus datos, solo en tu dispositivo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text font-body">
        {children}
      </body>
    </html>
  );
}
