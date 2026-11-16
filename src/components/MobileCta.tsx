import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/site";

/** CTA fixo e discreto, visível apenas no mobile após o hero. */
export const MobileCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 md:hidden transition-transform duration-500",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-ink px-6 py-4 text-center font-sans text-[11px] uppercase tracking-[0.24em] text-warm-white"
      >
        Agendar pelo WhatsApp
      </a>
    </div>
  );
};
