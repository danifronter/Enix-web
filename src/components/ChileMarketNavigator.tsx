import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Factory,
  MapPin,
  Network,
  Target,
} from "lucide-react";
import type { ReactNode } from "react";

type Market = {
  id: string;
  label: string;
  shortLabel: string;
  href: string;
  status: "active" | "soon";
  y: number;
  description: string;
  context: string;
  industries: string[];
  services: string[];
};

const markets: Market[] = [
  {
    id: "antofagasta",
    label: "Region de Antofagasta",
    shortLabel: "Antofagasta",
    href: "/cl/region-antofagasta/",
    status: "active",
    y: 22,
    description:
      "Mercado industrial, minero y B2B donde la confianza digital es clave para competir.",
    context:
      "Ideal para proveedores mineros, servicios tecnicos, logistica, seguridad, capacitacion y empresas industriales.",
    industries: ["Industria", "Mineria", "Servicios tecnicos", "B2B"],
    services: ["Web", "Branding", "SEO", "Tracking"],
  },
  {
    id: "valparaiso",
    label: "Valparaiso",
    shortLabel: "Valparaiso",
    href: "/cl/valparaiso/",
    status: "soon",
    y: 45,
    description:
      "Empresas regionales, comercio, servicios, turismo y educacion con necesidad de presencia digital.",
    context:
      "Pensado para negocios que necesitan mejorar confianza, visibilidad local y captacion de consultas.",
    industries: ["Comercio", "Turismo", "Educacion", "Servicios"],
    services: ["Web", "SEO local", "Campanas", "Branding"],
  },
  {
    id: "metropolitana",
    label: "Region Metropolitana",
    shortLabel: "Santiago",
    href: "/cl/region-metropolitana/",
    status: "active",
    y: 50,
    description:
      "Mercado altamente competitivo para empresas B2B, servicios profesionales, ecommerce y tecnologia.",
    context:
      "Ideal para empresas que necesitan diferenciarse, convertir mejor y medir campanas con precision.",
    industries: ["B2B", "Ecommerce", "Tecnologia", "Servicios profesionales"],
    services: ["SEO", "Paid Media", "Web", "Automatizacion"],
  },
  {
    id: "biobio",
    label: "Biobio",
    shortLabel: "Biobio",
    href: "/cl/biobio/",
    status: "soon",
    y: 67,
    description:
      "Zona con presencia industrial, educacion, servicios regionales y empresas B2B.",
    context:
      "Relevante para empresas que necesitan posicionamiento regional, captacion y medicion.",
    industries: ["Industria", "Educacion", "Servicios", "B2B"],
    services: ["Web", "SEO", "Analitica", "Automatizacion"],
  },
  {
    id: "chile",
    label: "Cobertura nacional",
    shortLabel: "Chile",
    href: "/cl/",
    status: "active",
    y: 86,
    description:
      "Servicios digitales para empresas en Chile mediante procesos remotos, reuniones online y ejecucion estructurada.",
    context:
      "Para empresas que necesitan una agencia capaz de combinar estrategia, tecnologia, marketing y datos.",
    industries: ["B2B", "Industria", "Servicios", "Tecnologia"],
    services: ["Web", "SEO", "IA", "Analitica"],
  },
];

export default function ChileMarketNavigator() {
  const [activeId, setActiveId] = useState("metropolitana");
  const activeMarket = markets.find((market) => market.id === activeId) ?? markets[0];

  return (
    <section className="relative overflow-hidden bg-[#080d18] py-24 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-[-12%] top-[-16%] h-[520px] w-[520px] rounded-full bg-red-600/14 blur-[130px]" />
        <div className="absolute bottom-[-15%] right-[-12%] h-[520px] w-[520px] rounded-full bg-blue-500/14 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d18] via-transparent to-[#080d18]" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Mercados en Chile</p>
          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Soluciones digitales segun el mercado donde compite tu empresa.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Trabajamos con empresas en Chile combinando desarrollo web, SEO, campanas, automatizacion, IA y analitica segun su contexto comercial.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/35 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-red-500/[0.04]" />
            <div className="relative min-h-[620px]">
              <div className="absolute left-1/2 top-10 h-[540px] w-px -translate-x-1/2 bg-gradient-to-b from-blue-400/10 via-red-400/60 to-red-400/10" />
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: 540 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="absolute left-1/2 top-10 w-px -translate-x-1/2 bg-gradient-to-b from-blue-300 via-red-400 to-red-500"
              />

              <div className="absolute left-1/2 top-8 h-[545px] w-28 -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500/10 via-red-500/15 to-red-600/10 blur-2xl" />
              <div className="absolute left-1/2 top-8 h-[545px] w-24 -translate-x-1/2 rounded-full border border-white/5 bg-white/[0.015]" />

              {markets.map((market, index) => {
                const isActive = market.id === activeId;
                const alignLeft = index % 2 === 0;

                return (
                  <div key={market.id} className="absolute left-0 right-0" style={{ top: `${market.y}%` }}>
                    <div className="relative flex items-center justify-center">
                      <button
                        type="button"
                        onMouseEnter={() => setActiveId(market.id)}
                        onFocus={() => setActiveId(market.id)}
                        onClick={() => setActiveId(market.id)}
                        className={[
                          "relative z-20 flex h-12 w-12 items-center justify-center rounded-full border transition duration-300",
                          isActive
                            ? "border-red-200 bg-red-500 text-white shadow-[0_0_38px_rgba(248,113,113,0.65)]"
                            : "border-white/20 bg-white/10 text-slate-300 hover:border-red-300 hover:bg-red-500/70 hover:text-white",
                        ].join(" ")}
                        aria-label={`Ver mercado ${market.label}`}
                      >
                        <MapPin className="h-5 w-5" />
                        {isActive && (
                          <motion.span
                            className="absolute inset-0 rounded-full border border-red-300"
                            animate={{ scale: [1, 2.1], opacity: [0.75, 0] }}
                            transition={{ duration: 1.4, repeat: Infinity }}
                          />
                        )}
                      </button>

                      <div
                        className={[
                          "absolute hidden w-[210px] rounded-2xl border border-white/10 bg-[#0B1120]/90 px-4 py-3 shadow-xl shadow-black/30 backdrop-blur-xl md:block",
                          alignLeft ? "right-[calc(50%+42px)] text-right" : "left-[calc(50%+42px)] text-left",
                          isActive ? "border-red-300/40" : "",
                        ].join(" ")}
                      >
                        <p className="text-sm font-black text-white">{market.shortLabel}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-400">{market.industries.slice(0, 2).join(" · ")}</p>
                        {market.status === "soon" && (
                          <span className="mt-2 inline-flex rounded-full bg-white/10 px-2 py-1 text-[10px] font-bold text-slate-300">
                            Proximamente
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center gap-3">
                  <Network className="h-5 w-5 text-red-300" />
                  <p className="text-sm font-bold text-slate-300">
                    Selector comercial por mercado, no directorio de ciudades.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            key={activeMarket.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28 }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.055] p-7 shadow-2xl shadow-black/30 backdrop-blur-xl"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-red-500/10 px-4 py-2 text-sm font-black text-red-300">
                  <MapPin className="mr-2 h-4 w-4" />
                  {activeMarket.label}
                </span>
                {activeMarket.status === "soon" && (
                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-300">
                    Pagina en preparacion
                  </span>
                )}
              </div>

              <h3 className="mt-7 text-4xl font-black tracking-tight md:text-5xl">{activeMarket.label}</h3>
              <p className="mt-5 text-lg leading-8 text-slate-300">{activeMarket.description}</p>
              <p className="mt-4 leading-7 text-slate-400">{activeMarket.context}</p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <InfoBox icon={<Factory className="h-5 w-5" />} label="Industrias" items={activeMarket.industries} />
                <InfoBox icon={<Target className="h-5 w-5" />} label="Servicios clave" items={activeMarket.services} />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {activeMarket.status === "active" ? (
                <a
                  href={activeMarket.href}
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-red-950/40 transition hover:bg-red-500"
                >
                  Ver soluciones regionales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <a
                  href="/diagnostico"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-red-950/40 transition hover:bg-red-500"
                >
                  Solicitar diagnostico
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              )}
              <a
                href={`/diagnostico?zona=${activeMarket.id}`}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-black text-white transition hover:border-red-300/70 hover:bg-red-500/10"
              >
                Diagnostico
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {markets.map((market) => (
            <article key={market.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-red-300" />
                <h3 className="text-xl font-black text-white">{market.label}</h3>
              </div>
              <p className="mt-4 leading-7 text-slate-300">{market.description}</p>
              {market.status === "active" ? (
                <a href={market.href} className="mt-5 inline-flex items-center text-sm font-black text-red-300 hover:text-red-200">
                  Ver soluciones para {market.shortLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <span className="mt-5 inline-flex text-sm font-bold text-slate-500">
                  Pagina regional en preparacion
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoBox({ icon, label, items }: { icon: ReactNode; label: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.18em] text-red-300">
        {icon}
        {label}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full bg-white/[0.07] px-3 py-2 text-sm font-bold text-slate-200">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
