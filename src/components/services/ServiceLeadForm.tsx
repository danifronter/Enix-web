import { useState } from "react";
import { Send } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

type ServiceLeadFormProps = {
  service: string;
  cta: string;
};

export default function ServiceLeadForm({ service, cta }: ServiceLeadFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: { preventDefault: () => void; currentTarget: HTMLFormElement }) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          type: "service",
          service,
          consent: payload.consent ? "true" : "",
          pageUrl: window.location.href,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "No se pudo enviar la solicitud.");
      }

      setStatus("success");
      setFeedback("Solicitud enviada. Te responderemos a la brevedad.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "No se pudo enviar la solicitud.");
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-sm font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-red-400";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.065] p-5 shadow-2xl shadow-black/35 backdrop-blur-xl md:p-6"
    >
      <input type="hidden" name="type" value="service" />
      <input type="hidden" name="service" value={service} />
      <input type="hidden" name="origin" value={`servicio-${service}`} />
      <input type="hidden" name="formName" value="service-hero" />

      <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">Respuesta inicial</p>
      <h2 className="mt-3 text-2xl font-black tracking-tight text-white">Hablemos de tu proyecto</h2>
      <p className="mt-2 text-sm leading-6 text-slate-400">
        Te responderemos con una orientacion inicial, sin compromiso.
      </p>

      <div className="mt-5 space-y-3">
        <input name="name" required placeholder="Nombre" className={fieldClass} />
        <input name="email" type="email" required placeholder="Email" className={fieldClass} />
        <input name="company" placeholder="Empresa" className={fieldClass} />
        <textarea
          name="message"
          rows={3}
          required
          placeholder="Mensaje breve"
          className={`${fieldClass} resize-none`}
        />

        <label className="flex gap-3 text-xs leading-5 text-slate-400">
          <input
            required
            type="checkbox"
            name="consent"
            className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-transparent accent-red-600"
          />
          <span>Acepto ser contactado por Enix Studio para responder mi solicitud.</span>
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-4 text-sm font-black text-white shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Send className="mr-2 h-4 w-4" />
          {status === "loading" ? "Enviando..." : cta}
        </button>

        {feedback && (
          <p
            className={[
              "rounded-xl px-4 py-3 text-sm font-bold",
              status === "success" ? "bg-emerald-500/10 text-emerald-300" : "bg-red-500/10 text-red-300",
            ].join(" ")}
            aria-live="polite"
          >
            {feedback}
          </p>
        )}
      </div>
    </form>
  );
}
