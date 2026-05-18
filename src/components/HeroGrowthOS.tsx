import { lazy, Suspense, useEffect, useState } from "react";
import { heroLeadContext, heroProblems } from "@/data/heroProblemsData";
import AnimatedHeroBackground from "./hero/AnimatedHeroBackground";
import HeroCopyBlock from "./hero/HeroCopyBlock";

const GrowthCommandCenter = lazy(() => import("./hero/GrowthCommandCenter"));

function openLeadModal(problemLabel: string) {
  window.dispatchEvent(
    new CustomEvent("enix:open-lead-modal", {
      detail: {
        ...heroLeadContext,
        modalDescription: `${heroLeadContext.modalDescription} Contexto seleccionado: ${problemLabel}.`,
        ctaOrigin: "hero-primary",
        currentUrl: window.location.href,
      },
    }),
  );
}

export default function HeroGrowthOS() {
  const [problemId, setProblemId] = useState(heroProblems[0].id);
  const [mode, setMode] = useState<"chaos" | "system">("chaos");
  const [isDesktop, setIsDesktop] = useState(false);
  const activeProblem = heroProblems.find((problem) => problem.id === problemId) ?? heroProblems[0];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateDesktop = () => setIsDesktop(mediaQuery.matches);

    updateDesktop();
    mediaQuery.addEventListener("change", updateDesktop);

    return () => mediaQuery.removeEventListener("change", updateDesktop);
  }, []);

  return (
    <section className="motion-reduce-safe relative isolate min-h-[90vh] overflow-hidden bg-[#070b14] pt-28 text-white lg:pt-32">
      <AnimatedHeroBackground variant="default" intensity="strong" />

      <div className="container relative grid max-w-[1440px] items-start gap-8 pb-16 pt-4 md:pb-20 lg:grid-cols-[0.48fr_0.52fr]">
        <HeroCopyBlock
          activeProblem={activeProblem}
          activeId={problemId}
          problems={heroProblems}
          onProblemSelect={setProblemId}
          onOpenModal={() => openLeadModal(activeProblem.label)}
        />
        <div className="md:hidden">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/20">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase text-slate-400">Sistema ENIX</p>
                <h2 className="mt-1 text-xl font-black">Diagnóstico inicial</h2>
              </div>
              <span className="rounded-full bg-enix-red px-3 py-1 text-xs font-black">Activo</span>
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-[#0b1120]/70 p-4">
              <p className="text-xs font-black uppercase text-red-200">Problema seleccionado</p>
              <p className="mt-2 text-lg font-black text-white">{activeProblem.label}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{activeProblem.description}</p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["Captar", "Medir", "Seguir"].map((item) => (
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-3 text-center text-xs font-black text-slate-200" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        {isDesktop && (
          <Suspense fallback={<div className="min-h-[520px] rounded-3xl border border-white/10 bg-white/[0.04]" />}>
            <GrowthCommandCenter activeProblem={activeProblem} mode={mode} onModeChange={setMode} />
          </Suspense>
        )}
      </div>
    </section>
  );
}
