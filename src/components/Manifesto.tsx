import { Reveal } from "@/components/Reveal";

export const Manifesto = () => {
  return (
    <section className="bg-ivory py-24 md:py-40">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-3">
          <p className="eyebrow text-gold">Agostinelli Studio</p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-8 lg:col-start-5">
          <h2 className="display text-3xl sm:text-5xl lg:text-[4.25rem] text-ink">
            Beleza que acolhe.
            <br />
            <span className="italic">Cuidado que transforma.</span>
          </h2>
          <p className="mt-10 max-w-lg font-sans text-sm md:text-base leading-relaxed text-muted-foreground">
            Um espaço para se sentir bem e sair ainda mais confiante. Aqui você encontra
            cuidado para os cabelos, mãos, pés, cílios e sobrancelhas, com atenção a cada detalhe.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
