"use client";

import { useLocale } from "@/components/LocaleProvider";

interface TermsContentProps {
  dict: Record<string, unknown>;
}

export function TermsContent({ dict }: TermsContentProps) {
  const { dict: contextDict } = useLocale();
  const currentDict = dict || contextDict;

  const t = (path: string) => {
    return path.split(".").reduce((current: unknown, key: string) => {
      if (current && typeof current === "object" && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return path;
    }, currentDict) as string;
  };

  return (
    <section className="py-16 md:py-24 bg-white min-h-screen">
      <div className="max-w-[800px] mx-auto px-4 md:px-6">
        <header className="mb-12 md:mb-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-green mb-4">
            {t("footer.legal.terms")}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-charcoal">
            {t("footer.legal.terms")}
          </h1>
        </header>

        <div className="prose prose-charcoal max-w-none space-y-8">
          <p className="text-lg text-charcoal/70 leading-relaxed">
            {t("terms.intro") || "Dernière mise à jour : Janvier 2026. Bienvenue sur le site de NexaTech. En accédant à ce site, vous acceptez d'être lié par les présentes conditions d'utilisation."}
          </p>

          <h2 className="text-2xl font-bold text-charcoal">{t("terms.acceptance") || "1. Acceptation des conditions"}</h2>
          <p>{t("terms.acceptance_text") || "En accédant et en utilisant ce site web, vous acceptez d'être lié par les présentes conditions d'utilisation et de vous conformer à toutes les lois et réglementations applicables. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site."}</p>

          <h2 className="text-2xl font-bold text-charcoal">{t("terms.ip") || "2. Propriété intellectuelle"}</h2>
          <p>{t("terms.ip_text") || "Tout le contenu de ce site (textes, graphiques, logos, images, logiciels) est la propriété de NexaTech ou de ses concédants de licence et est protégé par les lois sur la propriété intellectuelle. Toute reproduction, distribution, modification ou utilisation non autorisée est interdite."}</p>

          <h2 className="text-2xl font-bold text-charcoal">{t("terms.use") || "3. Utilisation du site"}</h2>
          <p>{t("terms.use_text") || "Vous vous engagez à utiliser ce site uniquement à des fins licites et conformément aux présentes conditions. Il vous est interdit de :"} </p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("terms.use_1") || "Tenter d'accéder sans autorisation à nos systèmes ou réseaux"}</li>
            <li>{t("terms.use_2") || "Introduire des virus, malwares ou tout code nuisible"}</li>
            <li>{t("terms.use_3") || "Collecter des données d'utilisateurs sans consentement"}</li>
            <li>{t("terms.use_4") || "Utiliser le site pour des activités illégales ou frauduleuses"}</li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal">{t("terms.services") || "4. Services et devis"}</h2>
          <p>{t("terms.services_text") || "Les informations présentées sur ce site concernant nos services sont fournies à titre indicatif. Les devis et propositions commerciales sont soumis à validation et ne constituent pas une offre contractuelle ferme. Les prix et conditions peuvent varier selon la complexité du projet."}</p>

          <h2 className="text-2xl font-bold text-charcoal">{t("terms.limitation") || "5. Limitation de responsabilité"}</h2>
          <p>{t("terms.limitation_text") || "NexaTech s'efforce d'assurer l'exactitude des informations sur ce site, mais ne garantit pas l'exhaustivité, l'exactitude ou l'actualité du contenu. Nous ne saurions être tenus responsables des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser ce site."}</p>

          <h2 className="text-2xl font-bold text-charcoal">{t("terms.links") || "6. Liens vers des tiers"}</h2>
          <p>{t("terms.links_text") || "Ce site peut contenir des liens vers des sites web tiers. Ces liens sont fournis pour votre commodité. NexaTech n'a aucun contrôle sur le contenu de ces sites et décline toute responsabilité quant à leur contenu, leur exactitude ou leurs pratiques de confidentialité."}</p>

          <h2 className="text-2xl font-bold text-charcoal">{t("terms.modifications") || "7. Modifications des conditions"}</h2>
          <p>{t("terms.modifications_text") || "NexaTech se réserve le droit de modifier ces conditions à tout moment. Les modifications prennent effet dès leur publication sur cette page. Votre utilisation continue du site après modification constitue votre acceptation des nouvelles conditions."}</p>

          <h2 className="text-2xl font-bold text-charcoal">{t("terms.law") || "8. Droit applicable"}</h2>
          <p>{t("terms.law_text") || "Ces conditions sont régies par le droit marocain. Tout litige relatif à l'utilisation de ce site sera soumis à la juridiction exclusive des tribunaux d'Agadir, Maroc."}</p>

          <h2 className="text-2xl font-bold text-charcoal">{t("terms.contact") || "9. Contact"}</h2>
          <p>{t("terms.contact_text") || "Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter à : nextadigit@gmail.com ou au +212 6 79 84 43 25."}</p>
        </div>
      </div>
    </section>
  );
}