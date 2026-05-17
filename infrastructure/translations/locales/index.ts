import type { Locale } from "@/infrastructure/types/locale";
import type { CommonTranslations } from "@/infrastructure/types/translations/common";
import type { NavigationTranslations } from "@/infrastructure/types/translations/navigation";
import type { SectionsTranslations } from "@/infrastructure/types/translations/sections";

export type Dictionary = CommonTranslations &
  NavigationTranslations &
  SectionsTranslations;

type LocaleModules = {
  common: () => Promise<{ default: CommonTranslations }>;
  navigation: () => Promise<{ default: NavigationTranslations }>;
  sections: () => Promise<{ default: SectionsTranslations }>;
};

const localeModules: Record<Locale, LocaleModules> = {
  en: {
    common: () => import("./common/en"),
    navigation: () => import("./navigation/en"),
    sections: () => import("./sections/en"),
  },
  es: {
    common: () => import("./common/es"),
    navigation: () => import("./navigation/es"),
    sections: () => import("./sections/es"),
  },
  de: {
    common: () => import("./common/de"),
    navigation: () => import("./navigation/de"),
    sections: () => import("./sections/de"),
  },
  la: {
    common: () => import("./common/la"),
    navigation: () => import("./navigation/la"),
    sections: () => import("./sections/la"),
  },
  gn: {
    common: () => import("./common/gn"),
    navigation: () => import("./navigation/gn"),
    sections: () => import("./sections/gn"),
  },
};

const loadLocale = async (locale: Locale): Promise<Dictionary> => {
  const modules = localeModules[locale];
  const [common, navigation, sections] = await Promise.all([
    modules.common().then((m) => m.default),
    modules.navigation().then((m) => m.default),
    modules.sections().then((m) => m.default),
  ]);

  return { ...common, ...navigation, ...sections };
};

export default loadLocale;
