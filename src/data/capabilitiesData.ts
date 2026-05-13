import type { LeadCard } from "./servicesData";

export type CapabilityGroup = {
  title: string;
  icon: string;
  promise: string;
  modules: string[];
  outcome: string;
  modal: LeadCard;
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Estrategia y Growth",
    icon: "target",
    promise: "Convertimos objetivos comerciales en un roadmap digital priorizado.",
    modules: ["Diagnóstico digital", "Oferta y posicionamiento", "Roadmap de crecimiento", "Arquitectura de funnel"],
    outcome: "Menos improvisación, más foco comercial.",
    modal: {
      title: "Estrategia y Growth",
      subtitle: "Roadmap digital conectado a objetivos de negocio.",
      icon: "target",
      cta: "Diagnosticar mi crecimiento",
      modalTitle: "Detectemos qué está frenando tu crecimiento digital",
      modalDescription: "Revisaremos oferta, canales, conversión, seguimiento y medición para priorizar las acciones con mayor impacto comercial.",
      modalFocus: "Estrategia y Growth",
      hiddenCategory: "estrategia-growth",
    },
  },
  {
    title: "Activos de Conversión",
    icon: "lineChart",
    promise: "Diseñamos experiencias que transforman atención en oportunidades reales.",
    modules: ["Web premium", "Landings", "E-commerce", "UX/CRO", "Copywriting comercial"],
    outcome: "Cada visita entiende qué haces y cuál es el siguiente paso.",
    modal: {
      title: "Activos de Conversión",
      subtitle: "Webs, landings y experiencias orientadas a captar oportunidades.",
      icon: "lineChart",
      cta: "Mejorar mi conversión",
      modalTitle: "Evaluemos tus activos de conversión",
      modalDescription: "Analizaremos claridad, confianza, velocidad, formularios, CTAs y fricciones que pueden estar reduciendo consultas calificadas.",
      modalFocus: "Activos de Conversión",
      hiddenCategory: "activos-conversion",
    },
  },
  {
    title: "Adquisición y Posicionamiento",
    icon: "megaphone",
    promise: "Conectamos SEO, contenido, redes y paid media con rutas de captación.",
    modules: ["SEO avanzado", "Paid media", "Contenido estratégico", "Social orientado a captación"],
    outcome: "Demanda más calificada y menos tráfico desperdiciado.",
    modal: {
      title: "Adquisición y Posicionamiento",
      subtitle: "Canales diseñados para atraer demanda calificada.",
      icon: "megaphone",
      cta: "Auditar mi captación",
      modalTitle: "Revisemos cómo estás captando oportunidades",
      modalDescription: "Evaluaremos SEO, campañas, redes, mensajes y rutas hacia conversión para detectar qué canal puede rendir mejor.",
      modalFocus: "Adquisición y Posicionamiento",
      hiddenCategory: "adquisicion-posicionamiento",
    },
  },
  {
    title: "Automatización e IA",
    icon: "bot",
    promise: "Implementamos flujos que responden, califican, derivan y activan seguimiento.",
    modules: ["Agentes IA", "Chatbots inteligentes", "CRM", "Alertas comerciales", "Seguimiento automático"],
    outcome: "Menos leads fríos por respuesta lenta o procesos manuales.",
    modal: {
      title: "Automatización e IA",
      subtitle: "IA aplicada a atención, calificación y seguimiento comercial.",
      icon: "bot",
      cta: "Automatizar mi seguimiento",
      modalTitle: "Detectemos dónde la IA puede acelerar tu sistema comercial",
      modalDescription: "Mapearemos consultas, respuestas, CRM, derivaciones y tareas repetitivas para reducir tiempos y recuperar oportunidades.",
      modalFocus: "Automatización e IA",
      hiddenCategory: "automatizacion-ia",
    },
  },
  {
    title: "Data y Optimización",
    icon: "barChart",
    promise: "Medimos lo que importa y convertimos datos en decisiones accionables.",
    modules: ["GA4", "GTM", "Eventos", "Dashboards", "Funnels", "Experimentos CRO"],
    outcome: "Control real sobre campañas, leads y comportamiento.",
    modal: {
      title: "Data y Optimización",
      subtitle: "Tracking avanzado, dashboards y mejora continua.",
      icon: "barChart",
      cta: "Medir mejor mis campañas",
      modalTitle: "Revisemos si estás midiendo lo que realmente mueve ventas",
      modalDescription: "Analizaremos eventos, funnels, atribución, dashboards y puntos ciegos que impiden optimizar con confianza.",
      modalFocus: "Data y Optimización",
      hiddenCategory: "data-optimizacion",
    },
  },
  {
    title: "Marca y Confianza",
    icon: "badgeCheck",
    promise: "Elevamos percepción para que tu empresa se vea tan sólida como la solución que ofrece.",
    modules: ["Branding estratégico", "Dirección visual", "Percepción premium", "Sistemas de diseño"],
    outcome: "Más autoridad antes de la primera conversación comercial.",
    modal: {
      title: "Marca y Confianza",
      subtitle: "Experiencia premium que aumenta autoridad y confianza.",
      icon: "badgeCheck",
      cta: "Elevar mi marca",
      modalTitle: "Evaluemos si tu marca transmite suficiente confianza",
      modalDescription: "Revisaremos identidad, narrativa, consistencia visual y señales de autoridad para mejorar percepción y disposición a cotizar.",
      modalFocus: "Marca y Confianza",
      hiddenCategory: "marca-confianza",
    },
  },
];

export const growthSystemSteps = [
  {
    icon: "target",
    title: "Estrategia",
    problem: "Acciones aisladas sin foco comercial.",
    implementation: "Definimos oferta, canales, mensaje, objetivos y prioridades.",
    result: "Un mapa claro para invertir donde hay mayor impacto.",
  },
  {
    icon: "megaphone",
    title: "Captación",
    problem: "Tráfico disperso que no siempre llega con intención.",
    implementation: "Conectamos SEO, campañas, contenido y redes a rutas de demanda.",
    result: "Más oportunidades calificadas entrando al sistema.",
  },
  {
    icon: "lineChart",
    title: "Conversión",
    problem: "Visitas que entienden poco y abandonan rápido.",
    implementation: "Creamos webs, landings, UX, copy, formularios y CTAs con foco CRO.",
    result: "Cada visita tiene una ruta clara hacia consulta.",
  },
  {
    icon: "bot",
    title: "Automatización",
    problem: "Leads que se enfrían por respuesta lenta o seguimiento manual.",
    implementation: "Integramos CRM, flujos, IA, alertas y derivación comercial.",
    result: "Respuestas más rápidas y menos oportunidades perdidas.",
  },
  {
    icon: "barChart",
    title: "Medición",
    problem: "Decisiones por intuición o reportes que no explican ventas.",
    implementation: "Configuramos GA4, GTM, eventos, funnels, dashboards y atribución.",
    result: "Control sobre qué canal, mensaje y acción genera avance.",
  },
  {
    icon: "activity",
    title: "Optimización",
    problem: "El sistema se lanza y queda estático.",
    implementation: "Iteramos con CRO, experimentos, comportamiento y aprendizajes.",
    result: "Mejora continua basada en datos, no opiniones.",
  },
];
