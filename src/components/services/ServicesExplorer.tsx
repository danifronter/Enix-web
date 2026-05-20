import { useState, type ElementType } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Brush,
  CheckCircle2,
  Globe2,
  Megaphone,
  Search,
  Send,
  Sparkles,
  Workflow,
} from "lucide-react";

type ServiceKey =
  | "web"
  | "seo"
  | "paid"
  | "automation"
  | "branding"
  | "analytics";

type ServiceData = {
  icon: ElementType;
  title: string;
  short: string;
  description: string;
  problem: string;
  capabilities: string[];
  related: string[];
  cta: string;
  href: string;
};

const services = {
  web: {
    icon: Globe2,
    title: "Desarrollo Web",
    short: "Webs y plataformas que convierten.",
    description:
      "Creamos sitios, landing pages, ecommerce y plataformas digitales rapidas, claras y preparadas para captar oportunidades.",
    problem:
      "Una web lenta, antigua o confusa puede hacer que un cliente dude antes de contactarte.",
    capabilities: ["UX/UI claro", "Formularios conectados", "SEO tecnico base"],
    related: ["SEO", "Branding", "Tracking"],
    cta: "Revisar mi proyecto web",
    href: "/servicios/desarrollo-web/",
  },
  seo: {
    icon: Search,
    title: "SEO Avanzado",
    short: "Que te encuentren cuando buscan.",
    description:
      "Ordenamos estructura, contenido y senales tecnicas para mejorar visibilidad organica con intencion comercial.",
    problem:
      "Si Google no entiende tu sitio, tus clientes pueden encontrar primero a tu competencia.",
    capabilities: ["Auditoria SEO", "Contenido por intencion", "Arquitectura web"],
    related: ["Web", "Contenido", "Analitica"],
    cta: "Quiero aparecer en Google",
    href: "/servicios/seo/",
  },
  paid: {
    icon: Megaphone,
    title: "Paid Media",
    short: "Campanas con medicion real.",
    description:
      "Creamos campanas conectadas a landing pages, eventos y seguimiento para saber que canal genera oportunidades.",
    problem:
      "Invertir en anuncios sin medicion convierte el marketing en intuicion cara.",
    capabilities: ["Google Ads", "Meta Ads", "Eventos de conversion"],
    related: ["Landing", "Tracking", "Remarketing"],
    cta: "Revisar mis campanas",
    href: "/servicios/paid-media/",
  },
  automation: {
    icon: Bot,
    title: "Automatizacion e IA",
    short: "Menos leads perdidos.",
    description:
      "Conectamos formularios, WhatsApp, CRM, correos e IA para responder, ordenar y dar seguimiento.",
    problem:
      "Muchos leads se pierden porque llegan por canales distintos y nadie los sigue a tiempo.",
    capabilities: ["WhatsApp + formularios", "CRM simple", "Flujos automaticos"],
    related: ["IA", "CRM", "Seguimiento"],
    cta: "Ordenar mi seguimiento",
    href: "/servicios/automatizacion-ia/",
  },
  branding: {
    icon: Brush,
    title: "Branding",
    short: "Confianza antes de vender.",
    description:
      "Construimos identidad, mensaje y sistema visual para que tu empresa se vea profesional y coherente.",
    problem:
      "Si tu marca se ve improvisada, el cliente duda incluso antes de pedir una reunion.",
    capabilities: ["Identidad visual", "Mensaje comercial", "Sistema grafico"],
    related: ["Web", "Contenido", "Campanas"],
    cta: "Revisar mi marca",
    href: "/servicios/branding/",
  },
  analytics: {
    icon: BarChart3,
    title: "Analitica y Tracking",
    short: "Decisiones con datos.",
    description:
      "Configuramos eventos, conversiones y dashboards para entender que paginas, campanas y canales generan oportunidades.",
    problem:
      "Sin datos claros, puedes seguir invirtiendo en lo que no funciona.",
    capabilities: ["GA4 + GTM", "Eventos clave", "Dashboard accionable"],
    related: ["Tracking", "Reportes", "Conversiones"],
    cta: "Quiero medir mejor",
    href: "/servicios/analitica-tracking/",
  },
} satisfies Record<ServiceKey, ServiceData>;

const serviceOrder: ServiceKey[] = [
  "web",
  "seo",
  "paid",
  "automation",
  "branding",
  "analytics",
];

export default function ServicesExplorer() {
  const [activeKey, setActiveKey] = useState<ServiceKey>("web");
  const active = services[activeKey];
  const ActiveIcon = active.icon;

  return (
    <section className="relative overflow-hidden bg-[#070B14] py-24 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-[-12%] top-[-20%] h-[520px] w-[520px] rounded-full bg-red-600/16 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-12%] h-[520px] w-[520px] rounded-full bg-blue-500/14 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-red-400">
            Servicios Enix
          </p>

          <h2 className="mt-5 text-[clamp(2rem,3.4vw,3.25rem)] font-black leading-[1.04] tracking-tight">
            No vendemos piezas sueltas. Conectamos lo que hace crecer.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Elige un servicio y revisa como se conecta con una ruta real de
            captacion, conversion, seguimiento y medicion.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-3 backdrop-blur-xl">
            <div className="flex gap-3 overflow-x-auto pb-2 lg:block lg:space-y-3 lg:overflow-visible lg:pb-0">
              {serviceOrder.map((key) => {
                const item = services[key];
                const Icon = item.icon;
                const isActive = activeKey === key;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveKey(key)}
                    className={[
                      "min-w-[250px] rounded-[1.35rem] border p-4 text-left transition duration-300 lg:w-full lg:min-w-0",
                      isActive
                        ? "border-red-300/60 bg-red-500/12 shadow-xl shadow-red-950/20"
                        : "border-white/10 bg-white/[0.035] hover:border-white/25 hover:bg-white/[0.065]",
                    ].join(" ")}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={[
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition",
                          isActive
                            ? "border-red-300/40 bg-red-500/15 text-red-300"
                            : "border-white/10 bg-white/[0.04] text-slate-400",
                        ].join(" ")}
                      >
                        <Icon className="h-5 w-5" />
                      </span>

                      <span>
                        <span className="block font-black text-white">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-sm leading-5 text-slate-400">
                          {item.short}
                        </span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            key={activeKey}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/35 backdrop-blur-xl transition md:p-7"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-500/16 blur-[100px]" />
            <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-blue-500/12 blur-[100px]" />

            <div className="relative grid gap-7 xl:grid-cols-[1fr_0.9fr] xl:items-stretch">
              <div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-red-300/25 bg-red-500/12 text-red-300">
                  <ActiveIcon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-5xl">
                  {active.title}
                </h3>

                <p className="mt-4 max-w-2xl text-xl font-bold leading-8 text-slate-300">
                  {active.short}
                </p>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                  {active.description}
                </p>

                <div className="mt-6 rounded-[1.5rem] border border-red-300/20 bg-red-500/10 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">
                    Problema que resuelve
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-200">
                    {active.problem}
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {active.capabilities.map((capability) => (
                    <div
                      key={capability}
                      className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-red-300" />
                      <p className="mt-3 text-sm font-black leading-5 text-white">
                        {capability}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href={active.href}
                    className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-500"
                  >
                    {active.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>

                  <div className="flex flex-wrap gap-2">
                    {active.related.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-black text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <ServicePreview variant={activeKey} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicePreview({ variant }: { variant: ServiceKey }) {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0B1120] p-5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-red-600/20 blur-[80px]" />
      <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-blue-500/15 blur-[90px]" />

      <div className="relative">
        {variant === "web" && <WebPreview />}
        {variant === "seo" && <SeoPreview />}
        {variant === "paid" && <PaidPreview />}
        {variant === "automation" && <AutomationPreview />}
        {variant === "branding" && <BrandingPreview />}
        {variant === "analytics" && <AnalyticsPreview />}
      </div>
    </div>
  );
}

function PreviewHeader({ label }: { label: string }) {
  return (
    <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">
        {label}
      </p>
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.7)]" />
    </div>
  );
}

function WebPreview() {
  return (
    <>
      <PreviewHeader label="Web conectada" />
      <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5">
        <div className="mb-4 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-300" />
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-red-600/25 to-blue-500/10 p-5">
          <div className="h-3 w-4/5 rounded-full bg-white/80" />
          <div className="mt-3 h-3 w-3/5 rounded-full bg-white/35" />
          <div className="mt-6 inline-flex rounded-full bg-red-600 px-4 py-2 text-xs font-black">
            CTA activo
          </div>
        </div>
      </div>
    </>
  );
}

function SeoPreview() {
  return (
    <>
      <PreviewHeader label="Mapa SEO" />
      <div className="grid gap-3 sm:grid-cols-2">
        {["Home", "Servicios", "Blog", "SEO local"].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"
          >
            <Search className="h-5 w-5 text-red-300" />
            <p className="mt-3 text-sm font-black">{item}</p>
            <div className="mt-3 h-2 rounded-full bg-red-400/50" />
          </div>
        ))}
      </div>
    </>
  );
}

function PaidPreview() {
  return (
    <>
      <PreviewHeader label="Campanas activas" />
      {["Google Ads", "Meta Ads", "Remarketing"].map((item, index) => (
        <div
          key={item}
          className="mb-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4"
        >
          <div className="flex items-center justify-between">
            <p className="font-black">{item}</p>
            <span className="text-xs font-bold text-emerald-300">Midiendo</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-white/10">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-red-500 to-blue-400"
              style={{ width: `${58 + index * 12}%` }}
            />
          </div>
        </div>
      ))}
    </>
  );
}

function AutomationPreview() {
  const steps = [
    ["Formulario", Send],
    ["IA", Bot],
    ["CRM", Workflow],
    ["Seguimiento", CheckCircle2],
  ] as const;

  return (
    <>
      <PreviewHeader label="Flujo automatico" />
      {steps.map(([label, Icon], index) => (
        <div
          key={label}
          className="mb-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-300">
            <Icon className="h-5 w-5" />
          </div>
          <p className="font-black">{label}</p>
          {index < steps.length - 1 && (
            <ArrowRight className="ml-auto h-4 w-4 text-red-300" />
          )}
        </div>
      ))}
    </>
  );
}

function BrandingPreview() {
  return (
    <>
      <PreviewHeader label="Sistema visual" />
      <div className="grid grid-cols-5 gap-2">
        {["#DC2626", "#EF4444", "#0B1120", "#60A5FA", "#F8FAFC"].map(
          (color) => (
            <div
              key={color}
              className="h-16 rounded-2xl border border-white/10"
              style={{ background: color }}
            />
          ),
        )}
      </div>
      <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.055] p-5">
        <Sparkles className="h-8 w-8 text-red-300" />
        <div className="mt-4 h-3 w-4/5 rounded-full bg-white/70" />
        <div className="mt-3 h-3 w-3/5 rounded-full bg-white/25" />
      </div>
    </>
  );
}

function AnalyticsPreview() {
  return (
    <>
      <PreviewHeader label="Tracking activo" />
      <div className="grid grid-cols-3 gap-3">
        {[
          ["Eventos", "OK"],
          ["Canal", "Claro"],
          ["Reporte", "Listo"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"
          >
            <p className="text-lg font-black">{value}</p>
            <p className="mt-1 text-xs text-slate-400">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-3">
        {["SEO", "Ads", "WhatsApp"].map((item, index) => (
          <div key={item}>
            <div className="mb-2 flex justify-between text-xs font-bold text-slate-400">
              <span>{item}</span>
              <span>{70 - index * 12}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-red-500 to-blue-400"
                style={{ width: `${70 - index * 12}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
