"use client";

import { useLocale } from "@/components/LocaleProvider";

interface WhyUsProps {
  locale: string;
}

export function WhyUs({ locale }: WhyUsProps) {
  const { dict } = useLocale();

  const t = (path: string) => {
    return path.split(".").reduce((current: unknown, key: string) => {
      if (current && typeof current === "object" && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return path;
    }, dict) as string;
  };

  const points = [
    { title: t("whyUs.points.0.title"), description: t("whyUs.points.0.description"), icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg> },
    { title: t("whyUs.points.1.title"), description: t("whyUs.points.1.description"), icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
    { title: t("whyUs.points.2.title"), description: t("whyUs.points.2.description"), icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
    { title: t("whyUs.points.3.title"), description: t("whyUs.points.3.description"), icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg> },
  ];

  return (
    <section id="whyus" className="py-20 md:py-28 bg-white" aria-labelledby="whyus-heading">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-green mb-4">{t("whyUs.eyebrow")}</p>
          <h2 id="whyus-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-charcoal mb-6">
            {t("whyUs.headline")}
          </h2>
          <p className="text-lg text-secondary-text leading-relaxed">
            Nous ne vendons pas des licences. Nous construisons des partenariats durables.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {points.map((point, i) => (
            <article key={i} className="p-5 md:p-6 md:p-8 bg-light-bg rounded-xl border border-border hover:border-accent-green/30 transition-all duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green mb-4 md:mb-6">
                {point.icon}
              </div>
              <h3 className="text-base md:text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-3">{point.title}</h3>
              <p className="text-secondary-text leading-relaxed text-sm md:text-base">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
