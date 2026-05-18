import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  CheckCircle2,
  Globe,
  Mail,
  Megaphone,
  Search,
  Target,
  TrendingDown,
} from "lucide-react";
import { useMemo, useState } from "react";

type ProblemKey =
  | "sin-web"
  | "web-no-vende"
  | "seo"
  | "publicidad"
  | "automatizacion"
  | "estrategia";

const problems = [
  {
    key: "sin-web",
    label: "No tengo web",
    icon: Globe,
    score: 32,
    service: "Desarrollo Web Premium",
    diagnosis: "Tu empresa puede estar perdiendo confianza antes de que el cliente hable contigo.",
    risk: "Cuando alguien te busca y no encuentra una presencia profesional, compara con la competencia.",
    checks: ["Presencia corporativa", "Mensaje claro", "Página de contacto", "SEO base", "Confianza visual"],
  },
  {
    key: "web-no-vende",
    label: "Tengo web, pero no vende",
    icon: TrendingDown,
    score: 41,
    service: "Desarrollo Web Premium + Conversión",
    diagnosis: "Tu sitio puede estar recibiendo visitas, pero no guía al usuario hacia una acción clara.",
    risk: "Cada visita que no convierte puede ser una oportunidad comercial perdida.",
    checks: ["Claridad del hero", "Velocidad móvil", "CTAs visibles", "Prueba de confianza", "Tracking"],
  },
  {
    key: "seo",
    label: "Quiero aparecer en Google",
    icon: Search,
    score: 46,
    service: "SEO Avanzado",
    diagnosis: "Tu sitio puede no estar preparado para que Google entienda y posicione tus servicios.",
    risk: "Si no apareces cuando el cliente busca, otro negocio captura esa intención de compra.",
    checks: ["Arquitectura SEO", "Titles y metas", "Contenido por intención", "Velocidad", "Schema"],
  },
  {
    key: "publicidad",
    label: "Estoy invirtiendo en publicidad",
    icon: Megaphone,
    score: 38,
    service: "Paid Media + Landing Pages",
    diagnosis: "El problema puede no estar en el anuncio, sino en la página, la oferta o la medición.",
    risk: "Puedes estar pagando por tráfico sin una ruta clara para convertirse en cliente.",
    checks: ["Landing", "Oferta", "Eventos", "Segmentación", "Costo por oportunidad"],
  },
  {
    key: "automatizacion",
    label: "Quiero automatizar atención",
    icon: Bot,
    score: 44,
    service: "Automatización Comercial + IA",
    diagnosis: "Tu negocio puede estar perdiendo leads por responder tarde o no hacer seguimiento.",
    risk: "Un lead sin respuesta rápida puede terminar cotizando con otro proveedor.",
    checks: ["WhatsApp o chat", "CRM", "Flujos", "Correo automático", "Derivación a humano"],
  },
  {
    key: "estrategia",
    label: "Necesito una estrategia completa",
    icon: Target,
    score: 52,
    service: "Estrategia Digital Integral",
    diagnosis: "Tu presencia puede estar funcionando por partes, pero sin un sistema conectado.",
    risk: "Diseño, campañas, SEO y seguimiento separados suelen generar gasto sin dirección clara.",
    checks: ["Diagnóstico comercial", "Mapa de servicios", "Embudo", "Tracking", "Optimización"],
  },
] as const;

export default function GuidedDiagnosticSection() {
  const [selected, setSelected] = useState<ProblemKey | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const current = useMemo(() => problems.find((item) => item.key === selected), [selected]);

  const resetSelection = () => {
    setSelected(null);
    setShowLeadForm(false);
    setSubmitted(false);
    setSubmitState("idle");
    setSubmitMessage("");
  };

  return (
    <section id="diagnostico-interactivo" className="relative scroll-mt-16 overflow-hidden bg-[#080d18] py-24 text-white md:py-28">
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-red-600/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[520px] w-[520px] rounded-full bg-red-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080d18] via-transparent to-[#080d18]" />
      </div>

      <div className="container relative grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-red-500">
            Diagnóstico guiado
          </p>
          <h2 className="mt-5 max-w-xl text-4xl font-black leading-[0.95] tracking-tight md:text-6xl">
            Descubre qué está frenando tus ventas digitales.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
            Responde en menos de 30 segundos y recibe una recomendación inicial según el problema principal de tu negocio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Sin compromiso</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Recomendación inmediata</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Orientado a ventas</span>
          </div>
          <a href="/diagnostico/" className="mt-10 inline-flex items-center text-sm font-bold text-red-400 transition hover:text-red-300">
            Prefiero auditar mi sitio web completo
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <motion.div
          layout
          transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
          className="min-h-[620px] rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-7 lg:min-h-[600px]"
        >
          <motion.div layout="position" className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-400">
                {showLeadForm || submitted ? "Paso 2 de 2" : "Paso 1 de 2"}
              </p>
              <h3 className="mt-2 text-2xl font-black">
                {submitted
                  ? "Solicitud recibida"
                  : showLeadForm
                    ? "Recibe tu recomendación"
                    : selected
                      ? "Resultado inicial"
                      : "Elige tu problema principal"}
              </h3>
            </div>
            <div className="h-2 w-28 shrink-0 overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full bg-red-500 transition-all duration-500 ${
                  showLeadForm || submitted ? "w-full" : selected ? "w-2/3" : "w-1/3"
                }`}
              />
            </div>
          </motion.div>

          <motion.div layout className="relative">
          <AnimatePresence mode="wait" initial={false}>
            {!selected && (
              <motion.div
                key="options"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="grid gap-4 md:grid-cols-2"
              >
                {problems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setSelected(item.key)}
                      className="group flex min-h-[112px] items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-red-400/40 hover:bg-red-500/10"
                    >
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 transition group-hover:bg-red-500 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="text-lg font-black leading-tight text-white">{item.label}</span>
                    </button>
                  );
                })}
              </motion.div>
            )}

            {current && !showLeadForm && !submitted && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="grid gap-5 md:grid-cols-[180px_1fr]">
                  <div className="rounded-3xl border border-red-400/20 bg-red-500/10 p-6 text-center">
                    <p className="text-sm font-bold text-slate-300">Score inicial</p>
                    <div className="mx-auto mt-4 flex h-28 w-28 items-center justify-center rounded-full border-8 border-red-500/30 bg-[#080d18]">
                      <span className="text-4xl font-black text-white">{current.score}</span>
                    </div>
                    <p className="mt-4 text-sm font-semibold text-red-300">Oportunidad alta</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-red-400" />
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">Diagnóstico probable</p>
                        <p className="mt-3 text-lg font-semibold leading-8 text-white">{current.diagnosis}</p>
                      </div>
                    </div>
                    <div className="mt-6 border-t border-white/10 pt-6">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Riesgo comercial</p>
                      <p className="mt-3 leading-7 text-slate-300">{current.risk}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Lo primero que deberías revisar</p>
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {current.checks.map((check) => (
                      <div key={check} className="flex items-center gap-3 rounded-2xl bg-white/[0.05] px-4 py-3 text-sm font-semibold text-slate-200">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-red-400" />
                        {check}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 rounded-3xl border border-red-400/20 bg-gradient-to-r from-red-600/15 to-white/[0.04] p-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-bold text-red-300">Servicio recomendado</p>
                    <p className="mt-1 text-2xl font-black text-white">{current.service}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowLeadForm(true)}
                    className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-4 text-sm font-black text-white shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-500"
                  >
                    Recibir recomendación
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                <button type="button" onClick={resetSelection} className="text-sm font-bold text-slate-400 transition hover:text-white">
                  Cambiar problema
                </button>
              </motion.div>
            )}

            {current && showLeadForm && !submitted && (
              <motion.form
                key="lead"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="space-y-5"
                onSubmit={async (event) => {
                  event.preventDefault();
                  const form = event.currentTarget;
                  const data = new FormData(form);
                  const payload = {
                    type: "diagnostic",
                    origin: "home-guided-diagnostic",
                    problem: current.key,
                    service: current.service,
                    reason: current.label,
                    message: `${current.diagnosis} ${current.risk}`,
                    name: data.get("name"),
                    email: data.get("email"),
                    consent: "true",
                  };

                  if (import.meta.env.DEV) {
                    console.log("Lead diagnóstico guiado", payload);
                  }

                  setSubmitState("loading");
                  setSubmitMessage("");

                  try {
                    const response = await fetch("/api/forms", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(payload),
                    });
                    const result = await response.json();

                    if (!response.ok || !result.ok) {
                      throw new Error(result.message || "No pudimos enviar la recomendación.");
                    }

                    setSubmitted(true);
                    setSubmitState("idle");
                    form.reset();
                  } catch (error) {
                    setSubmitState("error");
                    setSubmitMessage(error instanceof Error ? error.message : "No pudimos enviar la recomendación.");
                  }
                }}
              >
                <input type="hidden" name="problem" value={current.key} />
                <input type="hidden" name="service" value={current.service} />
                <input type="hidden" name="origin" value="home-guided-diagnostic" />

                <div className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">Recomendación inicial</p>
                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    {current.label} · <span className="text-white">{current.service}</span>
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-bold text-slate-300">Nombre</span>
                    <input
                      name="name"
                      required
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-red-400"
                      placeholder="Tu nombre"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-bold text-slate-300">Email</span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-red-400"
                      placeholder="correo@empresa.cl"
                    />
                  </label>
                </div>

                <label className="flex gap-3 text-sm leading-6 text-slate-400">
                  <input required type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent accent-red-600" />
                  <span>
                    Acepto recibir esta recomendación inicial de Enix Studio y he leído la{" "}
                    <a className="font-black text-red-300 hover:underline" href="/politica-de-privacidad/">
                      Política de Privacidad
                    </a>.
                  </span>
                </label>
                {submitMessage && (
                  <p className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-100">
                    {submitMessage}
                  </p>
                )}

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-500"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {submitState === "loading" ? "Enviando..." : "Recibir por correo"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowLeadForm(false)}
                    className="rounded-full border border-white/10 px-6 py-4 text-sm font-bold text-slate-300 transition hover:border-white/30 hover:text-white"
                  >
                    Volver
                  </button>
                </div>
                <a href="/diagnostico/" className="inline-flex text-sm font-bold text-red-300 transition hover:text-red-200">
                  Prefiero completar el diagnóstico completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.form>
            )}

            {current && submitted && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="rounded-3xl border border-red-400/20 bg-red-500/10 p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500 text-white">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-3xl font-black text-white">Listo. Recibimos tu solicitud.</h3>
                <p className="mt-4 max-w-xl leading-7 text-slate-300">
                  Revisaremos tu caso y te enviaremos una recomendación inicial. Si detectamos una oportunidad clara, también podrás agendar un diagnóstico gratuito.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href="/diagnostico/" className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-500">
                    Auditar mi sitio completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <button type="button" onClick={resetSelection} className="rounded-full border border-white/10 px-7 py-4 text-sm font-bold text-slate-300 transition hover:border-white/30 hover:text-white">
                    Hacer otro diagnóstico
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
