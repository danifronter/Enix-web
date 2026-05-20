import { useMemo, useState, type ElementType } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  Gauge,
  Globe2,
  Megaphone,
  Search,
  ShieldCheck,
  Target,
} from "lucide-react";

type ProblemKey =
  | "web"
  | "seo"
  | "ads"
  | "followup"
  | "brand"
  | "strategy";

type ScoreLevel = "good" | "medium" | "poor";

type ProblemData = {
  icon: ElementType;
  label: string;
  query: string;
  score: number;
  level: ScoreLevel;
  diagnosis: string;
  risk: string;
  opportunities: string[];
  review: string[];
  service: string;
  href: string;
  cta: string;
};

const problems = {
  web: {
    icon: Globe2,
    label: "Mi web no vende",
    query: "Mi web recibe visitas, pero no genera consultas",
    score: 58,
    level: "medium",
    diagnosis:
      "Tu sitio puede estar comunicando bien lo que haces, pero no esta guiando al visitante hacia una accion clara.",
    risk:
      "El visitante no entiende rapido por que confiar, que hacer despues o como contactarte.",
    opportunities: [
      "Clarificar propuesta de valor",
      "Mejorar llamados a la accion",
      "Optimizar experiencia mobile",
    ],
    review: ["Hero", "CTA", "Confianza", "Formularios"],
    service: "Desarrollo Web",
    href: "/servicios/desarrollo-web/",
    cta: "Revisar mi proyecto web",
  },
  seo: {
    icon: Search,
    label: "No aparezco en Google",
    query: "Mis clientes buscan soluciones, pero no me encuentran",
    score: 47,
    level: "poor",
    diagnosis:
      "Google puede no estar entendiendo bien tu estructura, tus servicios o el contenido que deberia posicionar.",
    risk:
      "Tus clientes podrian estar encontrando primero a tu competencia, incluso si tu servicio es mejor.",
    opportunities: [
      "Revisar arquitectura SEO",
      "Optimizar contenido por intencion",
      "Mejorar enlazado interno",
    ],
    review: ["SEO tecnico", "Contenido", "Schema", "Velocidad"],
    service: "SEO Avanzado",
    href: "/servicios/seo/",
    cta: "Quiero aparecer en Google",
  },
  ads: {
    icon: Megaphone,
    label: "Invierto en publicidad",
    query: "Estoy invirtiendo en anuncios y no se si funcionan",
    score: 52,
    level: "medium",
    diagnosis:
      "Tus campanas pueden estar generando clics, pero sin trazabilidad suficiente para saber que canal convierte.",
    risk:
      "Invertir sin medicion convierte la publicidad en una apuesta dificil de optimizar.",
    opportunities: [
      "Conectar campanas con landing",
      "Configurar eventos de conversion",
      "Medir formularios y WhatsApp",
    ],
    review: ["Landing", "Eventos", "Canales", "Conversiones"],
    service: "Paid Media + Tracking",
    href: "/servicios/paid-media/",
    cta: "Revisar mis campanas",
  },
  followup: {
    icon: Bot,
    label: "Pierdo leads",
    query: "Recibo consultas, pero se pierden por falta de seguimiento",
    score: 44,
    level: "poor",
    diagnosis:
      "Tus consultas pueden estar llegando, pero no existe un sistema claro para responder, clasificar y hacer seguimiento.",
    risk:
      "Un lead sin respuesta rapida puede terminar cotizando con otra empresa.",
    opportunities: [
      "Centralizar formularios y WhatsApp",
      "Crear flujo de seguimiento",
      "Activar alertas internas",
    ],
    review: ["WhatsApp", "CRM", "Correos", "IA"],
    service: "Automatizacion Comercial + IA",
    href: "/servicios/automatizacion-ia/",
    cta: "Automatizar seguimiento",
  },
  brand: {
    icon: ShieldCheck,
    label: "No transmito confianza",
    query: "Mi marca no transmite el nivel real de mi empresa",
    score: 61,
    level: "medium",
    diagnosis:
      "Tu empresa puede ser seria, pero su identidad visual y mensaje podrian no estar transmitiendo suficiente confianza.",
    risk:
      "Una primera impresion debil reduce la percepcion de valor antes de la conversacion comercial.",
    opportunities: [
      "Ordenar identidad visual",
      "Ajustar mensaje comercial",
      "Unificar presencia digital",
    ],
    review: ["Marca", "Mensaje", "Coherencia", "Presentacion"],
    service: "Branding y Comunicacion",
    href: "/servicios/branding/",
    cta: "Revisar mi marca",
  },
  strategy: {
    icon: Target,
    label: "No se por donde empezar",
    query: "No tengo claro que servicio digital deberia priorizar",
    score: 69,
    level: "good",
    diagnosis:
      "Antes de invertir en piezas sueltas, conviene identificar que parte del sistema esta frenando tus resultados.",
    risk:
      "Hacer acciones aisladas puede consumir presupuesto sin resolver el problema correcto.",
    opportunities: [
      "Priorizar ruta digital",
      "Detectar brechas principales",
      "Ordenar inversion por impacto",
    ],
    review: ["Estrategia", "Web", "SEO", "Datos"],
    service: "Diagnostico Digital",
    href: "/diagnostico/",
    cta: "Solicitar diagnostico",
  },
} satisfies Record<ProblemKey, ProblemData>;

const order: ProblemKey[] = ["web", "seo", "ads", "followup", "brand", "strategy"];

function getScoreMeta(level: ScoreLevel) {
  if (level === "good") {
    return {
      label: "Base aprovechable",
      color: "#0F9D58",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
    };
  }

  if (level === "medium") {
    return {
      label: "Requiere mejora",
      color: "#F9AB00",
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
    };
  }

  return {
    label: "Prioridad alta",
    color: "#DC2626",
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
  };
}

export default function GoogleStyleProblemSelector() {
  const [activeKey, setActiveKey] = useState<ProblemKey>("followup");
  const active = problems[activeKey];
  const ActiveIcon = active.icon;
  const meta = useMemo(() => getScoreMeta(active.level), [active.level]);

  return (
    <section id="selector-problema" className="relative overflow-hidden bg-[#F8FAFC] py-20 text-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(26,115,232,0.08),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(220,38,38,0.06),transparent_26%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Gauge className="h-6 w-6 text-[#1A73E8]" />
          </div>

          <p className="mt-5 text-sm font-black uppercase tracking-[0.26em] text-[#1A73E8]">
            Herramienta de diagnostico
          </p>

          <h2 className="mt-4 text-balance text-[clamp(2rem,3.2vw,3.15rem)] font-black leading-[1.05] tracking-tight">
            Diagnostico rapido de crecimiento digital
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Selecciona el problema que mas se parece a tu situacion y revisa que
            servicio deberias priorizar.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="flex items-center gap-4 rounded-full border border-slate-200 bg-white px-5 py-4 shadow-lg shadow-slate-950/[0.05]">
            <Search className="h-5 w-5 shrink-0 text-slate-400" />
            <p className="min-w-0 flex-1 truncate text-left text-base font-semibold text-slate-700">
              {active.query}
            </p>
            <span className="hidden rounded-full bg-[#1A73E8] px-5 py-2 text-sm font-black text-white sm:inline-flex">
              Analizar
            </span>
          </div>

          <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
            {order.map((key) => {
              const item = problems[key];
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
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/[0.07]">
          <div className="border-b border-slate-200 bg-white px-6 py-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <ClipboardCheck className="h-5 w-5 text-[#1A73E8]" />
                <p className="font-black text-slate-900">
                  Resultado del diagnostico
                </p>
              </div>

              <span
                className={[
                  "rounded-full border px-3 py-1.5 text-xs font-black",
                  meta.bg,
                  meta.text,
                  meta.border,
                ].join(" ")}
              >
                {meta.label}
              </span>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[0.34fr_0.66fr]">
            <div className="border-b border-slate-200 bg-slate-50 p-7 lg:border-b-0 lg:border-r">
              <div className="flex flex-col items-center text-center">
                <ScoreCircle score={active.score} color={meta.color} />

                <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                  Prioridad estimada
                </p>

                <p className="mt-2 text-2xl font-black text-slate-950">
                  {active.service}
                </p>

                <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
                  Este resultado es referencial. El diagnostico real se confirma
                  revisando tu sitio, canales y datos.
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0FE] text-[#1A73E8]">
                  <ActiveIcon className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#1A73E8]">
                    Diagnostico probable
                  </p>

                  <h3 className="mt-3 text-balance text-2xl font-black leading-tight tracking-tight text-slate-950 md:text-3xl">
                    {active.diagnosis}
                  </h3>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start gap-3">
                  <CircleAlert className="mt-1 h-5 w-5 shrink-0 text-amber-500" />
                  <div>
                    <p className="font-black text-slate-950">Riesgo comercial</p>
                    <p className="mt-2 leading-7 text-slate-600">{active.risk}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    Oportunidades detectadas
                  </p>

                  <div className="mt-4 space-y-3">
                    {active.opportunities.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0F9D58]" />
                        <p className="font-semibold text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    Que revisar
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.review.map((item) => (
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

              <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-black text-slate-500">
                    Servicio recomendado
                  </p>
                  <p className="mt-1 text-2xl font-black text-slate-950">
                    {active.service}
                  </p>
                </div>

                <a
                  href={active.href}
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-4 text-sm font-black text-white shadow-xl shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-500"
                >
                  {active.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-6 text-slate-500">
          Esta herramienta entrega una orientacion inicial. Para una recomendacion
          precisa, Enix Studio revisa tu presencia digital, SEO, formularios,
          campanas, WhatsApp y medicion.
        </p>
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
