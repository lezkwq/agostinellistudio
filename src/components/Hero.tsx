import { motion, useReducedMotion } from "framer-motion";
import heroAsset from "@/assets/noivas-grupo.jpg";
import { WHATSAPP_URL } from "@/lib/site";

export const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="topo" className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      <img
        src={heroAsset}
        alt="Noivas produzidas no Spazio & L'Élégance diante da identidade do salão"
        className="absolute inset-0 h-full w-full object-cover object-[50%_28%] opacity-90"
        fetchPriority="high"
        decoding="async"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-ink/45 md:bg-ink/35"
      />

      <div className="relative shell flex min-h-[100svh] flex-col justify-end pb-16 md:pb-20 pt-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[22ch] md:max-w-[18ch]"
        >
          <p className="eyebrow text-warm-white/70 mb-6">Balneário Camboriú, SC</p>

          <h1 className="display text-warm-white text-[3.25rem] sm:text-7xl lg:text-[7rem] xl:text-[7.5rem]">
            Beleza com{" "}
            <span className="italic font-normal">sofisticação.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="font-sans text-sm md:text-base text-warm-white/80 max-w-sm leading-relaxed">
            Cabelos, unhas e estética no coração de Balneário Camboriú.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial border-warm-white bg-warm-white text-ink hover:bg-transparent hover:text-warm-white"
            >
              Agendar horário
            </a>
            <a
              href="#spazio"
              className="btn-editorial border-warm-white/60 text-warm-white hover:bg-warm-white hover:text-ink"
            >
              Conhecer o Spazio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
