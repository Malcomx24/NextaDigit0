"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { locales, type Locale, getDirection } from "@/lib/i18n";

export function HtmlAttributes() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = (pathname.split("/")[1] as Locale) || "fr";
    if (locales.includes(locale)) {
      document.documentElement.lang = locale === "ar" ? "ar" : locale === "en" ? "en" : "fr";
      document.documentElement.dir = getDirection(locale);
      document.documentElement.className = `--font-geist-sans h-full antialiased`;
    }
  }, [pathname]);

  return null;
}