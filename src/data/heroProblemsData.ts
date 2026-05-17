import type { LeadCard } from "./servicesData";

export type HeroProblem = {
  id: string;
  label: string;
  insight: string;
  description: string;
  recommendation: string;
  chaosInsight: string;
  chaosDescription: string;
  chaosEvents: string[];
  chaosMetrics: Array<{ label: string; value: string }>;
  activeNode: string;
  metricLabel: string;
  metricValue: string;
};

export const heroLeadContext: LeadCard = {
  title: "Diagnóstico general del sistema digital",
  subtitle: "Captación, conversión, CRM, IA, tracking y optimización.",
  icon: "radar",
  cta: "Solicitar diagnóstico",
  modalTitle: "Revisemos tu sistema digital completo",
  modalDescription:
    "Analizaremos captación, conversión, seguimiento, automatización, IA y medición para detectar dónde se están escapando oportunidades comerciales.",
  modalFocus: "Diagnóstico general del sistema digital",
  hiddenCategory: "diagnostico-sistema-digital",
};

export const heroProblems: HeroProblem[] = [
  {
    id: "canal",
    label: "No sé qué canal funciona",
    insight: "Punto ciego de atribución",
    description: "Tus canales pueden estar generando actividad, pero sin trazabilidad no sabes qué realmente acerca oportunidades.",
    recommendation: "Tracking avanzado, eventos y dashboard por canal.",
    chaosInsight: "Canales sin atribución",
    chaosDescription: "Hay visitas, clics y mensajes, pero no queda claro qué canal genera oportunidades reales.",
    chaosEvents: ["Campaña sin atribución", "Origen no detectado", "Métricas vanidosas"],
    chaosMetrics: [
      { label: "Tracking", value: "0%" },
      { label: "Canales", value: "Sin comparar" },
      { label: "Decisión", value: "Intuición" },
    ],
    activeNode: "Métricas",
    metricLabel: "Tracking",
    metricValue: "100%",
  },
  {
    id: "whatsapp",
    label: "Pierdo leads por WhatsApp",
    insight: "Respuesta tardía",
    description: "Cada consulta sin respuesta rápida pierde urgencia y abre espacio a otra alternativa.",
    recommendation: "IA comercial, CRM, alertas y seguimiento automático.",
    chaosInsight: "Leads enfriándose",
    chaosDescription: "Las consultas llegan, pero sin registro ni alerta comercial pueden perder prioridad en minutos.",
    chaosEvents: ["Lead sin seguimiento", "WhatsApp tarde", "Cotiza con otro"],
    chaosMetrics: [
      { label: "Respuesta", value: "Manual" },
      { label: "Leads", value: "Sin clasificar" },
      { label: "Alertas", value: "0" },
    ],
    activeNode: "IA",
    metricLabel: "Respuesta",
    metricValue: "12s",
  },
  {
    id: "conversion",
    label: "Mi web no convierte",
    insight: "Fricción de conversión",
    description: "El tráfico no escala si la experiencia no transforma intención en consulta clara.",
    recommendation: "CRO, UX, copy, formularios y landings conectadas al CRM.",
    chaosInsight: "Visitas sin acción",
    chaosDescription: "La web recibe atención, pero el usuario no encuentra una ruta clara para confiar y consultar.",
    chaosEvents: ["Abandono en landing", "CTA poco visible", "Formulario sin medir"],
    chaosMetrics: [
      { label: "CRO", value: "Débil" },
      { label: "CTA", value: "Difuso" },
      { label: "Medición", value: "Parcial" },
    ],
    activeNode: "Conversión",
    metricLabel: "CRO",
    metricValue: "3.2x",
  },
  {
    id: "seo",
    label: "Quiero aparecer en Google",
    insight: "Demanda sin visibilidad",
    description: "Tus clientes pueden estar buscando soluciones, pero encontrando primero a la competencia.",
    recommendation: "SEO técnico, arquitectura, contenido por intención y medición orgánica.",
    chaosInsight: "Búsquedas perdidas",
    chaosDescription: "La demanda existe en Google, pero si tu sitio no está preparado, esa intención llega a otros.",
    chaosEvents: ["Intención SEO débil", "Servicio sin ranking", "Competidor aparece"],
    chaosMetrics: [
      { label: "SEO", value: "Débil" },
      { label: "Contenido", value: "Sin foco" },
      { label: "Schema", value: "Ausente" },
    ],
    activeNode: "Captación",
    metricLabel: "SEO",
    metricValue: "+180%",
  },
];
