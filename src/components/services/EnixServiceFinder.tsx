import { useMemo, useState, type ElementType } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  Globe2,
  LineChart,
  Megaphone,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

type IntentKey =
  | "web-sales"
  | "google"
  | "campaigns"
  | "leads"
  | "trust"
  | "start";

type IntentData = {
  icon: ElementType;
  tab: string;
  query: string;
  score: number;
  status: string;
  mainService: string;
  href: string;
  cta: string;
  diagnosis: string;
  risk: string;
  why: string[];
  complements: string[];
  nextStep: string;
};

const intents = {
  "web-sales": {
    icon: Globe2,
    tab: "Mi web no vende",
    query: "Quiero que mi web genere más consultas",
    score: 62,
    status: "Oportunidad de conversión",
    mainService: "Desarrollo Web y Plataformas Digitales",
    href: "/servicios/desarrollo-web/",
    cta: "Revisar mi proyecto web",
    diagnosis:
      "Tu sitio necesita explicar mejor, generar confianza más rápido y guiar al visitante hacia una acción concreta.",
    risk:
      "Si la web no responde rápido qué haces, por qué confiar y cómo contactarte, el usuario compara con otra empresa.",
    why: [
      "Mejora la primera impresión",
      "Ordena servicios y mensajes",
      "Conecta formularios y medición",
    ],
    complements: ["SEO base", "Branding", "Tracking"],
    nextStep:
      "Partir con una revisión de estructura, hero, CTA, velocidad y formularios.",
  },
  google: {
    icon: Search,
    tab: "No aparezco en Google",
    query: "Quiero aparecer cuando mis clientes buscan",
    score: 48,
    status: "Prioridad SEO",
    mainService: "SEO Avanzado",
    href: "/servicios/seo/",
    cta: "Quiero aparecer en Google",
    diagnosis:
      "Tu empresa necesita una estructura que Google pueda entender y contenido orientado a búsquedas reales.",
    risk:
      "Si tus clientes buscan y encuentran primero a la competencia, pierdes oportunidades antes de competir.",
    why: [
      "Ordena arquitectura web",
      "Crea contenido por intención",
      "Mejora visibilidad orgánica",
    ],
    complements: ["Contenido", "Analitica", "SEO local"],
    nextStep:
      "Auditar indexación, estructura, títulos, contenido, enlaces internos y velocidad.",
  },
  campaigns: {
    icon: Megaphone,
    tab: "Mis campañas no son claras",
    query: "Estoy invirtiendo en publicidad y no sé qué funciona",
    score: 55,
    status: "Medición incompleta",
    mainService: "Paid Media + Analitica",
    href: "/servicios/paid-media/",
    cta: "Revisar mis campañas",
    diagnosis:
      "Tus campañas necesitan landing, eventos y trazabilidad para saber qué canal genera oportunidades reales.",
    risk:
      "Invertir sin medición convierte la publicidad en intuición cara.",
    why: [
      "Conecta anuncios con conversión",
      "Mide formularios y WhatsApp",
      "Optimiza por evidencia",
    ],
    complements: ["Landing pages", "GTM", "Dashboard"],
    nextStep:
      "Revisar campañas, landing, eventos de conversión y calidad de los leads.",
  },
  leads: {
    icon: Bot,
    tab: "Pierdo leads",
    query: "Recibo consultas, pero se enfrian o se pierden",
    score: 43,
    status: "Fuga comercial",
    mainService: "Automatizacion Comercial + IA",
    href: "/servicios/automatizacion-ia/",
    cta: "Automatizar seguimiento",
    diagnosis:
      "Tus oportunidades necesitan un flujo para responder, clasificar, registrar y hacer seguimiento sin depender de memoria o planillas.",
    risk:
      "Un lead sin respuesta rápida puede terminar cotizando con otra empresa.",
    why: [
      "Centraliza consultas",
      "Activa seguimiento automatico",
      "Ordena oportunidades comerciales",
    ],
    complements: ["CRM", "WhatsApp", "Correos automaticos"],
    nextStep:
      "Mapear canales de entrada y definir flujo mínimo de respuesta y seguimiento.",
  },
  trust: {
    icon: ShieldCheck,
    tab: "No transmito confianza",
    query: "Mi marca no se ve al nivel real de mi empresa",
    score: 59,
    status: "Confianza visual",
    mainService: "Branding y Comunicacion",
    href: "/servicios/branding/",
    cta: "Revisar mi marca",
    diagnosis:
      "Tu empresa puede ser buena, pero si su identidad y mensaje se ven débiles, el cliente percibe menos valor.",
    risk:
      "La primera impresión puede cerrar o abrir una conversación antes de que expliques tu servicio.",
    why: [
      "Mejora percepcion profesional",
      "Aclara propuesta de valor",
      "Unifica presencia digital",
    ],
    complements: ["Web", "Contenido", "Presentaciones"],
    nextStep:
      "Revisar identidad, mensaje, tono, coherencia visual y piezas comerciales.",
  },
  start: {
    icon: Target,
    tab: "No se por donde partir",
    query: "Necesito saber qué conviene hacer primero",
    score: 71,
    status: "Ruta estrategica",
    mainService: "Diagnostico Digital",
    href: "/diagnostico/",
    cta: "Solicitar diagnóstico",
    diagnosis:
      "Antes de invertir en servicios sueltos, conviene detectar qué parte del sistema está frenando tus resultados.",
    risk:
      "Hacer acciones aisladas puede consumir presupuesto sin resolver el problema correcto.",
    why: [
      "Prioriza inversion",
      "Evita piezas sueltas",
      "Define una ruta lógica",
    ],
    complements: ["Web", "SEO", "Datos"],
    nextStep:
      "Revisar presencia digital, canales, formularios, SEO, campañas y medición.",
  },
} satisfies Record<IntentKey, IntentData>;

const order: IntentKey[] = [
  "web-sales",
  "google",
  "campaigns",
  "leads",
  "trust",
  "start",
];

function getScoreColor(score: number) {
  if (score >= 70) return "#0F9D58";
  if (score >= 55) return "#F9AB00";
  return "#DC2626";
}

export default function EnixServiceFinder() {
  const [activeKey, setActiveKey] = useState<IntentKey>("leads");
  const active = intents[activeKey];
  const ActiveIcon = active.icon;
  const scoreColor = useMemo(() => getScoreColor(active.score), [active.score]);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 text-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(26,115,232,0.08),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(220,38,38,0.055),transparent_25%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Sparkles className="h-6 w-6 text-[#1A73E8]" />
          </div>

          <p className="mt-5 text-sm font-black uppercase tracking-[0.26em] text-[#1A73E8]">
            Enix Service Finder
          </p>

          <h2 className="mt-4 text-balance text-[clamp(2rem,3.2vw,3.15rem)] font-black leading-[1.05] tracking-tight">
            Encuentra qué servicio necesita tu empresa primero.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Selecciona lo que quieres resolver y te mostraremos una ruta
            recomendada antes de invertir en piezas sueltas.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/[0.05]">
          <div className="flex items-center gap-4 rounded-[1.35rem] border border-slate-200 bg-slate-50 px-5 py-4">
            <Search className="h-5 w-5 shrink-0 text-slate-400" />
            <p className="min-w-0 flex-1 truncate text-base font-semibold text-slate-700">
              {active.query}
            </p>
            <span className="hidden rounded-full bg-[#1A73E8] px-5 py-2 text-sm font-black text-white sm:inline-flex">
              Analizar
            </span>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
            {order.map((key) => {
              const item = intents[key];
              const Icon = item.icon;
              const isActive = activeKey === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveKey(key)}
                  className={[
                    "inline-flex min-w-max items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-black transition duration-200",
                    isActive
                      ? "border-[#1A73E8] bg-[#E8F0FE] text-[#174EA6]"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" />
                  {item.tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/[0.07]">
          <div className="border-b border-slate-200 px-6 py-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <ClipboardCheck className="h-5 w-5 text-[#1A73E8]" />
                <p className="font-black text-slate-900">Recomendacion generada</p>
              </div>

              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-black text-slate-600">
                Resultado referencial
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[0.32fr_0.68fr]">
            <aside className="border-b border-slate-200 bg-slate-50 p-7 lg:border-b-0 lg:border-r">
              <div className="flex flex-col items-center text-center">
                <ScoreCircle score={active.score} color={scoreColor} />

                <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                  Estado
                </p>

                <p className="mt-2 text-2xl font-black text-slate-950">
                  {active.status}
                </p>

                <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
                  La recomendación se basa en el problema seleccionado. El
                  diagnóstico real requiere revisar tu presencia digital.
                </p>
              </div>
            </aside>

            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] text-[#1A73E8]">
                  <ActiveIcon className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#1A73E8]">
                    Servicio recomendado
                  </p>

                  <h3 className="mt-3 text-balance text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-4xl">
                    {active.mainService}
                  </h3>

                  <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                    {active.diagnosis}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex items-start gap-3">
                  <CircleAlert className="mt-1 h-5 w-5 shrink-0 text-amber-600" />
                  <div>
                    <p className="font-black text-slate-950">
                      Riesgo si no se corrige
                    </p>
                    <p className="mt-2 leading-7 text-slate-700">{active.risk}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    Por qué tiene sentido
                  </p>

                  <div className="mt-4 space-y-3">
                    {active.why.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0F9D58]" />
                        <p className="font-semibold text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    Servicios complementarios
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.complements.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start gap-3">
                  <LineChart className="mt-1 h-5 w-5 shrink-0 text-[#1A73E8]" />
                  <div>
                    <p className="font-black text-slate-950">
                      Siguiente paso sugerido
                    </p>
                    <p className="mt-2 leading-7 text-slate-600">
                      {active.nextStep}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={active.href}
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-500"
                >
                  {active.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="/servicios/"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-black text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Ver todos los servicios
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoreCircle({ score, color }: { score: number; color: string }) {
  const radius = 48;
  const stroke = 9;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex h-36 w-36 items-center justify-center">
      <svg height={radius * 2} width={radius * 2} className="absolute scale-[1.35]">
        <circle
          stroke="#E2E8F0"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      </svg>

      <div className="relative text-center">
        <p className="text-5xl font-black" style={{ color }}>
          {score}
        </p>
        <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
          /100
        </p>
      </div>
    </div>
  );
}
