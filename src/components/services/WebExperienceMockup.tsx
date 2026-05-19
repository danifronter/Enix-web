import { motion } from "framer-motion";
import {
  CheckCircle2,
  Gauge,
  MousePointerClick,
  Search,
  Send,
  TrendingUp,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";

export default function WebExperienceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="pointer-events-none absolute -left-8 top-10 h-52 w-52 rounded-full bg-red-600/20 blur-[80px]" />
      <div className="pointer-events-none absolute -right-8 bottom-10 h-52 w-52 rounded-full bg-blue-500/18 blur-[80px]" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#0B1120]/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-300" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 text-xs font-bold text-slate-300 sm:block">
            enix.studio/proyecto-web
          </div>
          <div className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Live</div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-4">
            <div className="rounded-xl bg-gradient-to-br from-red-600/25 via-blue-500/15 to-white/[0.03] p-5">
              <motion.div
                initial={{ width: "40%" }}
                whileInView={{ width: "78%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="h-3 rounded-full bg-white/80"
              />
              <motion.div
                initial={{ width: "35%" }}
                whileInView={{ width: "58%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.35 }}
                className="mt-3 h-3 rounded-full bg-white/35"
              />
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-red-500 px-4 py-2 text-xs font-black text-white">
                  Solicitar diagnostico
                </span>
                <span className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-white">
                  Ver servicios
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {["Web", "SEO", "IA"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + index * 0.12 }}
                  className="rounded-xl border border-white/10 bg-white/[0.05] p-3"
                >
                  <div className="h-8 w-8 rounded-lg bg-red-500/15" />
                  <div className="mt-3 h-2 w-10 rounded-full bg-white/60" />
                  <div className="mt-2 h-2 w-14 rounded-full bg-white/20" />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-4 rounded-xl border border-red-400/20 bg-red-500/10 p-4"
            >
              <div className="flex items-center gap-3">
                <MousePointerClick className="h-5 w-5 text-red-300" />
                <p className="text-sm font-bold text-white">CTA detectado · Conversion preparada</p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-4">
            <MetricCard icon={<Gauge className="h-5 w-5" />} label="Performance" value="96" suffix="/100" delay={0.2} />
            <MetricCard icon={<Search className="h-5 w-5" />} label="SEO tecnico" value="Ready" delay={0.35} />
            <MetricCard icon={<TrendingUp className="h-5 w-5" />} label="Lead capturado" value="+1" delay={0.5} />

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
            >
              <div className="mb-3 flex items-center gap-2 text-sm font-black text-white">
                <Send className="h-4 w-4 text-red-300" />
                Formulario conectado
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full rounded-full bg-white/15" />
                <div className="h-3 w-4/5 rounded-full bg-white/10" />
                <div className="h-9 rounded-full bg-red-600/80" />
              </div>
            </motion.div>
          </div>
        </div>

        <FloatingBadge className="-left-3 top-24" icon={<Zap className="h-4 w-4" />} text="SEO ready" />
        <FloatingBadge className="-right-3 top-40" icon={<CheckCircle2 className="h-4 w-4" />} text="Tracking activo" />
      </motion.div>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
  suffix = "",
  delay,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  suffix?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-300">{icon}</div>
        <p className="text-2xl font-black text-white">
          {value}
          <span className="text-sm text-slate-400">{suffix}</span>
        </p>
      </div>
      <p className="mt-3 text-sm font-bold text-slate-300">{label}</p>
    </motion.div>
  );
}

function FloatingBadge({ icon, text, className }: { icon: ReactNode; text: string; className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      animate={{ y: [0, -8, 0] }}
      viewport={{ once: true }}
      transition={{
        opacity: { duration: 0.4, delay: 0.8 },
        scale: { duration: 0.4, delay: 0.8 },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute hidden items-center gap-2 rounded-full border border-red-300/30 bg-[#0B1120]/90 px-4 py-2 text-xs font-black text-white shadow-xl shadow-red-950/30 backdrop-blur-xl md:flex ${className}`}
    >
      <span className="text-red-300">{icon}</span>
      {text}
    </motion.div>
  );
}
