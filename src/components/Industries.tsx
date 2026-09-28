"use client";

import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";

interface IndustriesProps {
  locale: string;
}

const industryIcons: Record<string, React.ReactNode> = {
  "car-rental": <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  "beauty": <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>,
  "medical": <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  "training": <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  "real-estate": <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12" /></svg>,
  "restaurant": <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  "retail": <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
  "services": <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
};

export function Industries({ locale }: IndustriesProps) {
  const { dict } = useLocale();

  const t = (path: string) => {
    return path.split(".").reduce((current: unknown, key: string) => {
      if (current && typeof current === "object" && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return path;
    }, dict) as string;
  };

  const [selectedIndustry, setSelectedIndustry] = useState("car-rental");

  const industries = [
    { id: "car-rental", title: t("industries.items.0.title"), problem: t("industries.items.0.problem"), solution: t("industries.items.0.solution") },
    { id: "beauty", title: t("industries.items.1.title"), problem: t("industries.items.1.problem"), solution: t("industries.items.1.solution") },
    { id: "medical", title: t("industries.items.2.title"), problem: t("industries.items.2.problem"), solution: t("industries.items.2.solution") },
    { id: "training", title: t("industries.items.3.title"), problem: t("industries.items.3.problem"), solution: t("industries.items.3.solution") },
    { id: "real-estate", title: t("industries.items.4.title"), problem: t("industries.items.4.problem"), solution: t("industries.items.4.solution") },
    { id: "restaurant", title: t("industries.items.5.title"), problem: t("industries.items.5.problem"), solution: t("industries.items.5.solution") },
    { id: "retail", title: t("industries.items.6.title"), problem: t("industries.items.6.problem"), solution: t("industries.items.6.solution") },
    { id: "services", title: t("industries.items.7.title"), problem: t("industries.items.7.problem"), solution: t("industries.items.7.solution") },
  ];

  const current = industries.find((i) => i.id === selectedIndustry) || industries[0];

  const getButtonClass = (industryId: string) => {
    if (selectedIndustry === industryId) {
      return "bg-light-mint border-accent-green text-charcoal";
    }
    return "bg-white border-border text-secondary-text hover:border-accent-green/30 hover:bg-light-bg";
  };

  const getIcon = (industryId: string) => {
    return industryIcons[industryId] || industryIcons["car-rental"];
  };

  return (
    <section id="industries" className="py-20 md:py-28 bg-white" aria-labelledby="industries-heading">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-green mb-4">{t("industries.eyebrow")}</p>
          <h2 id="industries-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-charcoal">
            {t("industries.headline")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-3">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center gap-4 ${getButtonClass(industry.id)}`}
                  role="tab"
                  aria-selected={selectedIndustry === industry.id}
                  aria-controls={"industry-" + industry.id}
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-light-bg flex items-center justify-center text-charcoal">
                    {getIcon(industry.id)}
                  </span>
                  <span className="font-medium">{industry.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2" role="tabpanel" id={"industry-" + selectedIndustry} aria-labelledby={selectedIndustry}>
            <div className="bg-white border border-border rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-light-mint flex items-center justify-center text-accent-green">
                  {getIcon(selectedIndustry)}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal">{current.title}</h3>
                  <p className="text-secondary-text mt-1">Secteur d\'activité</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-charcoal/5 rounded-xl border border-border-dark/50">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal/60 mb-3">Le problème</h4>
                  <p className="text-secondary-text leading-relaxed">{current.problem}</p>
                </div>
                <div className="p-6 bg-accent-green/5 rounded-xl border border-accent-green/20">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-green mb-3">La solution</h4>
                  <p className="text-charcoal leading-relaxed">{current.solution}</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-secondary-text">
                  Vous êtes dans ce secteur ? <a href="#contact" className="text-accent-green font-medium hover:underline">Parlons de votre projet</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
