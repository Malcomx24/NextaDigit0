const fs = require("fs");
const path = require("path");
const base = "C:/Users/AnasShiftyyy/Desktop/New folder (2)/nexatech";

const projects = `"use client";

import { useTranslation } from "@/components/LocaleProvider";

interface ProjectsProps {
  locale: string;
}

export function Projects({ locale }: ProjectsProps) {
  const t = useTranslation();

  const projects = [
    { id: "driverent", name: t("projects.projects.0.name"), type: t("projects.projects.0.type"), description: t("projects.projects.0.description"), status: t("projects.projects.0.status"), demo: true },
    { id: "beauty-pro", name: t("projects.projects.1.name"), type: t("projects.projects.1.type"), description: t("projects.projects.1.description"), status: t("projects.projects.1.status"), demo: true },
    { id: "medical-office", name: t("projects.projects.2.name"), type: t("projects.projects.2.type"), description: t("projects.projects.2.description"), status: t("projects.projects.2.status"), demo: false },
  ];

  const demoLabel = t("projects.demoLabel");

  return (
    <section className="py-20 md:py-28 bg-light-bg" aria-labelledby="projects-heading">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-green mb-4">{t("projects.eyebrow")}</p>
          <h2 id="projects-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-charcoal">
            {t("projects.headline")}
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <article key={project.id} className="bg-white rounded-xl border border-border overflow-hidden hover:border-accent-green/30 hover:shadow-lg transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 md:p-10 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-accent-green/10 text-accent-green text-sm font-medium rounded-full">
                      {project.demo ? demoLabel : t("common." + (project.status === "Production" ? "production" : "development"))}
                    </span>
                    <span className="px-3 py-1 bg-light-bg text-secondary-text text-sm font-medium rounded-full">
                      {t("common.status")}: {project.status}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">{project.name}</h3>
                  <p className="text-secondary-text text-lg mb-2">{project.type}</p>
                  <p className="text-charcoal/80 leading-relaxed mb-8">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-light-bg text-secondary-text text-sm rounded-lg">Gestion complète</span>
                    <span className="px-3 py-1 bg-light-bg text-secondary-text text-sm rounded-lg">Interface temps réel</span>
                    <span className="px-3 py-1 bg-light-bg text-secondary-text text-sm rounded-lg">Automatisations</span>
                    <span className="px-3 py-1 bg-light-bg text-secondary-text text-sm rounded-lg">Multi-utilisateurs</span>
                  </div>
                </div>
                <div className="bg-charcoal relative min-h-[300px] flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-charcoal to-dark-green flex items-center justify-center">
                    <div className="text-center p-8">
                      <svg className="w-16 h-16 mx-auto text-white/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      <p className="text-white/40 text-lg">Capture d\\'ecran {project.name}</p>
                      <p className="text-white/20 text-sm mt-2">Interface reelle du projet</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal to-transparent h-16" />
                </div>
              </div>
              <div className="px-8 py-6 bg-white/50 border-t border-border">
                <a href="#contact" className="inline-flex items-center gap-2 text-accent-green font-semibold hover:underline">
                  {t("common.viewProject")}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-secondary-text mt-12 text-sm">
          {t("projects.projects.2.description")}
        </p>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(base, "src/components/Projects.tsx"), projects);
console.log("Projects.tsx fixed");
