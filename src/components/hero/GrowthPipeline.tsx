import { disconnectedNodes, pipelineNodes } from "@/data/pipelineNodesData";
import HeroIcon from "./HeroIcon";

type Props = {
  activeNode: string;
  mode: "disconnected" | "system";
};

export default function GrowthPipeline({ activeNode, mode }: Props) {
  if (mode === "disconnected") {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {disconnectedNodes.map((node) => (
          <div key={node} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center opacity-75">
            <span className="mx-auto block size-2 rounded-full bg-enix-red"></span>
            <strong className="mt-3 block text-sm">{node}</strong>
            <span className="mt-1 block text-xs font-bold text-slate-500">Sin conexión</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-3">
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
  );
}
