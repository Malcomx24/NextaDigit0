const fs = require("fs");
const path = require("path");
const base = "C:/Users/AnasShiftyyy/Desktop/New folder (2)/nexatech";

const testimonials = `"use client";

import { useTranslation } from "@/components/LocaleProvider";

interface TestimonialsProps {
  locale: string;
}

export function Testimonials({ locale }: TestimonialsProps) {
  const t = useTranslation();

  return (
    <section className="py-20 md:py-28 bg-light-bg" aria-labelledby="testimonials-heading">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-accent-green mb-4">{t("testimonials.eyebrow")}</p>
        <h2 id="testimonials-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-charcoal mb-6">
          {t("testimonials.headline")}
        </h2>
        <p className="text-lg text-secondary-text leading-relaxed max-w-2xl mx-auto mb-12">
          Chaque projet commence par une conversation. La votre pourrait etre la prochaine histoire que nous racontons.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white text-base font-semibold rounded-lg hover:bg-charcoal/90 transition-colors"
        >
          {t("testimonials.cta")}
        </a>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(base, "src/components/Testimonials.tsx"), testimonials);
console.log("Testimonials.tsx fixed");
