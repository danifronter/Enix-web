import type { HeroProblem } from "@/data/heroProblemsData";

type Props = {
  problems: HeroProblem[];
  activeId: string;
  onSelect: (id: string) => void;
};

export default function HeroProblemSelector({ problems, activeId, onSelect }: Props) {
  return (
    <div className="mt-6">
      <p className="mb-3 text-xs font-black uppercase text-slate-400">¿Qué quieres resolver primero?</p>
      <div className="flex max-w-[620px] gap-2 overflow-x-auto pb-2 pr-2 [scrollbar-width:none]">
        {problems.map((problem) => (
          <button
            key={problem.id}
            type="button"
            onClick={() => onSelect(problem.id)}
            className={`min-h-10 shrink-0 rounded-full border px-4 text-xs font-black transition hover:-translate-y-0.5 ${
              activeId === problem.id
                ? "border-enix-red bg-enix-red text-white shadow-glow"
                : "border-white/12 bg-white/[0.07] text-slate-300 hover:border-enix-red/50 hover:text-white"
            }`}
          >
            {problem.label}
          </button>
        ))}
      </div>
    </div>
  );
}
