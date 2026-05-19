import { useEffect, useState } from "react";

const regionMap: Record<string, { label: string; href: string }> = {
  santiago: { label: "Santiago", href: "/cl/santiago/" },
  metropolitana: { label: "Santiago", href: "/cl/santiago/" },
  antofagasta: { label: "Antofagasta", href: "/cl/antofagasta/" },
  calama: { label: "Calama", href: "/cl/calama/" },
};

export default function LocationSuggestion() {
  const [suggestion, setSuggestion] = useState<{ label: string; href: string } | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const region = params.get("zona")?.toLowerCase();

    if (region && regionMap[region]) {
      setSuggestion(regionMap[region]);
    }
  }, []);

  if (!suggestion || dismissed) return null;

  return (
    <div className="rounded-lg border border-enix-red/20 bg-enix-red/10 p-4 text-white">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold leading-6">
          Hay una version local para {suggestion.label}. Puedes verla sin cambiar automaticamente tu ubicacion.
        </p>
        <div className="flex gap-2">
          <a className="rounded-lg bg-enix-red px-4 py-2 text-sm font-black text-white transition hover:bg-red-600" href={suggestion.href}>
            Ver {suggestion.label}
          </a>
          <button
            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-black text-slate-200 transition hover:bg-white/10"
            type="button"
            onClick={() => setDismissed(true)}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
