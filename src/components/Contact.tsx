"use client";

import { useState, FormEvent } from "react";
import { useTranslation } from "@/components/LocaleProvider";

interface ContactProps {
  locale: string;
}

export function Contact({ locale }: ContactProps) {
  const t = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    sector: "",
    need: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", company: "", phone: "", email: "", sector: "", need: "", budget: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const sectors = [
    { value: "", label: t("contact.form.sectorPlaceholder") },
    { value: "car-rental", label: t("industries.items.0.title") },
    { value: "beauty", label: t("industries.items.1.title") },
    { value: "medical", label: t("industries.items.2.title") },
    { value: "training", label: t("industries.items.3.title") },
    { value: "real-estate", label: t("industries.items.4.title") },
    { value: "restaurant", label: t("industries.items.5.title") },
    { value: "retail", label: t("industries.items.6.title") },
    { value: "services", label: t("industries.items.7.title") },
    { value: "other", label: "Autre" },
  ];

  const budgetOptions = [
    { value: "", label: t("contact.form.budgetOptions.unknown") },
    { value: "under2k", label: t("contact.form.budgetOptions.under2k") },
    { value: "2k-5k", label: t("contact.form.budgetOptions.2k-5k") },
    { value: "5k-10k", label: t("contact.form.budgetOptions.5k-10k") },
    { value: "10kplus", label: t("contact.form.budgetOptions.10kplus") },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="lg:pr-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-green mb-4">{t("contact.eyebrow")}</p>
            <h2 id="contact-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-charcoal mb-6">
              {t("contact.headline")}
            </h2>
            <p className="text-lg text-secondary-text leading-relaxed mb-10">
              {t("contact.description")}
            </p>
            <div className="space-y-6 text-secondary-text">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="font-medium text-charcoal">{t("footer.contact.email")}</p>
                  <a href={"mailto:" + t("footer.contact.email")} className="text-secondary-text hover:text-accent-green transition-colors">{t("footer.contact.email")}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 2.257a1 1 0 01-1.21.502l-4.493 1.498a1 1 0 01-1.21-.502L3 10.684a1 1 0 01-.684-.948V5z" /></svg>
                </div>
                <div>
                  <p className="font-medium text-charcoal">{t("footer.contact.phone")}</p>
                  <a href={"tel:" + t("footer.contact.phone").replace(/\s/g, "")} className="text-secondary-text hover:text-accent-green transition-colors">{t("footer.contact.phone")}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
                </div>
                <div>
                  <p className="font-medium text-charcoal">{t("footer.contact.address")}</p>
                  <p className="text-secondary-text">{t("footer.contact.availability")}</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-light-bg rounded-xl border border-border p-6 md:p-8" noValidate>
            {status === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800" role="alert">
                {t("contact.form.success")}
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800" role="alert">
                {t("contact.form.error")}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">{t("contact.form.name")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t("contact.form.namePlaceholder")}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white text-charcoal placeholder:text-secondary-text/50 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">{t("contact.form.company")}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t("contact.form.companyPlaceholder")}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white text-charcoal placeholder:text-secondary-text/50 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">{t("contact.form.phone")}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder={t("contact.form.phonePlaceholder")}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white text-charcoal placeholder:text-secondary-text/50 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">{t("contact.form.email")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t("contact.form.emailPlaceholder")}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white text-charcoal placeholder:text-secondary-text/50 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="sector" className="block text-sm font-medium text-charcoal mb-2">{t("contact.form.sector")}</label>
              <select
                id="sector"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent transition-all appearance-none"
              >
                {sectors.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="need" className="block text-sm font-medium text-charcoal mb-2">{t("contact.form.need")}</label>
              <textarea
                id="need"
                name="need"
                value={formData.need}
                onChange={handleChange}
                required
                rows={4}
                placeholder={t("contact.form.needPlaceholder")}
                className="w-full px-4 py-3 border border-border rounded-lg bg-white text-charcoal placeholder:text-secondary-text/50 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent transition-all resize-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-charcoal mb-2">{t("contact.form.budget")}</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent transition-all appearance-none"
                >
                  {budgetOptions.map((b) => (
                    <option key={b.value} value={b.value}>{b.label}</option>
                  ))}
                </select>
                <p className="mt-2 text-xs text-secondary-text">{t("contact.form.budgetHelp")}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">{t("contact.form.message")}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white text-charcoal placeholder:text-secondary-text/50 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent transition-all resize-none"
                />
              </div>
            </div>

            <p className="text-xs text-secondary-text mb-6 text-center">{t("contact.form.privacy")}</p>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full px-6 py-3.5 bg-charcoal text-white text-base font-semibold rounded-lg hover:bg-charcoal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[44px]"
            >
              {status === "submitting" ? t("contact.form.submitting") : t("contact.form.submit")}
              {status === "submitting" && (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
