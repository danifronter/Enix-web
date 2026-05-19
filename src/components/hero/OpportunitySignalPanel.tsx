import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Target } from "lucide-react";
import { heroEvents } from "@/data/heroMetricsData";
import type { HeroProblem } from "@/data/heroProblemsData";

type Props = {
  mode: "chaos" | "system";
  problem: HeroProblem;
};

export default function OpportunitySignalPanel({ mode, problem }: Props) {
  const isDetected = mode === "system";
  const events = isDetected ? heroEvents : problem.chaosEvents;
  const eyebrow = isDetected ? "Oportunidad detectada" : "Oportunidad perdida";
  const title = isDetected ? problem.insight : problem.chaosInsight;
  const description = isDetected ? problem.recommendation : problem.chaosDescription;

  return (
    <motion.div
      key={`${mode}-${problem.id}`}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="grid gap-4 xl:grid-cols-[1.35fr_0.9fr] xl:items-stretch"
    >
      <div
        className={[
          "relative min-h-[230px] overflow-hidden rounded-2xl border p-5 shadow-2xl backdrop-blur-xl md:p-6",
          isDetected
            ? "border-red-400/25 bg-[radial-gradient(circle_at_15%_20%,rgba(220,38,38,0.18),transparent_34%),rgba(255,255,255,0.045)] shadow-red-950/20"
            : "border-white/12 bg-[radial-gradient(circle_at_15%_20%,rgba(248,113,113,0.10),transparent_34%),rgba(255,255,255,0.045)] shadow-black/30",
        ].join(" ")}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.055] via-transparent to-transparent" />

        <div className="relative grid gap-5 md:grid-cols-[auto_1fr]">
          <div
            className={[
              "flex h-14 w-14 items-center justify-center rounded-2xl border",
              isDetected ? "border-red-300/20 bg-red-500/15 text-red-300" : "border-red-200/20 bg-red-400/10 text-red-200",
            ].join(" ")}
          >
            {isDetected ? <Target className="h-7 w-7" /> : <AlertCircle className="h-7 w-7" />}
          </div>

          <div className="min-w-0">
            <p className={["text-xs font-black uppercase tracking-[0.2em]", isDetected ? "text-red-200" : "text-red-100"].join(" ")}>
              {eyebrow}
            </p>
            <h3 className="mt-3 min-h-[3.4rem] text-2xl font-black leading-tight tracking-tight text-white md:text-3xl">
              {title}
            </h3>
            <p className="mt-5 min-h-[5.25rem] text-base leading-7 text-slate-300 md:text-lg md:leading-8">{description}</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-300/30 to-transparent" />
      </div>

      <div className="relative min-h-[230px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/25 backdrop-blur-xl md:p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.055] via-transparent to-transparent" />
        <div className={["absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl", isDetected ? "bg-emerald-400/10" : "bg-red-400/10"].join(" ")} />

        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between gap-3">
            <h4 className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Eventos</h4>
            <span
              className={[
                "inline-flex shrink-0 items-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]",
                isDetected ? "bg-emerald-400/10 text-emerald-300" : "bg-red-400/10 text-red-200",
              ].join(" ")}
            >
              {isDetected ? "Activo" : "Sin señal"}
            </span>
          </div>

          <div className="mt-5 flex flex-1 flex-col justify-center gap-3">
            {events.map((event, index) => (
              <motion.div
                key={event}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.28, delay: index * 0.06 }}
                className="flex min-h-12 items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.055] px-4 py-3"
              >
                <span className={["h-3 w-3 shrink-0 rounded-full", isDetected ? "bg-emerald-300" : "bg-red-300"].join(" ")} />
                <span className="min-w-0 text-sm font-black leading-5 text-slate-200">{event}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2 text-xs font-bold text-slate-500">
            <CheckCircle2 className={["h-4 w-4", isDetected ? "text-emerald-300" : "text-red-300"].join(" ")} />
            {isDetected ? "Señales listas para medición" : "Faltan eventos de conversión"}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
