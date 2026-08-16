import { Reveal } from "@/components/Reveal";
import { WHATSAPP_URL } from "@/lib/site";
import maquiagemAsset from "@/assets/maquiagem-processo.webp";
import unhasVinhoAsset from "@/assets/unhas-vinho.webp";


interface ServiceGroup {
  index: string;
  title: string;
  items: string[];
  note?: string;
}

const GROUPS: ServiceGroup[] = [
  {
    index: "01",
    title: "Cabelos",
    items: [
      "Cortes",
      "Coloração",
      "Mechas",
      "Reconstrução capilar",
      "Terapia capilar",
      "Tratamentos e cuidados capilares",
    ],
  },
  {
    index: "02",
    title: "Unhas",
    items: ["Manicure", "Pedicure"],
  },
  {
    index: "03",
    title: "Produção",
    items: [
      "Maquiagem",
      "Penteados",
      "Produções para eventos",
      "Produções para noivas",
    ],
  },
  {
    index: "04",
    title: "Estética",
    items: [],
    note: "Consulte os procedimentos disponíveis pelo WhatsApp.",
  },
];

export const Servicos = () => {
  return (
    <section id="servicos" className="bg-warm-white py-24 md:py-36">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-gold">Serviços</p>
          </Reveal>

          <dl className="mt-10 border-t border-border">
            {GROUPS.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.06}>
                <div className="grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-8 md:grid-cols-[5rem_1fr] md:py-10">
                  <dt className="font-sans text-[11px] tracking-[0.24em] text-gold pt-2">
                    {group.index}
                  </dt>
                  <dd>
                    <h3 className="display text-4xl md:text-6xl text-ink">{group.title}</h3>
                    {group.items.length > 0 && (
                      <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2 font-sans text-sm text-muted-foreground">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {group.note && (
                      <p className="mt-5 font-sans text-sm text-muted-foreground">
                        {group.note}
                      </p>
                    )}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={0.1}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial mt-12 border-ink text-ink hover:bg-ink hover:text-warm-white"
            >
              Consultar disponibilidade
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9 lg:sticky lg:top-28 lg:self-start">
          <figure className="img-zoom overflow-hidden">
            <img
              src={maquiagemAsset}
              alt="Maquiador da casa finalizando a maquiagem de uma cliente com pincel"
              loading="lazy"
              decoding="async"
              className="h-[22rem] w-full object-cover object-[50%_45%] lg:h-[28rem]"
            />
          </figure>
          <figure className="img-zoom mt-4 overflow-hidden md:mt-6">
            <img
              src={unhasVinhoAsset}
              alt="Unhas em esmalte vinho cremoso feitas no Spazio"
              loading="lazy"
              decoding="async"
              className="h-[12rem] w-full object-cover object-center lg:h-[15rem]"
            />
          </figure>
          <figcaption className="mt-4 font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Atendimento por horário marcado
          </figcaption>
        </Reveal>

      </div>
    </section>
  );
};
