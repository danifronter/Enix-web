import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Factory, MapPin, Target } from "lucide-react";
import type { ReactNode } from "react";

type Market = {
  id: string;
  label: string;
  href: string;
  status: "active" | "soon";
  x: number;
  y: number;
  description: string;
  industries: string[];
  services: string[];
};

const markets: Market[] = [
  {
    id: "region-metropolitana",
    label: "Region Metropolitana",
    href: "/cl/region-metropolitana/",
    status: "active",
    x: 52,
    y: 53,
    description:
      "Empresas B2B, servicios profesionales, ecommerce y tecnologia en un mercado altamente competitivo.",
    industries: ["B2B", "Servicios profesionales", "Ecommerce", "Tecnologia"],
    services: ["Desarrollo web", "SEO", "Paid Media", "Automatizacion"],
  },
  {
    id: "region-antofagasta",
    label: "Region de Antofagasta",
    href: "/cl/region-antofagasta/",
    status: "active",
    x: 46,
    y: 32,
    description:
      "Empresas industriales, proveedores mineros, servicios tecnicos, logistica y negocios B2B.",
    industries: ["Industria", "Proveedores mineros", "Servicios tecnicos", "B2B"],
    services: ["Web", "Branding", "SEO", "Tracking"],
  },
  {
    id: "valparaiso",
    label: "Valparaiso",
    href: "/cl/valparaiso/",
    status: "soon",
    x: 43,
    y: 51,
    description:
      "Comercio, turismo, educacion, servicios regionales y empresas que necesitan presencia profesional.",
    industries: ["Comercio", "Turismo", "Educacion", "Servicios"],
    services: ["Web", "SEO local", "Branding", "Campanas"],
  },
  {
    id: "biobio",
    label: "Biobio",
    href: "/cl/biobio/",
    status: "soon",
    x: 56,
    y: 67,
    description:
      "Empresas industriales, educacion, servicios regionales y negocios B2B con foco en crecimiento.",
    industries: ["Industria", "Educacion", "Servicios", "B2B"],
    services: ["Web", "SEO", "Analitica", "Automatizacion"],
  },
];

export default function ChileMarketMap() {
  const [activeId, setActiveId] = useState(markets[0].id);
  const activeMarket = markets.find((market) => market.id === activeId) ?? markets[0];

  return (
    <section className="relative overflow-hidden bg-[#080d18] py-24 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-red-600/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Mercados en Chile</p>
          <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Selecciona un mercado para ver soluciones digitales segun tu region.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Trabajamos con empresas en distintas zonas de Chile mediante estrategia digital, desarrollo web, SEO, campanas, automatizacion y analitica.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="relative aspect-[0.55] rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-black/35 backdrop-blur-xl">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/[0.07] to-transparent" />
              <svg
                viewBox="0 0 260 620"
                className="relative z-10 h-full w-full drop-shadow-[0_0_35px_rgba(220,38,38,0.18)]"
                fill="none"
                aria-label="Mapa interactivo de Chile"
              >
                <motion.path
                  d="M144 18C121 42 126 72 111 96C95 122 112 153 96 181C81 209 102 238 90 263C77 291 98 326 91 355C84 385 103 412 97 444C91 478 113 505 107 535C101 565 122 590 118 612"
                  stroke="url(#chileGradient)"
                  strokeWidth="34"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
                <path
                  d="M144 18C121 42 126 72 111 96C95 122 112 153 96 181C81 209 102 238 90 263C77 291 98 326 91 355C84 385 103 412 97 444C91 478 113 505 107 535C101 565 122 590 118 612"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="8 16"
                />
                <defs>
                  <linearGradient id="chileGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.55)" />
                    <stop offset="45%" stopColor="rgba(220,38,38,0.7)" />
                    <stop offset="100%" stopColor="rgba(239,68,68,0.45)" />
                  </linearGradient>
                </defs>
              </svg>

              {markets.map((market) => {
                const isActive = activeId === market.id;
                return (
                  <button
                    key={market.id}
                    type="button"
                    onMouseEnter={() => setActiveId(market.id)}
                    onFocus={() => setActiveId(market.id)}
                    onClick={() => setActiveId(market.id)}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${market.x}%`, top: `${market.y}%` }}
                    aria-label={`Ver ${market.label}`}
                  >
                    <span
                      className={[
                        "relative flex h-7 w-7 items-center justify-center rounded-full border transition duration-300",
                        isActive
                          ? "border-red-200 bg-red-500 shadow-[0_0_35px_rgba(248,113,113,0.65)]"
                          : "border-white/30 bg-white/15 hover:border-red-300 hover:bg-red-500/80",
                      ].join(" ")}
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-white" />
                      {isActive && (
                        <motion.span
                          layoutId="marketPulse"
                          className="absolute inset-0 rounded-full border border-red-300"
                          animate={{ scale: [1, 2.4], opacity: [0.8, 0] }}
                          transition={{ duration: 1.4, repeat: Infinity }}
                        />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            key={activeMarket.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28 }}
            className="rounded-2xl border border-white/10 bg-white/[0.055] p-7 shadow-2xl shadow-black/30 backdrop-blur-xl"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-red-500/10 px-4 py-2 text-sm font-black text-red-300">
                <MapPin className="mr-2 h-4 w-4" />
                {activeMarket.label}
              </span>
              {activeMarket.status === "soon" && (
                <span className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-300">
                  Proximamente
                </span>
              )}
            </div>

            <h3 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">{activeMarket.label}</h3>
            <p className="mt-5 text-lg leading-8 text-slate-300">{activeMarket.description}</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <InfoBlock icon={<Factory className="h-5 w-5" />} title="Industrias" items={activeMarket.industries} tone="red" />
              <InfoBlock icon={<Target className="h-5 w-5" />} title="Servicios clave" items={activeMarket.services} tone="blue" />
            </div>

            {activeMarket.status === "active" ? (
              <a
                href={activeMarket.href}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-red-950/40 transition hover:bg-red-500"
              >
                Ver soluciones para {activeMarket.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            ) : (
              <a
                href="/diagnostico?zona=chile"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-black text-white transition hover:border-red-300/70 hover:bg-red-500/10"
              >
                Solicitar diagnostico nacional
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            )}
          </motion.div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {markets.map((market) => (
            <article key={market.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center gap-3 text-red-300">
                <Building2 className="h-5 w-5" />
                <h3 className="text-xl font-black text-white">{market.label}</h3>
              </div>
              <p className="mt-4 leading-7 text-slate-300">{market.description}</p>
              {market.status === "active" ? (
                <a href={market.href} className="mt-5 inline-flex items-center text-sm font-black text-red-300 hover:text-red-200">
                  Ver soluciones regionales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <span className="mt-5 inline-flex text-sm font-bold text-slate-500">Pagina regional en preparacion</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  icon,
  title,
  items,
  tone,
}: {
  icon: ReactNode;
  title: string;
  items: string[];
  tone: "red" | "blue";
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className={`flex items-center gap-3 text-sm font-black uppercase tracking-[0.18em] ${tone === "red" ? "text-red-300" : "text-blue-300"}`}>
        {icon}
        {title}
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
