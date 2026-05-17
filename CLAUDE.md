@AGENTS.md

# CLAUDE.md — Ploutos Landing Page

## Project Overview

Landing page for Ploutos, a personal finance mobile app. Built with Next.js 16, Tailwind CSS v4, and TypeScript. Single-page design with scroll-based reveal animations and multi-language support (5 locales).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.6, React 19, TypeScript 5 |
| Styling | Tailwind CSS v4 (via @tailwindcss/postcss) |
| Font | Inter (via next/font/google) |
| i18n | File-based with `[lang]` dynamic route segment |
| Deployment | Static export (all pages pre-rendered via SSG) |

## Project Structure

```
ploutos-landing/
├── app/
│   ├── layout.tsx            # Root layout — Inter font, body classes (NO lang attribute)
│   ├── page.tsx              # Root redirect → /es (default locale)
│   ├── globals.css           # Tailwind import + @theme tokens + custom CSS
│   ├── favicon.ico
│   └── [lang]/
│       ├── layout.tsx        # Lang layout — metadata, Navbar, Footer, RevealObserver
│       └── page.tsx          # Home page — loads dictionary, composes all sections
├── lib/
│   └── components/
│       ├── Navbar.tsx           # "use client" — glass nav, mobile menu, language selector
│       ├── HeroSection.tsx      # Hero with copy + phone mockup
│       ├── FeaturesSection.tsx  # 6 feature cards in 3-col grid
│       ├── HowItWorksSection.tsx # 3 steps with arrows
│       ├── ShowcaseSection.tsx  # 3 phones (tilted) with screenshots
│       ├── NameSection.tsx      # Greek mythology origin
│       ├── DeveloperSection.tsx # Developer bio + links
│       ├── Footer.tsx           # Footer with nav + store links
│       ├── PhoneFrame.tsx       # Reusable phone mockup frame
│       └── RevealObserver.tsx   # "use client" — IntersectionObserver for .reveal
├── infrastructure/
│   ├── types/
│   │   ├── locale.ts            # Locale = "en" | "es" | "de" | "la" | "gn"
│   │   ├── dictionary.ts        # Re-exports Dictionary type
│   │   ├── index.ts             # Exports Locale and Dictionary
│   │   └── translations/
│   │       ├── common.ts        # MetadataTranslations, FooterTranslations
│   │       ├── navigation.ts    # NavbarTranslations
│   │       ├── sections.ts      # Hero, Features, HowItWorks, Showcase, Name, Developer
│   │       └── index.ts         # Re-exports all translation types
│   └── translations/
│       ├── dictionaries.ts      # getDictionary(), hasLocale(), defaultLocale
│       └── locales/
│           ├── index.ts         # Dictionary type, loadLocale(), dynamic imports
│           ├── common/          # {en,es,de,la,gn}.ts
│           ├── navigation/      # {en,es,de,la,gn}.ts
│           └── sections/        # {en,es,de,la,gn}.ts
├── public/
│   └── assets/
│       └── screenshots/         # App screenshots from simulator
│           ├── dashboard.png
│           ├── transactions.png
│           ├── statistics.png
│           ├── accounts.png
│           ├── settings.png
│           ├── categories.png
│           └── dashboard-scroll.png
└── package.json
```

## Design Tokens (globals.css @theme)

Ploutos brand colors defined as Tailwind theme tokens:
- Primary: `#8BCF9B` (green), deep: `#5FB376`, soft: `#E8F5EC`
- Accent: `#F7DC6F` (yellow), soft: `#FDF6DC`
- Text: `#1F2933`, text-2: `#4B5560`
- Neutral: `#8A9196`
- Backgrounds: bg `#ffffff`, bg-2 `#F7F9FC`, bg-3 `#F1F4F9`
- Category pastels: cat-green, cat-blue, cat-purple, cat-pink, cat-yellow, cat-orange

## i18n Architecture

### Supported Languages

5 locales matching the Ploutos mobile app: English (`en`), Spanish (`es`), German (`de`), Classical Latin (`la`), Guarani (`gn`). Default locale: `es`.

### Routing

Uses Next.js `[lang]` dynamic route segment with `generateStaticParams()` for SSG. Root `/` redirects to `/es`. All 5 locale paths are pre-rendered at build time.

### Translation Loading

Server-side only. `getDictionary(lang)` dynamically imports 3 domain files per locale using `Promise.all()`:
- `common` — metadata, footer labels
- `navigation` — navbar labels
- `sections` — hero, features, howItWorks, showcase, name, developer

The `dictionaries.ts` entry point uses `server-only` to prevent client-side imports.

### Type Safety

All locale files use `as const satisfies {Domain}Translations` for compile-time type safety. Translation types are defined in `infrastructure/types/translations/`.

### Component Props

All section components receive typed `t` props (e.g., `{ t: HeroTranslations }`). Navbar and Footer receive `{ lang: Locale, labels: NavbarTranslations | FooterTranslations }`.

### Language Selector

Built into the Navbar. Shows locale codes (EN/ES/DE/LA/GN) as links. Uses `next/link` with `usePathname()` to swap the `[lang]` segment while preserving the rest of the URL.

### Adding a New Language

1. Create 3 locale files in `infrastructure/translations/locales/{common,navigation,sections}/{code}.ts`, each using `as const satisfies` its domain type.
2. Add the import map entry in `infrastructure/translations/locales/index.ts`.
3. Add the locale to the `Locale` type in `infrastructure/types/locale.ts`.
4. Add to `locales` array in `infrastructure/translations/dictionaries.ts`.
5. Add to `generateStaticParams()` in `app/[lang]/layout.tsx`.

## Patterns

### Reveal Animations
Elements with `.reveal` class start invisible (`opacity: 0, translateY(14px)`) and get `.in` class added via IntersectionObserver when scrolled into view. Respects `prefers-reduced-motion`.

### Phone Mockups
`PhoneFrame` component wraps screenshots in a dark rounded frame (simulating iPhone). Used in hero and showcase sections.

### Component Convention
- Arrow function components (not function declarations)
- Server components by default
- "use client" only for Navbar (scroll state, mobile menu, language selector) and RevealObserver (DOM manipulation)
- All styling via Tailwind utility classes
- SVG icons inline (no icon library)

## Scripts

```bash
yarn dev    # Start dev server
yarn build  # Build for production
yarn lint   # Run ESLint
```
