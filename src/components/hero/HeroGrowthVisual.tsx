import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Gauge,
  Globe2,
  MousePointerClick,
  Search,
  Send,
  Sparkles,
  Workflow,
} from "lucide-react";

export default function HeroGrowthVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-red-600/20 blur-[100px]" />
      <div className="absolute -right-8 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[110px]" />

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#0B1120]/90 p-4 shadow-2xl shadow-black/45 backdrop-blur-xl sm:p-5 md:rounded-[2.25rem]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-red-500/[0.05]" />

        <div className="relative z-10">
          <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">Sistema digital</p>
              <p className="mt-1 text-sm font-bold text-slate-300">Web · SEO · Ads · IA · Datos</p>
            </div>
            <span className="inline-flex shrink-0 items-center rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-black text-emerald-300">
              <span className="mr-2 h-2 w-2 rounded-full bg-emerald-300" />
              Conectado
            </span>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">Web activa</p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-red-600/28 via-blue-500/14 to-white/[0.03] p-5">
                <motion.div
                  className="h-3 rounded-full bg-white/85"
                  initial={{ width: "38%" }}
                  animate={{ width: ["38%", "82%", "68%"] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="mt-3 h-3 w-3/5 rounded-full bg-white/30" />
                <div className="mt-3 h-3 w-2/5 rounded-full bg-white/20" />
                <div className="mt-6 flex flex-wrap gap-2">
                  <motion.span
                    className="inline-flex items-center rounded-full bg-red-600 px-4 py-2 text-xs font-black text-white"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(220,38,38,0)",
                        "0 0 28px rgba(220,38,38,0.38)",
                        "0 0 0 rgba(220,38,38,0)",
                      ],
                    }}
                    transition={{ duration: 2.6, repeat: Infinity }}
                  >
                    Solicitar diagnóstico
                  </motion.span>
                  <span className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-white/80">Servicios</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  ["SEO", Search],
                  ["CTA", MousePointerClick],
                  ["Lead", Send],
                ].map(([label, Icon], index) => {
                  const TypedIcon = Icon as typeof Search;
                  return (
                    <motion.div
                      key={label as string}
                      className="rounded-2xl border border-white/10 bg-white/[0.055] p-3"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2.7, repeat: Infinity, delay: index * 0.18 }}
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/10 text-red-300">
                        <TypedIcon className="h-4 w-4" />
                      </div>
                      <p className="mt-3 text-xs font-black text-white">{label as string}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-4">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">Flujo comercial</p>
              <div className="mt-5 space-y-3">
                {[
                  { icon: Globe2, label: "Visita detectada", meta: "Origen identificado" },
                  { icon: Send, label: "Lead capturado", meta: "Formulario conectado" },
                  { icon: Workflow, label: "Seguimiento creado", meta: "Equipo notificado" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, delay: 0.35 + index * 0.14 }}
                      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-black text-white">{item.label}</p>
                          <p className="mt-1 text-xs font-bold text-slate-400">{item.meta}</p>
                        </div>
                        <span className="ml-auto h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.65)]" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <MiniMetric icon={<Gauge />} label="Tracking" value="Activo" />
                <MiniMetric icon={<Sparkles />} label="IA" value="Lista" />
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
            <div className="flex flex-wrap items-center gap-3 text-sm font-black text-slate-200">
              <span className="rounded-full bg-white/[0.07] px-4 py-2">Atracción</span>
              <ArrowRight className="h-4 w-4 text-red-300" />
              <span className="rounded-full bg-white/[0.07] px-4 py-2">Conversión</span>
              <ArrowRight className="h-4 w-4 text-red-300" />
              <span className="rounded-full bg-white/[0.07] px-4 py-2">Seguimiento</span>
              <ArrowRight className="h-4 w-4 text-red-300" />
              <span className="rounded-full bg-red-500/15 px-4 py-2 text-red-200">Medición</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MiniMetric({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
      <div className="text-red-300 [&>svg]:h-5 [&>svg]:w-5">{icon}</div>
      <p className="mt-3 text-sm font-black text-white">{value}</p>
      <p className="mt-1 text-xs font-bold text-slate-500">{label}</p>
    </div>
  );
}
