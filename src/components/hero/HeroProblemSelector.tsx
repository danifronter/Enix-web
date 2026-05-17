import type { HeroProblem } from "@/data/heroProblemsData";

type Props = {
  problems: HeroProblem[];
  activeId: string;
  onSelect: (id: string) => void;
};

export default function HeroProblemSelector({ problems, activeId, onSelect }: Props) {
  return (
    <div className="mt-6 overflow-visible pb-4">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-slate-400">¿Qué problema quieres resolver primero?</p>
      <div className="flex max-w-[680px] flex-wrap items-center gap-3 overflow-visible">
        {problems.map((problem) => (
          <button
            key={problem.id}
            type="button"
            onClick={() => onSelect(problem.id)}
            className={`inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border px-4 py-3 text-sm font-black leading-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400/50 focus:ring-offset-2 focus:ring-offset-[#080d18] ${
              activeId === problem.id
                ? "border-red-400 bg-red-600 text-white shadow-xl shadow-red-950/40 hover:border-red-300 hover:bg-red-500"
                : "border-white/30 bg-white/[0.04] text-white hover:border-red-300/80 hover:bg-red-500/10 hover:text-white"
            }`}
          >
            {problem.label}
          </button>
        ))}
      </div>
    </div>
  );
}
