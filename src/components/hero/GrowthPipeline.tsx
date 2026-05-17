import { chaosNodes, pipelineNodes } from "@/data/pipelineNodesData";
import HeroIcon from "./HeroIcon";

type Props = {
  activeNode: string;
  mode: "chaos" | "system";
};

export default function GrowthPipeline({ activeNode, mode }: Props) {
  if (mode === "chaos") {
    return (
      <div className="relative">
        <div className="absolute left-[8%] right-[8%] top-1/2 hidden h-px -translate-y-1/2 border-t border-dashed border-red-300/20 sm:block"></div>
        <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
          {chaosNodes.map((node) => (
          <div key={node.label} className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-center opacity-80 shadow-inner shadow-black/20">
            <span className="mx-auto grid size-10 place-items-center rounded-xl bg-red-500/8 text-red-300/80">
              <HeroIcon name={node.icon} className="size-5" />
            </span>
            <span className="absolute right-3 top-3 size-2 rounded-full bg-red-400 shadow-[0_0_14px_rgba(248,113,113,0.65)]"></span>
            <strong className="mt-3 block text-sm text-slate-200">{node.label}</strong>
            <span className="mt-1 block text-[0.68rem] font-bold leading-tight text-slate-500">{node.status}</span>
          </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute left-[8%] right-[8%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-red-500/20 via-red-300/65 to-red-500/20 sm:block"></div>
      <div className="relative grid gap-3 sm:grid-cols-3">
      {pipelineNodes.map((node) => {
        const isActive = node.label === activeNode;
        return (
          <div key={node.label} className="relative min-w-0">
            <div
              className={`relative min-h-28 rounded-2xl border p-4 transition hover:-translate-y-1 ${
                isActive
                  ? "border-enix-red/45 bg-enix-red/10 shadow-glow"
                  : "border-white/10 bg-white/[0.06] hover:border-white/20"
              }`}
              title={`${node.label}: ${node.status}`}
            >
              <span className="absolute right-3 top-3 size-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.75)]"></span>
              <span className="grid size-10 place-items-center rounded-xl bg-white/10 text-enix-glow">
                <HeroIcon name={node.icon} />
              </span>
              <strong className="mt-3 block text-sm leading-tight">{node.label}</strong>
              <span className="mt-1 block text-[0.68rem] font-bold leading-tight text-slate-400">{node.status}</span>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
