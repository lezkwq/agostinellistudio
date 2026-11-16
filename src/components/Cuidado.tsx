import { Reveal } from "@/components/Reveal";
import { WHATSAPP_SERVICOS_URL } from "@/lib/site";

export const Cuidado = () => {
  return (
    <section className="relative bg-ink">
      <div className="relative aspect-[2/3] min-h-[30rem] w-full overflow-hidden md:aspect-auto md:h-[92svh]">
        <img
          src="/images/hair-products.jpg"
          alt="Produtos profissionais para tratamentos e cuidados dos cabelos"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-[50%_30%]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/45" />

        <div className="absolute inset-0 flex items-end">
          <div className="shell pb-14 md:pb-20">
            <Reveal>
              <h2 className="display max-w-[16ch] text-warm-white text-4xl sm:text-6xl lg:text-[5.5rem]">
                Um tempo para você. Cuidado de verdade, da cabeça aos pés.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <p className="max-w-md font-sans text-sm md:text-base leading-relaxed text-warm-white/80">
                  Um cabelo renovado, mãos cuidadas e um olhar que realça quem você é.
                </p>
                <a
                  href={WHATSAPP_SERVICOS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial self-start border-warm-white text-warm-white hover:bg-warm-white hover:text-ink"
                >
                  Quero agendar meu momento
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
