import { Reveal } from "@/components/Reveal";
import { RATING, REVIEW_COUNT } from "@/lib/site";

interface Review {
  quote: string;
  author: string;
}

const REVIEWS: Review[] = [
  {
    quote:
      "Encontrei meu salão. Nunca me senti tão bem tratada e cuidada.",
    author: "Bruna Ruzi",
  },
  {
    quote:
      "A Kátia me ajudou a realizar meu sonho e foi muito atenciosa em cada etapa.",
    author: "Amanda da Graça",
  },
  {
    quote: "No Agostinelli Studio me sinto cuidada da cabeça aos pés.",
    author: "Elaine Ruzi",
  },
];

export const ProvaSocial = () => {
  return (
    <section className="bg-warm-white py-24 md:py-36">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="display text-6xl md:text-8xl text-ink">{RATING}</p>
          <p className="mt-3 font-sans text-sm tracking-[0.12em] text-gold" aria-label="5 estrelas">
            ★★★★★ <span className="ml-2 text-muted-foreground">no Google</span>
          </p>
          <span className="rule my-8 text-gold" aria-hidden="true" />
          <p className="font-sans text-sm text-muted-foreground">{REVIEW_COUNT}</p>

          <figure className="img-zoom mt-10 overflow-hidden lg:mt-14">
            <img
              src="/images/hair-pink-bob.jpg"
              alt="Resultado de cabelo com ondas e mechas feito no Agostinelli Studio"
              loading="lazy"
              decoding="async"
              className="h-[18rem] w-full object-cover object-[50%_35%] lg:h-[24rem]"
            />
          </figure>
        </Reveal>

        <div className="lg:col-span-7 lg:col-start-6 space-y-12">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.quote} delay={i * 0.08}>
              <blockquote className="border-t border-border pt-8">
                <p className="font-serif text-xl md:text-2xl leading-snug text-ink">
                  {review.quote}
                </p>
                <cite className="mt-5 block not-italic font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {review.author} · Google
                </cite>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
