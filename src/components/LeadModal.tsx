import { useEffect, useRef, useState } from "react";
import type { LeadCard } from "@/data/servicesData";
import { SkeletonInlineStatus } from "./ui/SkeletonLoaders";

type ModalContext = LeadCard & {
  ctaOrigin: string;
  currentUrl: string;
};

type FormState = {
  website: string;
  name: string;
  phone: string;
  email: string;
  need: string;
};

const initialForm: FormState = {
  website: "",
  name: "",
  phone: "",
  email: "",
  need: "No sé qué necesito, quiero orientación",
};

const needOptions = [
  "Necesito una web profesional",
  "Mi web no genera clientes",
  "Quiero mejorar mi SEO",
  "Quiero automatizar atención o ventas",
  "Quiero mejorar mis campañas",
  "Quiero ordenar mi proceso comercial",
  "No sé qué necesito, quiero orientación",
];

async function readJsonResponse(response: Response) {
  const text = await response.text();

  try {
    return text ? JSON.parse(text) : {};
  } catch {
    throw new Error(
      response.ok
        ? "La API no devolvió una respuesta JSON válida."
        : `La API devolvió una respuesta no válida (${response.status}). Revisa el deploy y los logs de Vercel.`,
    );
  }
}

const iconPaths: Record<string, string> = {
  badgeCheck: '<path d="M3.9 12.8a2 2 0 0 1 0-1.6l.9-1.6a2 2 0 0 0 .2-1.4l-.3-1.8a2 2 0 0 1 1.7-2.3l1.8-.3a2 2 0 0 0 1.2-.7l1.2-1.4a2 2 0 0 1 3 0l1.2 1.4a2 2 0 0 0 1.2.7l1.8.3a2 2 0 0 1 1.7 2.3l-.3 1.8a2 2 0 0 0 .2 1.4l.9 1.6a2 2 0 0 1 0 1.6l-.9 1.6a2 2 0 0 0-.2 1.4l.3 1.8a2 2 0 0 1-1.7 2.3l-1.8.3a2 2 0 0 0-1.2.7l-1.2 1.4a2 2 0 0 1-3 0l-1.2-1.4a2 2 0 0 0-1.2-.7l-1.8-.3a2 2 0 0 1-1.7-2.3l.3-1.8a2 2 0 0 0-.2-1.4l-.9-1.6Z"/><path d="m9 12 2 2 4-4"/>',
  barChart: '<path d="M3 3v18h18"/><path d="M7 16V9"/><path d="M12 16V5"/><path d="M17 16v-3"/>',
  bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  gauge: '<path d="M12 14 16 9"/><path d="M3.3 17a10 10 0 1 1 17.4 0"/><path d="M7 17h10"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 0 20"/><path d="M12 2a15.3 15.3 0 0 0 0 20"/>',
  lineChart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14v-3Z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  message: '<path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z"/>',
  shoppingCart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.1 2.1h2l2.7 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6l1.6-7.4H5.1"/>',
  sparkles: '<path d="m12 3-1.9 5.8L4 11l6.1 2.2L12 19l1.9-5.8L20 11l-6.1-2.2L12 3Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  zap: '<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>',
};

function ModalIcon({ name }: { name: string }) {
  return (
    <svg
      className="size-6"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: iconPaths[name] ?? iconPaths.sparkles }}
    />
  );
}

function validate(form: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};

  if (!form.website.trim()) errors.website = "Indica tu sitio actual o escribe 'No tengo'.";
  if (!form.name.trim()) errors.name = "Déjanos tu nombre para responderte.";
  if (!form.email.trim()) errors.email = "Indica tu email para responder el diagnóstico.";
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "El email no parece válido.";
  }

  return errors;
}

export default function LeadModal() {
  const [context, setContext] = useState<ModalContext | null>(null);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const close = () => {
    setContext(null);
    setStatus("idle");
    setErrors({});
    setForm(initialForm);
    lastFocusedRef.current?.focus();
  };

  useEffect(() => {
    const open = (event: Event) => {
      const customEvent = event as CustomEvent<ModalContext>;
      lastFocusedRef.current = document.activeElement as HTMLElement;
      setContext(customEvent.detail);
      setForm((current) => ({
        ...current,
        need: customEvent.detail.modalFocus || current.need,
      }));
      setStatus("idle");
      setErrors({});
      document.body.style.overflow = "hidden";
      window.setTimeout(() => firstFieldRef.current?.focus(), 80);
    };

    window.addEventListener("enix:open-lead-modal", open);
    return () => window.removeEventListener("enix:open-lead-modal", open);
  }, []);

  useEffect(() => {
    if (!context) {
      document.body.style.overflow = "";
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [context]);

  if (!context) return null;

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const submit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const payload = {
      type: "diagnostic",
      formName: "modal-diagnostico-contextual",
      ...form,
      website: form.website,
      problem: form.need,
      service: context.modalFocus || context.title,
      message: `${form.need} · ${context.modalDescription}`,
      consent: "true",
      selectedFocus: context.modalFocus,
      hiddenCategory: context.hiddenCategory,
      selectedCard: context.title,
      ctaOrigin: context.ctaOrigin,
      pageUrl: context.currentUrl,
      submittedAt: new Date().toISOString(),
    };

    setStatus("loading");

    try {
      if (import.meta.env.DEV) console.info("[ENIX lead payload]", payload);
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await readJsonResponse(response);

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "No pudimos enviar la solicitud.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("idle");
      setErrors({
        need: error instanceof Error ? error.message : "No pudimos enviar la solicitud. Intenta nuevamente en unos segundos.",
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-enix-ink/78 px-4 py-6 backdrop-blur-xl"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        ref={dialogRef}
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/12 bg-[#0b1120] text-white shadow-[0_30px_120px_rgba(0,0,0,0.48)] outline-none"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
      >
        <div className="pointer-events-none absolute inset-x-8 top-0 h-28 rounded-full bg-enix-red/24 blur-3xl"></div>
        <div className="relative p-5 sm:p-7">
          <button
            className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-white/10 bg-white/8 text-slate-300 transition hover:bg-white/14 hover:text-white"
            type="button"
            onClick={close}
            aria-label="Cerrar diagnóstico"
          >
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          {status === "success" ? (
            <div className="py-8 text-center">
              <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-enix-red/15 text-enix-glow">
                <ModalIcon name="badgeCheck" />
              </div>
              <p className="mx-auto mt-5 w-fit rounded-full border border-enix-red/30 bg-enix-red/12 px-3 py-1 text-xs font-black uppercase text-red-100">Diagnóstico iniciado</p>
              <h2 id="lead-modal-title" className="mt-5 text-4xl font-black">Recibimos tu solicitud</h2>
              <p className="mx-auto mt-4 max-w-md leading-7 text-slate-300">
                Vamos a revisar tu caso y te responderemos por email con una orientación inicial.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a className="btn btn-primary" href="/contacto/">Ir a contacto</a>
                <button className="btn btn-secondary" type="button" onClick={close}>Cerrar</button>
              </div>
            </div>
          ) : (
            <>
              <div className="pr-12">
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-2xl border border-enix-red/25 bg-enix-red/15 text-enix-glow">
                    <ModalIcon name={context.icon} />
                  </span>
                  <span className="rounded-full border border-enix-red/30 bg-enix-red/12 px-3 py-1 text-xs font-black uppercase text-red-100">Diagnóstico gratuito</span>
                </div>
                <h2 id="lead-modal-title" className="mt-5 text-3xl font-black leading-tight sm:text-4xl">{context.modalTitle}</h2>
                <p className="mt-4 leading-7 text-slate-300">{context.modalDescription}</p>
              </div>

              <form className="mt-7 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-4 sm:p-5" onSubmit={submit} noValidate>
                <input type="hidden" name="selectedFocus" value={context.modalFocus} />
                <input type="hidden" name="hiddenCategory" value={context.hiddenCategory} />
                <input type="hidden" name="ctaOrigin" value={context.ctaOrigin} />
                <input type="hidden" name="pageUrl" value={context.currentUrl} />

                <label className="block text-sm font-extrabold">
                  Sitio web actual
                  <input
                    ref={firstFieldRef}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-enix-glow focus:bg-white/10"
                    value={form.website}
                    onChange={(event) => updateField("website", event.target.value)}
                    placeholder="https://tusitio.cl o 'No tengo'"
                  />
                  {errors.website && <span className="mt-2 block text-xs font-bold text-red-200">{errors.website}</span>}
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-extrabold">
                    Nombre
                    <input
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-enix-glow focus:bg-white/10"
                      value={form.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      placeholder="Tu nombre"
                    />
                    {errors.name && <span className="mt-2 block text-xs font-bold text-red-200">{errors.name}</span>}
                  </label>
                  <label className="block text-sm font-extrabold">
                    Teléfono <span className="font-semibold text-slate-500">opcional</span>
                    <input
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-enix-glow focus:bg-white/10"
                      value={form.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      placeholder="+56 9..."
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-extrabold">
                    Email
                    <input
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-enix-glow focus:bg-white/10"
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      placeholder="correo@empresa.cl"
                    />
                    {errors.email && <span className="mt-2 block text-xs font-bold text-red-200">{errors.email}</span>}
                  </label>
                  <label className="block text-sm font-extrabold">
                    Necesidad principal
                    <select
                      className="mt-2 w-full rounded-xl border border-white/10 bg-[#161c2b] px-4 py-3 text-white outline-none transition focus:border-enix-glow"
                      value={form.need}
                      onChange={(event) => updateField("need", event.target.value)}
                    >
                      {needOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                </div>

                {errors.need && <p className="rounded-xl border border-red-400/20 bg-red-500/10 p-3 text-sm font-bold text-red-100">{errors.need}</p>}

                {status === "loading" && <SkeletonInlineStatus />}

                <button className="btn btn-primary mt-2 w-full" type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Enviando..." : "Solicitar diagnóstico"}
                </button>
                <p className="text-center text-xs font-semibold leading-5 text-slate-400">
                  Sin compromiso. Revisamos tu caso y te respondemos con oportunidades concretas. Al enviar aceptas nuestra{" "}
                  <a className="font-black text-red-300 hover:underline" href="/politica-de-privacidad/">
                    Política de Privacidad
                  </a>.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
