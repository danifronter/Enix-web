export type IndustryPage = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  challenges: string[];
  services: string[];
  outcomes: string[];
};

export const industryPages: IndustryPage[] = [
  {
    slug: "empresas-b2b",
    title: "Empresas B2B",
    seoTitle: "Marketing Digital para Empresas B2B | Enix Studio",
    metaDescription:
      "Estrategia digital, desarrollo web, SEO, automatizacion y analitica para empresas B2B que necesitan captar oportunidades y mejorar seguimiento comercial.",
    h1: "Marketing, tecnologia y automatizacion para empresas B2B",
    intro:
      "Las empresas B2B necesitan comunicar confianza, explicar servicios complejos y convertir visitas en conversaciones comerciales medibles. Enix Studio ayuda a ordenar web, SEO, campanas, formularios y seguimiento para que el marketing no quede desconectado de ventas.",
    challenges: [
      "Ciclos de venta largos y decisiones con varios actores",
      "Servicios dificiles de explicar en una web generica",
      "Leads sin clasificacion ni seguimiento comercial",
      "Campanas o contenidos sin medicion de oportunidades reales",
    ],
    services: ["Desarrollo web", "SEO avanzado", "Paid media", "Automatizacion comercial", "Analitica y tracking"],
    outcomes: ["Mayor claridad comercial", "Mejor captacion de leads", "Seguimiento mas ordenado", "Datos para priorizar inversiones"],
  },
  {
    slug: "empresas-industriales",
    title: "Empresas industriales",
    seoTitle: "Marketing Digital para Empresas Industriales | Enix Studio",
    metaDescription:
      "Desarrollo web, branding, SEO, formularios, tracking y automatizacion para empresas industriales, proveedores tecnicos y negocios B2B.",
    h1: "Marketing digital para empresas industriales que necesitan transmitir confianza tecnica",
    intro:
      "Las empresas industriales compiten por confianza, claridad tecnica y capacidad de respuesta. Una presencia digital seria ayuda a mostrar servicios, certificaciones, experiencia, formularios de cotizacion y seguimiento comercial sin parecer improvisado.",
    challenges: [
      "Webs antiguas que no reflejan capacidad tecnica real",
      "Servicios industriales explicados de forma poco clara",
      "Cotizaciones y solicitudes dispersas en canales manuales",
      "Baja visibilidad en busquedas de proveedores o servicios especializados",
    ],
    services: ["Web corporativa industrial", "Branding", "SEO tecnico", "Tracking", "Automatizacion de solicitudes"],
    outcomes: ["Mejor percepcion profesional", "Solicitudes mas claras", "Mayor visibilidad", "Procesos comerciales mas medibles"],
  },
  {
    slug: "proveedores-mineros",
    title: "Proveedores mineros",
    seoTitle: "Marketing Digital para Proveedores Mineros | Enix Studio",
    metaDescription:
      "Presencia digital, desarrollo web, SEO y seguimiento comercial para proveedores mineros, servicios tecnicos y empresas industriales.",
    h1: "Presencia digital para proveedores mineros y servicios tecnicos",
    intro:
      "Los proveedores mineros necesitan mostrar experiencia, seguridad, servicios, certificaciones y capacidad operativa con claridad. Enix Studio ayuda a convertir esa informacion en una presencia digital profesional, medible y preparada para oportunidades B2B.",
    challenges: [
      "Diferenciacion debil frente a otros proveedores",
      "Falta de paginas claras por servicio o capacidad tecnica",
      "Poca trazabilidad de solicitudes de cotizacion",
      "Contenido insuficiente para generar confianza corporativa",
    ],
    services: ["Desarrollo web", "Branding industrial", "SEO B2B", "Formularios de cotizacion", "Analitica"],
    outcomes: ["Mayor confianza corporativa", "Servicios mejor explicados", "Consultas mas ordenadas", "Base digital lista para prospeccion"],
  },
];
