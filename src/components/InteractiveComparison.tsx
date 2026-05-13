import { useState } from "react";
import { comparisonCategories, connectedFlow, fragmentedFlow } from "@/data/comparisonData";

const iconPaths: Record<string, string> = {
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  badgeCheck: '<path d="M3.9 12.8a2 2 0 0 1 0-1.6l.9-1.6a2 2 0 0 0 .2-1.4l-.3-1.8a2 2 0 0 1 1.7-2.3l1.8-.3a2 2 0 0 0 1.2-.7l1.2-1.4a2 2 0 0 1 3 0l1.2 1.4a2 2 0 0 0 1.2.7l1.8.3a2 2 0 0 1 1.7 2.3l-.3 1.8a2 2 0 0 0 .2 1.4l.9 1.6a2 2 0 0 1 0 1.6l-.9 1.6a2 2 0 0 0-.2 1.4l.3 1.8a2 2 0 0 1-1.7 2.3l-1.8.3a2 2 0 0 0-1.2.7l-1.2 1.4a2 2 0 0 1-3 0l-1.2-1.4a2 2 0 0 0-1.2-.7l-1.8-.3a2 2 0 0 1-1.7-2.3l.3-1.8a2 2 0 0 0-.2-1.4l-.9-1.6Z"/><path d="m9 12 2 2 4-4"/>',
  barChart: '<path d="M3 3v18h18"/><path d="M7 16V9"/><path d="M12 16V5"/><path d="M17 16v-3"/>',
  bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  lineChart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14v-3Z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
};

function Icon({ name }: { name: string }) {
  return (
    <svg
      className="size-5"
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

export default function InteractiveComparison() {
  const [mode, setMode] = useState<"before" | "after">("after");
  const isAfter = mode === "after";
  const flow = isAfter ? connectedFlow : fragmentedFlow;

  return (
    <section id="resultados" className="section scroll-mt-16 bg-white">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="eyebrow">Antes vs sistema conectado</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">De acciones sueltas a un sistema digital que trabaja por tu negocio.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Una web por sí sola no escala una empresa. Lo que genera crecimiento es conectar estrategia, canales, datos, automatización y seguimiento comercial.
            </p>
            <div className="mt-7 flex rounded-full border border-slate-200 bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => setMode("before")}
                className={`flex-1 rounded-full px-4 py-3 text-sm font-black transition ${!isAfter ? "bg-slate-950 text-white shadow" : "text-slate-500"}`}
              >
                Marketing fragmentado
              </button>
              <button
                type="button"
                onClick={() => setMode("after")}
                className={`flex-1 rounded-full px-4 py-3 text-sm font-black transition ${isAfter ? "bg-enix-red text-white shadow" : "text-slate-500"}`}
              >
                Ecosistema ENIX
              </button>
            </div>
            <p className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold leading-6 text-slate-700">
              {isAfter
                ? "Cuando todo está conectado, cada visita tiene una ruta clara hacia conversión, seguimiento y mejora."
                : "Cuando las piezas no se conectan, cada lead que no se responde, no se mide o no se sigue puede transformarse en una venta perdida."}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white shadow-premium">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
              <div className="flex flex-wrap items-center gap-2">
                {flow.map((item, index) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className={`rounded-xl border px-3 py-2 text-sm font-black ${isAfter ? "border-enix-red/30 bg-enix-red/15 text-white" : "border-white/10 bg-white/8 text-slate-300"}`}>
                      {item}
                    </div>
                    {index < flow.length - 1 && <span className={isAfter ? "text-enix-glow" : "text-slate-600"}>→</span>}
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {comparisonCategories.map((item) => (
                  <article key={item.category} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center gap-3">
                      <span className={`grid size-10 place-items-center rounded-xl ${isAfter ? "bg-enix-red/15 text-enix-glow" : "bg-white/10 text-slate-400"}`}>
                        <Icon name={item.icon} />
                      </span>
                      <h3 className="font-black">{item.category}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{isAfter ? item.enix : item.traditional}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
