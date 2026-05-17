export type HeroTranslations = {
  eyebrow: string;
  title: string;
  tagline: string;
  subtitle: string;
  appStoreLabel: string;
  appStoreName: string;
  playStoreLabel: string;
  playStoreName: string;
  badgeNoAccount: string;
  badgeEncryption: string;
  badgeOffline: string;
};

export type FeatureItem = {
  title: string;
  desc: string;
};

export type FeaturesTranslations = {
  eyebrow: string;
  title: string;
  subtitle: string;
  accounts: FeatureItem;
  transactions: FeatureItem;
  statistics: FeatureItem;
  multiCurrency: FeatureItem;
  privacy: FeatureItem;
  languages: FeatureItem;
};

export type StepItem = {
  title: string;
  desc: string;
};

export type HowItWorksTranslations = {
  eyebrow: string;
  title: string;
  subtitle: string;
  step1: StepItem;
  step2: StepItem;
  step3: StepItem;
};

export type ShowcaseTranslations = {
  eyebrow: string;
  title: string;
  subtitle: string;
  altTransactions: string;
  altStatistics: string;
  altAccounts: string;
};

export type NameTranslations = {
  eyebrow: string;
  description: string;
};

export type DeveloperTranslations = {
  eyebrow: string;
  title: string;
  name: string;
  nameLast: string;
  bio: string;
  visitPortfolio: string;
};

export type SectionsTranslations = {
  hero: HeroTranslations;
  features: FeaturesTranslations;
  howItWorks: HowItWorksTranslations;
  showcase: ShowcaseTranslations;
  name: NameTranslations;
  developer: DeveloperTranslations;
};
