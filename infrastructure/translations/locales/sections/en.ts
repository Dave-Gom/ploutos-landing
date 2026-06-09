import type { SectionsTranslations } from "@/infrastructure/types/translations/sections";

const sections: SectionsTranslations = {
  hero: {
    eyebrow: "Personal finance · iOS & Android",
    title: "Ploutos",
    tagline: "Understand and organize your money with clarity.",
    subtitle:
      "A frictionless personal finance app. No accounts, no clouds, no complications. Your data, only on your device.",
    appStoreLabel: "Download on the",
    appStoreName: "App Store",
    playStoreLabel: "Get it on",
    playStoreName: "Google Play",
    badgeNoAccount: "No sign-up",
    badgeEncryption: "AES-256 encryption",
    badgeOffline: "Offline-first",
  },
  features: {
    eyebrow: "Features",
    title: "What can you do with Ploutos?",
    subtitle:
      "Everything you need to record, organize and understand your money. Nothing you don't.",
    accounts: {
      title: "Multiple accounts",
      desc: "Create accounts with different icons, colors and currencies. See each balance at a glance.",
    },
    transactions: {
      title: "Income, expenses & transfers",
      desc: "Record any financial movement with categories, notes and dates. Everything organized automatically.",
    },
    statistics: {
      title: "Detailed statistics",
      desc: "4 types of interactive charts: expenses and income by category and by account. Filter by date, account or category.",
    },
    multiCurrency: {
      title: "Multi-currency",
      desc: "Supports 20+ currencies including USD, EUR, MXN, ARS, PYG, BRL and more. Exchange rates updated daily.",
    },
    privacy: {
      title: "Total privacy",
      desc: "Encrypted with AES-256.",
    },
    languages: {
      title: "5 languages",
      desc: "Available in English, Spanish, German, Avañe'ẽ (Guarani) and Latin (Classical Latin).",
    },
  },
  howItWorks: {
    eyebrow: "That simple",
    title: "Three steps. Zero friction.",
    subtitle:
      "From the moment you open the app to understanding where your money goes.",
    step1: {
      title: "Create your accounts",
      desc: "Add your bank accounts, wallets or cash with the currency you use.",
    },
    step2: {
      title: "Record your movements",
      desc: "Income, expenses or transfers. With optional categories and notes.",
    },
    step3: {
      title: "Visualize your overview",
      desc: "Charts, monthly summaries and comparisons. Understand where your money goes.",
    },
  },
  showcase: {
    eyebrow: "Inside the app",
    title: "Designed so you see everything at a glance.",
    subtitle:
      "An interface crafted so every chart, account and category has its place.",
    altTransactions: "Transactions screen",
    altStatistics: "Statistics screen",
    altAccounts: "Accounts screen",
  },
  name: {
    eyebrow: "Why Ploutos?",
    description:
      "In Greek mythology, Ploutos was the personification of wealth obtained through honest work. A silent guardian of your finances.",
  },
  developer: {
    eyebrow: "Created by",
    title: "An independent project.",
    name: "David",
    nameLast: "Gomez",
    bio: "Software developer focused on clean and functional mobile experiences. Ploutos was born from a personal need: a finance app that simply works, without friction or unnecessary complexity.",
    visitPortfolio: "Visit portfolio",
  },
};

export default sections;
