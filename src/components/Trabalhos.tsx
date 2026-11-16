import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const MOBILE_GALLERY = [
  { src: "/images/hair-long-sleek.jpg", alt: "Cabelos longos, alinhados e brilhantes" },
  { src: "/images/hair-pink-streaks.jpg", alt: "Mechas cor-de-rosa em cabelo castanho" },
  { src: "/images/hair-bob.jpg", alt: "Corte bob curto com acabamento brilhante" },
  { src: "/images/hair-shine.jpg", alt: "Cabelo castanho longo e iluminado" },
  { src: "/images/hero-hair-highlights.jpg", alt: "Cabelo longo com ondas e mechas iluminadas" },
  { src: "/images/nails-art.jpg", alt: "Nail art preta e prata em unhas alongadas" },
  { src: "/images/nails-brown.jpg", alt: "Manicure em esmalte marrom brilhante" },
  { src: "/images/nails-red.jpg", alt: "Manicure vermelha com detalhe em glitter" },
];

const MobileGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateTravel = () => {
      setTravel(Math.max(0, track.scrollWidth - window.innerWidth));
    };

    const observer = new ResizeObserver(updateTravel);
    observer.observe(track);
    window.addEventListener("resize", updateTravel, { passive: true });
    updateTravel();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateTravel);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative -mx-6 mt-12 md:hidden"
      style={{ height: `calc(100svh + ${travel}px)` }}
      aria-label="Galeria de cabelos e unhas"
    >
      <div className="sticky top-0 flex h-[100svh] w-screen items-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max gap-4 px-6 will-change-transform"
        >
          {MOBILE_GALLERY.map((image) => (
            <figure key={image.src} className="w-[74vw] flex-none overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="block aspect-[2/3] w-full object-cover"
              />
            </figure>
          ))}
        </motion.div>
      </div>
    </div>
  );
};


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

        <MobileGallery />

        <div className="mt-14 hidden grid-cols-12 gap-4 md:mt-20 md:grid md:gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <figure className="img-zoom overflow-hidden">
              <img
                src="/images/hair-long-sleek.jpg"
                alt="Cabelos longos, alinhados e brilhantes finalizados no Agostinelli Studio"
                loading="lazy"
                decoding="async"
                className="block aspect-[2/3] w-full object-cover object-[50%_35%] md:aspect-auto md:h-[38rem]"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.08} className="col-span-12 md:col-span-4 md:col-start-9 md:mt-24">
            <figure className="img-zoom overflow-hidden">
              <img
                src="/images/hair-pink-streaks.jpg"
                alt="Mechas cor-de-rosa em cabelo castanho"
                loading="lazy"
                decoding="async"
                className="block aspect-[2/3] w-full object-cover object-[55%_35%] md:aspect-auto md:h-[26rem]"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.14} className="col-span-12 self-end md:col-span-3 md:col-start-2">
            <p className="font-serif italic text-lg md:text-2xl text-ink/80">
              Cuidado pensado para revelar a beleza que já é sua.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="col-span-12 self-end md:col-span-3 md:col-start-11 md:mb-6">
            <figure className="img-zoom overflow-hidden">
              <img
                src="/images/hair-bob.jpg"
                alt="Corte bob curto com acabamento brilhante"
                loading="lazy"
                decoding="async"
                className="block aspect-[2/3] w-full object-cover object-[50%_45%] md:aspect-auto md:h-[17rem]"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.3} className="col-span-12 md:col-span-3 md:col-start-2 md:mt-10">
            <figure className="img-zoom overflow-hidden">
              <img
                src="/images/hair-shine.jpg"
                alt="Cabelo castanho longo e iluminado com acabamento brilhante"
                loading="lazy"
                decoding="async"
                className="block aspect-[2/3] w-full object-cover object-[45%_40%] md:aspect-auto md:h-[20rem]"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.36} className="col-span-12 md:col-span-4 md:col-start-6 md:mt-10">
            <figure className="img-zoom overflow-hidden">
              <img
                src="/images/hero-hair-highlights.jpg"
                alt="Cabelo longo com ondas e mechas iluminadas"
                loading="lazy"
                decoding="async"
                className="block aspect-[2/3] w-full object-cover object-[50%_35%] md:aspect-auto md:h-[20rem]"
              />
            </figure>
          </Reveal>
        </div>

        <div className="mt-16 hidden md:mt-24 md:block">
          <Reveal>
            <p className="eyebrow text-gold">Unhas</p>
          </Reveal>

          <div className="mt-8 grid grid-cols-12 gap-4 md:mt-12 md:gap-6">
            {[
              {
                src: "/images/nails-art.jpg",
                alt: "Nail art preta e prata em unhas alongadas",
                span: "col-span-12 md:col-span-4",
                offset: "",
                h: "aspect-[2/3] md:aspect-auto md:h-[24rem]",
              },
              {
                src: "/images/nails-brown.jpg",
                alt: "Manicure em esmalte marrom brilhante",
                span: "col-span-12 md:col-span-4",
                offset: "md:mt-16",
                h: "aspect-[2/3] md:aspect-auto md:h-[24rem]",
              },
              {
                src: "/images/nails-red.jpg",
                alt: "Manicure vermelha com detalhe em glitter",
                span: "col-span-12 md:col-span-3 md:col-start-10",
                offset: "md:mt-6",
                h: "aspect-[2/3] md:aspect-auto md:h-[24rem]",
              },
            ].map((img, i) => (
              <Reveal key={img.alt} delay={i * 0.08} className={`${img.span} ${img.offset}`}>
                <figure className="img-zoom overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className={`block ${img.h} w-full object-cover object-center`}
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
