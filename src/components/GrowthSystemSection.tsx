import { useState } from "react";
import { growthSystemSteps } from "@/data/capabilitiesData";

const iconPaths: Record<string, string> = {
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  barChart: '<path d="M3 3v18h18"/><path d="M7 16V9"/><path d="M12 16V5"/><path d="M17 16v-3"/>',
  bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  lineChart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14v-3Z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
};

function Icon({ name, className = "size-5" }: { name: string; className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: iconPaths[name] ?? iconPaths.target }}
    />
  );
}

export default function GrowthSystemSection() {
  const [active, setActive] = useState(0);
  const current = growthSystemSteps[active];

  return (
    <section id="sistema-enix" className="section scroll-mt-16 bg-enix-ink text-white">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">ENIX Growth System</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">No se trata de tener más herramientas. Se trata de que todo trabaje conectado.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Diseñamos ecosistemas digitales inteligentes que captan, convierten, automatizan, miden y mejoran continuamente. La web es una pieza; el sistema completo es lo que mueve crecimiento.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-xl bg-enix-red/15 text-enix-glow">
                  <Icon name={current.icon} className="size-6" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase text-slate-400">Bloque activo</p>
                  <h3 className="text-2xl font-black">{current.title}</h3>
                </div>
              </div>
              <dl className="mt-6 grid gap-4">
                <div>
                  <dt className="text-xs font-black uppercase text-red-200">Problema que resuelve</dt>
                  <dd className="mt-1 leading-7 text-slate-300">{current.problem}</dd>
                </div>
                <div>
                  <dt className="text-xs font-black uppercase text-red-200">Qué implementa ENIX</dt>
                  <dd className="mt-1 leading-7 text-slate-300">{current.implementation}</dd>
                </div>
                <div>
                  <dt className="text-xs font-black uppercase text-red-200">Resultado esperado</dt>
                  <dd className="mt-1 leading-7 text-white">{current.result}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-10 rounded-full border border-enix-red/20 bg-enix-red/10 blur-3xl"></div>
            <div className="relative grid gap-4 sm:grid-cols-2">
              {growthSystemSteps.map((step, index) => (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`group rounded-2xl border p-5 text-left transition hover:-translate-y-1 ${
                    active === index
                      ? "border-enix-red bg-enix-red/14 shadow-glow"
                      : "border-white/10 bg-white/[0.06] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-enix-glow">
                      <Icon name={step.icon} />
                    </span>
                    <span className="text-xs font-black text-slate-500">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{step.result}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
