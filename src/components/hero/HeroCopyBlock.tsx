type Props = {
  onOpenModal: () => void;
};

const problemChips = [
  { label: "Mi web no convierte", href: "/diagnostico?problema=conversion" },
  { label: "Quiero aparecer en Google", href: "/diagnostico?problema=seo" },
  { label: "Pierdo leads por WhatsApp", href: "/diagnostico?problema=automatizacion" },
  { label: "No sé qué canal funciona", href: "/diagnostico?problema=tracking" },
];

export default function HeroCopyBlock({ onOpenModal }: Props) {
  return (
    <div className="reveal min-w-0">
      <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-red-100">
        <span className="size-2 rounded-full bg-enix-glow shadow-[0_0_18px_rgba(239,68,68,0.85)]"></span>
        Agencia digital de NOVVOR · Marketing, IA y automatización
      </div>

      <h1 className="mt-7 max-w-[760px] text-balance text-[clamp(2.65rem,5vw,4.7rem)] font-black leading-[0.96] tracking-tight">
        Creamos sistemas digitales para atraer clientes, convertir oportunidades y crecer con datos.
      </h1>

      <p className="mt-7 max-w-2xl text-balance text-lg leading-8 text-slate-300 md:text-xl">
        Unimos desarrollo web, SEO, campañas, automatización, IA y analítica para que tu presencia digital trabaje como un sistema comercial, no como piezas sueltas.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <button className="btn btn-primary" type="button" onClick={onOpenModal}>
          Solicitar diagnóstico gratuito
        </button>
        <a className="btn btn-secondary" href="/servicios/">
          Ver servicios
        </a>
      </div>

      <p className="mt-5 max-w-xl text-sm font-semibold leading-6 text-slate-400">
        Revisamos tu presencia digital y te mostramos oportunidades concretas de mejora.
      </p>

      <div className="mt-8 overflow-visible pb-4">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-slate-400">¿Qué quieres resolver primero?</p>
        <div className="flex max-w-[720px] flex-wrap items-center gap-3 overflow-visible">
          {problemChips.map((chip) => (
            <a
              key={chip.href}
              href={chip.href}
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/[0.04] px-4 py-3 text-sm font-black leading-none text-white transition-all duration-300 hover:border-red-300/80 hover:bg-red-500/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400/50 focus:ring-offset-2 focus:ring-offset-[#080d18]"
            >
              {chip.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
