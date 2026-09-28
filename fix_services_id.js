const fs = require("fs");
const path = require("path");
const base = "C:/Users/AnasShiftyyy/Desktop/New folder (2)/nexatech";

const services = `"use client";

import { useLocale } from "@/components/LocaleProvider";

interface ServicesProps {
  locale: string;
}

const serviceIcons: Record<string, React.ReactNode> = {
  management: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  web: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
  automation: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  crm: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  marketing: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  hosting: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
};

export function Services({ locale }: ServicesProps) {
  const { dict } = useLocale();

  const t = (path: string) => {
    return path.split(".").reduce((current: unknown, key: string) => {
      if (current && typeof current === "object" && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return path;
    }, dict) as string;
  };

  const featured = {
    number: t("services.featured.number"),
    title: t("services.featured.title"),
    description: t("services.featured.description"),
    features: [
      t("services.featured.features.0"),
      t("services.featured.features.1"),
      t("services.featured.features.2"),
      t("services.featured.features.3"),
      t("services.featured.features.4"),
      t("services.featured.features.5"),
    ],
  };

  const servicesList = [
    { number: t("services.list.0.number"), title: t("services.list.0.title"), description: t("services.list.0.description"), icon: "web" },
    { number: t("services.list.1.number"), title: t("services.list.1.title"), description: t("services.list.1.description"), icon: "automation" },
    { number: t("services.list.2.number"), title: t("services.list.2.title"), description: t("services.list.2.description"), icon: "crm" },
    { number: t("services.list.3.number"), title: t("services.list.3.title"), description: t("services.list.3.description"), icon: "marketing" },
    { number: t("services.list.4.number"), title: t("services.list.4.title"), description: t("services.list.4.description"), icon: "hosting" },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-light-bg" aria-labelledby="services-heading">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-green mb-4">{t("services.eyebrow")}</p>
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-charcoal">
            {t("services.headline")}
          </h2>
        </div>

        <div className="space-y-12 md:space-y-16">
          <article className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="flex flex-col gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-green/10 text-accent-green text-sm font-semibold rounded-full w-fit">
                <span className="text-2xl font-bold">{featured.number}</span>
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal">{featured.title}</h3>
              <p className="text-lg text-secondary-text leading-relaxed">{featured.description}</p>
              <ul className="space-y-3 pt-4 border-t border-border">
                {featured.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-secondary-text">
                    <svg className="w-5 h-5 text-accent-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-border p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Réservations", value: "24", subtitle: "cette semaine" },
                  { label: "Clients actifs", value: "156", subtitle: "total" },
                  { label: "Véhicules", value: "18", subtitle: "en flotte" },
                  { label: "CA mensuel", value: "48.7K", subtitle: "DH" },
                ].map((stat, i) => (
                  <div key={i} className="p-4 bg-light-bg rounded-lg">
                    <p className="text-xs font-medium text-secondary-text uppercase tracking-wide">{stat.label}</p>
                    <p className="text-2xl md:text-3xl font-bold text-charcoal mt-1">{stat.value}</p>
                    <p className="text-xs text-secondary-text">{stat.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((service, i) => (
                <article key={i} className="group bg-white rounded-xl border border-border p-6 hover:border-accent-green/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-light-mint text-accent-green">
                      {serviceIcons[service.icon]}
                    </span>
                    <span className="text-sm font-semibold text-accent-green">{service.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2 group-hover:text-accent-green transition-colors">{service.title}</h3>
                  <p className="text-secondary-text leading-relaxed">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(base, "src/components/Services.tsx"), services);
console.log("Services.tsx updated with id");
