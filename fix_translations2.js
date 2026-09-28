const fs = require("fs");
const path = require("path");
const base = "C:/Users/AnasShiftyyy/Desktop/New folder (2)/nexatech";

const translations = `import type { Locale } from "@/lib/i18n";

const dictionaries = {
  fr: () => import("@/locales/fr.json").then((module) => module.default),
  ar: () => import("@/locales/ar.json").then((module) => module.default),
  en: () => import("@/locales/en.json").then((module) => module.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}

export function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce((current: unknown, key: string) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function t(dict: Record<string, unknown>, path: string): string {
  const value = getNestedValue(dict, path);
  return typeof value === "string" ? value : path;
}

export function tArray(dict: Record<string, unknown>, path: string): string[] {
  const value = getNestedValue(dict, path);
  return Array.isArray(value) ? value : [];
}
`;

fs.writeFileSync(path.join(base, "src/lib/translations.ts"), translations);
console.log("translations.ts updated");
