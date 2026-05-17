import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  MousePointerClick,
  Search,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Atracción",
    description: "SEO, contenido y campañas para llegar al cliente correcto.",
    icon: Search,
    glow: "from-red-500/30 to-red-500/0",
  },
  {
    number: "02",
    title: "Conversión",
    description: "Webs y landings diseñadas para transformar visitas en oportunidades.",
    icon: MousePointerClick,
    glow: "from-red-500/25 to-red-500/0",
  },
  {
    number: "03",
    title: "Seguimiento",
    description: "CRM, automatización e IA para responder antes que la competencia.",
    icon: Bot,
    glow: "from-red-500/30 to-red-500/0",
  },
  {
    number: "04",
    title: "Medición",
    description: "Tracking y datos claros para saber qué funciona y qué optimizar.",
    icon: BarChart3,
    glow: "from-red-500/25 to-red-500/0",
  },
  {
    number: "05",
    title: "Optimización",
    description: "Mejoras continuas basadas en evidencia, no en suposiciones.",
    icon: Sparkles,
    glow: "from-red-500/30 to-red-500/0",
  },
];

export default function GrowthSystemSection() {
  return (
    <section id="sistema-enix" className="relative scroll-mt-16 overflow-hidden bg-[#080d18] py-24 text-white md:py-28">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-red-500/10 blur-[120px]" />
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
            className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-red-500"
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
            <span className="bg-gradient-to-r from-white via-white to-red-300 bg-clip-text text-transparent">
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

        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-[8%] right-[8%] top-10 h-px bg-white/10" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-[8%] right-[8%] top-10 h-px origin-left bg-gradient-to-r from-red-600 via-red-400 to-red-600"
          />

          <div className="grid grid-cols-5 gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className="group relative"
                >
                  <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-red-950/40 backdrop-blur-xl transition duration-500 group-hover:-translate-y-2 group-hover:border-red-400/50 group-hover:bg-red-500/10">
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${step.glow} opacity-0 blur-xl transition duration-500 group-hover:opacity-100`}
                    />
                    <Icon className="relative h-8 w-8 text-red-400" />
                  </div>

                  <div className="relative min-h-[250px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-500 group-hover:-translate-y-3 group-hover:border-red-400/40 group-hover:bg-white/[0.07]">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.07] to-transparent opacity-60" />
                    <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-red-500/10 blur-3xl transition duration-500 group-hover:bg-red-500/20" />
                    <div className="relative">
                      <span className="text-sm font-black tracking-[0.3em] text-red-400/80">
                        {step.number}
                      </span>
                      <h3 className="mt-6 text-2xl font-black tracking-tight text-white">
                        {step.title}
                      </h3>
                      <p className="mt-5 text-base leading-7 text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.12 }}
                      className="absolute right-[-20px] top-[38px] z-10 flex h-10 w-10 items-center justify-center rounded-full border border-red-400/20 bg-[#080d18] text-red-400 shadow-lg shadow-red-950/40"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="mt-16 space-y-5 lg:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl"
              >
                <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-red-500/10 blur-3xl" />
                <div className="relative flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-black tracking-[0.25em] text-red-400">
                      {step.number}
                    </span>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                      {step.description}
                    </p>
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
          className="mx-auto mt-20 max-w-4xl overflow-hidden rounded-[2rem] border border-red-400/20 bg-gradient-to-r from-red-600/15 via-white/[0.05] to-red-600/15 p-8 text-center shadow-2xl shadow-red-950/30 backdrop-blur-xl"
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
