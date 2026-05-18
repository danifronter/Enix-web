import { useEffect, useState } from "react";
import { Settings, ShieldCheck, X } from "lucide-react";

type CookiePreferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "enix_cookie_preferences";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      setVisible(true);
      return;
    }

    try {
      const parsed = JSON.parse(saved) as CookiePreferences;
      setPreferences({
        essential: true,
        analytics: Boolean(parsed.analytics),
        marketing: Boolean(parsed.marketing),
      });
    } catch {
      setVisible(true);
    }
  }, []);

  const savePreferences = (nextPreferences: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPreferences));
    setPreferences(nextPreferences);
    setVisible(false);
    setSettingsOpen(false);

    window.dispatchEvent(
      new CustomEvent("enix:cookies-updated", {
        detail: nextPreferences,
      }),
    );
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0B1120]/95 text-white shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="grid gap-5 p-5 md:grid-cols-[auto_1fr_auto] md:items-center md:p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
            <ShieldCheck className="h-6 w-6" />
          </div>

          <div>
            <h2 className="text-base font-black">Tu privacidad importa</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              Utilizamos cookies para mejorar tu experiencia, analizar el tráfico y medir el rendimiento de nuestras campañas. Puedes aceptar todas,
              rechazarlas o configurar tus preferencias.{" "}
              <a href="/politica-de-privacidad/" className="font-bold text-red-300 underline-offset-4 hover:underline">
                Ver Política de Privacidad
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <button
              type="button"
              onClick={() => setSettingsOpen((value) => !value)}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-red-300/70 hover:bg-red-500/10"
            >
              <Settings className="mr-2 h-4 w-4" />
              Configurar
            </button>
            <button
              type="button"
              onClick={rejectAll}
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-white/35 hover:bg-white/10"
            >
              Rechazar
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="rounded-full bg-red-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-950/40 transition hover:bg-red-500"
            >
              Aceptar todas
            </button>
          </div>
        </div>

        {settingsOpen && (
          <div className="border-t border-white/10 bg-white/[0.03] p-5 md:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-black">Preferencias de cookies</h3>
                <p className="mt-1 text-sm text-slate-400">Puedes activar o desactivar categorías no esenciales.</p>
              </div>
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                className="rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                aria-label="Cerrar configuración"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <CookieOption title="Esenciales" description="Necesarias para el funcionamiento básico del sitio." checked disabled />
              <CookieOption
                title="Analíticas"
                description="Nos ayudan a entender el uso del sitio y mejorar la experiencia."
                checked={preferences.analytics}
                onChange={(checked) => setPreferences((current) => ({ ...current, analytics: checked }))}
              />
              <CookieOption
                title="Marketing"
                description="Permiten medir campañas y personalizar comunicaciones."
                checked={preferences.marketing}
                onChange={(checked) => setPreferences((current) => ({ ...current, marketing: checked }))}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button type="button" onClick={() => savePreferences(preferences)} className="rounded-full bg-red-600 px-6 py-3 text-sm font-black text-white transition hover:bg-red-500">
                Guardar preferencias
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

type CookieOptionProps = {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

function CookieOption({ title, description, checked, disabled = false, onChange }: CookieOptionProps) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <span>
        <span className="block text-sm font-black text-white">{title}</span>
        <span className="mt-1 block text-sm leading-6 text-slate-400">{description}</span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        className="mt-1 h-5 w-5 shrink-0 accent-red-600 disabled:opacity-60"
      />
    </label>
  );
}
