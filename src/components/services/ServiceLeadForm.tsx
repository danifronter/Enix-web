import { useState } from "react";

type Props = {
  service: string;
  title: string;
  buttonLabel: string;
  origin: string;
  compact?: boolean;
};

const projectTypes = [
  "Web corporativa",
  "Rediseno web",
  "Ecommerce",
  "Landing page",
  "Plataforma digital",
  "No estoy seguro",
];

export default function ServiceLeadForm({ service, title, buttonLabel, origin, compact = false }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const fieldClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-red-400";

  async function handleSubmit(event: { preventDefault: () => void; currentTarget: HTMLFormElement }) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      ...Object.fromEntries(formData.entries()),
      pageUrl: window.location.href,
    };

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        setStatus("error");
        setMessage(result.message || "No se pudo enviar la solicitud.");
        return;
      }

      setStatus("success");
      setMessage("Solicitud enviada. Te responderemos a la brevedad.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("No se pudo enviar la solicitud. Intentalo nuevamente.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl"
    >
      <input type="hidden" name="type" value="service" />
      <input type="hidden" name="service" value={service} />
      <input type="hidden" name="origin" value={origin} />
      <input type="hidden" name="formName" value={origin} />

      <h2 className="text-2xl font-black text-white">{title}</h2>
      <p className="mt-3 text-sm font-semibold leading-6 text-slate-400">
        Te responderemos con una orientacion inicial, sin compromiso.
      </p>

      <div className="mt-6 space-y-4">
        <input className={fieldClass} name="name" required placeholder="Nombre" />
        <input className={fieldClass} name="email" type="email" required placeholder="Email" />
        <input className={fieldClass} name="company" placeholder="Empresa" />
        <select className={`${fieldClass} bg-[#111827]`} name="reason" required defaultValue="">
          <option value="" disabled>
            Que necesitas?
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {!compact && <input className={fieldClass} name="website" placeholder="Sitio web actual opcional" />}
        <textarea
          className={`${fieldClass} resize-none ${compact ? "min-h-24" : "min-h-28"}`}
          name="message"
          placeholder="Mensaje breve opcional"
        />

        <label className="flex gap-3 text-sm leading-6 text-slate-400">
          <input required type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent accent-red-600" />
          <span>Acepto ser contactado por Enix Studio para responder mi solicitud.</span>
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-full bg-red-600 px-6 py-4 text-sm font-black text-white shadow-xl shadow-red-950/40 transition hover:bg-red-500 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "loading" ? "Enviando..." : buttonLabel}
        </button>

        {message && (
          <p
            className={`rounded-xl px-3 py-2 text-center text-sm font-bold ${
              status === "success"
                ? "border border-emerald-400/30 bg-emerald-500/10 text-emerald-100"
                : "border border-red-400/30 bg-red-500/10 text-red-100"
            }`}
            aria-live="polite"
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
