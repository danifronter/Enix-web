import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  MousePointerClick,
  Search,
  Sparkles,
} from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  type: "search" | "cursor" | "robot" | "chart" | "spark";
};

const steps: Step[] = [
  {
    number: "01",
    title: "Atracción",
    description: "SEO, contenido y campañas para llegar al cliente correcto.",
    type: "search",
  },
  {
    number: "02",
    title: "Conversión",
    description: "Webs y landings diseñadas para transformar visitas en oportunidades.",
    type: "cursor",
  },
  {
    number: "03",
    title: "Seguimiento",
    description: "CRM, automatización e IA para responder antes que la competencia.",
    type: "robot",
  },
  {
    number: "04",
    title: "Medición",
    description: "Tracking y datos claros para saber qué funciona y qué optimizar.",
    type: "chart",
  },
  {
    number: "05",
    title: "Optimización",
    description: "Mejoras continuas basadas en evidencia, no en suposiciones.",
    type: "spark",
  },
];

function AnimatedIcon({ type, active }: { type: Step["type"]; active: boolean }) {
  if (type === "robot") {
    return (
      <motion.svg
        viewBox="0 0 64 64"
        className="h-11 w-11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={active ? { scale: [1, 1.08, 1], rotate: [0, -4, 4, 0] } : {}}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <motion.rect
          x="14"
          y="20"
          width="36"
          height="28"
          rx="9"
          stroke="currentColor"
          strokeWidth="4"
          className="text-red-400"
          animate={
            active
              ? {
                  stroke: ["#f87171", "#fb7185", "#60a5fa", "#22d3ee", "#f87171"],
                }
              : {}
          }
          transition={{ duration: 1.6, repeat: active ? Infinity : 0 }}
        />
        <path d="M32 12V20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-red-400" />
        <circle cx="24" cy="32" r="2.8" fill="currentColor" className="text-red-400" />
        <circle cx="40" cy="32" r="2.8" fill="currentColor" className="text-red-400" />
        {active ? (
          <motion.path
            d="M24 39C27 43 37 43 40 39"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="text-red-300"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.35 }}
          />
        ) : (
          <path d="M26 40H38" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className="text-red-400" />
        )}
        <path d="M14 32H8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-red-400" />
        <path d="M56 32H50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-red-400" />
      </motion.svg>
    );
  }

  const iconClass = "h-11 w-11 text-red-400";
  const animation = active
    ? {
        scale: [1, 1.14, 1],
        rotate: type === "spark" ? [0, 12, -8, 0] : [0, -6, 6, 0],
      }
    : {};
  const transition = { duration: 0.65, ease: "easeInOut" as const };

  if (type === "search") {
    return (
      <motion.div animate={animation} transition={transition}>
        <Search className={iconClass} />
      </motion.div>
    );
  }

  if (type === "cursor") {
    return (
      <motion.div animate={animation} transition={transition}>
        <MousePointerClick className={iconClass} />
      </motion.div>
    );
  }

  if (type === "chart") {
    return (
      <motion.div animate={animation} transition={transition}>
        <BarChart3 className={iconClass} />
      </motion.div>
    );
  }

  return (
    <motion.div animate={animation} transition={transition}>
      <Sparkles className={iconClass} />
    </motion.div>
  );
}

export default function GrowthSystemSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="sistema-enix" className="relative scroll-mt-16 overflow-hidden bg-[#080d18] py-24 text-white md:py-28">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d18] via-transparent to-[#080d18]" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-red-500"
          >
            Enix Growth System
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="text-balance text-4xl font-black leading-[0.95] tracking-tight md:text-6xl lg:text-7xl"
          >
            No hacemos piezas sueltas.{" "}
            <span className="bg-gradient-to-r from-white via-red-100 to-blue-200 bg-clip-text text-transparent">
              Creamos sistemas que venden.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
          >
            Unimos estrategia, web, SEO, campañas, automatización e IA en un flujo diseñado para atraer, convertir, seguir y mejorar.
          </motion.p>
        </div>

        <div className="relative mt-16 hidden lg:block">
          <div className="relative grid grid-cols-5 gap-5">
            <div className="absolute left-[10%] right-[10%] top-[48px] h-px bg-white/10" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute left-[10%] right-[10%] top-[48px] h-px origin-left bg-gradient-to-r from-red-600/70 via-blue-400/70 to-red-500/70"
            />

            {steps.map((step, index) => {
              const active = hoveredIndex === index;

              return (
                <motion.article
                  key={step.title}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="group relative pt-[112px]"
                >
                  <div className="absolute left-1/2 top-0 z-20 flex -translate-x-1/2 flex-col items-center">
                    <motion.div
                      animate={
                        active
                          ? {
                              boxShadow: [
                                "0 0 0 rgba(248,113,113,0)",
                                "0 0 45px rgba(248,113,113,0.35)",
                                "0 0 65px rgba(96,165,250,0.28)",
                              ],
                            }
                          : {}
                      }
                      transition={{ duration: 1.2, repeat: active ? Infinity : 0, repeatType: "reverse" }}
                      className="relative flex h-24 w-24 items-center justify-center rounded-[1.6rem] border border-white/10 bg-white/[0.06] text-red-400 shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-500 group-hover:-translate-y-1.5 group-hover:border-red-300/60 group-hover:bg-white/[0.09]"
                    >
                      <div className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-br from-red-500/0 via-blue-400/0 to-red-500/0 opacity-0 blur-xl transition duration-500 group-hover:opacity-100 group-hover:from-red-500/30 group-hover:via-blue-400/20 group-hover:to-fuchsia-400/20" />
                      <div className="relative z-10">
                        <AnimatedIcon type={step.type} active={active} />
                      </div>
                    </motion.div>
                  </div>

                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.45 + index * 0.08 }}
                      className="absolute left-[calc(100%+10px)] top-[32px] z-30 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-red-400/30 bg-[#080d18] text-red-300 shadow-lg shadow-red-950/35"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  )}

                  <div className="relative min-h-[230px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-500 group-hover:-translate-y-1.5 group-hover:border-red-300/50 group-hover:bg-white/[0.07]">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.07] to-transparent opacity-60" />
                    <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br from-red-500/0 via-blue-500/0 to-fuchsia-500/0 blur-3xl transition duration-500 group-hover:from-red-500/25 group-hover:via-blue-500/20 group-hover:to-fuchsia-500/20" />
                    <div className="relative">
                      <span className="text-xs font-black tracking-[0.3em] text-red-400/90">{step.number}</span>
                      <h3 className="mt-5 whitespace-normal text-xl font-black tracking-tight text-white">{step.title}</h3>
                      <p className="mt-4 text-sm leading-6 text-slate-300">{step.description}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="mt-16 space-y-5 lg:hidden">
          {steps.map((step, index) => {
            const active = hoveredIndex === index;

            return (
              <motion.article
                key={step.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl"
              >
                <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-red-500/10 blur-3xl" />
                <div className="relative flex gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
                    <AnimatedIcon type={step.type} active={active} />
                  </div>
                  <div>
                    <span className="text-xs font-black tracking-[0.25em] text-red-400">{step.number}</span>
                    <h3 className="mt-2 text-2xl font-black text-white">{step.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">{step.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mx-auto mt-20 max-w-4xl overflow-hidden rounded-[2rem] border border-red-400/20 bg-gradient-to-r from-red-600/15 via-white/[0.05] to-blue-600/15 p-8 text-center shadow-2xl shadow-red-950/30 backdrop-blur-xl"
        >
          <p className="text-lg font-semibold text-white md:text-xl">
            El problema no siempre es tener más marketing. A veces es ordenar el sistema que convierte ese marketing en clientes.
          </p>
          <a
            href="/diagnostico/"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-500"
          >
            Solicitar diagnóstico gratuito
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
