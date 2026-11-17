import { RATING, REVIEW_COUNT } from "@/lib/site";

const REVIEWS = [
  {
    author: "Bruna Ruzi",
    quote:
      "Encontrei meu salão. Nunca me senti tão bem tratada e cuidada. Kátia é um ser humano incrível e excelente profissional.",
  },
  {
    author: "Amanda da Graça",
    quote:
      "Fui pintar o cabelo hoje, era um sonho de tempos e a Kátia me ajudou a realizar. Uma profissional muito querida e atenciosa; vai virar minha cabeleireira pessoal!",
  },
  {
    author: "Elaine Ruzi",
    quote:
      "Simplesmente amo esse lugar! No Agostinelli Studio me sinto cuidada da cabeça aos pés — faço tudo lá: mãos, pés, sobrancelhas, cílios e cabelo.",
  },
  {
    author: "Aline Melo Jacques",
    quote:
      "Que lugar aconchegante e atendimento acolhedor, as meninas são muito queridas. Me senti em casa. Super indico!",
  },
  {
    author: "Patricia Paiva",
    quote:
      "Atendimento impecável! Kátia é uma querida, muito profissional. Com certeza indico esse Studio.",
  },
  {
    author: "Mateus Silva",
    quote:
      "Conheço o salão da Kátia há mais de 10 anos e posso afirmar que é um lugar especial. Ela começou seu negócio em uma sala pequena...",
  },
  {
    author: "OMEGAPAR FINANCEIRO",
    quote:
      "Experiência maravilhosa. Amei o atendimento do início ao fim. Super recomendo. Estacionamento fácil.",
  },
  {
    author: "Jessica Cipriano",
    quote:
      "Minha experiência com a Kátia foi maravilhosa, ela é muito cuidadosa comigo e fez uma progressiva impecável no meu cabelo.",
  },
  {
    author: "Thaisa Milena",
    quote:
      "Fui muito bem atendida pela Kátia, muito atenciosa. Ela conseguiu dar vida para o meu cabelo! Gostei bastante e voltarei!",
  },
  {
    author: "Rebeca Cristi",
    quote:
      "A Kátia é maravilhosa, super querida, simpática e excelente profissional. Meu cabelo ficou do jeitinho que idealizei, o corte maravilhoso e a progressiva impecável.",
  },
  {
    author: "Cristiane Voltolini",
    quote:
      "Amei o lugar, o ambiente e a cabeleireira maravilhosa, uma querida e atenciosa. Faz seu trabalho com amor e dedicação. Super indico!",
  },
  {
    author: "Lígia França",
    quote:
      "Adorei o salão! Desde o primeiro contato pelo WhatsApp, a Kátia foi super atenciosa. O atendimento foi impecável, com produtos muito bons!",
  },
  {
    author: "Sandra Santos",
    quote:
      "Lugar maravilhoso que nos deixa lindas. Tem todo o cuidado com nossos cabelos. A Kátia é uma super profissional; você se sente muito bem.",
  },
  {
    author: "Milena Costa",
    quote:
      "Lugar maravilhoso, cabeleireira muito atenciosa e muito querida, adorei a experiência e voltarei mais vezes com certeza!!",
  },
];

const ReviewCards = ({ copy }: { copy: "original" | "duplicate" }) => (
  <div
    className="flex shrink-0 gap-4 pr-4"
    aria-hidden={copy === "duplicate" ? true : undefined}
  >
    {REVIEWS.map((review) => (
      <article
        key={`${copy}-${review.author}`}
        className="flex h-[22rem] w-[82vw] max-w-[360px] flex-none flex-col justify-between bg-[#e9e2d2] p-6 md:h-[23rem] md:w-[32vw] md:max-w-[420px] md:p-8"
      >
        <p className="font-serif text-lg leading-snug text-ink md:text-xl">
          “{review.quote}”
        </p>
        <cite className="not-italic font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:text-[11px]">
          {review.author} / Google
        </cite>
      </article>
    ))}
  </div>
);

export const ProvaSocial = () => {
  return (
    <section
      id="avaliacoes"
      className="overflow-hidden bg-ivory py-20 md:py-28"
      aria-label="Avaliações do Agostinelli Studio"
    >
      <div className="shell">
        <div className="flex items-center gap-8 border-b border-border pb-12 md:gap-14 md:pb-16">
          <p className="display text-7xl text-gold md:text-9xl">{RATING}</p>
          <div>
            <p className="font-sans text-lg tracking-[0.2em] text-gold" aria-label="5 estrelas">
              ★★★★★
            </p>
            <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              No Google
            </p>
            <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              {REVIEW_COUNT}
            </p>
          </div>
        </div>
      </div>

      <div className="reviews-marquee mt-10 md:mt-12" aria-label="Depoimentos de clientes">
        <div className="reviews-marquee-track flex w-max">
          <ReviewCards copy="original" />
          <ReviewCards copy="duplicate" />
        </div>
      </div>
    </section>
  );
};
