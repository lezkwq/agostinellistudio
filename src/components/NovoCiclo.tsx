import { Reveal } from "@/components/Reveal";
import equipeAsset from "@/assets/noiva-equipe.webp";

export const NovoCiclo = () => {
  return (
    <section id="spazio" className="bg-oxblood text-warm-white py-24 md:py-36">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16 lg:items-center">
        <Reveal className="lg:col-span-6">
          <figure className="img-zoom overflow-hidden">
            <img
              src={equipeAsset}
              alt="Denis Bittencourt e Evandro Amaral finalizando o penteado de uma noiva na entrada do salão"
              loading="lazy"
              decoding="async"
              className="h-[20rem] w-full object-cover object-[45%_40%] md:h-[32rem]"
            />
          </figure>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
          <p className="eyebrow text-warm-white/60">Abril de 2026</p>
          <h2 className="display mt-6 text-4xl md:text-6xl lg:text-[4.5rem]">
            Um novo <span className="italic">ciclo.</span>
          </h2>
          <p className="mt-8 max-w-md font-sans text-sm md:text-base leading-relaxed text-warm-white/80">
            Em abril de 2026, o Spazio &amp; L&apos;Élégance apresentou uma nova fase em
            Balneário Camboriú, com espaço renovado e uma proposta ainda mais cuidadosa
            para receber suas clientes.
          </p>
          <p className="mt-6 font-sans text-xs uppercase tracking-[0.2em] text-warm-white/50">
            Denis Bittencourt e Evandro Amaral
          </p>
        </Reveal>
      </div>
    </section>
  );
};
