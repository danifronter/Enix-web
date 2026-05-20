import type { ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Brush,
  CheckCircle2,
  Gauge,
  Globe2,
  LineChart,
  Megaphone,
  Search,
  Send,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

export type ServiceVariant =
  | "web"
  | "seo"
  | "paid"
  | "automation"
  | "branding"
  | "analytics";

type ServiceShowcaseCardProps = {
  variant: ServiceVariant;
  title: string;
  subtitle: string;
  problem: string;
  outcome: string;
  when: readonly string[];
  features: readonly string[];
  related: readonly string[];
  cta: string;
  href: string;
  reverse?: boolean;
};

const variantConfig = {
  web: {
    icon: Globe2,
    label: "Web activa",
    accent: "Desarrollo + conversion",
  },
  seo: {
    icon: Search,
    label: "SEO ready",
    accent: "Visibilidad organica",
  },
  paid: {
    icon: Megaphone,
    label: "Campanas conectadas",
    accent: "Captacion medible",
  },
  automation: {
    icon: Bot,
    label: "Flujo automatizado",
    accent: "Seguimiento activo",
  },
  branding: {
    icon: Brush,
    label: "Sistema de marca",
    accent: "Confianza visual",
  },
  analytics: {
    icon: BarChart3,
    label: "Tracking activo",
    accent: "Decisiones con datos",
  },
} as const;

export default function ServiceShowcaseCard({
  variant,
  title,
  subtitle,
  problem,
  outcome,
  when,
  features,
  related,
  cta,
  href,
  reverse = false,
}: ServiceShowcaseCardProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-950/[0.04] transition duration-500 hover:-translate-y-1 hover:border-red-200 hover:shadow-2xl hover:shadow-red-950/[0.08] md:p-7">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-500/[0.06] blur-[90px] transition duration-500 group-hover:bg-red-500/[0.12]" />
      <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-blue-500/[0.05] blur-[90px]" />

      <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-red-200 bg-red-50 text-red-600">
            <Icon className="h-7 w-7" />
          </div>

          <h3 className="mt-6 max-w-xl text-4xl font-black leading-[0.98] tracking-tight text-slate-950 md:text-5xl">
            {title}
          </h3>

          <p className="mt-5 max-w-xl text-xl font-bold leading-8 text-slate-700">
            {subtitle}
          </p>

          <div className="mt-7 rounded-[1.5rem] border border-red-100 bg-red-50/80 p-5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
              Problema que resuelve
            </p>
            <p className="mt-3 text-base leading-8 text-slate-700">
              {problem}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              Servicios relacionados
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {related.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <a
            href={href}
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-red-600 px-7 py-4 text-base font-black text-white shadow-xl shadow-red-950/20 transition duration-300 hover:-translate-y-0.5 hover:bg-red-500 sm:w-auto"
          >
            {cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <ServiceVisual
            variant={variant}
            label={config.label}
            accent={config.accent}
          />

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Resultado esperado
              </p>
              <p className="mt-4 text-xl font-black leading-8 text-slate-800">
                {outcome}
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Cuando lo necesitas
              </p>

              <div className="mt-4 space-y-3">
                {when.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 text-sm font-bold leading-6 text-slate-700"
                  >
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-red-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
              Que hacemos
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-red-500" />
                  <p className="text-sm font-black leading-5 text-slate-700">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ServiceVisual({
  variant,
  label,
  accent,
}: {
  variant: ServiceVariant;
  label: string;
  accent: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1120] p-5 text-white shadow-2xl shadow-slate-950/20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />
      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-red-600/20 blur-[80px]" />
      <div className="absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-blue-500/15 blur-[90px]" />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">
              {label}
            </p>
            <p className="mt-1 text-sm font-bold text-slate-300">{accent}</p>
          </div>

          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.7)]" />
        </div>

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

function WebPreview() {
  return (
    <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-4">
        <div className="mb-4 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-300" />
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-red-600/25 to-blue-500/10 p-5">
          <div className="h-3 w-4/5 rounded-full bg-white/80" />
          <div className="mt-3 h-3 w-3/5 rounded-full bg-white/35" />
          <div className="mt-6 inline-flex rounded-full bg-red-600 px-4 py-2 text-xs font-black">
            Cotizar
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {["SEO", "CTA", "Lead"].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white/[0.055] p-3 text-xs font-black"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <PreviewStack
        items={[
          ["Performance", "Activo"],
          ["Formulario", "Conectado"],
          ["Mobile", "OK"],
        ]}
      />
    </div>
  );
}

function SeoPreview() {
  return (
    <div>
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

      <div className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-400/10 p-4 text-sm font-black text-emerald-300">
        Intencion comercial detectada
      </div>
    </div>
  );
}

function PaidPreview() {
  return (
    <div className="space-y-3">
      {["Google Ads", "Meta Ads", "Remarketing"].map((item, index) => (
        <div
          key={item}
          className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"
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
    </div>
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
    <div className="space-y-3">
      {steps.map(([label, Icon], index) => (
        <div
          key={label}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4"
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
    </div>
  );
}

function BrandingPreview() {
  return (
    <div>
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
    </div>
  );
}

function AnalyticsPreview() {
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-3">
        <Metric icon={<Gauge />} label="Eventos" value="OK" />
        <Metric icon={<Target />} label="Canal" value="Claro" />
        <Metric icon={<LineChart />} label="Reporte" value="Listo" />
      </div>

      <div className="mt-4 space-y-3">
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
    </div>
  );
}

function PreviewStack({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <div className="space-y-3">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"
        >
          <p className="text-xs font-bold text-slate-400">{label}</p>
          <p className="mt-1 font-black text-white">{value}</p>
        </div>
      ))}
    </div>
  );
}

function Metric({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
      <div className="text-red-300 [&>svg]:h-5 [&>svg]:w-5">{icon}</div>
      <p className="mt-3 text-sm font-black">{value}</p>
      <p className="mt-1 text-xs text-slate-400">{label}</p>
    </div>
  );
}
