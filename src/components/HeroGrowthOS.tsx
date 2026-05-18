import { useState } from "react";
import { heroLeadContext, heroProblems } from "@/data/heroProblemsData";
import AnimatedHeroBackground from "./hero/AnimatedHeroBackground";
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
  const [mode, setMode] = useState<"chaos" | "system">("chaos");
  const activeProblem = heroProblems.find((problem) => problem.id === problemId) ?? heroProblems[0];

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
        <GrowthCommandCenter activeProblem={activeProblem} mode={mode} onModeChange={setMode} />
      </div>
    </section>
  );
}
