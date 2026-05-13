import { heroEvents } from "@/data/heroMetricsData";
import type { HeroProblem } from "@/data/heroProblemsData";
import GrowthInsightCard from "./GrowthInsightCard";
import GrowthMetrics from "./GrowthMetrics";
import GrowthPipeline from "./GrowthPipeline";

type Props = {
  activeProblem: HeroProblem;
  mode: "disconnected" | "system";
  onModeChange: (mode: "disconnected" | "system") => void;
};

export default function GrowthCommandCenter({ activeProblem, mode, onModeChange }: Props) {
  return (
    <div className="relative mx-auto w-full min-w-0">
      <div className="absolute -inset-4 rounded-[2rem] bg-enix-red/14 blur-3xl"></div>
      <div className="relative overflow-hidden rounded-3xl border border-white/14 bg-[#0b1120]/88 p-5 shadow-[0_28px_110px_rgba(0,0,0,0.44)] backdrop-blur-2xl lg:p-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(239,68,68,0.16),transparent_28%),radial-gradient(circle_at_90%_0%,rgba(255,255,255,0.1),transparent_24%)]"></div>
        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <p className="text-xs font-black uppercase text-slate-400">ENIX Growth OS</p>
              <h2 className="text-xl font-black sm:text-2xl">Growth Command Center</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-400/14 px-3 py-1 text-xs font-black text-emerald-100">Activo 24/7</span>
              <span className="rounded-full bg-white/[0.08] px-3 py-1 text-xs font-black text-red-100">IA + Datos</span>
            </div>
          </div>

          <div className="mt-3 flex max-w-md rounded-full border border-white/10 bg-white/[0.06] p-1">
            <button
              type="button"
              onClick={() => onModeChange("disconnected")}
              className={`flex-1 rounded-full px-3 py-2 text-xs font-black transition ${mode === "disconnected" ? "bg-white/16 text-white" : "text-slate-400"}`}
            >
              Desconectado
            </button>
            <button
              type="button"
              onClick={() => onModeChange("system")}
              className={`flex-1 rounded-full px-3 py-2 text-xs font-black transition ${mode === "system" ? "bg-enix-red text-white shadow-glow" : "text-slate-400"}`}
            >
              Sistema ENIX
            </button>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <GrowthPipeline activeNode={activeProblem.activeNode} mode={mode} />
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_0.58fr]">
            <GrowthInsightCard problem={activeProblem} mode={mode} />
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-3">
              <p className="text-xs font-black uppercase text-slate-400">Eventos</p>
              <div className="mt-3 space-y-2">
                {heroEvents.map((event) => (
                  <div key={event} className="flex items-center gap-2 rounded-xl bg-white/[0.055] px-3 py-2 text-xs font-semibold text-slate-300 sm:text-sm">
                    <span className="size-2 shrink-0 rounded-full bg-emerald-300"></span>
                    <span className="truncate">{event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <GrowthMetrics problem={activeProblem} />
          </div>
          <p className="mt-3 text-center text-[0.68rem] font-bold text-slate-500">Visualización referencial del sistema ENIX.</p>
        </div>
      </div>
    </div>
  );
}
