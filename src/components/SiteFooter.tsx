import { Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  ADDRESS_LINES,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/site";

export const SiteFooter = () => {
  return (
    <footer className="bg-ivory text-ink py-14 pb-28 md:pb-16">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-xl">
            Agostinelli <span className="italic">Studio</span>
          </p>
          <p className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Beleza, cuidado e acolhimento
          </p>
        </div>

        <address className="not-italic font-sans text-sm text-muted-foreground">
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="link-underline">
            {ADDRESS_LINES.join(", ")}
          </a>
        </address>

        <div className="flex items-center gap-5">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${INSTAGRAM_HANDLE}`}
            className="transition-colors duration-500 hover:text-gold"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp do Agostinelli Studio"
            className="transition-colors duration-500 hover:text-gold"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>

        <a href="tel:+5547997448601" className="font-sans text-sm text-muted-foreground link-underline">
          {PHONE_DISPLAY}
        </a>
      </div>
    </footer>
  );
};
