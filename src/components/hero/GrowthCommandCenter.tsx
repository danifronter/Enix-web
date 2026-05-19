import { AnimatePresence, motion } from "framer-motion";
import type { HeroProblem } from "@/data/heroProblemsData";
import GrowthMetrics from "./GrowthMetrics";
import GrowthPipeline from "./GrowthPipeline";
import OpportunitySignalPanel from "./OpportunitySignalPanel";

type Props = {
  activeProblem: HeroProblem;
  mode: "chaos" | "system";
  onModeChange: (mode: "chaos" | "system") => void;
};

export default function GrowthCommandCenter({ activeProblem, mode, onModeChange }: Props) {
  const isChaos = mode === "chaos";

  return (
    <div className="relative mx-auto w-full min-w-0">
      <div className={`absolute -inset-4 rounded-[2rem] blur-3xl transition ${isChaos ? "bg-slate-500/8" : "bg-enix-red/14"}`}></div>
      <motion.div
        layout
        transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
        className={`relative overflow-hidden rounded-3xl border p-5 shadow-[0_28px_110px_rgba(0,0,0,0.44)] backdrop-blur-2xl transition-colors duration-500 lg:p-6 ${
        isChaos ? "border-white/12 bg-[#0b1120]/88" : "border-red-300/22 bg-[#0b1120]/90"
      }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(239,68,68,0.16),transparent_28%),radial-gradient(circle_at_90%_0%,rgba(255,255,255,0.1),transparent_24%)]"></div>
        <motion.div layout className="relative">
          <motion.div layout="position" className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <p className="text-xs font-black uppercase text-slate-400">ENIX Growth OS</p>
              <h2 className="text-xl font-black sm:text-2xl">Growth Command Center</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {isChaos ? (
                <>
                  <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-black text-red-100">Sin trazabilidad</span>
                  <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-black text-slate-300">Canales aislados</span>
                </>
              ) : (
                <>
                  <span className="rounded-full bg-emerald-400/14 px-3 py-1 text-xs font-black text-emerald-100">Activo 24/7</span>
                  <span className="rounded-full bg-white/[0.08] px-3 py-1 text-xs font-black text-red-100">IA + Datos</span>
                </>
              )}
            </div>
          </motion.div>

          <motion.div layout="position" className="mt-4 w-full">
          <div className="relative grid grid-cols-2 rounded-full border border-white/22 bg-white/[0.06] p-1 shadow-inner shadow-black/20">
            <span
              className={`absolute bottom-1 top-1 w-[calc(50%-0.25rem)] rounded-full border transition-all duration-500 ease-out ${
                isChaos
                  ? "left-1 border-red-300/50 bg-white/14 shadow-[0_0_24px_rgba(248,113,113,0.16)]"
                  : "left-[calc(50%+0rem)] border-red-300 bg-enix-red shadow-glow"
              }`}
              aria-hidden="true"
            />
            <button
              type="button"
              onClick={() => onModeChange("chaos")}
              className={`relative z-10 rounded-full px-3 py-2 text-xs font-black transition ${isChaos ? "text-white" : "text-slate-400 hover:text-white"}`}
            >
              Caos operativo
            </button>
            <button
              type="button"
              onClick={() => onModeChange("system")}
              className={`relative z-10 rounded-full px-3 py-2 text-xs font-black transition ${!isChaos ? "text-white" : "text-slate-400 hover:text-white"}`}
            >
              Sistema ENIX
            </button>
          </div>
          <p className="mt-2 text-center text-xs font-bold text-slate-400">
            {isChaos ? "Sistema sin conexión comercial clara" : "Canales conectados a conversión y seguimiento"}
          </p>
          </motion.div>

          <motion.div layout className="relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${mode}-pipeline-${activeProblem.activeNode}`}
                initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                transition={{ duration: 0.32, ease: "easeOut" }}
                className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <GrowthPipeline activeNode={activeProblem.activeNode} mode={mode} />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div className="mt-5">
            <AnimatePresence mode="wait" initial={false}>
              <OpportunitySignalPanel mode={mode} problem={activeProblem} />
            </AnimatePresence>
          </motion.div>

          <motion.div layout className="mt-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${mode}-metrics-${activeProblem.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <GrowthMetrics problem={activeProblem} mode={mode} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <p className="mt-3 text-center text-[0.68rem] font-bold text-slate-500">Visualización referencial del sistema ENIX.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
