const fs = require("fs");
const path = require("path");
const base = "C:/Users/AnasShiftyyy/Desktop/New folder (2)/nexatech";

const process = `"use client";

import { useLocale } from "@/components/LocaleProvider";

interface ProcessProps {
  locale: string;
}

export function Process({ locale }: ProcessProps) {
  const { dict } = useLocale();

  const t = (path: string) => {
    return path.split(".").reduce((current: unknown, key: string) => {
      if (current && typeof current === "object" && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return path;
    }, dict) as string;
  };

  const steps = [
    { number: t("process.steps.0.number"), title: t("process.steps.0.title"), description: t("process.steps.0.description") },
    { number: t("process.steps.1.number"), title: t("process.steps.1.title"), description: t("process.steps.1.description") },
    { number: t("process.steps.2.number"), title: t("process.steps.2.title"), description: t("process.steps.2.description") },
    { number: t("process.steps.3.number"), title: t("process.steps.3.title"), description: t("process.steps.3.description") },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-white" aria-labelledby="process-heading">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-green mb-4">{t("process.eyebrow")}</p>
          <h2 id="process-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-charcoal">
            {t("process.headline")}
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-10 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <div key={i} className="relative flex gap-6 md:gap-8 group">
                <div className="flex-shrink-0 relative z-10 w-12 md:w-20">
                  <div className="relative">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-light-bg border-2 border-border flex items-center justify-center text-2xl md:text-3xl font-bold text-charcoal/30 group-hover:text-accent-green group-hover:border-accent-green transition-all duration-300">
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="absolute left-5 md:left-7 top-16 md:top-20 w-0.5 h-full bg-border" />
                    )}
                  </div>
                </div>
                <div className="flex-1 pt-2 md:pt-0">
                  <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3">{step.title}</h3>
                  <p className="text-secondary-text leading-relaxed max-w-xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(base, "src/components/Process.tsx"), process);
console.log("Process.tsx updated with id");
