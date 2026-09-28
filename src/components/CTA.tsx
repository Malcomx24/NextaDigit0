"use client";

import { useLocale } from "@/components/LocaleProvider";

interface CTAProps {
  locale: string;
}

export function CTA({ locale }: CTAProps) {
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
    <section id="cta" className="py-20 md:py-28 bg-charcoal text-white" aria-labelledby="cta-heading">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-white mb-6">
          {t("cta.headline")}
        </h2>
        <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
          {t("cta.description")}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-green text-charcoal text-base font-semibold rounded-lg hover:bg-accent-green/90 transition-colors"
          >
            {t("cta.primaryCta")}
          </a>
          <a
            href={"https://wa.me/" + t("cta.whatsappNumber").replace(/\s/g, "")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-base font-semibold rounded-lg hover:bg-white/5 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.466-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.369-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.377-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.672zM12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.011L2 22l5.011-1.338A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" /></svg>
            {t("cta.secondaryCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
