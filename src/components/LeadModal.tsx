import { useEffect, useId, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  Globe2,
  Megaphone,
  Search,
  Send,
  Sparkles,
  X,
} from "lucide-react";

type ModalContext = {
  ctaOrigin?: string;
  currentUrl?: string;
  modalFocus?: string;
};

type Status = "idle" | "loading" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
  consent: boolean;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
  consent: false,
};

const problems = [
  {
    label: "Mi web no genera consultas",
    value: "conversion",
    icon: Globe2,
  },
  {
    label: "Quiero aparecer en Google",
    value: "seo",
    icon: Search,
  },
  {
    label: "Estoy invirtiendo en publicidad",
    value: "paid-media",
    icon: Megaphone,
  },
  {
    label: "Pierdo leads por WhatsApp",
    value: "whatsapp",
    icon: Send,
  },
  {
    label: "Quiero automatizar atencion",
    value: "automatizacion",
    icon: Bot,
  },
  {
    label: "No se por donde empezar",
    value: "estrategia",
    icon: Sparkles,
  },
];

async function readJsonResponse(response: Response) {
  const text = await response.text();

  try {
    return text ? JSON.parse(text) : {};
  } catch {
    throw new Error("No pudimos enviar la solicitud. Intenta nuevamente o escribenos a hello@enix.studio.");
  }
}

export default function LeadModal() {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstProblemRef = useRef<HTMLButtonElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [context, setContext] = useState<ModalContext>({});
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedProblem, setSelectedProblem] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const handleOpen = (event: Event) => {
      const customEvent = event as CustomEvent<ModalContext>;
      lastFocusedRef.current = document.activeElement as HTMLElement;
      setContext(customEvent.detail ?? {});
      setOpen(true);
      setStep(1);
      setSelectedProblem("");
      setSelectedLabel("");
      setForm(initialForm);
      setStatus("idle");
      setFeedback("");
    };

    window.addEventListener("enix:open-lead-modal", handleOpen);
    return () => window.removeEventListener("enix:open-lead-modal", handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const enabled = Array.from(focusable).filter((element) => !element.hasAttribute("disabled"));
        const first = enabled[0];
        const last = enabled[enabled.length - 1];

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

    window.addEventListener("keydown", handleKeyDown);
    window.setTimeout(() => firstProblemRef.current?.focus(), 80);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, step, status]);

  function handleClose() {
    if (status === "loading") return;

    setOpen(false);
    lastFocusedRef.current?.focus();

    window.setTimeout(() => {
      setStep(1);
      setSelectedProblem("");
      setSelectedLabel("");
      setForm(initialForm);
      setStatus("idle");
      setFeedback("");
    }, 180);
  }

  function chooseProblem(value: string, label: string) {
    setSelectedProblem(value);
    setSelectedLabel(label);
    setStep(2);
    setStatus("idle");
    setFeedback("");
    window.setTimeout(() => firstFieldRef.current?.focus(), 80);
  }

  function updateField<Key extends keyof FormState>(field: Key, value: FormState[Key]) {
    setForm((current) => ({ ...current, [field]: value }));
    if (feedback && status === "error") {
      setFeedback("");
      setStatus("idle");
    }
  }

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    if (!selectedProblem) {
      setStep(1);
      setStatus("error");
      setFeedback("Selecciona primero que quieres mejorar.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          type: "diagnostic",
          source: "home-hero-modal",
          ctaOrigin: context.ctaOrigin ?? "hero-primary",
          pageUrl: context.currentUrl ?? window.location.href,
          problem: selectedProblem,
          problemLabel: selectedLabel,
          selectedFocus: context.modalFocus ?? selectedLabel,
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          message: form.message.trim(),
          consent: form.consent,
          submittedAt: new Date().toISOString(),
        }),
      });
      const result = await readJsonResponse(response);

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "No pudimos enviar la solicitud. Intenta nuevamente o escribenos a hello@enix.studio.");
      }

      setStatus("success");
      setFeedback("Solicitud enviada. Te responderemos a la brevedad con una orientacion inicial.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "No pudimos enviar la solicitud. Intenta nuevamente o escribenos a hello@enix.studio.",
      );
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        aria-label="Cerrar modal"
        onClick={handleClose}
        className="absolute inset-0 cursor-default bg-[#020617]/80 backdrop-blur-xl"
      />

      <div
        ref={dialogRef}
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#0B1120]/95 text-white shadow-2xl shadow-black/50"
      >
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-red-600/20 blur-[90px]" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/20 blur-[90px]" />

        <div className="relative grid max-h-[88vh] overflow-y-auto lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="hidden border-r border-white/10 bg-white/[0.035] p-8 lg:block">
            <div className="inline-flex rounded-full border border-red-400/25 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-300">
              Diagnostico gratuito
            </div>

            <h2 id={titleId} className="mt-6 text-4xl font-black leading-tight">
              Entendamos que esta frenando tus resultados.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              No necesitas saber que servicio contratar. Primero identificamos el problema y luego te orientamos con el mejor punto de partida.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Orientacion inicial sin compromiso",
                "Web, SEO, campanas, automatizacion o branding",
                "Respuesta clara y accionable",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-200">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10 text-red-300">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <div className="relative p-5 sm:p-7 lg:p-8">
            <div className="mb-6 flex items-start justify-between gap-4 lg:hidden">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">
                  Diagnostico gratuito
                </p>
                <h2 id={titleId} className="mt-2 text-2xl font-black">
                  Solicita orientacion inicial
                </h2>
              </div>

              <CloseButton onClick={handleClose} disabled={status === "loading"} />
            </div>

            <div className="mb-7 hidden justify-end lg:flex">
              <CloseButton onClick={handleClose} disabled={status === "loading"} />
            </div>

            <div className="mb-6 flex items-center gap-3">
              <StepDot active={step === 1} label="1" />
              <div className="h-px flex-1 bg-white/10" />
              <StepDot active={step === 2} label="2" />
            </div>

            {step === 1 && (
              <div>
                <h3 className="text-2xl font-black tracking-tight md:text-3xl">
                  Que quieres mejorar primero?
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Elige la opcion mas cercana a tu situacion. No tiene que ser perfecta.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {problems.map((problem, index) => {
                    const Icon = problem.icon;

                    return (
                      <button
                        key={problem.value}
                        ref={index === 0 ? firstProblemRef : undefined}
                        type="button"
                        onClick={() => chooseProblem(problem.value, problem.label)}
                        className="group rounded-xl border border-white/10 bg-white/[0.045] p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-red-300/60 hover:bg-red-500/10"
                      >
                        <div className="flex items-center gap-4">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-300 transition group-hover:bg-red-500/20 group-hover:text-red-200">
                            <Icon className="h-5 w-5" />
                          </span>

                          <span className="text-sm font-black leading-5 text-white">
                            {problem.label}
                          </span>

                          <ArrowRight className="ml-auto h-4 w-4 text-slate-500 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {feedback && status === "error" && (
                  <StatusMessage status={status} feedback={feedback} />
                )}
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit}>
                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setStatus("idle");
                    setFeedback("");
                  }}
                  disabled={status === "loading"}
                  className="mb-5 inline-flex items-center text-sm font-bold text-slate-400 transition hover:text-white disabled:opacity-50"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Cambiar problema
                </button>

                <div className="rounded-xl border border-red-400/20 bg-red-500/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">
                    Problema seleccionado
                  </p>
                  <p className="mt-2 font-black text-white">{selectedLabel}</p>
                </div>

                <h3 className="mt-6 text-2xl font-black tracking-tight md:text-3xl">
                  Dejanos tus datos para responderte
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Solo lo necesario para enviarte una orientacion inicial.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <input
                    ref={firstFieldRef}
                    name="name"
                    required
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder="Nombre"
                    className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-red-400"
                  />

                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    placeholder="Email"
                    className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-red-400"
                  />

                  <input
                    name="company"
                    value={form.company}
                    onChange={(event) => updateField("company", event.target.value)}
                    placeholder="Empresa opcional"
                    className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-red-400 sm:col-span-2"
                  />

                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    placeholder="Mensaje breve opcional"
                    className="resize-none rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-red-400 sm:col-span-2"
                  />
                </div>

                <label className="mt-4 flex gap-3 text-xs leading-5 text-slate-400">
                  <input
                    required
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={(event) => updateField("consent", event.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-transparent accent-red-600"
                  />
                  <span>Acepto ser contactado por Enix Studio para responder mi solicitud.</span>
                </label>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-4 text-sm font-black text-white shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {status === "loading"
                    ? "Enviando..."
                    : status === "success"
                      ? "Solicitud enviada"
                      : "Solicitar diagnostico gratuito"}
                </button>

                <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                  Te responderemos con una orientacion inicial. Sin compromiso.
                </p>

                {feedback && <StatusMessage status={status} feedback={feedback} />}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CloseButton({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-red-300/60 hover:bg-red-500/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
      aria-label="Cerrar diagnostico"
    >
      <X className="h-5 w-5" />
    </button>
  );
}

function StepDot({ active, label }: { active: boolean; label: string }) {
  return (
    <span
      className={[
        "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-black transition",
        active
          ? "border-red-300 bg-red-600 text-white shadow-lg shadow-red-950/40"
          : "border-white/10 bg-white/[0.04] text-slate-500",
      ].join(" ")}
    >
      {label}
    </span>
  );
}

function StatusMessage({ status, feedback }: { status: Status; feedback: string }) {
  return (
    <div
      className={[
        "mt-5 rounded-xl border px-4 py-4 text-sm font-bold leading-6",
        status === "success"
          ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
          : "border-red-400/20 bg-red-500/10 text-red-300",
      ].join(" ")}
      aria-live="polite"
    >
      {feedback}
    </div>
  );
}
