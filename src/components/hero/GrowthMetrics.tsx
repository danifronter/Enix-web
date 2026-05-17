import { baseHeroMetrics } from "@/data/heroMetricsData";
import type { HeroProblem } from "@/data/heroProblemsData";

export default function GrowthMetrics({ problem, mode }: { problem: HeroProblem; mode: "chaos" | "system" }) {
  const metrics = mode === "chaos" ? problem.chaosMetrics : [{ label: problem.metricLabel, value: problem.metricValue }, ...baseHeroMetrics];

  return (
    <div className="grid grid-cols-3 gap-3">
      {metrics.map((metric) => (
        <div key={metric.label} className={`rounded-2xl border p-3 transition ${
          mode === "chaos" ? "border-white/10 bg-white/[0.035]" : "border-white/10 bg-white/[0.06]"
        }`}>
          <strong className={`block text-lg font-black sm:text-xl ${mode === "chaos" ? "text-slate-200" : "text-white"}`}>{metric.value}</strong>
          <span className="mt-1 block text-[0.68rem] font-bold leading-4 text-slate-400">{metric.label}</span>
        </div>
      ))}
    </div>
  );
}
