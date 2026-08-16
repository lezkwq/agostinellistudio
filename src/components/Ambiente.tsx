import { Reveal } from "@/components/Reveal";
import ambienteAsset from "@/assets/ambiente-parede.webp";
import fachadaAsset from "@/assets/fachada-retrato.webp";
import { ADDRESS_LINES, MAPS_URL } from "@/lib/site";

export const Ambiente = () => {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow text-gold">O Spazio</p>
          <h2 className="display mt-6 text-4xl md:text-6xl text-ink">
            O espaço
            <br />
            <span className="italic">em Balneário.</span>
          </h2>

          <address className="mt-10 not-italic font-sans text-sm leading-relaxed text-muted-foreground">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-ink"
            >
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </a>
          </address>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial mt-10 border-ink text-ink hover:bg-ink hover:text-warm-white"
          >
            Como chegar
          </a>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-8">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <figure className="img-zoom col-span-12 overflow-hidden md:col-span-8">
              <img
                src={ambienteAsset}
                alt="Recepção do salão com parede texturizada e identidade dourada"
                loading="lazy"
                decoding="async"
                className="h-[18rem] w-full object-cover object-center md:h-[28rem]"
              />
            </figure>
            <figure className="img-zoom col-span-8 overflow-hidden md:col-span-4 md:mt-16">
              <img
                src={fachadaAsset}
                alt="Cliente na entrada do Spazio & L'Élégance em Balneário Camboriú"
                loading="lazy"
                decoding="async"
                className="h-[14rem] w-full object-cover object-[50%_30%] md:h-[22rem]"
              />
            </figure>

          </div>
        </Reveal>
      </div>
    </section>
  );
};
