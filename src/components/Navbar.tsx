"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/components/LocaleProvider";
import { locales, type Locale, localeNames, localeFlags, getDirection } from "@/lib/i18n";

interface NavbarProps {
  locale: string;
}

export function Navbar({ locale }: NavbarProps) {
  const { locale: currentLocale, setLocale, dict } = useLocale();
  const t = (path: string) => {
    return path.split(".").reduce((current: unknown, key: string) => {
      if (current && typeof current === "object" && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return path;
    }, dict) as string;
  };
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = newLocale;
    const newPath = "/" + segments.join("/");
    setLocale(newLocale);
    router.push(newPath);
    setLangMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { href: "#", label: t("nav.home"), section: null },
    { href: "#services", label: t("nav.services"), section: "services" },
    { href: "#projects", label: t("nav.projects"), section: "projects" },
    { href: "#process", label: t("nav.process"), section: "process" },
    { href: "#about", label: t("nav.about"), section: null },
    { href: "#contact", label: t("nav.contact"), section: "contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 border-b border-border backdrop-blur-sm" : "bg-white"} safe-area-inset-top`}>
      <nav className="max-w-[1280px] mx-auto px-4 py-3 flex items-center justify-between" aria-label="Navigation principale">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}
          className="flex items-center gap-3"
          aria-label={`${t("nav.brand")} - Accueil`}
        >
          <img
            src="/logo.png"
            alt={t("nav.brand")}
            className="h-12 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6" role="menubar">
            {navItems.map((item) => (
              <li key={item.href} role="none">
                {item.section ? (
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className="text-sm font-medium text-charcoal/80 hover:text-accent-green transition-colors relative py-2 cursor-pointer min-h-[44px] flex items-center"
                    role="menuitem"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-charcoal/80 hover:text-accent-green transition-colors relative py-2 min-h-[44px] flex items-center"
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <LanguageSwitcher locale={currentLocale} onChange={handleLocaleChange} isOpen={langMenuOpen} setIsOpen={setLangMenuOpen} dict={dict} t={t} ref={langMenuRef} />
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-white text-sm font-medium rounded-lg hover:bg-charcoal/90 transition-colors min-h-[44px]"
            >
              {t("nav.cta")}
            </a>
          </div>
        </div>

        <button
          className="md:hidden p-3 rounded-lg hover:bg-light-bg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div id="mobile-menu" ref={mobileMenuRef} className="md:hidden border-t border-border bg-white animate-slide-down fixed inset-x-0 top-full z-40 max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-6 py-4 space-y-4 pb-20">
            <ul className="space-y-2" role="menu">
              {navItems.map((item) => (
                <li key={item.href} role="none">
                  {item.section ? (
                    <button
                      onClick={() => { scrollToSection(item.section); setMobileMenuOpen(false); }}
                      className="block px-3 py-3 text-base font-medium text-charcoal/80 hover:text-accent-green hover:bg-light-bg rounded-lg transition-colors min-h-[44px] w-full text-left"
                      role="menuitem"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-3 text-base font-medium text-charcoal/80 hover:text-accent-green hover:bg-light-bg rounded-lg transition-colors min-h-[44px] flex items-center"
                      role="menuitem"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-border flex flex-col items-stretch gap-4">
              <LanguageSwitcher locale={currentLocale} onChange={handleLocaleChange} isOpen={langMenuOpen} setIsOpen={setLangMenuOpen} dict={dict} t={t} mobile />
              <a
                href="#contact"
                className="w-full text-center px-5 py-3 bg-charcoal text-white text-sm font-medium rounded-lg hover:bg-charcoal/90 transition-colors min-h-[44px] flex items-center justify-center"
                onClick={() => { scrollToSection("contact"); setMobileMenuOpen(false); }}
              >
                {t("nav.cta")}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

interface LanguageSwitcherProps {
  locale: Locale;
  onChange: (l: Locale) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  dict: Record<string, unknown>;
  t: (path: string) => string;
  mobile?: boolean;
  ref?: React.RefObject<HTMLDivElement | null>;
}

function LanguageSwitcher({
  locale,
  onChange,
  isOpen,
  setIsOpen,
  dict,
  t,
  mobile = false,
  ref,
}: LanguageSwitcherProps) {
  const currentLang = localeNames[locale];
  const currentFlag = localeFlags[locale];

  if (mobile) {
    return (
      <select
        value={locale}
        onChange={(e) => onChange(e.target.value as Locale)}
        className="w-full px-3 py-3 border border-border rounded-lg bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-accent-green min-h-[44px]"
        aria-label="Changer de langue"
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {localeFlags[l]} {localeNames[l]}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div ref={ref} className="relative" role="group" aria-label="Sélecteur de langue">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-charcoal/80 hover:text-charcoal transition-colors rounded-lg hover:bg-light-bg min-h-[44px] min-w-[44px]"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{currentFlag}</span>
        <span className="hidden sm:inline">{currentLang}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-border rounded-lg shadow-lg overflow-hidden animate-fade-in z-50" role="listbox">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => onChange(l)}
              className={`w-full px-3 py-3 text-left text-sm flex items-center gap-2 transition-colors min-h-[44px] ${l === locale ? "bg-light-mint text-accent-green font-medium" : "text-charcoal/80 hover:bg-light-bg"}`}
              role="option"
              aria-selected={l === locale}
            >
              <span>{localeFlags[l]}</span>
              <span>{localeNames[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}