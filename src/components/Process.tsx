"use client";

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
    <section id="process" className="py-16 md:py-20 lg:py-28 bg-white" aria-labelledby="process-heading">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-green mb-3 md:mb-4">{t("process.eyebrow")}</p>
          <h2 id="process-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-charcoal">
            {t("process.headline")}
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-10 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {steps.map((step, i) => (
              <div key={i} className="relative flex gap-4 md:gap-6 lg:gap-8 group">
                <div className="flex-shrink-0 relative z-10 w-10 md:w-12 lg:w-16">
                  <div className="relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-light-bg border-2 border-border flex items-center justify-center text-xl md:text-2xl lg:text-3xl font-bold text-charcoal/30 group-hover:text-accent-green group-hover:border-accent-green transition-all duration-300">
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="absolute left-4 md:left-5 lg:left-7 top-14 md:top-16 lg:top-20 w-0.5 h-full bg-border" />
                    )}
                  </div>
                </div>
                <div className="flex-1 pt-1 md:pt-0">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-charcoal mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-secondary-text leading-relaxed text-sm md:text-base max-w-xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
