"use client";

import { useLocale } from "@/components/LocaleProvider";

interface HeroProps {
  locale: string;
}

export function Hero({ locale }: HeroProps) {
  const { dict } = useLocale();

  const t = (path: string) => {
    return path.split(".").reduce((current: unknown, key: string) => {
      if (current && typeof current === "object" && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return path;
    }, dict) as string;
  };

  const stats = [
    { label: t("hero.stats.reservations"), value: "24", change: "+3 aujourd\'hui" },
    { label: t("hero.stats.vehicles"), value: "18", change: "12 dispo" },
    { label: t("hero.stats.revenue"), value: "48.7K DH", change: "+12% ce mois" },
    { label: t("hero.stats.clients"), value: "156", change: "+5 nouveaux" },
  ];

  const reservations = [
    { id: "DR-2024-001", client: "Ahmed Benali", vehicle: "Dacia Duster", dates: "25-28 Sep", status: "Confirmée", amount: "3.200 DH" },
    { id: "DR-2024-002", client: "Fatima Zahra", vehicle: "Renault Clio", dates: "26-30 Sep", status: "En attente", amount: "1.800 DH" },
    { id: "DR-2024-003", client: "Youssef Alami", vehicle: "Toyota Yaris", dates: "27 Sep-2 Oct", status: "Confirmée", amount: "2.400 DH" },
    { id: "DR-2024-004", client: "Sara Tazi", vehicle: "Peugeot 208", dates: "28 Sep-1 Oct", status: "En cours", amount: "1.600 DH" },
    { id: "DR-2024-005", client: "Omar Hassani", vehicle: "VW Golf", dates: "29 Sep-3 Oct", status: "Nouvelle", amount: "2.800 DH" },
  ];

  const revenue = [
    { month: "Jan", value: 35 }, { month: "Fév", value: 42 }, { month: "Mar", value: 38 },
    { month: "Avr", value: 45 }, { month: "Mai", value: 52 }, { month: "Juin", value: 48 },
    { month: "Juil", value: 55 }, { month: "Août", value: 62 }, { month: "Sep", value: 49 },
  ];

  const activity = [
    { time: "Il y a 5 min", action: "Nouvelle réservation DR-2024-006", user: "Système" },
    { time: "Il y a 12 min", action: "Paiement reçu DR-2024-001", user: "Client" },
    { time: "Il y a 28 min", action: "Véhicule restitué - Clio #DR-042", user: "Agence Agadir" },
    { time: "Il y a 1h", action: "Maintenance programmée - Duster #DR-015", user: "Équipe technique" },
    { time: "Il y a 2h", action: "Nouveau client inscrit", user: "Site web" },
  ];

  const getStatusClass = (status: string) => {
    if (status === "Confirmée") return "bg-green-500/20 text-green-400";
    if (status === "En cours") return "bg-blue-500/20 text-blue-400";
    if (status === "En attente") return "bg-yellow-500/20 text-yellow-400";
    return "bg-gray-500/20 text-gray-400";
  };

  return (
    <section id="hero" className="relative bg-charcoal text-white pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32 overflow-hidden" aria-labelledby="hero-heading">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="lg:pr-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-green mb-4 md:mb-6" id="hero-heading">
              {t("hero.eyebrow")}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 md:mb-6 text-white">
              {t("hero.headline")}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-3 md:mb-4">
              {t("hero.subheadline")}
            </p>
            <p className="text-sm md:text-base lg:text-lg text-white/60 leading-relaxed mb-8 md:mb-10 max-w-xl">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent-green text-charcoal text-sm font-semibold rounded-lg hover:bg-accent-green/90 transition-colors min-h-[48px] w-full sm:w-auto"
              >
                {t("hero.primaryCta")}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white/5 transition-colors min-h-[48px] w-full sm:w-auto"
              >
                {t("hero.secondaryCta")}
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1.5">{t("hero.location")}</span>
              <span className="flex items-center gap-1.5">{t("hero.availability")}</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-charcoal border border-border-dark rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-3 py-2 bg-charcoal/50 border-b border-border-dark flex-wrap">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-4 px-3 py-1 bg-white/5 rounded text-xs text-white/60 font-mono">DriveRent Dashboard</div>
              </div>
              <div className="p-3 md:p-6 space-y-4 md:space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {stats.map((stat, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-3 md:p-4 border border-white/10 min-w-0">
                      <p className="text-[10px] md:text-xs font-medium text-white/50 uppercase tracking-wide mb-1 truncate">{stat.label}</p>
                      <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white">{stat.value}</p>
                      {stat.change && <p className="text-[10px] md:text-xs text-accent-green mt-1 truncate">{stat.change}</p>}
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4 md:pt-6">
                  <div className="flex items-center justify-between mb-3 md:mb-4 flex-wrap gap-2">
                    <h3 className="text-sm font-semibold text-white">Réservations récentes</h3>
                    <span className="text-xs text-white/50">Mis à jour il y a 2 min</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs md:text-sm min-w-[500px]" role="table">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 px-2 md:py-2 md:px-3 font-medium text-white/60">Réservation</th>
                          <th className="text-left py-2 px-2 md:py-2 md:px-3 font-medium text-white/60">Client</th>
                          <th className="text-left py-2 px-2 md:py-2 md:px-3 font-medium text-white/60">Véhicule</th>
                          <th className="text-left py-2 px-2 md:py-2 md:px-3 font-medium text-white/60">Période</th>
                          <th className="text-left py-2 px-2 md:py-2 md:px-3 font-medium text-white/60">Statut</th>
                          <th className="text-right py-2 px-2 md:py-2 md:px-3 font-medium text-white/60">Montant</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reservations.map((res) => (
                          <tr key={res.id} className="border-b border-white/5 hover:bg-white/5">
                            <td className="py-2 px-2 md:py-3 md:px-3 font-mono text-white/80 whitespace-nowrap">{res.id}</td>
                            <td className="py-2 px-2 md:py-3 md:px-3 text-white whitespace-nowrap">{res.client}</td>
                            <td className="py-2 px-2 md:py-3 md:px-3 text-white/80 whitespace-nowrap">{res.vehicle}</td>
                            <td className="py-2 px-2 md:py-3 md:px-3 text-white/70 whitespace-nowrap">{res.dates}</td>
                            <td className="py-2 px-2 md:py-3 md:px-3 whitespace-nowrap">
                              <span className={`inline-flex items-center px-1.5 py-1 rounded-full text-[10px] md:text-xs font-medium ${getStatusClass(res.status)}`}>
                                {res.status}
                              </span>
                            </td>
                            <td className="py-2 px-2 md:py-3 md:px-3 text-right font-medium text-white whitespace-nowrap">{res.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-6 border-t border-white/10">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-3">Revenus (9 derniers mois)</h3>
                    <div className="h-24 md:h-32 bg-white/5 rounded-lg p-3 md:p-4 flex items-end justify-between gap-1">
                      {revenue.map((d, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center justify-end gap-1">
                          <div className="w-full bg-accent-green/60 rounded-t" style={{ height: d.value + "%" }} />
                          <span className="text-xs text-white/50">{d.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-3">Activité récente</h3>
                    <div className="space-y-2 md:space-y-3">
                      {activity.map((act, i) => (
                        <div key={i} className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-white/5 rounded-lg border border-white/5">
                          <div className="w-2 h-2 mt-2 bg-accent-green rounded-full flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-white">{act.action}</p>
                            <p className="text-xs text-white/50 flex items-center gap-2">
                              <span>{act.time}</span>
                              <span>·</span>
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
        </div>
      </div>
    </section>
  );
}
