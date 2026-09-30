"use client";

import { useLocale } from "@/components/LocaleProvider";

interface PrivacyContentProps {
  dict: Record<string, unknown>;
}

export function PrivacyContent({ dict }: PrivacyContentProps) {
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
            {t("footer.legal.privacy")}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-charcoal">
            {t("footer.legal.privacy")}
          </h1>
        </header>

        <div className="prose prose-charcoal max-w-none space-y-8">
          <p className="text-lg text-charcoal/70 leading-relaxed">
            {t("privacy.intro") || "Dernière mise à jour : Janvier 2026. NexaTech (\"nous\", \"notre\", \"nos\") s'engage à protéger votre vie privée. Cette politique explique comment nous collectons, utilisons et protégeons vos informations lorsque vous visitez notre site web."}
          </p>

          <h2 className="text-2xl font-bold text-charcoal">{t("privacy.controller") || "1. Responsable du traitement"}</h2>
          <p>{t("privacy.controller_text") || "NexaTech, Agadir, Souss-Massa, Maroc\nEmail : nextadigit@gmail.com\nTéléphone : +212 6 79 84 43 25"}</p>

          <h2 className="text-2xl font-bold text-charcoal">{t("privacy.data") || "2. Données collectées"}</h2>
          <h3 className="text-xl font-semibold text-charcoal">{t("privacy.data_form") || "Données du formulaire de contact"}</h3>
          <p>{t("privacy.data_form_text") || "Lorsque vous remplissez notre formulaire de contact, nous collectons : votre nom, votre entreprise, votre téléphone, votre email, votre secteur d'activité, votre besoin principal, votre budget estimé et votre message."}</p>
          <h3 className="text-xl font-semibold text-charcoal">{t("privacy.data_auto") || "Données automatiques"}</h3>
          <p>{t("privacy.data_auto_text") || "Lors de votre navigation, nous collectons automatiquement : adresse IP, type de navigateur, système d'exploitation, pages visitées, durée de visite, référent."}</p>

          <h2 className="text-2xl font-bold text-charcoal">{t("privacy.purpose") || "3. Finalités du traitement"}</h2>
          <p>{t("privacy.purpose_text") || "Nous utilisons vos données pour :"} </p>
          <ul className="list-disc list-inside space-y-2">
            <li>{t("privacy.purpose_1") || "Répondre à vos demandes de contact et de devis"}</li>
            <li>{t("privacy.purpose_2") || "Vous envoyer des informations sur nos services"}</li>
            <li>{t("privacy.purpose_3") || "Améliorer notre site et nos services"}</li>
            <li>{t("privacy.purpose_4") || "Assurer la sécurité de notre site"}</li>
            <li>{t("privacy.purpose_5") || "Respecter nos obligations légales"}</li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal">{t("privacy.legal_basis") || "4. Base légale"}</h2>
          <p>{t("privacy.legal_basis_text") || "Le traitement repose sur : votre consentement (formulaire de contact), notre intérêt légitime (amélioration du site, sécurité), et nos obligations légales."}</p>

          <h2 className="text-2xl font-bold text-charcoal">{t("privacy.retention") || "5. Durée de conservation"}</h2>
          <p>{t("privacy.retention_text") || "Données du formulaire : conservées 3 ans après le dernier contact. Données de navigation : conservées 13 mois maximum. Vous pouvez demander la suppression à tout moment."}</p>

          <h2 className="text-2xl font-bold text-charcoal">{t("privacy.sharing") || "6. Partage des données"}</h2>
          <p>{t("privacy.sharing_text") || "Vos données ne sont jamais vendues. Elles peuvent être partagées avec : nos sous-traitants techniques (hébergement, email) sous contrat de confidentialité, et les autorités si la loi l'exige."}</p>

          <h2 className="text-2xl font-bold text-charcoal">{t("privacy.rights") || "7. Vos droits"}</h2>
          <p>{t("privacy.rights_text") || "Conformément à la loi marocaine et au RGPD, vous disposez des droits d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition. Pour les exercer : nextadigit@gmail.com"}</p>

          <h2 className="text-2xl font-bold text-charcoal">{t("privacy.cookies") || "8. Cookies"}</h2>
          <p>{t("privacy.cookies_text") || "Notre site utilise des cookies techniques indispensables et des cookies d'analyse (avec votre consentement). Vous pouvez les gérer via les paramètres de votre navigateur."}</p>

          <h2 className="text-2xl font-bold text-charcoal">{t("privacy.security") || "9. Sécurité"}</h2>
          <p>{t("privacy.security_text") || "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation."}</p>

          <h2 className="text-2xl font-bold text-charcoal">{t("privacy.modifications") || "10. Modifications"}</h2>
          <p>{t("privacy.modifications_text") || "Cette politique peut être modifiée à tout moment. Les changements sont effectifs dès leur publication. Nous vous informerons des modifications majeures."}</p>

          <h2 className="text-2xl font-bold text-charcoal">{t("privacy.contact") || "11. Contact"}</h2>
          <p>{t("privacy.contact_text") || "Pour toute question sur cette politique ou vos données : nextadigit@gmail.com ou +212 6 79 84 43 25."}</p>
        </div>
      </div>
    </section>
  );
}