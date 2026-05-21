import { useMemo, useState, type ElementType } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Brush,
  CheckCircle2,
  Filter,
  Globe2,
  Megaphone,
  Search,
  Sparkles,
  Target,
} from "lucide-react";

type Category =
  | "Todos"
  | "Web"
  | "SEO"
  | "Campañas"
  | "Automatización"
  | "Marca"
  | "Datos";

type ServiceItem = {
  title: string;
  category: Exclude<Category, "Todos">;
  icon: ElementType;
  badge: string;
  description: string;
  idealFor: string[];
  includes: string[];
  href: string;
  cta: string;
  featured: boolean;
};

const services: ServiceItem[] = [
  {
    title: "Desarrollo Web",
    category: "Web",
    icon: Globe2,
    badge: "Base digital",
    description:
      "Sitios web, landing pages y plataformas diseñadas para explicar, generar confianza y convertir visitas en oportunidades.",
    idealFor: ["No tengo web", "Mi web no vende", "Quiero verme profesional"],
    includes: ["UX/UI", "Performance", "Formularios", "SEO técnico base"],
    href: "/servicios/desarrollo-web/",
    cta: "Ver servicio web",
    featured: true,
  },
  {
    title: "SEO Avanzado",
    category: "SEO",
    icon: Search,
    badge: "Crecimiento orgánico",
    description:
      "Arquitectura, contenido, SEO técnico y optimización para aparecer cuando tus clientes buscan soluciones como la tuya.",
    idealFor: ["No aparezco en Google", "Dependo de anuncios", "Quiero tráfico orgánico"],
    includes: ["Auditoría SEO", "Contenido", "Schema", "Enlazado interno"],
    href: "/servicios/seo/",
    cta: "Ver SEO",
    featured: true,
  },
  {
    title: "Paid Media",
    category: "Campañas",
    icon: Megaphone,
    badge: "Captación rápida",
    description:
      "Campañas digitales conectadas a landing pages, eventos y medición para captar oportunidades con mayor claridad.",
    idealFor: ["Quiero más clientes", "Invierto en ads", "No sé qué campaña funciona"],
    includes: ["Google Ads", "Meta Ads", "Landing", "Conversiones"],
    href: "/servicios/paid-media/",
    cta: "Ver campañas",
    featured: false,
  },
  {
    title: "Automatización e IA",
    category: "Automatización",
    icon: Bot,
    badge: "Seguimiento activo",
    description:
      "Flujos para conectar formularios, WhatsApp, CRM, correos e IA para responder y seguir oportunidades sin perder leads.",
    idealFor: ["Pierdo leads", "Respondo tarde", "Uso planillas"],
    includes: ["CRM", "IA", "Alertas internas", "Correos"],
    href: "/servicios/automatizacion-ia/",
    cta: "Ver automatización",
    featured: true,
  },
  {
    title: "Branding y Comunicación",
    category: "Marca",
    icon: Brush,
    badge: "Confianza visual",
    description:
      "Identidad, mensaje y sistema visual para que tu empresa transmita orden, valor y profesionalismo antes de vender.",
    idealFor: ["Mi marca se ve antigua", "No transmito confianza", "No explico bien"],
    includes: ["Identidad", "Mensaje", "Sistema visual", "Piezas digitales"],
    href: "/servicios/branding/",
    cta: "Ver branding",
    featured: false,
  },
  {
    title: "Analítica y Tracking",
    category: "Datos",
    icon: BarChart3,
    badge: "Decisiones con datos",
    description:
      "Configuración de eventos, conversiones y dashboards para saber qué canal, página o campaña genera oportunidades.",
    idealFor: ["No mido conversiones", "No sé de dónde llegan", "No tengo dashboard"],
    includes: ["GA4", "GTM", "Eventos", "Dashboards"],
    href: "/servicios/analitica-tracking/",
    cta: "Ver analítica",
    featured: false,
  },
];

const categories: Category[] = [
  "Todos",
  "Web",
  "SEO",
  "Campañas",
  "Automatización",
  "Marca",
  "Datos",
];

export default function ServicesCatalog() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [query, setQuery] = useState("");

  const filteredServices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return services.filter((service) => {
      const matchesCategory =
        activeCategory === "Todos" || service.category === activeCategory;

      const searchable = [
        service.title,
        service.category,
        service.description,
        service.badge,
        ...service.idealFor,
        ...service.includes,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchable.includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pb-24 pt-28 text-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(26,115,232,0.08),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(220,38,38,0.07),transparent_26%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Sparkles className="h-6 w-6 text-[#1A73E8]" />
          </div>

          <p className="mt-5 text-sm font-black uppercase tracking-[0.26em] text-[#1A73E8]">
            Catálogo de servicios
          </p>

          <h1 className="mt-4 text-balance text-[clamp(2.15rem,3.8vw,3.65rem)] font-black leading-[1.03] tracking-tight">
            Servicios digitales para construir un sistema de crecimiento.
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Explora las soluciones de Enix Studio como un catálogo: elige por
            objetivo, etapa o problema, y encuentra qué servicio tiene más sentido
            para tu empresa.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/[0.05]">
          <div className="flex items-center gap-4 rounded-[1.35rem] border border-slate-200 bg-slate-50 px-5 py-4">
            <Search className="h-5 w-5 shrink-0 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por problema, servicio u objetivo..."
              className="min-w-0 flex-1 bg-transparent text-base font-semibold text-slate-700 outline-none placeholder:text-slate-400"
            />
            <Filter className="hidden h-5 w-5 text-slate-400 sm:block" />
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={[
                    "inline-flex min-w-max items-center rounded-full border px-4 py-2.5 text-sm font-black transition duration-200",
                    isActive
                      ? "border-[#1A73E8] bg-[#E8F0FE] text-[#174EA6]"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50",
                  ].join(" ")}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {filteredServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={[
                  "group relative overflow-hidden rounded-[2rem] border bg-white p-6 shadow-xl shadow-slate-950/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/[0.08]",
                  service.featured ? "border-red-200" : "border-slate-200",
                ].join(" ")}
              >
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-red-500/[0.06] blur-[70px] transition group-hover:bg-red-500/[0.11]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-3 text-[#1A73E8]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span
                      className={[
                        "rounded-full px-3 py-1.5 text-xs font-black",
                        service.featured
                          ? "bg-red-50 text-red-600"
                          : "bg-slate-100 text-slate-600",
                      ].join(" ")}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="mt-6 text-2xl font-black leading-tight tracking-tight text-slate-950">
                    {service.title}
                  </h2>

                  <p className="mt-3 min-h-[84px] text-base leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      Ideal si
                    </p>

                    <div className="mt-3 space-y-2">
                      {service.idealFor.slice(0, 3).map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0F9D58]" />
                          <p className="text-sm font-semibold leading-5 text-slate-700">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.includes.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-black text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={service.href}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3.5 text-sm font-black text-white transition hover:bg-red-600"
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-xl shadow-slate-950/[0.04]">
            <p className="text-2xl font-black text-slate-950">
              No encontramos un servicio con ese criterio.
            </p>
            <p className="mt-3 text-slate-600">
              Prueba con “SEO”, “web”, “leads”, “marca” o “campañas”.
            </p>
          </div>
        )}

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/[0.04] md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-red-600" />
                <p className="font-black text-slate-950">
                  ¿No sabes qué elegir?
                </p>
              </div>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                No necesitas decidir solo. Podemos revisar tu situación y recomendar
                qué servicio conviene priorizar primero.
              </p>
            </div>

            <a
              href="/diagnostico/"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-500"
            >
              Solicitar diagnóstico
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
