import { Reveal } from "@/components/Reveal";

interface Review {
  quote: string;
}

const REVIEWS: Review[] = [
  {
    quote:
      "Amo esse salão. Evandro cuida das minhas madeixas há dez anos. Só tenho a agradecer o carinho e o cuidado. E minha pedicure favorita, a Cleci, não troco por nada.",
  },
  {
    quote:
      "Atendimento perfeito e impecável, com excelentes profissionais. Todos são muito educados e simpáticos.",
  },
  {
    quote: "Recomendo. Produtos de boa qualidade e excelentes profissionais.",
  },
];

export const ProvaSocial = () => {
  return (
    <section className="bg-warm-white py-24 md:py-36">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="display text-6xl md:text-8xl text-ink">4,8</p>
          <p className="mt-4 font-sans text-sm uppercase tracking-[0.22em] text-muted-foreground">
            no Google
          </p>
          <span className="rule my-8 text-gold" aria-hidden="true" />
          <p className="font-sans text-sm text-muted-foreground">54 avaliações</p>
        </Reveal>

        <div className="lg:col-span-7 lg:col-start-6 space-y-12">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.quote} delay={i * 0.08}>
              <blockquote className="border-t border-border pt-8">
                <p className="font-serif text-xl md:text-2xl leading-snug text-ink">
                  {review.quote}
                </p>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
