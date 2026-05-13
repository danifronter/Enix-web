import { baseHeroMetrics } from "@/data/heroMetricsData";
import type { HeroProblem } from "@/data/heroProblemsData";

export default function GrowthMetrics({ problem }: { problem: HeroProblem }) {
  const metrics = [{ label: problem.metricLabel, value: problem.metricValue }, ...baseHeroMetrics];

  return (
    <div className="grid grid-cols-3 gap-3">
      {metrics.map((metric) => (
        <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
          <strong className="block text-lg font-black text-white sm:text-xl">{metric.value}</strong>
          <span className="mt-1 block text-[0.68rem] font-bold leading-4 text-slate-400">{metric.label}</span>
        </div>
      ))}
    </div>
  );
}
