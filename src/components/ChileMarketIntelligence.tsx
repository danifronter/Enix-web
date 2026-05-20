import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Factory,
  Globe2,
  MapPin,
  Network,
  Radar,
  Target,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";

type Market = {
  id: string;
  name: string;
  eyebrow: string;
  href: string;
  description: string;
  industries: string[];
  problems: string[];
  services: string[];
  metricA: string;
  metricB: string;
  metricC: string;
};

const markets: Market[] = [
  {
    id: "region-metropolitana",
    name: "Region Metropolitana",
    eyebrow: "Santiago - B2B - Servicios - Tecnologia",
    href: "/cl/region-metropolitana/",
    description:
      "Mercado altamente competitivo donde las empresas necesitan diferenciarse, convertir mejor y medir cada canal digital.",
    industries: ["B2B", "Servicios profesionales", "Ecommerce", "Tecnologia"],
    problems: [
      "Alta competencia digital",
      "Campanas sin medicion clara",
      "Webs genericas",
      "Leads sin seguimiento",
    ],
    services: ["Web", "SEO", "Paid Media", "Automatizacion"],
    metricA: "Alta competencia",
    metricB: "SEO + Ads",
    metricC: "Conversion",
  },
  {
    id: "region-antofagasta",
    name: "Region de Antofagasta",
    eyebrow: "Industria - Mineria - Servicios tecnicos - B2B",
    href: "/cl/region-antofagasta/",
    description:
      "Soluciones digitales para empresas industriales, proveedores mineros, servicios tecnicos y negocios B2B en Antofagasta, Calama, Mejillones y otras zonas del norte de Chile.",
    industries: ["Industria", "Proveedores mineros", "Servicios tecnicos", "Logistica"],
    problems: [
      "Presencia digital debil",
      "Webs antiguas",
      "Baja claridad comercial",
      "Cotizaciones sin trazabilidad",
    ],
    services: ["Web", "Branding", "SEO", "Tracking"],
    metricA: "B2B industrial",
    metricB: "Confianza",
    metricC: "Cotizacion",
  },
  {
    id: "valparaiso",
    name: "Valparaiso",
    eyebrow: "Comercio - Turismo - Educacion - Servicios",
    href: "/diagnostico?zona=valparaiso",
    description:
      "Marketing digital, desarrollo web y posicionamiento para empresas regionales, comercio, turismo, educacion y servicios en Valparaiso.",
    industries: ["Comercio", "Turismo", "Educacion", "Servicios"],
    problems: [
      "Dependencia de redes sociales",
      "Poca visibilidad organica",
      "Webs poco diferenciadas",
      "Baja medicion",
    ],
    services: ["Web", "SEO local", "Campanas", "Branding"],
    metricA: "Regional",
    metricB: "SEO local",
    metricC: "Captacion",
  },
  {
    id: "biobio",
    name: "Biobio",
    eyebrow: "Industria - Educacion - Servicios - B2B",
    href: "/diagnostico?zona=biobio",
    description:
      "Servicios digitales para empresas industriales, educativas, regionales y B2B en Biobio con foco en presencia, captacion y medicion.",
    industries: ["Industria", "Educacion", "Servicios", "B2B"],
    problems: [
      "Presencia poco profesional",
      "Falta de posicionamiento",
      "Campanas sin datos",
      "Procesos manuales",
    ],
    services: ["Web", "SEO", "Analitica", "Automatizacion"],
    metricA: "Industria",
    metricB: "Analitica",
    metricC: "Escala",
  },
  {
    id: "tarapaca",
    name: "Tarapaca",
    eyebrow: "Comercio - Logistica - Servicios - Industria",
    href: "/diagnostico?zona=tarapaca",
    description:
      "Presencia digital, SEO y campanas para empresas de comercio, servicios, logistica e industria en Tarapaca.",
    industries: ["Comercio", "Logistica", "Servicios", "Industria"],
    problems: [
      "Baja visibilidad digital",
      "Dependencia de referidos",
      "Poca medicion comercial",
      "Web desactualizada",
    ],
    services: ["Web", "SEO", "Paid Media", "Tracking"],
    metricA: "Norte",
    metricB: "Visibilidad",
    metricC: "Leads",
  },
  {
    id: "coquimbo",
    name: "Coquimbo",
    eyebrow: "Servicios - Turismo - Comercio - Educacion",
    href: "/diagnostico?zona=coquimbo",
    description:
      "Marketing digital, desarrollo web y automatizacion para empresas de servicios, turismo, comercio y educacion en Coquimbo.",
    industries: ["Servicios", "Turismo", "Comercio", "Educacion"],
    problems: [
      "Poca diferenciacion",
      "Webs con baja conversion",
      "SEO local debil",
      "Seguimiento manual",
    ],
    services: ["Web", "SEO local", "Branding", "Automatizacion"],
    metricA: "Servicios",
    metricB: "Confianza",
    metricC: "Consultas",
  },
  {
    id: "maule",
    name: "Maule",
    eyebrow: "Agroindustria - Servicios - Comercio - B2B",
    href: "/diagnostico?zona=maule",
    description:
      "Soluciones digitales para empresas de servicios, comercio, agroindustria y negocios B2B en Maule.",
    industries: ["Agroindustria", "Servicios", "Comercio", "B2B"],
    problems: [
      "Presencia digital basica",
      "Poca captacion online",
      "Sitios sin medicion",
      "Procesos comerciales manuales",
    ],
    services: ["Web", "SEO", "Analitica", "Automatizacion"],
    metricA: "Regional",
    metricB: "Captacion",
    metricC: "Medicion",
  },
  {
    id: "araucania",
    name: "La Araucania",
    eyebrow: "Servicios - Educacion - Turismo - Comercio",
    href: "/diagnostico?zona=araucania",
    description:
      "Desarrollo web, SEO y campanas para empresas de servicios, educacion, turismo y comercio en La Araucania.",
    industries: ["Servicios", "Educacion", "Turismo", "Comercio"],
    problems: [
      "Baja visibilidad organica",
      "Marca poco diferenciada",
      "Consultas sin trazabilidad",
      "Campanas sin optimizacion",
    ],
    services: ["Web", "SEO", "Paid Media", "Branding"],
    metricA: "Regional",
    metricB: "SEO",
    metricC: "Confianza",
  },
  {
    id: "los-lagos",
    name: "Los Lagos",
    eyebrow: "Turismo - Industria - Servicios - Comercio",
    href: "/diagnostico?zona=los-lagos",
    description:
      "Servicios digitales para empresas de turismo, industria, comercio y servicios en Los Lagos que buscan mejorar presencia y captacion.",
    industries: ["Turismo", "Industria", "Servicios", "Comercio"],
    problems: [
      "Dependencia estacional",
      "Poca presencia digital",
      "Falta de contenido SEO",
      "Medicion incompleta",
    ],
    services: ["Web", "SEO", "Campanas", "Analitica"],
    metricA: "Sur",
    metricB: "Contenido",
    metricC: "Captacion",
  },
  {
    id: "chile",
    name: "Cobertura nacional",
    eyebrow: "Chile - Remoto - Estrategia - Ejecucion",
    href: "/cl/",
    description:
      "Trabajamos con empresas en distintas regiones mediante procesos digitales, reuniones online y ejecucion estructurada.",
    industries: ["B2B", "Industria", "Servicios", "Tecnologia"],
    problems: [
      "Canales desconectados",
      "Poca claridad de datos",
      "Web sin conversion",
      "Seguimiento manual",
    ],
    services: ["Web", "SEO", "IA", "Analitica"],
    metricA: "Nacional",
    metricB: "Remoto",
    metricC: "Sistema",
  },
];

export default function ChileMarketIntelligence() {
  const [activeId, setActiveId] = useState("region-metropolitana");
  const active = markets.find((market) => market.id === activeId) ?? markets[0];

  return (
    <section className="relative overflow-hidden bg-[#080d18] py-24 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-red-600/14 blur-[130px]" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[520px] w-[520px] rounded-full bg-blue-500/14 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d18] via-transparent to-[#080d18]" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Cobertura digital para empresas en Chile</p>
          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Soluciones digitales segun el mercado donde compite tu empresa.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Trabajamos con empresas en distintas regiones de Chile mediante
            desarrollo web, SEO, campanas, automatizacion, IA y analitica,
            adaptando la estrategia al contexto comercial de cada mercado.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/35 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3 px-2 pt-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-300">
                <Radar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-black text-white">Selecciona mercado</p>
                <p className="text-xs text-slate-400">
                  Contenido regional orientado a SEO y conversion
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {markets.map((market) => {
                const isActive = activeId === market.id;

                return (
                  <button
                    key={market.id}
                    type="button"
                    onClick={() => setActiveId(market.id)}
                    className={[
                      "w-full rounded-xl border p-4 text-left transition duration-300",
                      isActive
                        ? "border-red-300/60 bg-red-500/12 shadow-lg shadow-red-950/20"
                        : "border-white/10 bg-white/[0.035] hover:border-white/25 hover:bg-white/[0.06]",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-black text-white">{market.name}</p>
                        <p className="mt-1 text-sm leading-5 text-slate-400">
                          {market.eyebrow}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/35 backdrop-blur-xl"
          >
            <div className="border-b border-white/10 bg-white/[0.035] p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-red-300">
                    Mercado seleccionado
                  </p>
                  <h3 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                    {active.name}
                  </h3>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 text-red-300">
                  <MapPin className="h-7 w-7" />
                </div>
              </div>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                {active.description}
              </p>
            </div>

            <div className="grid gap-5 p-6 md:grid-cols-3">
              <MetricCard icon={<Globe2 />} label="Mercado" value={active.metricA} />
              <MetricCard icon={<Network />} label="Enfoque" value={active.metricB} />
              <MetricCard icon={<Zap />} label="Objetivo" value={active.metricC} />
            </div>

            <div className="grid gap-5 px-6 pb-6 md:grid-cols-2">
              <InfoPanel
                icon={<Factory className="h-5 w-5" />}
                title="Industrias relevantes"
                items={active.industries}
              />
              <InfoPanel
                icon={<Target className="h-5 w-5" />}
                title="Servicios recomendados"
                items={active.services}
              />
            </div>

            <div className="px-6 pb-6">
              <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                  Problemas comunes del mercado
                </p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {active.problems.map((problem) => (
                    <div
                      key={problem}
                      className="flex items-center gap-3 rounded-xl bg-white/[0.045] px-4 py-3 text-sm font-bold text-slate-200"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-red-400" />
                      {problem}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 bg-white/[0.025] p-6 sm:flex-row">
              <a
                href={active.href}
                rel={active.href.includes("?") ? "nofollow" : undefined}
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-red-950/40 transition hover:bg-red-500"
              >
                {active.href.startsWith("/diagnostico")
                  ? "Solicitar diagnostico regional"
                  : "Ver soluciones regionales"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href={`/diagnostico?zona=${active.id}`}
                rel="nofollow"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-black text-white transition hover:border-red-300/70 hover:bg-red-500/10"
              >
                Diagnostico para este mercado
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <Building2 className="h-6 w-6 text-red-300" />
            <h3 className="text-2xl font-black text-white">
              Mercados y regiones donde trabajamos
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {markets.map((market) => (
                <article
                  key={market.id}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <p className="text-xl font-black text-white">{market.name}</p>
                  <p className="mt-4 leading-7 text-slate-300">
                    {market.description}
                  </p>
                  <a
                    href={market.href}
                    rel={market.href.includes("?") ? "nofollow" : undefined}
                    className="mt-5 inline-flex items-center text-sm font-black text-red-300 hover:text-red-200"
                  >
                    Ver contenido regional
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.045] p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-300">
        {icon}
      </div>
      <p className="mt-5 text-lg font-black text-white">{value}</p>
      <p className="mt-1 text-sm font-bold text-slate-400">{label}</p>
    </div>
  );
}

function InfoPanel({
  icon,
  title,
  items,
}: {
  icon: ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-5">
      <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.18em] text-red-300">
        {icon}
        {title}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white/[0.07] px-3 py-2 text-sm font-bold text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
