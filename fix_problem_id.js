const fs = require("fs");
const path = require("path");
const base = "C:/Users/AnasShiftyyy/Desktop/New folder (2)/nexatech";

const problem = `"use client";

import { useLocale } from "@/components/LocaleProvider";

interface ProblemProps {
  locale: string;
}

export function Problem({ locale }: ProblemProps) {
  const { dict } = useLocale();

  const t = (path: string) => {
    return path.split(".").reduce((current: unknown, key: string) => {
      if (current && typeof current === "object" && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return path;
    }, dict) as string;
  };

  const flowSteps = [
    { icon: "message-square", label: t("problem.flow.step1") },
    { icon: "table", label: t("problem.flow.step2") },
    { icon: "file-text", label: t("problem.flow.step3") },
    { icon: "phone", label: t("problem.flow.step4") },
    { icon: "alert-circle", label: t("problem.flow.step5") },
  ];

  const icons: Record<string, React.ReactNode> = {
    "message-square": <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    "table": <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    "file-text": <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    "phone": <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 2.257a1 1 0 01-1.21.502l-4.493 1.498a1 1 0 01-1.21-.502L3 10.684a1 1 0 01-.684-.948V5z" /></svg>,
    "alert-circle": <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
  };

  return (
    <section id="problem" className="py-20 md:py-28 bg-white" aria-labelledby="problem-heading">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:pr-8">
            <h2 id="problem-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-charcoal mb-8">
              {t("problem.headline")}
            </h2>
            <p className="text-lg md:text-xl text-secondary-text leading-relaxed mb-12 max-w-xl">
              {t("problem.leftText")}
            </p>
            <div className="bg-accent-green/10 border border-accent-green/20 rounded-xl p-6">
              <p className="text-charcoal font-medium text-lg">{t("problem.solution")}</p>
            </div>
          </div>

          <div className="space-y-4">
            {flowSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-light-bg rounded-xl border border-border transition-all hover:border-accent-green/30">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white border border-border flex items-center justify-center text-charcoal/60">
                  {icons[step.icon]}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-charcoal">{step.label}</p>
                  <p className="text-sm text-secondary-text">
                    {i < flowSteps.length - 1 && "→ Prochaine étape : " + flowSteps[i + 1].label}
                  </p>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="flex-shrink-0 text-accent-green">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(base, "src/components/Problem.tsx"), problem);
console.log("Problem.tsx updated with id");
