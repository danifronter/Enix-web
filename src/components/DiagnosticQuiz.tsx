import { useMemo, useState } from "react";
import { diagnosticModalContext, diagnosticQuestions } from "@/data/diagnosticQuestions";

export default function DiagnosticQuiz() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const answered = Object.keys(answers).length;
  const positive = Object.values(answers).filter(Boolean).length;

  const result = useMemo(() => {
    if (answered < diagnosticQuestions.length) {
      return {
        title: "Responde el checklist para ver tu nivel",
        copy: "En menos de un minuto sabrás si tu sistema digital está filtrando oportunidades.",
        tone: "bg-slate-100 text-slate-700",
      };
    }
    if (positive <= 2) return { title: "Riesgo alto de fuga comercial", copy: "Hay señales de leads sin ruta, baja medición o seguimiento frágil.", tone: "bg-red-50 text-enix-darkRed" };
    if (positive <= 4) return { title: "Sistema parcialmente conectado", copy: "Hay base, pero todavía existen puntos ciegos que pueden estar drenando ventas.", tone: "bg-amber-50 text-amber-800" };
    if (positive <= 6) return { title: "Buen punto de partida", copy: "Tu sistema tiene estructura, pero puede ganar velocidad, automatización y claridad de datos.", tone: "bg-emerald-50 text-emerald-800" };
    return { title: "Listo para escalar", copy: "El siguiente paso es optimizar, automatizar más y convertir datos en decisiones continuas.", tone: "bg-sky-50 text-sky-800" };
  }, [answered, positive]);

  const openLeadModal = () => {
    const summary = diagnosticQuestions
      .map((question, index) => `${answers[index] ? "Sí" : "No"} - ${question}`)
      .join(" | ");

    window.dispatchEvent(
      new CustomEvent("enix:open-lead-modal", {
        detail: {
          ...diagnosticModalContext,
          modalDescription: `${diagnosticModalContext.modalDescription} Resultado inicial: ${result.title}. Respuestas: ${summary}`,
          ctaOrigin: "diagnostico-interactivo",
          currentUrl: window.location.href,
        },
      }),
    );
  };

  return (
    <section id="diagnostico-interactivo" className="section scroll-mt-16 bg-enix-pearl">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow">Mini diagnóstico</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">¿Dónde se están escapando tus oportunidades?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Marca lo que hoy sí tienes bajo control. El objetivo no es juzgar tu marketing, sino detectar qué parte del sistema necesita orden, automatización o medición.
            </p>
            <div className={`mt-7 rounded-2xl p-5 ${result.tone}`}>
              <strong className="block text-2xl font-black">{result.title}</strong>
              <p className="mt-2 leading-7">{result.copy}</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/70">
                <div className="h-full rounded-full bg-enix-red transition-all" style={{ width: `${(answered / diagnosticQuestions.length) * 100}%` }}></div>
              </div>
              <p className="mt-2 text-xs font-black">{answered}/{diagnosticQuestions.length} respuestas</p>
            </div>
            <button type="button" onClick={openLeadModal} className="btn btn-primary mt-7 w-full sm:w-auto">
              Solicitar diagnóstico completo
            </button>
          </div>

          <div className="grid gap-3">
            {diagnosticQuestions.map((question, index) => (
              <article key={question} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="font-black text-slate-950">{question}</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setAnswers((current) => ({ ...current, [index]: true }))}
                    className={`rounded-xl border px-4 py-3 text-sm font-black transition ${
                      answers[index] === true ? "border-emerald-400 bg-emerald-50 text-emerald-800" : "border-slate-200 bg-slate-50 text-slate-500 hover:bg-white"
                    }`}
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    onClick={() => setAnswers((current) => ({ ...current, [index]: false }))}
                    className={`rounded-xl border px-4 py-3 text-sm font-black transition ${
                      answers[index] === false ? "border-enix-red bg-red-50 text-enix-darkRed" : "border-slate-200 bg-slate-50 text-slate-500 hover:bg-white"
                    }`}
                  >
                    No / no estoy seguro
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
