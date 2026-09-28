const fs = require("fs");
const path = require("path");
const base = "C:/Users/AnasShiftyyy/Desktop/New folder (2)/nexatech";

const footer = `"use client";

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
    { href: "/services", label: t("footer.navigation.services") },
    { href: "/projects", label: t("footer.navigation.projects") },
    { href: "/process", label: t("footer.navigation.process") },
    { href: "/about", label: t("footer.navigation.about") },
    { href: "/contact", label: t("footer.navigation.contact") },
  ];

  const serviceLinks = [
    { href: "/services/management", label: t("footer.services.management") },
    { href: "/services/web", label: t("footer.services.web") },
    { href: "/services/automation", label: t("footer.services.automation") },
    { href: "/services/crm", label: t("footer.services.crm") },
    { href: "/services/marketing", label: t("footer.services.marketing") },
    { href: "/services/hosting", label: t("footer.services.hosting") },
  ];

  return (
    <footer className="bg-charcoal text-white" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6" aria-label={t("footer.brand") + " - Accueil"}>
              <span className="text-xl font-bold">\${t("footer.brand")}</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-8">\${t("footer.tagline")}</p>
            <div className="flex items-center gap-4">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={\`/\${l}\`}
                  className={\`flex items-center gap-1.5 text-sm transition-colors \${l === locale ? "text-white font-medium" : "text-white/50 hover:text-white"}\`}
                  aria-current={l === locale ? "page" : undefined}
                >
                  <span>{localeFlags[l]}</span>
                  <span>{localeNames[l]}</span>
                </Link>
              ))}
            </div>
          </div>

          <nav aria-labelledby="nav-heading">
            <h3 id="nav-heading" className="text-sm font-semibold uppercase tracking-wider mb-4">\${t("footer.navigation.title")}</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={\`/\${locale}\${link.href}\`}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="services-heading">
            <h3 id="services-heading" className="text-sm font-semibold uppercase tracking-wider mb-4">\${t("footer.services.title")}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={\`/\${locale}\${link.href}\`}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address aria-labelledby="contact-heading" style={{ fontStyle: "normal" }}>
            <h3 id="contact-heading" className="text-sm font-semibold uppercase tracking-wider mb-4">\${t("footer.contact.title")}</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>\${t("footer.contact.address")}</li>
              <li>
                <a href={\`tel:\${t("footer.contact.phone").replace(/\\s/g, "")}\`} className="hover:text-white transition-colors">
                  \${t("footer.contact.phone")}
                </a>
              </li>
              <li>
                <a href={\`mailto:\${t("footer.contact.email")}\`} className="hover:text-white transition-colors">
                  \${t("footer.contact.email")}
                </a>
              </li>
              <li className="text-white/50">\${t("footer.contact.availability")}</li>
            </ul>
          </address>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">\${t("footer.copyright")}</p>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
              \${t("footer.legal.privacy")}
            </Link>
            <Link href="/legal/terms" className="text-white/50 hover:text-white text-sm transition-colors">
              \${t("footer.legal.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
`;

fs.writeFileSync(path.join(base, "src/components/Footer.tsx"), footer);
console.log("Footer.tsx fixed - added use client");
