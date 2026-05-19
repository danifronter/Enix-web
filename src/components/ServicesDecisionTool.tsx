import { useMemo, useState } from "react";
import { ArrowRight, Bot, CheckCircle2, Globe, Megaphone, Search, ShieldCheck, Target } from "lucide-react";
import RecommendedRoutePanel, { recommendedRouteOptions, type RouteKey } from "./services/RecommendedRoutePanel";

const problems = [
  {
    id: "conversion",
    label: "Mi web no vende",
    icon: Globe,
    diagnosis: "Tu sitio puede estar recibiendo visitas, pero no está guiando al usuario hacia una acción clara.",
    risk: "Cada visita que no convierte puede ser una oportunidad perdida.",
    checks: ["Mensaje principal", "Velocidad móvil", "CTA", "Confianza visual", "Tracking de conversiones"],
    service: "Desarrollo Web y Plataformas Digitales + Optimización de Conversión",
    cta: "Quiero revisar mi web",
    href: "/diagnostico/?problema=conversion",
    score: 41,
  },
  {
    id: "seo",
    label: "No aparezco en Google",
    icon: Search,
    diagnosis: "Google puede no estar entendiendo correctamente tus servicios, ubicación o contenido.",
    risk: "Si no apareces cuando el cliente busca, otro negocio captura esa intención.",
    checks: ["SEO técnico", "Arquitectura de páginas", "Contenido por intención", "Velocidad", "Schema"],
    service: "SEO Avanzado",
    cta: "Quiero mejorar mi SEO",
    href: "/diagnostico/?problema=seo",
    score: 46,
  },
  {
    id: "paid-media",
    label: "Invierto en publicidad y no sé si funciona",
    icon: Megaphone,
    diagnosis: "Puedes estar pagando tráfico sin una ruta clara de conversión o medición.",
    risk: "Sin tracking, landing y eventos, el presupuesto se consume sin aprendizaje real.",
    checks: ["Landing de campaña", "Oferta", "Audiencias", "Eventos de conversión", "Costo por oportunidad"],
    service: "Paid Media + Landing Pages + Tracking",
    cta: "Quiero optimizar campañas",
    href: "/diagnostico/?problema=paid-media",
    score: 38,
  },
  {
    id: "automatizacion",
    label: "Pierdo clientes por falta de seguimiento",
    icon: Bot,
    diagnosis: "Tus consultas pueden estar llegando, pero no existe un sistema para responder, clasificar y hacer seguimiento.",
    risk: "Un lead sin respuesta rápida puede terminar cotizando con la competencia.",
    checks: ["WhatsApp", "Formularios", "CRM", "Correos automáticos", "IA de atención"],
    service: "Automatización Comercial + IA",
    cta: "Quiero automatizar seguimiento",
    href: "/diagnostico/?problema=automatizacion",
    score: 44,
  },
  {
    id: "branding",
    label: "Mi marca no transmite confianza",
    icon: ShieldCheck,
    diagnosis: "Tu empresa puede ser mejor de lo que comunica visualmente.",
    risk: "Una mala primera impresión reduce confianza antes de que el cliente evalúe tu oferta.",
    checks: ["Identidad visual", "Mensaje", "Diseño web", "Tono comunicacional", "Coherencia de marca"],
    service: "Branding + Desarrollo Web",
    cta: "Quiero mejorar mi marca",
    href: "/diagnostico/?problema=branding",
    score: 49,
  },
  {
    id: "estrategia",
    label: "No sé por dónde empezar",
    icon: Target,
    diagnosis: "Tu negocio puede necesitar primero ordenar prioridades antes de invertir en acciones sueltas.",
    risk: "Invertir sin estrategia puede generar gasto sin dirección.",
    checks: ["Presencia actual", "Canales", "Objetivos", "Embudo", "Métricas"],
    service: "Estrategia Digital Integral",
    cta: "Quiero orientación",
    href: "/diagnostico/?problema=estrategia",
    score: 52,
  },
];

export function ServicesProblemSelector() {
  const [selectedId, setSelectedId] = useState(problems[0].id);
  const current = useMemo(() => problems.find((problem) => problem.id === selectedId) ?? problems[0], [selectedId]);
  const CurrentIcon = current.icon;

  return (
    <section id="selector-problema" className="relative overflow-hidden bg-[#080d18] py-24 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(220,38,38,0.18),transparent_34%),radial-gradient(circle_at_88%_22%,rgba(59,130,246,0.13),transparent_34%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-red-400">Selector de problema</p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">¿Qué problema quieres resolver primero?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Elige lo que más se parece a tu situación y te mostraremos qué servicio tiene más sentido.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {problems.map((problem) => {
              const Icon = problem.icon;
              const active = problem.id === selectedId;
              return (
                <button
                  key={problem.id}
                  type="button"
                  onClick={() => setSelectedId(problem.id)}
                  className={`group flex min-h-16 items-center gap-3 rounded-2xl border p-4 text-left text-sm font-black transition ${
                    active
                      ? "border-red-300 bg-red-600 text-white shadow-xl shadow-red-950/30"
                      : "border-white/10 bg-white/[0.045] text-slate-200 hover:border-red-300/50 hover:bg-red-500/10"
                  }`}
                >
                  <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${active ? "bg-white/15" : "bg-red-500/10 text-red-300"}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  {problem.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-7">
          <div className="grid gap-5 md:grid-cols-[150px_1fr]">
            <div className="rounded-3xl border border-red-400/20 bg-red-500/10 p-5 text-center">
              <CurrentIcon className="mx-auto h-8 w-8 text-red-300" />
              <p className="mt-4 text-sm font-bold text-slate-300">Score inicial</p>
              <strong className="mt-2 block text-5xl font-black">{current.score}</strong>
              <span className="mt-2 block text-xs font-black uppercase text-red-200">Revisión recomendada</span>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Diagnóstico probable</p>
              <h3 className="mt-3 text-2xl font-black">{current.diagnosis}</h3>
              <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-slate-500">Riesgo comercial</p>
              <p className="mt-2 leading-7 text-slate-300">{current.risk}</p>
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.035] p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Qué deberías revisar</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {current.checks.map((check) => (
                <div key={check} className="flex items-center gap-3 rounded-2xl bg-white/[0.055] px-4 py-3 text-sm font-bold text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-red-300" />
                  {check}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4 rounded-3xl border border-red-400/20 bg-gradient-to-r from-red-600/15 to-white/[0.04] p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold text-red-300">Servicio recomendado</p>
              <p className="mt-1 text-2xl font-black">{current.service}</p>
            </div>
            <a href={current.href} className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-4 text-sm font-black text-white shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-500">
              {current.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesRouteRecommender() {
  const [selectedId, setSelectedId] = useState<RouteKey>("scale");

  return (
    <section className="section bg-enix-pearl text-slate-950">
      <div className="container">
        <div className="max-w-4xl">
          <p className="eyebrow">Ruta recomendada</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">No todos los negocios necesitan lo mismo.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Elige tu etapa y te mostramos una ruta lógica antes de invertir en piezas sueltas.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="grid gap-3 self-start">
            {recommendedRouteOptions.map((route) => (
              <button
                key={route.key}
                type="button"
                onClick={() => setSelectedId(route.key)}
                className={`rounded-[1.35rem] border px-5 py-5 text-left text-base font-black transition duration-300 md:text-lg ${
                  route.key === selectedId
                    ? "border-red-300 bg-white text-enix-red shadow-xl shadow-red-950/10"
                    : "border-slate-200 bg-white/75 text-slate-700 hover:border-red-200 hover:bg-white hover:text-slate-950"
                }`}
              >
                {route.label}
              </button>
            ))}
          </div>
          <RecommendedRoutePanel activeRoute={selectedId} />
        </div>
      </div>
    </section>
  );
}
