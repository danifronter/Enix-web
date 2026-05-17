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

      <h1 className="mt-5 max-w-[650px] text-balance text-[clamp(2.25rem,3vw,3.35rem)] font-black leading-[1.02] tracking-normal">
        Marketing, tecnología y automatización para empresas que quieren crecer de verdad.
      </h1>

      <p className="mt-4 max-w-2xl text-balance text-base leading-7 text-slate-300 md:text-lg">
        Creamos presencia digital, campañas y sistemas inteligentes para atraer clientes, convertir oportunidades y escalar.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button className="btn btn-primary" type="button" onClick={onOpenModal}>
          Solicitar diagnóstico gratuito
        </button>
        <a className="btn btn-secondary" href="#servicios">
          Ver servicios
        </a>
      </div>

      <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-slate-400">
        Analizamos tu presencia digital y detectamos oportunidades reales de mejora.
      </p>

      <HeroProblemSelector problems={problems} activeId={activeId} onSelect={onProblemSelect} />
    </div>
  );
}
