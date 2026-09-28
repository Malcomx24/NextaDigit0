const fs = require("fs");
const path = require("path");
const base = "C:/Users/AnasShiftyyy/Desktop/New folder (2)/nexatech";

const flagship = `"use client";

import { useTranslation } from "@/components/LocaleProvider";

export function Flagship({ locale }) {
  const t = useTranslation();

  const screens = [
    { label: t("flagship.screens.0.label"), key: "dashboard" },
    { label: t("flagship.screens.1.label"), key: "reservations" },
    { label: t("flagship.screens.2.label"), key: "fleet" },
    { label: t("flagship.screens.3.label"), key: "clients" },
    { label: t("flagship.screens.4.label"), key: "contracts" },
    { label: t("flagship.screens.5.label"), key: "maintenance" },
  ];

  const benefits = t("flagship.benefits");

  return (
    <section className="py-20 md:py-28 bg-charcoal text-white" aria-labelledby="flagship-heading">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-green mb-4">{t("flagship.eyebrow")}</p>
          <h2 id="flagship-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-white mb-6">
            {t("flagship.headline")}
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <h3 className="text-2xl md:text-3xl font-bold">{t("flagship.projectName")}</h3>
            <span className="px-3 py-1 bg-accent-green/20 text-accent-green text-sm font-medium rounded-full">Beta</span>
          </div>
          <p className="text-lg text-white/70">{t("flagship.tagline")}</p>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto leading-relaxed">{t("flagship.description")}</p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center" role="tablist" aria-label="Ecrans DriveRent">
            {screens.map((screen, i) => (
              <button
                key={screen.key}
                className={\`px-4 py-2 text-sm font-medium rounded-lg transition-all \${i === 0 ? "bg-accent-green text-charcoal" : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"}\`}
                role="tab"
                aria-selected={i === 0}
                aria-controls={"screen-" + screen.key}
              >
                {screen.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-charcoal border border-border-dark rounded-xl overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 bg-charcoal/50 border-b border-border-dark">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="ml-4 px-3 py-1 bg-white/5 rounded text-xs text-white/60 font-mono">DriveRent - Tableau de bord</div>
          </div>
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <p className="text-xs font-medium text-white/50 uppercase tracking-wide mb-1">Reservations</p>
                <p className="text-3xl font-bold text-white">24</p>
                <p className="text-xs text-accent-green mt-1">+3 aujourd\\'hui</p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <p className="text-xs font-medium text-white/50 uppercase tracking-wide mb-1">Vehicules dispo</p>
                <p className="text-3xl font-bold text-white">12</p>
                <p className="text-xs text-white/50 mt-1">18 en flotte</p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <p className="text-xs font-medium text-white/50 uppercase tracking-wide mb-1">Revenus (mois)</p>
                <p className="text-3xl font-bold text-white">48.7K DH</p>
                <p className="text-xs text-accent-green mt-1">+12%</p>
              </div>
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <p className="text-xs font-medium text-white/50 uppercase tracking-wide mb-1">Clients actifs</p>
                <p className="text-3xl font-bold text-white">156</p>
                <p className="text-xs text-white/50 mt-1">+5 nouveaux</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Reservations recentes</h3>
                  <span className="text-xs text-white/50">Mis a jour il y a 2 min</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" role="table">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 font-medium text-white/60">Reservation</th>
                        <th className="text-left py-3 px-4 font-medium text-white/60">Client</th>
                        <th className="text-left py-3 px-4 font-medium text-white/60">Vehicule</th>
                        <th className="text-left py-3 px-4 font-medium text-white/60">Periode</th>
                        <th className="text-left py-3 px-4 font-medium text-white/60">Statut</th>
                        <th className="text-right py-3 px-4 font-medium text-white/60">Montant</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: "DR-2024-001", client: "Ahmed Benali", vehicle: "Dacia Duster", dates: "25-28 Sep", status: "Confirmee", amount: "3.200 DH" },
                        { id: "DR-2024-002", client: "Fatima Zahra", vehicle: "Renault Clio", dates: "26-30 Sep", status: "En attente", amount: "1.800 DH" },
                        { id: "DR-2024-003", client: "Youssef Alami", vehicle: "Toyota Yaris", dates: "27 Sep-2 Oct", status: "Confirmee", amount: "2.400 DH" },
                        { id: "DR-2024-004", client: "Sara Tazi", vehicle: "Peugeot 208", dates: "28 Sep-1 Oct", status: "En cours", amount: "1.600 DH" },
                        { id: "DR-2024-005", client: "Omar Hassani", vehicle: "VW Golf", dates: "29 Sep-3 Oct", status: "Nouvelle", amount: "2.800 DH" },
                      ].map((res) => (
                        <tr key={res.id} className="border-b border-white/5 hover:bg-white/5">
                          <td className="py-4 px-4 font-mono text-white/80">{res.id}</td>
                          <td className="py-4 px-4 text-white">{res.client}</td>
                          <td className="py-4 px-4 text-white/80">{res.vehicle}</td>
                          <td className="py-4 px-4 text-white/70">{res.dates}</td>
                          <td className="py-4 px-4">
                            <span className={\`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium \${res.status === "Confirmee" ? "bg-green-500/20 text-green-400" : res.status === "En cours" ? "bg-blue-500/20 text-blue-400" : res.status === "En attente" ? "bg-yellow-500/20 text-yellow-400" : "bg-gray-500/20 text-gray-400"}\`}>
                              {res.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right font-medium text-white">{res.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">Revenus (9 derniers mois)</h3>
                  <div className="h-32 bg-white/5 rounded-lg p-4 flex items-end justify-between gap-1">
                    {[
                      { month: "Jan", value: 35 }, { month: "Fev", value: 42 }, { month: "Mar", value: 38 },
                      { month: "Avr", value: 45 }, { month: "Mai", value: 52 }, { month: "Juin", value: 48 },
                      { month: "Juil", value: 55 }, { month: "Aout", value: 62 }, { month: "Sep", value: 49 },
                    ].map((d, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center justify-end gap-1">
                        <div className="w-full bg-accent-green/60 rounded-t" style={{ height: d.value + "%" }} />
                        <span className="text-xs text-white/50">{d.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-4">Activite recente</h3>
                  <div className="space-y-3">
                    {[
                      { time: "Il y a 5 min", action: "Nouvelle reservation DR-2024-006", user: "Systeme" },
                      { time: "Il y a 12 min", action: "Paiement recu DR-2024-001", user: "Client" },
                      { time: "Il y a 28 min", action: "Vehicule restitue - Clio #DR-042", user: "Agence Agadir" },
                      { time: "Il y a 1h", action: "Maintenance programmee - Duster #DR-015", user: "Equipe technique" },
                      { time: "Il y a 2h", action: "Nouveau client inscrit", user: "Site web" },
                    ].map((act, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                        <div className="w-2 h-2 mt-2 bg-accent-green rounded-full flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white">{act.action}</p>
                          <p className="text-xs text-white/50 flex items-center gap-2">
                            <span>{act.time}</span>
                            <span>.</span>
                            <span>{act.user}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-green/20 flex items-center justify-center text-accent-green">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-white/90 font-medium">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-base font-semibold rounded-lg hover:bg-white/5 transition-colors"
          >
            {t("flagship.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(base, "src/components/Flagship.tsx"), flagship);
console.log("Flagship.tsx fixed");
