type LocationOption = {
  label: string;
  href: string;
  description?: string;
};

const locations: LocationOption[] = [
  { label: "Santiago", href: "/cl/santiago/", description: "B2B, tecnologia, ecommerce y servicios profesionales." },
  { label: "Antofagasta", href: "/cl/antofagasta/", description: "Industria, mineria, servicios tecnicos y logistica." },
  { label: "Calama", href: "/cl/calama/", description: "Servicios locales, proveedores industriales y comercio." },
  { label: "Chile", href: "/cl/", description: "Cobertura nacional y diagnostico general." },
];

export default function LocationSelector() {
  return (
    <section className="rounded-2xl border border-white/10 bg-enix-ink p-6 text-white shadow-2xl shadow-black/10">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-enix-glow">Elige tu mercado</p>
      <h2 className="mt-4 text-3xl font-black leading-tight">
        Soluciones digitales segun tu ubicacion e industria
      </h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {locations.map((location) => (
          <a
            key={location.href}
            href={location.href}
            className="group rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:-translate-y-0.5 hover:border-enix-red/60 hover:bg-enix-red/10"
          >
            <span className="block text-lg font-black text-white group-hover:text-enix-glow">{location.label}</span>
            <span className="mt-2 block text-sm font-semibold leading-6 text-slate-400">{location.description}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
