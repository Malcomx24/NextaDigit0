"use client";

import { useLocale } from "@/components/LocaleProvider";

interface TestimonialsProps {
  locale: string;
}

export function Testimonials({ locale }: TestimonialsProps) {
  const { dict } = useLocale();

  const t = (path: string) => {
    return path.split(".").reduce((current: unknown, key: string) => {
      if (current && typeof current === "object" && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return path;
    }, dict) as string;
  };

  return (
    <section id="testimonials" className="py-16 md:py-20 lg:py-28 bg-light-bg" aria-labelledby="testimonials-heading">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-accent-green mb-3 md:mb-4">{t("testimonials.eyebrow")}</p>
        <h2 id="testimonials-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-charcoal mb-4 md:mb-6">
          {t("testimonials.headline")}
        </h2>
        <p className="text-base md:text-lg text-secondary-text leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12">
          {t("testimonials.description")}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 bg-charcoal text-white text-sm md:text-base font-semibold rounded-lg hover:bg-charcoal/90 transition-colors min-h-[48px] w-full sm:w-auto"
        >
          {t("testimonials.cta")}
        </a>
      </div>
    </section>
  );
}
