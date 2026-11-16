import { Reveal } from "@/components/Reveal";

export const NossoStudio = () => {
  return (
    <section id="studio" className="bg-oxblood text-warm-white py-24 md:py-36">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16 lg:items-center">
        <Reveal className="lg:col-span-6">
          <figure className="img-zoom overflow-hidden">
            <img
              src="/images/studio-treatment.jpg"
              alt="Espaço de atendimento do Agostinelli Studio, preparado para receber clientes"
              loading="lazy"
              decoding="async"
              className="h-[20rem] w-full object-cover object-[45%_40%] md:h-[32rem]"
            />
          </figure>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
          <p className="eyebrow text-warm-white/60">Um espaço para você</p>
          <h2 className="display mt-6 text-4xl md:text-6xl lg:text-[4.5rem]">
            Beleza com <span className="italic">acolhimento.</span>
          </h2>
          <p className="mt-8 max-w-md font-sans text-sm md:text-base leading-relaxed text-warm-white/80">
            Um studio de beleza em Camboriú para desacelerar, cuidar de si e se sentir em casa.
            Cada atendimento é pensado com carinho, escuta e respeito ao seu estilo.
          </p>
          <p className="mt-6 font-sans text-xs uppercase tracking-[0.2em] text-warm-white/50">
            Agostinelli Studio · Camboriú, SC
          </p>
        </Reveal>
      </div>
    </section>
  );
};
