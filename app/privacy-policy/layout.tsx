import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  getDictionary,
  defaultLocale,
} from "@/infrastructure/translations/dictionaries";
import Navbar from "@/lib/components/Navbar";
import Footer from "@/lib/components/Footer";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Privacy Policy — Ploutos",
  description:
    "Privacy Policy for Ploutos, a personal finance manager app for iOS and Android.",
  robots: { index: true, follow: true },
};

const PrivacyPolicyLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dict = await getDictionary(defaultLocale);

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text font-body">
        <Navbar lang={defaultLocale} labels={dict.navbar} />
        <main className="flex-1">{children}</main>
        <Footer lang={defaultLocale} labels={dict.footer} />
      </body>
    </html>
  );
};

export default PrivacyPolicyLayout;
