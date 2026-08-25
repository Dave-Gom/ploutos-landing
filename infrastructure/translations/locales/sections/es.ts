import type { SectionsTranslations } from "@/infrastructure/types/translations/sections";

const sections: SectionsTranslations = {
  hero: {
    eyebrow: "Finanzas personales · iOS & Android",
    title: "Ploutos",
    tagline: "Entiende y organiza tu dinero con claridad.",
    subtitle:
      "Una app de finanzas personales sin fricción. Sin cuentas, sin nubes, sin complicaciones. Tus datos, solo en tu dispositivo.",
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
    title: "¿Qué puedes hacer con Ploutos?",
    subtitle:
      "Todo lo que necesitas para registrar, organizar y entender tu dinero.",
    accounts: {
      title: "Múltiples cuentas",
      desc: "Crea cuentas con iconos, colores y monedas diferentes. Visualiza el balance de cada una al instante.",
    },
    transactions: {
      title: "Ingresos, gastos y transferencias",
      desc: "Registra cualquier movimiento financiero con categorías, notas y fechas. Todo organizado automáticamente.",
    },
    statistics: {
      title: "Estadísticas detalladas",
      desc: "4 tipos de gráficas interactivas: gastos e ingresos por categoría y por cuenta. Filtra por fecha, cuenta o categoría.",
    },
    savings: {
      title: "Metas de ahorro",
      desc: "Crea metas con monto objetivo y fecha límite opcional, deposita desde tus cuentas y sigue tu progreso con metas mensuales y mensajes de ánimo.",
    },
    budgets: {
      title: "Presupuestos",
      desc: "Define límites de gasto para las categorías que elijas, con vista mensual, semanal y diaria. Recalcula tus límites a mitad de ciclo cuando algo cambie.",
    },
    multiCurrency: {
      title: "Multi-moneda",
      desc: "Soporta 20+ monedas incluyendo USD, EUR, MXN, ARS, PYG, BRL y más. Tasas de cambio actualizadas diariamente.",
    },
    privacy: {
      title: "Privacidad total",
      desc: "Cifrados con AES-256.",
    },
    languages: {
      title: "5 idiomas",
      desc: "Disponible en English, Español, Deutsch, Avañe'ẽ (Guaraní) y Latina (Latín clásico).",
    },
    ads: {
      title: "Gratis, con anuncios discretos",
      desc: "Todas las funciones son gratis gracias a los anuncios: en las listas se integran al contenido y los de pantalla completa aparecen como máximo una vez por minuto.",
    },
  },
  howItWorks: {
    eyebrow: "Así de simple",
    title: "Tres pasos. Cero fricción.",
    subtitle: "Desde que abrís la app hasta que entendés adónde va tu dinero.",
    step1: {
      title: "Crea tus cuentas",
      desc: "Agrega tus cuentas bancarias, billeteras o efectivo con la moneda que uses.",
    },
    step2: {
      title: "Registra tus movimientos",
      desc: "Ingresos, gastos o transferencias. Con categorías y notas opcionales.",
    },
    step3: {
      title: "Visualiza tu panorama",
      desc: "Gráficas, resúmenes mensuales y comparaciones. Entendé adónde va tu dinero.",
    },
  },
  showcase: {
    eyebrow: "La app por dentro",
    title: "Diseñada para que veas todo de un vistazo.",
    subtitle:
      "Una interfaz pensada para que cada meta, presupuesto, gráfica y cuenta tenga su lugar.",
    altStatistics: "Pantalla de estadísticas",
    altAccounts: "Pantalla de cuentas",
  },
  name: {
    eyebrow: "¿Por qué Ploutos?",
    description:
      "En la mitología griega, Ploutos era la personificación de la riqueza obtenida a través del trabajo honesto. Un guardián silencioso de tus finanzas.",
  },
  developer: {
    eyebrow: "Creado por",
    title: "Un proyecto independiente.",
    name: "David",
    nameLast: "Gomez",
    bio: "Desarrollador de software enfocado en experiencias móviles limpias y funcionales. Ploutos nació de una necesidad personal: una app de finanzas que simplemente funcione, sin fricción ni complejidad innecesaria.",
    visitPortfolio: "Visitar portfolio",
  },
};

export default sections;
