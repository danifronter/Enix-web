import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Brush,
  CheckCircle2,
  Gauge,
  Globe2,
  LineChart,
  MousePointerClick,
  Search,
  Send,
  Target,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";

export type ServiceVisualVariant = "web" | "seo" | "paid" | "automation" | "branding" | "analytics";

export default function ServiceHeroVisual({ variant }: { variant: ServiceVisualVariant }) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="pointer-events-none absolute -left-8 top-10 h-48 w-48 rounded-full bg-red-600/20 blur-[80px]" />
      <div className="pointer-events-none absolute -right-8 bottom-10 h-48 w-48 rounded-full bg-blue-500/18 blur-[80px]" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative min-h-[380px] overflow-hidden rounded-2xl border border-white/10 bg-[#0B1120]/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
        <div className="relative z-10 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-black uppercase tracking-[0.22em] text-red-300">Enix System</span>
        </div>

        <div className="relative z-10 mt-4">
          {variant === "web" && <WebVisual />}
          {variant === "seo" && <SeoVisual />}
          {variant === "paid" && <PaidVisual />}
          {variant === "automation" && <AutomationVisual />}
          {variant === "branding" && <BrandingVisual />}
          {variant === "analytics" && <AnalyticsVisual />}
        </div>
      </motion.div>
    </div>
  );
}

function WebVisual() {
  return (
    <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
        <div className="rounded-xl bg-gradient-to-br from-red-600/30 via-blue-500/15 to-white/[0.04] p-5">
          <motion.div className="h-3 rounded-full bg-white/80" initial={{ width: "40%" }} animate={{ width: ["40%", "82%", "58%"] }} transition={{ duration: 3, repeat: Infinity }} />
          <div className="mt-3 h-3 w-3/5 rounded-full bg-white/30" />
          <div className="mt-6 flex gap-2">
            <span className="rounded-full bg-red-600 px-4 py-2 text-xs font-black">Cotizar</span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold">Servicios</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {["UX", "SEO", "Lead"].map((item, index) => (
            <FloatingCard key={item} delay={index * 0.18}>
              <div className="h-8 w-8 rounded-lg bg-red-500/15" />
              <p className="mt-3 text-xs font-black text-white">{item}</p>
            </FloatingCard>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <MiniMetric icon={<Gauge />} label="Performance" value="96" />
        <MiniMetric icon={<Search />} label="SEO ready" value="OK" />
        <MiniMetric icon={<Send />} label="Lead" value="+1" />
      </div>
    </div>
  );
}

function SeoVisual() {
  const nodes = ["Home", "Servicios", "SEO", "Blog", "Contacto"];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
      <div className="flex items-center gap-3">
        <Search className="h-6 w-6 text-red-300" />
        <p className="text-lg font-black text-white">Arquitectura SEO</p>
      </div>
      <div className="mt-7 grid grid-cols-2 gap-4">
        {nodes.map((node, index) => (
          <FloatingCard key={node} delay={index * 0.14}>
            <p className="text-sm font-black text-white">{node}</p>
            <div className="mt-3 h-2 rounded-full bg-red-400/50" />
            <div className="mt-2 h-2 w-2/3 rounded-full bg-white/15" />
          </FloatingCard>
        ))}
      </div>
      <div className="mt-5 rounded-xl border border-red-400/20 bg-red-500/10 p-4">
        <div className="flex items-center justify-between text-sm font-bold">
          <span className="text-slate-300">Trafico organico</span>
          <span className="text-red-300">Subiendo</span>
        </div>
      </div>
    </div>
  );
}

function PaidVisual() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <MiniMetric icon={<Target />} label="Leads" value="+24" />
        <MiniMetric icon={<MousePointerClick />} label="CTR" value="4.8%" />
        <MiniMetric icon={<BarChart3 />} label="Conv." value="12" />
      </div>
      <Panel title="Campanas activas">
        {["Google Ads", "Meta Ads", "Remarketing"].map((item, index) => (
          <ProgressRow key={item} label={item} value="Midiendo" delay={index * 0.2} />
        ))}
      </Panel>
    </div>
  );
}

function AutomationVisual() {
  const flow = [
    { label: "Formulario", icon: Send },
    { label: "IA", icon: Bot },
    { label: "CRM", icon: Globe2 },
    { label: "Seguimiento", icon: CheckCircle2 },
  ];
  return (
    <Panel title="Flujo automatico">
      {flow.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div key={item.label} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.055] p-4" animate={{ x: [0, 6, 0] }} transition={{ duration: 2.4, delay: index * 0.2, repeat: Infinity }}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-300"><Icon className="h-5 w-5" /></div>
            <div><p className="font-black text-white">{item.label}</p><p className="text-sm text-slate-400">Conectado</p></div>
            {index < flow.length - 1 && <Zap className="ml-auto h-5 w-5 text-blue-300" />}
          </motion.div>
        );
      })}
    </Panel>
  );
}

function BrandingVisual() {
  return (
    <Panel title="Sistema de marca" icon={<Brush className="h-5 w-5" />}>
      <div className="grid grid-cols-5 gap-2">
        {["#DC2626", "#991B1B", "#0B1120", "#2563EB", "#F8FAFC"].map((color) => (
          <div key={color} className="h-14 rounded-xl border border-white/10" style={{ backgroundColor: color }} />
        ))}
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
        <div className="h-12 w-32 rounded-xl bg-gradient-to-r from-red-500 to-blue-400" />
        <div className="mt-5 h-3 w-4/5 rounded-full bg-white/40" />
        <div className="mt-3 h-3 w-3/5 rounded-full bg-white/20" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-white/[0.055] p-4 text-sm font-black text-white">Web</div>
        <div className="rounded-xl bg-white/[0.055] p-4 text-sm font-black text-white">Campanas</div>
      </div>
    </Panel>
  );
}

function AnalyticsVisual() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <MiniMetric icon={<BarChart3 />} label="Eventos" value="18" />
        <MiniMetric icon={<MousePointerClick />} label="Clicks" value="243" />
        <MiniMetric icon={<Send />} label="Forms" value="12" />
      </div>
      <Panel title="Fuentes de leads">
        {[["SEO", "72%"], ["Paid Media", "48%"], ["WhatsApp", "64%"]].map(([label, width]) => (
          <div key={label}>
            <div className="mb-2 flex justify-between text-sm font-bold"><span className="text-white">{label}</span><span className="text-slate-400">{width}</span></div>
            <div className="h-2 rounded-full bg-white/10"><motion.div className="h-2 rounded-full bg-gradient-to-r from-red-500 to-blue-400" initial={{ width: 0 }} whileInView={{ width }} viewport={{ once: true }} transition={{ duration: 0.9 }} /></div>
          </div>
        ))}
      </Panel>
    </div>
  );
}

function Panel({ title, icon, children }: { title: string; icon?: ReactNode; children: ReactNode }) {
  return (
    <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
      <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-red-300">
        {icon ?? <LineChart className="h-5 w-5" />}
        {title}
      </div>
      {children}
    </div>
  );
}

function FloatingCard({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <motion.div className="rounded-xl border border-white/10 bg-white/[0.05] p-3" animate={{ y: [0, -5, 0] }} transition={{ duration: 2.6, delay, repeat: Infinity }}>
      {children}
    </motion.div>
  );
}

function ProgressRow({ label, value, delay }: { label: string; value: string; delay: number }) {
  return (
    <div className="rounded-xl bg-white/[0.055] p-4">
      <div className="flex items-center justify-between"><p className="text-sm font-black text-white">{label}</p><span className="text-xs font-bold text-emerald-300">{value}</span></div>
      <motion.div className="mt-3 h-2 rounded-full bg-gradient-to-r from-red-500 to-blue-400" initial={{ width: "35%" }} animate={{ width: ["35%", "86%", "55%"] }} transition={{ duration: 3, repeat: Infinity, delay }} />
    </div>
  );
}

function MiniMetric({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.055] p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-300">{icon}</div>
      <p className="mt-4 text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-xs font-bold text-slate-400">{label}</p>
    </div>
  );
}
