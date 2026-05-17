const iconPaths: Record<string, string> = {
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  barChart: '<path d="M3 3v18h18"/><path d="M7 16V9"/><path d="M12 16V5"/><path d="M17 16v-3"/>',
  bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  lineChart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14v-3Z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
};

const steps = [
  { icon: "megaphone", title: "Atracción", copy: "SEO, contenido y campañas para llegar al cliente correcto." },
  { icon: "lineChart", title: "Conversión", copy: "Sitios y landings diseñadas para generar acción." },
  { icon: "bot", title: "Seguimiento", copy: "CRM, automatización e IA para no perder oportunidades." },
  { icon: "barChart", title: "Medición", copy: "Tracking y datos para tomar mejores decisiones." },
  { icon: "activity", title: "Optimización", copy: "Mejoras continuas para crecer con evidencia." },
];

function Icon({ name, className = "size-5" }: { name: string; className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: iconPaths[name] ?? iconPaths.target }}
    />
  );
}

export default function GrowthSystemSection() {
  return (
    <section id="sistema-enix" className="section scroll-mt-16 bg-enix-ink text-white">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="eyebrow">ENIX Growth System</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">No hacemos piezas sueltas. Creamos sistemas digitales de crecimiento.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Unimos estrategia, web, SEO, campañas, automatización e IA para que tu presencia digital trabaje como un sistema.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-10 rounded-full border border-enix-red/20 bg-enix-red/10 blur-3xl"></div>
            <div className="relative grid gap-3 md:grid-cols-5">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:-translate-y-1 hover:border-enix-red/35"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-enix-glow">
                    <Icon name={step.icon} />
                  </span>
                  <span className="mt-5 block text-xs font-black text-slate-500">0{index + 1}</span>
                  <h3 className="mt-2 text-lg font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
