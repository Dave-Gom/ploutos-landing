import type { SectionsTranslations } from "@/infrastructure/types/translations/sections";

const sections: SectionsTranslations = {
  hero: {
    eyebrow: "Finanzas personales · iOS & Android",
    title: "Ploutos",
    tagline: "Entiende y organiza tu dinero con claridad.",
    subtitle:
      "Una app de finanzas personales sin friccion. Sin cuentas, sin nubes, sin complicaciones. Tus datos, solo en tu dispositivo.",
    appStoreLabel: "Descargar en",
    appStoreName: "App Store",
    playStoreLabel: "Disponible en",
    playStoreName: "Google Play",
    badgeNoAccount: "Sin registro",
    badgeEncryption: "Cifrado AES-256",
    badgeOffline: "Offline-first",
  },
  features: {
    eyebrow: "Funciones",
    title: "Que puedes hacer con Ploutos?",
    subtitle:
      "Todo lo que necesitas para registrar, organizar y entender tu dinero. Nada que no necesites.",
    accounts: {
      title: "Multiples cuentas",
      desc: "Crea cuentas con iconos, colores y monedas diferentes. Visualiza el balance de cada una al instante.",
    },
    transactions: {
      title: "Ingresos, gastos y transferencias",
      desc: "Registra cualquier movimiento financiero con categorias, notas y fechas. Todo organizado automaticamente.",
    },
    statistics: {
      title: "Estadisticas detalladas",
      desc: "4 tipos de graficas interactivas: gastos e ingresos por categoria y por cuenta. Filtra por fecha, cuenta o categoria.",
    },
    multiCurrency: {
      title: "Multi-moneda",
      desc: "Soporta 20+ monedas incluyendo USD, EUR, MXN, ARS, PYG, BRL y mas. Tasas de cambio actualizadas diariamente.",
    },
    privacy: {
      title: "Privacidad total",
      desc: "Cifrados con AES-256.",
    },
    languages: {
      title: "5 idiomas",
      desc: "Disponible en English, Espanol, Deutsch, Avane'e (Guarani) y Latina (Latin clasico).",
    },
  },
  howItWorks: {
    eyebrow: "Asi de simple",
    title: "Tres pasos. Cero friccion.",
    subtitle:
      "Desde que abris la app hasta que entendes a donde va tu dinero.",
    step1: {
      title: "Crea tus cuentas",
      desc: "Agrega tus cuentas bancarias, billeteras o efectivo con la moneda que uses.",
    },
    step2: {
      title: "Registra tus movimientos",
      desc: "Ingresos, gastos o transferencias. Con categorias y notas opcionales.",
    },
    step3: {
      title: "Visualiza tu panorama",
      desc: "Graficas, resumenes mensuales y comparaciones. Entiende a donde va tu dinero.",
    },
  },
  showcase: {
    eyebrow: "La app por dentro",
    title: "Disenada para que veas todo de un vistazo.",
    subtitle:
      "Una interfaz pensada para que cada grafico, cuenta y categoria tenga su lugar.",
    altTransactions: "Pantalla de transacciones",
    altStatistics: "Pantalla de estadisticas",
    altAccounts: "Pantalla de cuentas",
  },
  name: {
    eyebrow: "Por que Ploutos?",
    description:
      "En la mitologia griega, Ploutos era la personificacion de la riqueza obtenida a traves del trabajo honesto. Un guardian silencioso de tus finanzas.",
  },
  developer: {
    eyebrow: "Creado por",
    title: "Un proyecto independiente.",
    name: "David",
    nameLast: "Gomez",
    bio: "Desarrollador de software enfocado en experiencias moviles limpias y funcionales. Ploutos nacio de una necesidad personal: una app de finanzas que simplemente funcione, sin friccion ni complejidad innecesaria.",
    visitPortfolio: "Visitar portfolio",
  },
};

export default sections;
