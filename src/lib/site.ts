/**
 * Constantes centrais da marca.
 * Mantidas em um único módulo para evitar divergência entre componentes.
 */

export const WHATSAPP_URL =
  "https://wa.me/5547991071099?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Spazio%20%26%20L%27%C3%89l%C3%A9gance%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.";

export const WHATSAPP_PRODUCAO_URL =
  "https://wa.me/5547991071099?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Spazio%20%26%20L%27%C3%89l%C3%A9gance%20e%20gostaria%20de%20falar%20sobre%20uma%20produ%C3%A7%C3%A3o.";

export const INSTAGRAM_URL = "https://www.instagram.com/salaospazioe/";
export const INSTAGRAM_HANDLE = "@salaospazioe";

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+3150%2C+81+Centro+Balne%C3%A1rio+Cambori%C3%BA+SC";

export const ADDRESS_LINES = ["Rua 3150, 81", "Centro", "Balneário Camboriú, SC"] as const;

export const NAV_ITEMS = [
  { label: "Serviços", href: "#servicos" },
  { label: "O Spazio", href: "#spazio" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Contato", href: "#contato" },
] as const;
