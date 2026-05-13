import type { LeadCard } from "./servicesData";

export type HeroProblem = {
  id: string;
  label: string;
  insight: string;
  description: string;
  recommendation: string;
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
    activeNode: "Conversión",
    metricLabel: "CRO",
    metricValue: "3.2x",
  },
  {
    id: "campanas",
    label: "Mis campañas no retornan",
    insight: "Clics sin sistema",
    description: "Más presupuesto puede amplificar pérdidas si landing, eventos y seguimiento no están conectados.",
    recommendation: "Paid media + landing + eventos + CRM + dashboard de retorno.",
    activeNode: "Captación",
    metricLabel: "Funnel",
    metricValue: "+65%",
  },
];
