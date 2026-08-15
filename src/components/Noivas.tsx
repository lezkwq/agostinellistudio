import { Reveal } from "@/components/Reveal";
import noivasAsset from "@/assets/noivas-grupo.jpg.asset.json";
import { WHATSAPP_PRODUCAO_URL } from "@/lib/site";

export const Noivas = () => {
  return (
    <section className="relative bg-ink">
      <div className="relative h-[80svh] min-h-[30rem] w-full overflow-hidden md:h-[92svh]">
        <img
          src={noivasAsset.url}
          alt="Grupo de noivas produzidas no salão diante da parede com a identidade Spazio"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-[50%_30%]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/45" />

        <div className="absolute inset-0 flex items-end">
          <div className="shell pb-14 md:pb-20">
            <Reveal>
              <h2 className="display max-w-[16ch] text-warm-white text-4xl sm:text-6xl lg:text-[5.5rem]">
                Para dias que pedem uma{" "}
                <span className="italic">produção completa.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <p className="max-w-md font-sans text-sm md:text-base leading-relaxed text-warm-white/80">
                  Cabelo, maquiagem e preparação para eventos, formaturas e casamentos.
                </p>
                <a
                  href={WHATSAPP_PRODUCAO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial self-start border-warm-white text-warm-white hover:bg-warm-white hover:text-ink"
                >
                  Falar sobre minha produção
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
