import type { HeroProblem } from "@/data/heroProblemsData";
import HeroIcon from "./HeroIcon";

type Props = {
  problem: HeroProblem;
  mode: "chaos" | "system";
};

export default function GrowthInsightCard({ problem, mode }: Props) {
  const isChaos = mode === "chaos";

  return (
    <div className={`h-[190px] overflow-hidden rounded-2xl border p-3 transition ${
      isChaos ? "border-red-300/18 bg-white/[0.045]" : "border-enix-red/20 bg-enix-red/10"
    }`}>
      <div className="flex items-start gap-3">
        <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${
          isChaos ? "bg-red-500/8 text-red-300" : "bg-enix-red/15 text-enix-glow"
        }`}>
          <HeroIcon name="radar" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-black uppercase text-red-100">{isChaos ? "Oportunidad perdida" : "Oportunidad detectada"}</p>
          <h3 className="mt-1 h-[2.75rem] overflow-hidden text-base font-black leading-snug sm:text-lg">{isChaos ? problem.chaosInsight : problem.insight}</h3>
          <p className="mt-2 h-[4.5rem] overflow-hidden text-sm leading-6 text-slate-300">
            {isChaos ? problem.chaosDescription : problem.recommendation}
          </p>
        </div>
      </div>
    </div>
  );
}
