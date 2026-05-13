import type { HeroProblem } from "@/data/heroProblemsData";
import HeroIcon from "./HeroIcon";

type Props = {
  problem: HeroProblem;
  mode: "disconnected" | "system";
};

export default function GrowthInsightCard({ problem, mode }: Props) {
  return (
    <div className="rounded-2xl border border-enix-red/20 bg-enix-red/10 p-3">
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-enix-red/15 text-enix-glow">
          <HeroIcon name="radar" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-black uppercase text-red-100">Oportunidad detectada</p>
          <h3 className="mt-1 text-base font-black leading-snug sm:text-lg">{problem.insight}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {mode === "system" ? problem.recommendation : problem.description}
          </p>
        </div>
      </div>
    </div>
  );
}
