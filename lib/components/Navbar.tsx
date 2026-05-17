"use client";

import type { Locale } from "@/infrastructure/types/locale";
import type { NavbarTranslations } from "@/infrastructure/types/translations/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavbarProps {
  lang: Locale;
  labels: NavbarTranslations;
}

const allLocales: Locale[] = ["en", "es", "de", "la", "gn"];

const Navbar = ({ lang, labels }: NavbarProps) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: labels.features },
    { href: "#how", label: labels.howItWorks },
    { href: "#about", label: labels.theName },
    { href: "#developer", label: labels.creator },
  ];

  return (
    <nav
      className={`glass-nav sticky top-0 z-50 border-b transition-colors duration-200 ${scrolled ? "border-hairline" : "border-transparent"}`}
    >
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
          <span className="grid h-[30px] w-[30px] place-items-center rounded-lg bg-primary text-[16px] font-extrabold text-[#1c3a26]">
            π
          </span>
          Ploutos
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[14.5px] font-medium text-text-2 transition-colors hover:text-text">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Language selector */}
          <div className="flex items-center gap-1">
            {allLocales.map((l, i) => (
              <span key={l} className="flex items-center">
                <Link
                  href={pathname.replace(`/${lang}`, `/${l}`)}
                  className="text-xs font-bold uppercase tracking-wider transition-colors hover:text-text"
                  style={{
                    color: l === lang ? "#1F2933" : "#8A9196",
                    fontWeight: l === lang ? 800 : 700,
                  }}
                >
                  {l.toUpperCase()}
                </Link>
                {i < allLocales.length - 1 && (
                  <span className="mx-1 text-xs text-hairline">/</span>
                )}
              </span>
            ))}
          </div>

          <a
            href="#download"
            className="hidden items-center gap-2 rounded-full bg-text px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-[#2A3744] md:inline-flex"
          >
            {labels.download}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>

          {/* Mobile menu button */}
          <button
            className="grid h-10 w-10 place-items-center md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-hairline bg-white px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-[15px] font-medium text-text-2">
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-text px-4 py-2.5 text-sm font-semibold text-white"
            >
              {labels.download}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
