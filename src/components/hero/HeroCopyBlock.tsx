import type { HeroProblem } from "@/data/heroProblemsData";
import HeroProblemSelector from "./HeroProblemSelector";

type Props = {
  activeProblem: HeroProblem;
  activeId: string;
  problems: HeroProblem[];
  onProblemSelect: (id: string) => void;
  onOpenModal: () => void;
};

export default function HeroCopyBlock({ activeId, problems, onProblemSelect, onOpenModal }: Props) {
  return (
    <div className="reveal min-w-0">
      <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-3 py-2 text-xs font-black uppercase text-red-100">
        <span className="size-2 rounded-full bg-enix-glow shadow-[0_0_18px_rgba(239,68,68,0.85)]"></span>
        Agencia digital de NOVVOR · Growth, IA y automatización
      </div>

      <h1 className="mt-6 max-w-[680px] text-balance text-[clamp(2.45rem,3.65vw,4.1rem)] font-black leading-[1.02] tracking-normal">
        Tu crecimiento digital necesita un sistema, no piezas sueltas.
      </h1>

      <p className="mt-5 max-w-2xl text-balance text-lg leading-8 text-slate-300">
        Diseñamos sistemas que conectan marketing, ventas, automatización e IA para captar, convertir y medir oportunidades reales.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button className="btn btn-primary" type="button" onClick={onOpenModal}>
          Solicitar diagnóstico
        </button>
        <a className="btn btn-secondary" href="#sistema-enix">
          Ver sistema ENIX
        </a>
      </div>

      <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-slate-400">
        Revisamos captación, conversión, seguimiento, automatización y medición.
      </p>

      <HeroProblemSelector problems={problems} activeId={activeId} onSelect={onProblemSelect} />
    </div>
  );
}
