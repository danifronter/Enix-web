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
  {
    slug: "servicios-profesionales",
    title: "Servicios profesionales",
    seoTitle: "Marketing Digital para Servicios Profesionales | Enix Studio",
    metaDescription:
      "Desarrollo web, SEO, branding, automatizacion y analitica para consultoras, estudios, asesorias y empresas de servicios profesionales.",
    h1: "Marketing digital para servicios profesionales que necesitan transmitir confianza",
    intro:
      "Las empresas de servicios profesionales venden confianza, criterio y experiencia. Enix Studio ayuda a convertir esa propuesta en una presencia digital clara, con contenido, formularios, SEO y seguimiento para generar conversaciones comerciales de mayor calidad.",
    challenges: [
      "Servicios dificiles de diferenciar frente a competidores similares",
      "Webs con poca claridad sobre oferta, experiencia y resultados",
      "Baja visibilidad en busquedas de alto valor comercial",
      "Consultas sin trazabilidad ni seguimiento ordenado",
    ],
    services: ["Desarrollo web", "SEO", "Branding", "Paid media", "Analitica y tracking"],
    outcomes: ["Mayor autoridad percibida", "Mejor calidad de consultas", "Contenido mas claro", "Seguimiento comercial medible"],
  },
  {
    slug: "ecommerce",
    title: "Ecommerce",
    seoTitle: "Marketing Digital para Ecommerce | Enix Studio",
    metaDescription:
      "Estrategia digital, desarrollo ecommerce, SEO, paid media, tracking y automatizacion para tiendas online que necesitan vender y medir mejor.",
    h1: "Marketing digital para ecommerce que necesitan vender y medir mejor",
    intro:
      "Un ecommerce necesita mucho mas que una tienda visualmente correcta. Enix Studio trabaja conversion, velocidad, catalogo, SEO, campanas, eventos y automatizacion para que cada canal pueda medirse y optimizarse.",
    challenges: [
      "Tienda lenta o dificil de usar en mobile",
      "Campanas sin medicion clara de conversiones reales",
      "Catalogos y categorias poco preparados para SEO",
      "Abandono de compra y seguimiento manual de clientes",
    ],
    services: ["Ecommerce", "SEO tecnico", "Paid media", "Tracking", "Automatizacion"],
    outcomes: ["Mejor experiencia de compra", "Mas claridad de conversion", "Categorias optimizadas", "Base lista para escalar campanas"],
  },
];
