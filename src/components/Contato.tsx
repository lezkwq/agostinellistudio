import { Instagram } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  ADDRESS_LINES,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  WHATSAPP_URL,
} from "@/lib/site";

export const Contato = () => {
  return (
    <section id="contato" className="bg-oxblood text-warm-white py-28 md:py-44">
      <div className="shell">
        <Reveal>
          <h2 className="display max-w-[14ch] text-5xl sm:text-7xl lg:text-[6.5rem]">
            Seu próximo horário{" "}
            <span className="italic">começa aqui.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-14 grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <p className="max-w-sm font-sans text-sm md:text-base leading-relaxed text-warm-white/80">
                Entre em contato pelo WhatsApp e consulte a agenda.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial mt-8 border-warm-white bg-warm-white text-ink hover:bg-transparent hover:text-warm-white"
              >
                Agendar horário
              </a>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <div className="flex items-center gap-6">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram do Spazio & L'Élégance, ${INSTAGRAM_HANDLE}`}
                  className="transition-colors duration-500 hover:text-gold"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar com o Spazio pelo WhatsApp"
                  className="transition-colors duration-500 hover:text-gold"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
                <span className="font-sans text-xs tracking-[0.18em] text-warm-white/70">
                  {INSTAGRAM_HANDLE}
                </span>
              </div>

              <address className="mt-8 not-italic font-sans text-sm leading-relaxed text-warm-white/80">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </a>
              </address>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
