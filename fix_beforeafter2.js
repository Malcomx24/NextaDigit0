const fs = require("fs");
const path = require("path");
const base = "C:/Users/AnasShiftyyy/Desktop/New folder (2)/nexatech";

const beforeAfter = `"use client";

import { useTranslation } from "@/components/LocaleProvider";

interface BeforeAfterProps {
  locale: string;
}

export function BeforeAfter({ locale }: BeforeAfterProps) {
  const t = useTranslation();

  const beforeItems = [
    t("beforeAfter.before.items.0"),
    t("beforeAfter.before.items.1"),
    t("beforeAfter.before.items.2"),
    t("beforeAfter.before.items.3"),
    t("beforeAfter.before.items.4"),
  ];

  const afterItems = [
    t("beforeAfter.after.items.0"),
    t("beforeAfter.after.items.1"),
    t("beforeAfter.after.items.2"),
    t("beforeAfter.after.items.3"),
    t("beforeAfter.after.items.4"),
  ];

  return (
    <section className="py-20 md:py-28 bg-light-bg" aria-labelledby="beforeafter-heading">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-green mb-4">{t("beforeAfter.eyebrow")}</p>
          <h2 id="beforeafter-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-charcoal mb-6">
            {t("beforeAfter.headline")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-white rounded-xl border border-border p-8 md:p-10 relative">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-charcoal text-white text-xs font-semibold rounded-full">
              {t("beforeAfter.before.label")}
            </div>
            <div className="space-y-4">
              {beforeItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-light-bg rounded-lg border border-border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center">
                    <svg className="w-5 h-5 text-charcoal/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <p className="text-charcoal font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-charcoal rounded-xl border border-border-dark p-8 md:p-10 relative text-white">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-accent-green text-charcoal text-xs font-semibold rounded-full">
              {t("beforeAfter.after.label")}
            </div>
            <div className="space-y-4">
              {afterItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-charcoal/50 rounded-lg border border-border-dark/50">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-green/20 flex items-center justify-center text-accent-green">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-white font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent-green/10 border border-accent-green/20 rounded-xl max-w-3xl">
            <svg className="w-6 h-6 text-accent-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            <p className="text-charcoal font-medium">Prêt à centraliser votre gestion ? <a href="#contact" className="text-accent-green font-semibold hover:underline ml-2">Discutons-en</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(base, "src/components/BeforeAfter.tsx"), beforeAfter);
console.log("BeforeAfter.tsx fixed");
