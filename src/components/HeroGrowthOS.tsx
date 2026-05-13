import { useState } from "react";
import { heroLeadContext, heroProblems } from "@/data/heroProblemsData";
import GrowthCommandCenter from "./hero/GrowthCommandCenter";
import HeroCopyBlock from "./hero/HeroCopyBlock";

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
  const [mode, setMode] = useState<"disconnected" | "system">("system");
  const activeProblem = heroProblems.find((problem) => problem.id === problemId) ?? heroProblems[0];

  return (
    <section className="hero-os noise relative isolate min-h-[90vh] overflow-hidden pt-16 text-white">
      <div className="grid-mask absolute inset-0 opacity-75"></div>
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-enix-red/16 blur-3xl"></div>
      <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-red-500/8 blur-3xl"></div>

      <div className="container relative grid max-w-[1440px] items-center gap-10 pb-12 pt-8 lg:grid-cols-[0.48fr_0.52fr]">
        <HeroCopyBlock
          activeProblem={activeProblem}
          activeId={problemId}
          problems={heroProblems}
          onProblemSelect={setProblemId}
          onOpenModal={() => openLeadModal(activeProblem.label)}
        />
        <GrowthCommandCenter activeProblem={activeProblem} mode={mode} onModeChange={setMode} />
      </div>
    </section>
  );
}
