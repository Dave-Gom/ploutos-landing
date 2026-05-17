@AGENTS.md

# CLAUDE.md — Ploutos Landing Page

## Project Overview

Landing page for Ploutos, a personal finance mobile app. Built with Next.js 16, Tailwind CSS v4, and TypeScript. Single-page design with scroll-based reveal animations.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.6, React 19, TypeScript 5 |
| Styling | Tailwind CSS v4 (via @tailwindcss/postcss) |
| Font | Inter (via next/font/google) |
| Deployment | Static export (all pages pre-rendered) |

## Project Structure

```
ploutos-landing/
├── app/
│   ├── layout.tsx          # Root layout — Inter font, metadata, body classes
│   ├── page.tsx            # Home page — composes all sections
│   ├── globals.css         # Tailwind import + @theme tokens + custom CSS
│   └── favicon.ico
├── lib/
│   └── components/
│       ├── Navbar.tsx           # "use client" — sticky glass nav, mobile menu
│       ├── HeroSection.tsx      # Hero with copy + phone mockup
│       ├── FeaturesSection.tsx  # 6 feature cards in 3-col grid
│       ├── HowItWorksSection.tsx # 3 steps with arrows
│       ├── ShowcaseSection.tsx  # 3 phones (tilted) with screenshots
│       ├── NameSection.tsx      # Greek mythology origin
│       ├── DeveloperSection.tsx # Developer bio + links
│       ├── Footer.tsx           # Footer with nav + store links
│       ├── PhoneFrame.tsx       # Reusable phone mockup frame
│       └── RevealObserver.tsx   # "use client" — IntersectionObserver for .reveal
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

## Patterns

### Reveal Animations
Elements with `.reveal` class start invisible (`opacity: 0, translateY(14px)`) and get `.in` class added via IntersectionObserver when scrolled into view. Respects `prefers-reduced-motion`.

### Phone Mockups
`PhoneFrame` component wraps screenshots in a dark rounded frame (simulating iPhone). Used in hero and showcase sections.

### Component Convention
- Server components by default
- "use client" only for Navbar (scroll state, mobile menu) and RevealObserver (DOM manipulation)
- All styling via Tailwind utility classes
- SVG icons inline (no icon library)

## Scripts

```bash
yarn dev    # Start dev server
yarn build  # Build for production
yarn lint   # Run ESLint
```
