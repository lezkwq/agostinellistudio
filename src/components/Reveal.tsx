import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  /** Atraso em segundos para escalonar entradas dentro de uma composição. */
  delay?: number;
  className?: string;
}

/**
 * Entrada discreta usada em todo o site.
 * Respeita prefers-reduced-motion: sem movimento, apenas conteúdo estático.
 */
export const Reveal = ({ children, delay = 0, className }: RevealProps) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
