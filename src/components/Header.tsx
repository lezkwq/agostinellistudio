import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, WHATSAPP_URL } from "@/lib/site";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-700",
        scrolled || menuOpen
          ? "bg-ivory text-ink border-b border-border"
          : "bg-transparent text-warm-white"
      )}
    >
      <div className="shell flex items-center justify-between py-5 md:py-6">
        <a
          href="#topo"
          className="font-serif text-base md:text-lg tracking-[0.06em]"
          aria-label="Spazio & L'Élégance, início"
        >
          Spazio <span className="italic">&amp;</span> L&apos;Élégance
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline font-sans text-[11px] uppercase tracking-[0.24em]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial hidden sm:inline-flex hover:bg-current"
          >
            <span className={cn(scrolled || menuOpen ? "hover:text-ivory" : "hover:text-ink")}>
              Agendar horário
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden p-2 -mr-2"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Navegação mobile"
          className="lg:hidden bg-ivory text-ink border-t border-border"
        >
          <ul className="shell py-8 space-y-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial w-full bg-oxblood text-warm-white border-oxblood"
              >
                Agendar horário
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
