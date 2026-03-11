import { useRef } from "react";
import { useInView, type Variants } from "framer-motion";

/**
 * Hook for staggered scroll-reveal animations using Framer Motion.
 * Returns a ref to attach to the container and an `isInView` boolean.
 *
 * Usage:
 *   const { ref, isInView } = useStaggerReveal();
 *   <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
 *     <motion.div variants={itemVariants}>...</motion.div>
 *   </motion.div>
 */
export function useStaggerReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}

/** Stagger container – orchestrates child animations */
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/** Individual item – fades in and slides up */
export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
