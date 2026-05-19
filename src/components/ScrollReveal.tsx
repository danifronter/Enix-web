import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  once?: boolean;
};

const directions = {
  up: { y: 28, x: 0, scale: 1 },
  down: { y: -24, x: 0, scale: 1 },
  left: { x: -32, y: 0, scale: 1 },
  right: { x: 32, y: 0, scale: 1 },
  scale: { x: 0, y: 0, scale: 0.96 },
  fade: { x: 0, y: 0, scale: 1 },
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const initial = directions[direction];

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: initial.x,
        y: initial.y,
        scale: initial.scale,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once,
        amount: 0.18,
        margin: "0px 0px -8% 0px",
      }}
      transition={{
        duration: 0.68,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
