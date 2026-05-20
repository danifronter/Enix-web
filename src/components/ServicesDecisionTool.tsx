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
    <section id="selector-problema" className="relative overflow-hidden bg-slate-50 py-24 text-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(220,38,38,0.07),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(96,165,250,0.10),transparent_32%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Selector de problema</p>
          <h2 className="mt-5 max-w-[680px] text-balance text-[clamp(2rem,3.4vw,3.25rem)] font-black leading-[1.04] tracking-tight text-slate-950">
            Encuentra qué servicio necesita tu empresa primero.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Selecciona el problema más cercano a tu situación y te mostramos una ruta recomendada antes de invertir en piezas sueltas.
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
                  className={`group rounded-2xl border p-4 text-left transition duration-300 ${
                    active
                      ? "border-red-500 bg-red-600 text-white shadow-xl shadow-red-600/20"
                      : "border-slate-200 bg-white text-slate-800 shadow-sm hover:-translate-y-0.5 hover:border-red-200 hover:shadow-lg hover:shadow-slate-950/5"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition ${active ? "bg-white/15 text-white" : "bg-red-50 text-red-600 group-hover:bg-red-100"}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-black leading-5">{problem.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <article className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-950/[0.08] md:p-7">
          <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-red-500/[0.08] blur-[90px]" />
          <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-blue-500/[0.08] blur-[90px]" />
          <div className="relative grid gap-5 md:grid-cols-[0.28fr_1fr]">
            <div className="rounded-[1.5rem] border border-red-100 bg-red-50 p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-red-600 shadow-sm">
                <CurrentIcon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-red-600">Diagnóstico</p>
              <p className="mt-2 text-2xl font-black leading-tight text-slate-950">Revisión recomendada</p>
              <span className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-black text-red-600 shadow-sm">
                Prioridad {current.score}
              </span>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-600">Diagnóstico probable</p>
              <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-950 md:text-3xl">{current.diagnosis}</h3>
              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Riesgo comercial</p>
                <p className="mt-2 text-base leading-7 text-slate-600">{current.risk}</p>
              </div>
            </div>
          </div>

          <div className="relative mt-5 rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">Qué deberías revisar</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {current.checks.slice(0, 4).map((check) => (
                <div key={check} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-red-500" />
                  <p className="text-sm font-black text-slate-700">{check}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-5 flex flex-col gap-4 rounded-[1.5rem] border border-red-100 bg-gradient-to-r from-red-50 to-white p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black text-red-600">Servicio recomendado</p>
              <p className="mt-1 text-2xl font-black tracking-tight text-slate-950">{current.service}</p>
            </div>
            <a href={current.href} className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-4 text-sm font-black text-white shadow-xl shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-500">
              {current.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </article>
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
          <h2 className="mt-4 text-[clamp(2rem,3.4vw,3.25rem)] font-black leading-[1.04] tracking-tight">No todos los negocios necesitan lo mismo.</h2>
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
