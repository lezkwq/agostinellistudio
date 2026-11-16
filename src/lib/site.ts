/**
 * Constantes centrais da marca.
 * Mantidas em um único módulo para evitar divergência entre componentes.
 */

export const WHATSAPP_URL =
  "https://wa.me/5547997448601?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Agostinelli%20Studio%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.";

export const WHATSAPP_SERVICOS_URL =
  "https://wa.me/5547997448601?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Agostinelli%20Studio%20e%20quero%20saber%20mais%20sobre%20os%20servi%C3%A7os.";

export const INSTAGRAM_URL = "https://www.instagram.com/agostinelli_studio/";
export const INSTAGRAM_HANDLE = "@agostinelli_studio";

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Agostinelli+Studio%2C+R.+Luiz+Gonzaga+de+Souza%2C+35%2C+Centro%2C+Cambori%C3%BA+SC";

export const ADDRESS_LINES = ["R. Luiz Gonzaga de Souza, 35", "Centro", "Camboriú, SC · 88340-000"] as const;
export const PHONE_DISPLAY = "(47) 99744-8601";
export const RATING = "4,9";
export const REVIEW_COUNT = "67 avaliações";

export const NAV_ITEMS = [
  { label: "Serviços", href: "#servicos" },
  { label: "O Studio", href: "#studio" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Contato", href: "#contato" },
] as const;
