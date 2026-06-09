import type { SectionsTranslations } from "@/infrastructure/types/translations/sections";

const sections: SectionsTranslations = {
  hero: {
    eyebrow: "Persönliche Finanzen · iOS & Android",
    title: "Ploutos",
    tagline: "Verstehe und organisiere dein Geld mit Klarheit.",
    subtitle:
      "Eine reibungslose App für persönliche Finanzen. Keine Konten, keine Clouds, keine Komplikationen. Deine Daten, nur auf deinem Gerät.",
    appStoreLabel: "Laden im",
    appStoreName: "App Store",
    playStoreLabel: "Jetzt bei",
    playStoreName: "Google Play",
    badgeNoAccount: "Keine Registrierung",
    badgeEncryption: "AES-256-Verschlüsselung",
    badgeOffline: "Offline-first",
  },
  features: {
    eyebrow: "Funktionen",
    title: "Was kannst du mit Ploutos machen?",
    subtitle:
      "Alles, was du brauchst, um dein Geld zu erfassen, zu organisieren und zu verstehen. Nichts, was du nicht brauchst.",
    accounts: {
      title: "Mehrere Konten",
      desc: "Erstelle Konten mit verschiedenen Symbolen, Farben und Währungen. Sieh den Saldo jedes Kontos auf einen Blick.",
    },
    transactions: {
      title: "Einnahmen, Ausgaben & Überweisungen",
      desc: "Erfasse jede Finanzbewegung mit Kategorien, Notizen und Daten. Alles automatisch organisiert.",
    },
    statistics: {
      title: "Detaillierte Statistiken",
      desc: "4 Arten interaktiver Diagramme: Ausgaben und Einnahmen nach Kategorie und Konto. Filtere nach Datum, Konto oder Kategorie.",
    },
    multiCurrency: {
      title: "Multi-Währung",
      desc: "Unterstützt 20+ Währungen einschließlich USD, EUR, MXN, ARS, PYG, BRL und mehr. Wechselkurse täglich aktualisiert.",
    },
    privacy: {
      title: "Totale Privatsphäre",
      desc: "Verschlüsselt mit AES-256.",
    },
    languages: {
      title: "5 Sprachen",
      desc: "Verfügbar in Englisch, Spanisch, Deutsch, Avañe'ẽ (Guaraní) und Latein (Klassisches Latein).",
    },
  },
  howItWorks: {
    eyebrow: "So einfach",
    title: "Drei Schritte. Null Reibung.",
    subtitle:
      "Vom Öffnen der App bis zum Verständnis, wohin dein Geld fließt.",
    step1: {
      title: "Erstelle deine Konten",
      desc: "Füge deine Bankkonten, Geldbeutel oder Bargeld mit der Währung hinzu, die du verwendest.",
    },
    step2: {
      title: "Erfasse deine Bewegungen",
      desc: "Einnahmen, Ausgaben oder Überweisungen. Mit optionalen Kategorien und Notizen.",
    },
    step3: {
      title: "Visualisiere deinen Überblick",
      desc: "Diagramme, monatliche Zusammenfassungen und Vergleiche. Verstehe, wohin dein Geld geht.",
    },
  },
  showcase: {
    eyebrow: "Die App von innen",
    title: "Gestaltet, damit du alles auf einen Blick siehst.",
    subtitle:
      "Eine Oberfläche, in der jedes Diagramm, Konto und jede Kategorie ihren Platz hat.",
    altTransactions: "Transaktionsbildschirm",
    altStatistics: "Statistikbildschirm",
    altAccounts: "Kontenbildschirm",
  },
  name: {
    eyebrow: "Warum Ploutos?",
    description:
      "In der griechischen Mythologie war Ploutos die Personifizierung des durch ehrliche Arbeit erlangten Reichtums. Ein stiller Wächter deiner Finanzen.",
  },
  developer: {
    eyebrow: "Erstellt von",
    title: "Ein unabhängiges Projekt.",
    name: "David",
    nameLast: "Gomez",
    bio: "Softwareentwickler mit Fokus auf saubere und funktionale mobile Erfahrungen. Ploutos entstand aus einem persönlichen Bedürfnis: eine Finanz-App, die einfach funktioniert, ohne Reibung oder unnötige Komplexität.",
    visitPortfolio: "Portfolio besuchen",
  },
};

export default sections;
