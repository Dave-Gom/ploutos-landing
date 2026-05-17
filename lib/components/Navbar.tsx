"use client";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <a href="#features" className="text-[14.5px] font-medium text-text-2 transition-colors hover:text-text">
            Funciones
          </a>
          <a href="#how" className="text-[14.5px] font-medium text-text-2 transition-colors hover:text-text">
            Como funciona
          </a>
          <a href="#about" className="text-[14.5px] font-medium text-text-2 transition-colors hover:text-text">
            El nombre
          </a>
          <a href="#developer" className="text-[14.5px] font-medium text-text-2 transition-colors hover:text-text">
            Creador
          </a>
        </div>

        <a
          href="#download"
          className="hidden items-center gap-2 rounded-full bg-text px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-[#2A3744] md:inline-flex"
        >
          Descargar
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-hairline bg-white px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#features" onClick={() => setMenuOpen(false)} className="text-[15px] font-medium text-text-2">Funciones</a>
            <a href="#how" onClick={() => setMenuOpen(false)} className="text-[15px] font-medium text-text-2">Como funciona</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-[15px] font-medium text-text-2">El nombre</a>
            <a href="#developer" onClick={() => setMenuOpen(false)} className="text-[15px] font-medium text-text-2">Creador</a>
            <a
              href="#download"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-text px-4 py-2.5 text-sm font-semibold text-white"
            >
              Descargar
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
