"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { type Locale, getDirection } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  direction: "ltr" | "rtl";
  dict: Record<string, unknown>;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
  locale: Locale;
  initialDict: Record<string, unknown>;
}

export function LocaleProvider({ children, locale: initialLocale, initialDict }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [dict, setDict] = useState<Record<string, unknown>>(initialDict);
  const direction = getDirection(locale);

  // Only fetch dictionary when locale changes (client-side navigation)
  useEffect(() => {
    if (locale !== initialLocale) {
      async function loadDictionary() {
        const dictionary = await getDictionary(locale);
        setDict(dictionary);
      }
      loadDictionary();
    }
  }, [locale, initialLocale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.dir = getDirection(newLocale);
    document.documentElement.lang = newLocale === "ar" ? "ar" : newLocale === "en" ? "en" : "fr";
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, direction, dict }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}

export function useTranslation() {
  const { dict } = useLocale();
  return (path: string) => {
    return path.split(".").reduce((current: unknown, key: string) => {
      if (current && typeof current === "object" && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return path;
    }, dict) as string;
  };
}
