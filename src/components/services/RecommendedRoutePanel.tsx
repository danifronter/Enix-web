import type { ElementType, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  Database,
  Globe2,
  LineChart,
  Megaphone,
  Network,
  Sparkles,
  Target,
} from "lucide-react";

export type RouteKey =
  | "starting"
  | "web-not-selling"
  | "more-clients"
  | "organic-growth"
  | "sales-order"
  | "scale";

type RouteData = {
  eyebrow: string;
  title: string;
  description: string;
  steps: string[];
  impacts: string[];
  deliverables: string[];
  href: string;
  icon: ElementType;
};

export const recommendedRouteOptions: { key: RouteKey; label: string }[] = [
  { key: "starting", label: "Estoy partiendo" },
  { key: "web-not-selling", label: "Tengo web, pero no vende" },
  { key: "more-clients", label: "Quiero más clientes" },
  { key: "organic-growth", label: "Quiero crecer orgánicamente" },
  { key: "sales-order", label: "Quiero ordenar ventas" },
  { key: "scale", label: "Quiero escalar" },
];

const recommendedRoutes: Record<RouteKey, RouteData> = {
  starting: {
    eyebrow: "Ruta para",
    title: "Estoy partiendo",
    description: "Construir una presencia profesional desde la base.",
    steps: ["Branding", "Web", "SEO base", "Tracking"],
    impacts: ["Presencia clara", "Confianza inicial", "Base medible"],
    deliverables: ["Identidad y mensaje", "Web corporativa", "SEO técnico inicial", "Formulario y medición"],
    href: "/diagnostico?etapa=partiendo",
    icon: Compass,
  },
  "web-not-selling": {
    eyebrow: "Ruta para",
    title: "Tengo web, pero no vende",
    description: "Transformar una web pasiva en una herramienta comercial.",
    steps: ["Auditoría", "Rediseño", "Conversión", "Tracking"],
    impacts: ["Mejor primera impresión", "CTA más claros", "Medición activa"],
    deliverables: ["Auditoría web", "Optimización UX", "Formularios y seguimiento", "Eventos de conversión"],
    href: "/diagnostico?etapa=web-no-vende",
    icon: Globe2,
  },
  "more-clients": {
    eyebrow: "Ruta para",
    title: "Quiero más clientes",
    description: "Crear una ruta de captación medible.",
    steps: ["Oferta", "Landing/Web", "Ads", "Seguimiento"],
    impacts: ["Más oportunidades", "Campañas medibles", "Mejor seguimiento"],
    deliverables: ["Mensaje comercial", "Landing o página de servicio", "Campañas", "Tracking de leads"],
    href: "/diagnostico?etapa=mas-clientes",
    icon: Megaphone,
  },
  "organic-growth": {
    eyebrow: "Ruta para",
    title: "Quiero crecer orgánicamente",
    description: "Construir visibilidad sostenible en Google.",
    steps: ["SEO técnico", "Contenido", "Blog", "Autoridad"],
    impacts: ["Mejor estructura", "Intención orgánica", "Autoridad digital"],
    deliverables: ["Auditoría SEO", "Arquitectura de contenido", "Optimización on-page", "Plan editorial"],
    href: "/diagnostico?etapa=seo-organico",
    icon: LineChart,
  },
  "sales-order": {
    eyebrow: "Ruta para",
    title: "Quiero ordenar ventas",
    description: "Ordenar consultas, seguimiento y oportunidades.",
    steps: ["CRM", "Formularios", "Automatización", "IA"],
    impacts: ["Menos leads perdidos", "Respuestas más rápidas", "Proceso más claro"],
    deliverables: ["Flujo de captación", "CRM simple", "Automatizaciones", "Alertas internas"],
    href: "/diagnostico?etapa=ordenar-ventas",
    icon: Network,
  },
  scale: {
    eyebrow: "Ruta para",
    title: "Quiero escalar",
    description: "Conectar captación, conversión, automatización y datos.",
    steps: ["Estrategia", "Web", "SEO", "Ads", "Automatización", "Datos"],
    impacts: ["Sistema conectado", "Decisiones con datos", "Crecimiento ordenado"],
    deliverables: ["Estrategia digital", "Web y campañas", "Automatización comercial", "Dashboard de medición"],
    href: "/diagnostico?etapa=escalar",
    icon: Sparkles,
  },
};

export default function RecommendedRoutePanel({ activeRoute }: { activeRoute: RouteKey }) {
  const route = recommendedRoutes[activeRoute];
  const Icon = route.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={activeRoute}
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.98 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1120] p-5 text-white shadow-2xl shadow-slate-950/25 md:rounded-[2.25rem] md:p-8"
      >
        <div className="absolute inset-0">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-red-600/18 blur-[90px]" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/16 blur-[90px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-transparent" />
        </div>

        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-red-300/25 bg-red-500/12 text-red-300 shadow-lg shadow-red-950/20">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-red-300 md:text-sm">{route.eyebrow}</p>
                <h3 className="mt-1 text-2xl font-black tracking-tight md:text-4xl">{route.title}</h3>
              </div>
            </div>
            <div className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-xs font-black text-emerald-300">
              Ruta lógica
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{route.description}</p>

          <div className="mt-7 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-4 md:p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Growth Plan</span>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-black/20 p-4 md:p-5">
                <div className="absolute inset-y-5 left-[31px] w-px bg-gradient-to-b from-red-400 via-blue-400 to-red-500 opacity-60 md:left-[37px]" />
                <div className="space-y-4">
                  {route.steps.map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.06 }}
                      className="relative flex items-center gap-4"
                    >
                      <div className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-300/30 bg-[#0B1120] text-xs font-black text-red-300">
                        {index + 1}
                      </div>
                      <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3">
                        <p className="text-sm font-black text-white">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <MiniDashboardCard icon={<Target className="h-5 w-5" />} label="Objetivo" value={route.impacts[0]} />
              <MiniDashboardCard icon={<BarChart3 className="h-5 w-5" />} label="Mejora esperada" value={route.impacts[1]} />
              <MiniDashboardCard icon={<Database className="h-5 w-5" />} label="Control" value={route.impacts[2]} />
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400 md:text-sm">Qué incluye esta ruta</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {route.deliverables.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-200">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-300">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={route.href}
              rel="nofollow"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-500"
            >
              Solicitar recomendación personalizada
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <p className="text-sm leading-6 text-slate-400">Te orientamos antes de invertir en piezas sueltas.</p>
          </div>
        </div>
      </motion.article>
    </AnimatePresence>
  );
}

function MiniDashboardCard({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500/10 text-red-300">{icon}</div>
      <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-2 text-base font-black text-white md:text-lg">{value}</p>
    </div>
  );
}
