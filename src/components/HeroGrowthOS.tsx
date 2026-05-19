import { heroLeadContext } from "@/data/heroProblemsData";
import AnimatedHeroBackground from "./hero/AnimatedHeroBackground";
import HeroCopyBlock from "./hero/HeroCopyBlock";
import HeroGrowthVisual from "./hero/HeroGrowthVisual";

function openLeadModal() {
  window.dispatchEvent(
    new CustomEvent("enix:open-lead-modal", {
      detail: {
        ...heroLeadContext,
        ctaOrigin: "hero-primary",
        currentUrl: window.location.href,
      },
    }),
  );
}

export default function HeroGrowthOS() {
  return (
    <section className="motion-reduce-safe relative isolate overflow-hidden bg-[#070b14] py-28 text-white md:py-32 lg:py-36">
      <AnimatedHeroBackground variant="default" intensity="medium" />

      <div className="container relative z-10 grid max-w-[1440px] items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <HeroCopyBlock onOpenModal={openLeadModal} />
        <HeroGrowthVisual />
      </div>
    </section>
  );
}
