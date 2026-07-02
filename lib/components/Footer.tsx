import type { Locale } from "@/infrastructure/types/locale";
import type { FooterTranslations } from "@/infrastructure/types/translations/common";
import Image from "next/image";

interface FooterProps {
  lang: Locale;
  labels: FooterTranslations;
}

const Footer = ({ labels }: FooterProps) => {
  return (
    <footer className="bg-text pt-14 pb-8 text-[#B8C0CC]">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid grid-cols-1 gap-7 border-b border-white/[0.08] pb-9 sm:grid-cols-[1.4fr_1fr_1fr] sm:gap-10">
          <div>
            <div className="mb-3 flex items-center gap-2.5 text-lg font-bold text-white">
              <Image
                src="/assets/logo.png"
                alt="Ploutos"
                width={30}
                height={30}
                className="rounded-lg bg-primary p-1"
              />
              Ploutos
            </div>
            <p className="max-w-[360px] text-sm leading-relaxed">
              {labels.blurb}
            </p>
          </div>

          <div>
            <h5 className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white">
              {labels.appTitle}
            </h5>
            <ul className="grid gap-2.5 text-sm">
              <li>
                <a
                  href="#features"
                  className="transition-colors hover:text-white"
                >
                  {labels.features}
                </a>
              </li>
              <li>
                <a href="#how" className="transition-colors hover:text-white">
                  {labels.howItWorks}
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-white">
                  {labels.theName}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white">
              {labels.legalTitle}
            </h5>
            <ul className="grid gap-2.5 text-sm">
              <li>
                <a
                  href="/assets/docs/privacy-policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {labels.privacyPolicy}
                </a>
              </li>
              <li>
                <a
                  href="https://davegzarca.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  davegzarca.dev
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-[13px] text-neutral">
          <div>{labels.copyright}</div>
          <div className="flex gap-2.5">
            <a
              href="#"
              aria-label="App Store"
              className="grid h-9 w-9 place-items-center rounded-[10px] bg-white/[0.06] text-white transition-colors hover:bg-white/[0.12]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12-1.17.486-2.34 1.177-3.08.769-.83 2.062-1.48 2.987-1.57zM21 17.34c-.36.84-.79 1.62-1.31 2.36-.71 1-1.29 1.69-1.74 2.07-.69.6-1.43.91-2.22.93-.57.01-1.26-.16-2.06-.51-.81-.35-1.55-.51-2.24-.51-.72 0-1.49.16-2.31.51-.83.35-1.5.53-2.01.55-.76.04-1.51-.28-2.26-.96-.5-.43-1.11-1.15-1.83-2.17C2.27 18.4 1.66 17 1.18 15.4.66 13.66.4 11.98.4 10.36.4 8.49.81 6.88 1.63 5.55 2.27 4.49 3.13 3.66 4.21 3.04c1.08-.62 2.24-.94 3.5-.96.6 0 1.39.18 2.39.55s1.64.55 1.92.55c.21 0 .92-.22 2.13-.65 1.14-.4 2.11-.57 2.91-.5 2.16.17 3.79 1.03 4.86 2.58-1.94 1.18-2.9 2.83-2.88 4.94.02 1.64.61 3 1.78 4.08.53.5 1.13.88 1.79 1.16-.14.42-.29.81-.46 1.19z" />
              </svg>
            </a>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=dev.davegzarca.ploutos"
              aria-label="Google Play"
              className="grid h-9 w-9 place-items-center rounded-[10px] bg-white/[0.06] text-white transition-colors hover:bg-white/[0.12]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1 1 0 01-.61-.918V2.732a1 1 0 01.609-.918zm10.89 10.893l2.302 2.302-10.937 6.158 8.635-8.46zm3.658-3.581l2.281 1.281a1 1 0 010 1.748l-2.4 1.35-2.532-2.532 2.651-1.847zM5.864 2.658L16.802 8.815l-2.303 2.303L5.864 2.658z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
