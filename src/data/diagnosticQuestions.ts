import type { LeadCard } from "./servicesData";

export const diagnosticQuestions = [
  "¿Tu web genera consultas calificadas todas las semanas?",
  "¿Sabes qué canal trae los mejores leads?",
  "¿Respondes cada consulta en menos de 5 minutos?",
  "¿Tienes CRM o seguimiento comercial claro?",
  "¿Tus campañas tienen eventos y conversiones bien medidos?",
  "¿Tu marca transmite confianza premium?",
  "¿Tienes automatizaciones para no depender de tareas manuales?",
];

export const diagnosticModalContext: LeadCard = {
  title: "Diagnóstico del sistema digital",
  subtitle: "Mini auditoría de captación, conversión, seguimiento y medición.",
  icon: "search",
  cta: "Solicitar diagnóstico completo",
  modalTitle: "Revisemos tu sistema digital completo",
  modalDescription: "Tomaremos como punto de partida tus respuestas para identificar fugas comerciales, oportunidades de automatización y prioridades de crecimiento.",
  modalFocus: "Diagnóstico del sistema digital",
  hiddenCategory: "diagnostico-interactivo",
};
