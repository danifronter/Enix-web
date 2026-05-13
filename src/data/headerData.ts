import type { LeadCard } from "./servicesData";

export const homeHeaderLinks = [
  { label: "Desafío", href: "#problema" },
  { label: "Solución", href: "#sistema-enix" },
  { label: "Servicios", href: "#servicios" },
  { label: "Método", href: "#metodologia" },
  { label: "Resultados", href: "#resultados" },
  { label: "Diagnóstico", href: "#diagnostico" },
];

export const globalHeaderLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios/" },
  { label: "Casos", href: "/casos/" },
  { label: "Blog", href: "/blog/" },
  { label: "Nosotros", href: "/nosotros/" },
  { label: "Contacto", href: "/contacto/" },
];

export const homeMegaMenuLinks = [
  {
    label: "Servicios",
    href: "/servicios/",
    description: "Capacidades de growth, IA, conversión, tracking y automatización.",
  },
  {
    label: "Casos",
    href: "/casos/",
    description: "Escenarios de transformación digital y sistemas comerciales conectados.",
  },
  {
    label: "Blog",
    href: "/blog/",
    description: "Guías para mejorar captación, performance, SEO y conversión.",
  },
  {
    label: "Nosotros",
    href: "/nosotros/",
    description: "Cómo trabaja ENIX como partner estratégico de crecimiento.",
  },
  {
    label: "Contacto",
    href: "/contacto/",
    description: "Agenda una conversación para revisar tu sistema digital.",
  },
];

export const headerLeadContext: LeadCard = {
  title: "Diagnóstico desde header",
  subtitle: "Revisión inicial de captación, conversión, automatización y medición.",
  icon: "radar",
  cta: "Solicitar diagnóstico",
  modalTitle: "Solicita un diagnóstico de tu sistema digital",
  modalDescription:
    "Revisaremos captación, conversión, seguimiento, automatización, IA y medición para detectar oportunidades concretas de mejora.",
  modalFocus: "Diagnóstico desde header",
  hiddenCategory: "diagnostico-header",
};
