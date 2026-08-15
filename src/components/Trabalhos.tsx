import { Reveal } from "@/components/Reveal";
import noivaAsset from "@/assets/noiva-editorial.jpg";
import noivasAsset from "@/assets/noivas-grupo.jpg";
import ambienteAsset from "@/assets/ambiente-parede.jpg";
import unhasNoiteAsset from "@/assets/unhas-noite.jpg";
import unhasVermelhoAsset from "@/assets/unhas-vermelho.jpg";
import unhasNudeAsset from "@/assets/unhas-nude.jpg";


export const Trabalhos = () => {
  return (
    <section id="trabalhos" className="bg-ivory py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-gold">Trabalhos</p>
            <h2 className="display mt-6 text-4xl md:text-6xl text-ink">
              Cortes, cor, unhas
              <br />
              <span className="italic">e produções.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              Trabalhos realizados no Spazio, em Balneário Camboriú.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-4 md:mt-20 md:gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <figure className="img-zoom overflow-hidden">
              <img
                src={noivasAsset}
                alt="Produção completa de noivas realizada pela equipe do salão"
                loading="lazy"
                decoding="async"
                className="h-[24rem] w-full object-cover object-[50%_30%] md:h-[38rem]"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.08} className="col-span-7 md:col-span-4 md:col-start-9 md:mt-24">
            <figure className="img-zoom overflow-hidden">
              <img
                src={noivaAsset}
                alt="Penteado e maquiagem de noiva no Spazio"
                loading="lazy"
                decoding="async"
                className="h-[18rem] w-full object-cover object-[55%_35%] md:h-[26rem]"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.14} className="col-span-5 self-end md:col-span-3 md:col-start-2">
            <p className="font-serif italic text-lg md:text-2xl text-ink/80">
              Cabelo, cor e finalização feitos por profissionais da casa.
            </p>
          </Reveal>

          <Reveal delay={0.18} className="col-span-12 md:col-span-6 md:col-start-6">
            <figure className="img-zoom overflow-hidden">
              <img
                src={ambienteAsset}
                alt="Detalhe do interior do salão com a identidade Spazio em dourado"
                loading="lazy"
                decoding="async"
                className="h-[16rem] w-full object-cover object-center md:h-[22rem]"
              />
            </figure>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-24">
          <Reveal>
            <p className="eyebrow text-gold">Unhas</p>
          </Reveal>

          <div className="mt-8 grid grid-cols-12 gap-4 md:mt-12 md:gap-6">
            {[
              {
                src: unhasNoiteAsset,
                alt: "Unhas em preto com glitter prata e detalhes metalizados",
                span: "col-span-6 md:col-span-4",
                offset: "",
                h: "h-[13rem] md:h-[24rem]",
              },
              {
                src: unhasVermelhoAsset,
                alt: "Unhas em vermelho com glitter dourado e apliques",
                span: "col-span-6 md:col-span-4",
                offset: "md:mt-16",
                h: "h-[13rem] md:h-[24rem]",
              },
              {
                src: unhasNudeAsset,
                alt: "Unhas em tons terrosos e nude com acabamento amendoado",
                span: "col-span-12 md:col-span-3 md:col-start-10",
                offset: "md:mt-6",
                h: "h-[16rem] md:h-[24rem]",
              },
            ].map((img, i) => (
              <Reveal key={img.alt} delay={i * 0.08} className={`${img.span} ${img.offset}`}>
                <figure className="img-zoom overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className={`${img.h} w-full object-cover object-center`}
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
