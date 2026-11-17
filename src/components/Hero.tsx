import { motion, useReducedMotion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/site";

export const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="topo" className="relative min-h-[100svh] w-full overflow-hidden bg-ink md:h-[100svh] md:min-h-0">
      <picture className="absolute inset-0">
        <source media="(min-width: 768px)" srcSet="/images/hero-desktop-pink-profile.jpg" />
        <img
          src="/images/hair-pink-bob.jpg"
          alt="Corte curto com mechas rosas, visto de lado, feito no Agostinelli Studio"
          className="h-full w-full object-cover object-[58%_34%] opacity-90 md:object-[50%_50%]"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-ink/45 md:bg-ink/35"
      />

      <div className="relative shell flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:h-full md:min-h-0 md:pb-12 md:pt-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[1120px] xl:max-w-[1200px]"
        >
          <p className="eyebrow text-warm-white/70 mb-6">Camboriú, Santa Catarina</p>

          <h1 className="display text-warm-white text-[3.25rem] sm:text-7xl md:text-7xl lg:text-[6.5rem] xl:text-[7rem]">
            Seu momento
            <br className="hidden md:block" /> de beleza começa aqui.
          </h1>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="font-sans text-sm md:text-base text-warm-white/80 max-w-sm leading-relaxed">
            Cabelos, unhas, cílios e sobrancelhas. Um cuidado acolhedor, da cabeça aos pés.
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
              href="#studio"
              className="btn-editorial border-warm-white/60 text-warm-white hover:bg-warm-white hover:text-ink"
            >
              Conhecer o Studio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
