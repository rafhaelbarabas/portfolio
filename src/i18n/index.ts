import { en } from "./en";
import { pt } from "./pt";

export type Locale = "en" | "pt";

const translations = { en, pt } as const;

/** Normalizes the existing page/component lang props into the two UI locales. */
export function resolveLocale(lang?: string): Locale {
  return lang?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export function useTranslations(locale: Locale) {
  return translations[locale];
}
