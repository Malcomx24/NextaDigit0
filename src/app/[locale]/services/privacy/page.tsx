import { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/translations";
import { PrivacyContent } from "@/components/PrivacyContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const validLocale = isValidLocale(locale) ? locale : "fr";
  const dict = await getDictionary(validLocale);
  
  const getNestedValue = (obj: Record<string, unknown>, path: string): unknown => {
    return path.split(".").reduce((current: unknown, key: string) => {
      if (current && typeof current === "object" && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return undefined;
    }, obj);
  };

  const title = getNestedValue(dict, "footer.legal.privacy") as string || "Politique de confidentialité";
  
  return {
    title,
    description: "Politique de confidentialité de NexaTech",
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return <PrivacyContent dict={dict} />;
}