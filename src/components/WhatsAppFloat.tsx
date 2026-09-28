"use client";

import { useLocale } from "@/components/LocaleProvider";

interface WhatsAppFloatProps {
  locale: string;
}

export function WhatsAppFloat({ locale }: WhatsAppFloatProps) {
  const { dict } = useLocale();

  const t = (path: string) => {
    return path.split(".").reduce((current: unknown, key: string) => {
      if (current && typeof current === "object" && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return path;
    }, dict) as string;
  };

  const whatsappNumber = t("cta.whatsappNumber").replace(/\s/g, "");
  const prefilledMessage = encodeURIComponent(
    locale === "ar"
      ? "مرحباً، أود معرفة المزيد عن خدماتكم."
      : locale === "en"
      ? "Hello, I'd like to know more about your services."
      : "Bonjour, je souhaite en savoir plus sur vos services."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-bounce-subtle safe-area-inset-bottom safe-area-inset-right"
      aria-label="Nous contacter sur WhatsApp"
      title="Nous contacter sur WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414z" />
      </svg>
    </a>
  );
}