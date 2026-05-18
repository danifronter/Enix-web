import { motion } from "framer-motion";

type AnimatedHeroBackgroundProps = {
  variant?: "default" | "diagnostic" | "services" | "about" | "blog" | "cases";
  intensity?: "soft" | "medium" | "strong";
};

const variantStyles = {
  default: {
    redA: "bg-red-600/[0.34]",
    redB: "bg-red-500/[0.24]",
    blueA: "bg-blue-500/[0.22]",
    blueB: "bg-cyan-400/[0.16]",
  },
  diagnostic: {
    redA: "bg-red-600/[0.34]",
    redB: "bg-red-400/[0.22]",
    blueA: "bg-blue-500/[0.18]",
    blueB: "bg-cyan-400/[0.14]",
  },
  services: {
    redA: "bg-red-600/[0.30]",
    redB: "bg-orange-500/[0.18]",
    blueA: "bg-blue-600/[0.22]",
    blueB: "bg-sky-400/[0.16]",
  },
  about: {
    redA: "bg-red-500/[0.26]",
    redB: "bg-rose-500/[0.18]",
    blueA: "bg-indigo-500/[0.22]",
    blueB: "bg-blue-400/[0.16]",
  },
  blog: {
    redA: "bg-red-600/[0.24]",
    redB: "bg-red-400/[0.16]",
    blueA: "bg-blue-500/[0.18]",
    blueB: "bg-slate-400/[0.14]",
  },
  cases: {
    redA: "bg-red-600/[0.32]",
    redB: "bg-red-400/[0.20]",
    blueA: "bg-blue-500/[0.22]",
    blueB: "bg-cyan-400/[0.16]",
  },
};

const intensityOpacity = {
  soft: "opacity-60",
  medium: "opacity-80",
  strong: "opacity-100",
};

export default function AnimatedHeroBackground({
  variant = "default",
  intensity = "medium",
}: AnimatedHeroBackgroundProps) {
  const colors = variantStyles[variant];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden bg-[#070b14] ${intensityOpacity[intensity]}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.26),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.24),transparent_32%),linear-gradient(135deg,#080d18_0%,#0b1120_45%,#12070b_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,11,20,0.10)_48%,rgba(7,11,20,0.70)_100%)]" />

      <motion.div
        className="absolute left-[-12%] top-[24%] h-44 w-[124%] -rotate-6 bg-gradient-to-r from-transparent via-red-500/[0.18] via-45% to-cyan-400/[0.13] blur-3xl"
        animate={{
          x: ["-8%", "8%", "-3%", "-8%"],
          y: [0, -28, 22, 0],
          opacity: [0.35, 0.85, 0.55, 0.35],
          scaleY: [1, 1.18, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className={`absolute -left-28 top-8 h-[520px] w-[520px] rounded-full ${colors.redA} blur-[130px]`}
        animate={{ x: [0, 70, 20, 0], y: [0, 40, -20, 0], scale: [1, 1.14, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute right-[-140px] top-[-120px] h-[560px] w-[560px] rounded-full ${colors.blueA} blur-[140px]`}
        animate={{ x: [0, -80, -30, 0], y: [0, 60, 10, 0], scale: [1, 0.94, 1.12, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute bottom-[-180px] left-[35%] h-[440px] w-[440px] rounded-full ${colors.redB} blur-[120px]`}
        animate={{ x: [0, 90, -40, 0], y: [0, -50, 20, 0], scale: [1, 1.12, 1.02, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute bottom-[10%] right-[18%] h-[320px] w-[320px] rounded-full ${colors.blueB} blur-[100px]`}
        animate={{ x: [0, -45, 35, 0], y: [0, 35, -25, 0], opacity: [0.55, 0.95, 0.65, 0.55] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[-20%] top-[-40%] h-[120%] w-[42%] rotate-12 bg-gradient-to-r from-transparent via-white/[0.14] to-transparent blur-2xl"
        animate={{ x: ["-20%", "280%"], opacity: [0, 0.7, 0] }}
        transition={{ duration: 9, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
      />

      <div className="absolute inset-0">
        {Array.from({ length: 18 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-white/45 shadow-[0_0_18px_rgba(248,250,252,0.35)]"
            style={{
              left: `${8 + ((index * 17) % 86)}%`,
              top: `${12 + ((index * 23) % 76)}%`,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.15, 0.75, 0.15], scale: [0.8, 1.4, 0.8] }}
            transition={{ duration: 4 + (index % 5), repeat: Infinity, delay: index * 0.35, ease: "easeInOut" }}
          />
        ))}
      </div>

      <svg className="absolute inset-0 h-full w-full opacity-55" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <motion.path
          d="M-80 520 C 220 380, 420 660, 720 500 S 1180 330, 1520 460"
          fill="none"
          stroke="url(#heroLineRed)"
          strokeWidth="2"
          strokeDasharray="8 16"
          animate={{ strokeDashoffset: [0, -160], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M-80 290 C 240 190, 430 360, 710 260 S 1160 130, 1520 250"
          fill="none"
          stroke="url(#heroLineBlue)"
          strokeWidth="1.8"
          strokeDasharray="6 18"
          animate={{ strokeDashoffset: [0, 140], opacity: [0.15, 0.55, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="heroLineRed" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(220,38,38,0)" />
            <stop offset="45%" stopColor="rgba(248,113,113,0.85)" />
            <stop offset="100%" stopColor="rgba(220,38,38,0)" />
          </linearGradient>
          <linearGradient id="heroLineBlue" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(59,130,246,0)" />
            <stop offset="45%" stopColor="rgba(125,211,252,0.72)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/25 via-[#070b14]/5 to-[#070b14]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070b14]/62 via-[#070b14]/12 to-[#070b14]/55" />
    </div>
  );
}
