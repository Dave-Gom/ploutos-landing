import type { SectionsTranslations } from "@/infrastructure/types/translations/sections";

const sections: SectionsTranslations = {
  hero: {
    eyebrow: "Personliche Finanzen · iOS & Android",
    title: "Ploutos",
    tagline: "Verstehe und organisiere dein Geld mit Klarheit.",
    subtitle:
      "Eine reibungslose App fur personliche Finanzen. Keine Konten, keine Clouds, keine Komplikationen. Deine Daten, nur auf deinem Gerat.",
    appStoreLabel: "Laden im",
    appStoreName: "App Store",
    playStoreLabel: "Jetzt bei",
    playStoreName: "Google Play",
    badgeNoAccount: "Keine Registrierung",
    badgeEncryption: "AES-256-Verschlusselung",
    badgeOffline: "Offline-first",
  },
  features: {
    eyebrow: "Funktionen",
    title: "Was kannst du mit Ploutos machen?",
    subtitle:
      "Alles, was du brauchst, um dein Geld zu erfassen, zu organisieren und zu verstehen. Nichts, was du nicht brauchst.",
    accounts: {
      title: "Mehrere Konten",
      desc: "Erstelle Konten mit verschiedenen Symbolen, Farben und Wahrungen. Sieh den Saldo jedes Kontos auf einen Blick.",
    },
    transactions: {
      title: "Einnahmen, Ausgaben & Uberweisungen",
      desc: "Erfasse jede Finanzbewegung mit Kategorien, Notizen und Daten. Alles automatisch organisiert.",
    },
    statistics: {
      title: "Detaillierte Statistiken",
      desc: "4 Arten interaktiver Diagramme: Ausgaben und Einnahmen nach Kategorie und Konto. Filtere nach Datum, Konto oder Kategorie.",
    },
    multiCurrency: {
      title: "Multi-Wahrung",
      desc: "Unterstutzt 20+ Wahrungen einschliesslich USD, EUR, MXN, ARS, PYG, BRL und mehr. Wechselkurse taglich aktualisiert.",
    },
    privacy: {
      title: "Totale Privatsphare",
      desc: "Verschlusselt mit AES-256.",
    },
    languages: {
      title: "5 Sprachen",
      desc: "Verfugbar in Englisch, Spanisch, Deutsch, Avane'e (Guarani) und Latein (Klassisches Latein).",
    },
  },
  howItWorks: {
    eyebrow: "So einfach",
    title: "Drei Schritte. Null Reibung.",
    subtitle:
      "Vom Offnen der App bis zum Verstandnis, wohin dein Geld fliesst.",
    step1: {
      title: "Erstelle deine Konten",
      desc: "Fuge deine Bankkonten, Geldbeutel oder Bargeld mit der Wahrung hinzu, die du verwendest.",
    },
    step2: {
      title: "Erfasse deine Bewegungen",
      desc: "Einnahmen, Ausgaben oder Uberweisungen. Mit optionalen Kategorien und Notizen.",
    },
    step3: {
      title: "Visualisiere deinen Uberblick",
      desc: "Diagramme, monatliche Zusammenfassungen und Vergleiche. Verstehe, wohin dein Geld geht.",
    },
  },
  showcase: {
    eyebrow: "Die App von innen",
    title: "Gestaltet, damit du alles auf einen Blick siehst.",
    subtitle:
      "Eine Oberflache, in der jedes Diagramm, Konto und jede Kategorie ihren Platz hat.",
    altTransactions: "Transaktionsbildschirm",
    altStatistics: "Statistikbildschirm",
    altAccounts: "Kontenbildschirm",
  },
  name: {
    eyebrow: "Warum Ploutos?",
    description:
      "In der griechischen Mythologie war Ploutos die Personifizierung des durch ehrliche Arbeit erlangten Reichtums. Ein stiller Wachter deiner Finanzen.",
  },
  developer: {
    eyebrow: "Erstellt von",
    title: "Ein unabhangiges Projekt.",
    name: "David",
    nameLast: "Gomez",
    bio: "Softwareentwickler mit Fokus auf saubere und funktionale mobile Erfahrungen. Ploutos entstand aus einem personlichen Bedurfnis: eine Finanz-App, die einfach funktioniert, ohne Reibung oder unnotige Komplexitat.",
    visitPortfolio: "Portfolio besuchen",
  },
};

export default sections;
