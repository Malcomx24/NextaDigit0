"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { locales, localeNames, localeFlags } from "@/lib/i18n";

interface FooterProps {
  locale: string;
}

export function Footer({ locale }: FooterProps) {
  const { dict } = useLocale();

  const t = (path: string) => {
    return path.split(".").reduce((current: unknown, key: string) => {
      if (current && typeof current === "object" && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return path;
    }, dict) as string;
  };

  const navLinks = [
    { href: "/", label: t("footer.navigation.home") },
    { href: "/projects", label: t("footer.navigation.projects") },
    { href: "/process", label: t("footer.navigation.process") },
    { href: "/about", label: t("footer.navigation.about") },
    { href: "/contact", label: t("footer.navigation.contact") },
  ];

  return (
    <footer className="bg-charcoal text-white safe-area-inset-bottom" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 md:mb-6" aria-label={t("footer.brand") + " - Accueil"}>
              <img
                src="/logo.png"
                alt={t("footer.brand")}
                className="h-24 md:h-32 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xs md:max-w-sm mb-6 md:mb-8">{t("footer.tagline")}</p>
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={`flex items-center gap-1.5 text-sm transition-colors ${l === locale ? "text-white font-medium" : "text-white/50 hover:text-white"}`}
                  aria-current={l === locale ? "page" : undefined}
                >
                  <span>{localeFlags[l]}</span>
                  <span className="hidden sm:inline">{localeNames[l]}</span>
                </Link>
              ))}
            </div>
          </div>

          <nav aria-labelledby="nav-heading">
            <h3 id="nav-heading" className="text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4">{t("footer.navigation.title")}</h3>
            <ul className="space-y-2 md:space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-white/70 hover:text-white text-sm transition-colors min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address aria-labelledby="contact-heading" style={{ fontStyle: "normal" }}>
            <h3 id="contact-heading" className="text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4">{t("footer.contact.title")}</h3>
            <ul className="space-y-2 md:space-y-3 text-white/70 text-sm">
              <li>{t("footer.contact.address")}</li>
              <li>
                <a href={`tel:${t("footer.contact.phone").replace(/\s/g, "")}`} className="hover:text-white transition-colors min-h-[44px] flex items-center">
                  {t("footer.contact.phone")}
                </a>
              </li>
              <li>
                <a href={`mailto:${t("footer.contact.email")}`} className="hover:text-white transition-colors min-h-[44px] flex items-center">
                  {t("footer.contact.email")}
                </a>
              </li>
              <li className="text-white/50">{t("footer.contact.availability")}</li>
            </ul>
          </address>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 flex flex-col items-center md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">{t("footer.copyright")}</p>
          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/services/privacy" className="text-white/50 hover:text-white text-sm transition-colors min-h-[44px] flex items-center">
              {t("footer.legal.privacy")}
            </Link>
            <Link href="/services/terms" className="text-white/50 hover:text-white text-sm transition-colors min-h-[44px] flex items-center">
              {t("footer.legal.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
