import { CheckCircle2 } from "lucide-react";
import ServiceHeroVisual, { type ServiceVisualVariant } from "./ServiceHeroVisual";
import ServiceLeadForm from "./ServiceLeadForm";

type ServiceHeroProps = {
  badge: string;
  title: string;
  description: string;
  benefits: string[];
  service: string;
  visual: ServiceVisualVariant;
  cta: string;
};

export default function ServiceHero({
  badge,
  title,
  description,
  benefits,
  service,
  visual,
  cta,
}: ServiceHeroProps) {
  return (
    <section id="formulario-servicio" className="relative isolate scroll-mt-24 overflow-hidden bg-[#070b14] py-24 text-white md:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[460px] w-[460px] rounded-full bg-red-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[460px] w-[460px] rounded-full bg-blue-500/16 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/20 via-[#070b14]/50 to-[#070b14]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr_0.85fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-red-400/25 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-300">
            {badge}
          </p>
          <h1 className="mt-6 text-balance text-4xl font-black leading-[0.95] tracking-tight md:text-5xl xl:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{description}</p>
          <div className="mt-8 space-y-3">
            {benefits.slice(0, 3).map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 text-sm font-bold text-slate-200">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-300">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <ServiceHeroVisual variant={visual} />
        <ServiceLeadForm service={service} cta={cta} />
      </div>
    </section>
  );
}
