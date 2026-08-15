import { Reveal } from "@/components/Reveal";

export const Manifesto = () => {
  return (
    <section className="bg-ivory py-24 md:py-40">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-3">
          <p className="eyebrow text-gold">Spazio &amp; L&apos;Élégance</p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-8 lg:col-start-5">
          <h2 className="display text-3xl sm:text-5xl lg:text-[4.25rem] text-ink">
            Técnica, cuidado e resultado.
            <br />
            <span className="italic">Do corte à produção completa.</span>
          </h2>
          <p className="mt-10 max-w-lg font-sans text-sm md:text-base leading-relaxed text-muted-foreground">
            Um salão de beleza e estética em Balneário Camboriú, com equipe própria,
            atendimento por horário marcado e trabalho autoral em cabelos, unhas e produções.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
