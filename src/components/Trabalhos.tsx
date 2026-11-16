import { Reveal } from "@/components/Reveal";


export const Trabalhos = () => {
  return (
    <section id="trabalhos" className="bg-ivory py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-gold">Trabalhos</p>
            <h2 className="display mt-6 text-4xl md:text-6xl text-ink">
              Cabelos, unhas
              <br />
              <span className="italic">e beleza.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              Um pouco do cuidado e dos detalhes que fazem cada visita ser sua.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-4 md:mt-20 md:gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <figure className="img-zoom overflow-hidden">
              <img
                src="/images/hair-long-sleek.jpg"
                alt="Cabelos longos, alinhados e brilhantes finalizados no Agostinelli Studio"
                loading="lazy"
                decoding="async"
                className="h-[24rem] w-full object-cover object-[50%_35%] md:h-[38rem]"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.08} className="col-span-7 md:col-span-4 md:col-start-9 md:mt-24">
            <figure className="img-zoom overflow-hidden">
              <img
                src="/images/hair-pink-streaks.jpg"
                alt="Mechas cor-de-rosa em cabelo castanho"
                loading="lazy"
                decoding="async"
                className="h-[18rem] w-full object-cover object-[55%_35%] md:h-[26rem]"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.14} className="col-span-5 self-end md:col-span-3 md:col-start-2">
            <p className="font-serif italic text-lg md:text-2xl text-ink/80">
              Cuidado pensado para revelar a beleza que já é sua.
            </p>
          </Reveal>

          <Reveal delay={0.18} className="col-span-7 md:col-span-5 md:col-start-6">
            <figure className="img-zoom overflow-hidden">
              <img
                src="/images/hair-pink-bob.jpg"
                alt="Corte curto com mechas rosas criado no Agostinelli Studio"
                loading="lazy"
                decoding="async"
                className="h-[16rem] w-full object-cover object-[50%_35%] md:h-[24rem]"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.24} className="col-span-5 self-end md:col-span-3 md:col-start-11 md:mb-6">
            <figure className="img-zoom overflow-hidden">
              <img
                src="/images/hair-bob.jpg"
                alt="Corte bob curto com acabamento brilhante"
                loading="lazy"
                decoding="async"
                className="h-[13rem] w-full object-cover object-[50%_45%] md:h-[17rem]"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.3} className="col-span-6 md:col-span-3 md:col-start-2 md:mt-10">
            <figure className="img-zoom overflow-hidden">
              <img
                src="/images/hair-shine.jpg"
                alt="Cabelo castanho longo e iluminado com acabamento brilhante"
                loading="lazy"
                decoding="async"
                className="h-[13rem] w-full object-cover object-[45%_40%] md:h-[20rem]"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.36} className="col-span-6 md:col-span-4 md:col-start-6 md:mt-10">
            <figure className="img-zoom overflow-hidden">
              <img
                src="/images/hero-hair-highlights.jpg"
                alt="Cabelo longo com ondas e mechas iluminadas"
                loading="lazy"
                decoding="async"
                className="h-[13rem] w-full object-cover object-[50%_35%] md:h-[20rem]"
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
                src: "/images/nails-art.jpg",
                alt: "Nail art preta e prata em unhas alongadas",
                span: "col-span-6 md:col-span-4",
                offset: "",
                h: "h-[13rem] md:h-[24rem]",
              },
              {
                src: "/images/nails-brown.jpg",
                alt: "Manicure em esmalte marrom brilhante",
                span: "col-span-6 md:col-span-4",
                offset: "md:mt-16",
                h: "h-[13rem] md:h-[24rem]",
              },
              {
                src: "/images/nails-red.jpg",
                alt: "Manicure vermelha com detalhe em glitter",
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
