export type Market = {
  slug: string;
  country: string;
  city: string;
  title: string;
  metaDescription: string;
  h1: string;
  marketContext: string;
  problems: string[];
  industries: string[];
  recommendedServices: string[];
  scenarios: string[];
  faqs: [string, string][];
  ctaLabel: string;
  diagnosticUrl: string;
};

export const markets: Record<string, Market> = {
  santiago: {
    slug: "santiago",
    country: "Chile",
    city: "Santiago",
    title: "Agencia de marketing digital en Santiago para empresas B2B | ENIX STUDIO",
    metaDescription:
      "Marketing digital, desarrollo web, SEO, automatizacion e IA para empresas B2B en Santiago que necesitan captar oportunidades y medir resultados.",
    h1: "Agencia de marketing digital en Santiago para empresas B2B y de alto crecimiento",
    marketContext:
      "Santiago es un mercado competitivo, con empresas que necesitan diferenciarse con una presencia digital clara, medible y orientada a conversion comercial.",
    problems: [
      "Alta competencia digital en busquedas y anuncios",
      "Campanas activas sin medicion clara de oportunidades",
      "Webs genericas que no explican valor ni confianza",
      "Leads que se enfrian por falta de seguimiento comercial",
    ],
    industries: ["Empresas B2B", "Servicios profesionales", "Tecnologia", "Ecommerce"],
    recommendedServices: [
      "Desarrollo web orientado a conversion",
      "SEO avanzado para demanda local y sectorial",
      "Paid media con tracking de oportunidades",
      "Automatizacion comercial e IA para seguimiento",
    ],
    scenarios: [
      "Tu empresa recibe visitas, pero pocas consultas calificadas.",
      "El equipo comercial no sabe que canal realmente genera oportunidades.",
      "Tu marca compite contra empresas con mejor percepcion digital.",
    ],
    faqs: [
      [
        "Que tipo de empresas atiende ENIX STUDIO en Santiago?",
        "Trabajamos con empresas B2B, servicios profesionales, ecommerce y tecnologia que necesitan ordenar su presencia digital y generar oportunidades medibles.",
      ],
      [
        "Pueden mejorar una web existente?",
        "Si. Revisamos mensaje, velocidad, SEO, conversion, tracking y rutas de contacto antes de decidir si conviene optimizar o rediseniar.",
      ],
    ],
    ctaLabel: "Solicitar diagnostico para mi empresa en Santiago",
    diagnosticUrl: "/diagnostico?zona=santiago",
  },
  antofagasta: {
    slug: "antofagasta",
    country: "Chile",
    city: "Antofagasta",
    title: "Agencia de marketing digital en Antofagasta para empresas industriales | ENIX STUDIO",
    metaDescription:
      "Marketing digital, web, SEO y automatizacion para empresas industriales, mineras y B2B en Antofagasta que necesitan transmitir confianza.",
    h1: "Agencia de marketing digital en Antofagasta para empresas industriales, mineras y B2B",
    marketContext:
      "Antofagasta concentra empresas industriales, proveedores mineros, servicios tecnicos y negocios B2B que necesitan transmitir confianza digital ante clientes corporativos.",
    problems: [
      "Presencia digital debil frente a clientes corporativos",
      "Webs antiguas o poco tecnicas para procesos de venta B2B",
      "Poca claridad comercial en servicios industriales",
      "Falta de seguimiento de oportunidades y solicitudes",
    ],
    industries: ["Proveedores mineros", "Empresas industriales", "Servicios tecnicos", "Logistica"],
    recommendedServices: [
      "Web corporativa para empresas industriales",
      "SEO para proveedores mineros y servicios tecnicos",
      "Branding y narrativa de confianza",
      "CRM, formularios y automatizacion de seguimiento",
    ],
    scenarios: [
      "Tu empresa depende demasiado de referidos y relaciones comerciales.",
      "Clientes corporativos revisan tu web y no encuentran informacion clara.",
      "Las consultas llegan por canales dispersos y se pierden oportunidades.",
    ],
    faqs: [
      [
        "ENIX STUDIO trabaja con proveedores mineros?",
        "Si. Ayudamos a ordenar propuesta de valor, presencia web, SEO, formularios y seguimiento comercial para proveedores mineros e industriales.",
      ],
      [
        "Se puede posicionar una empresa industrial local en Google?",
        "Si, siempre que exista una arquitectura clara, contenido tecnico real, paginas indexables y medicion de oportunidades.",
      ],
    ],
    ctaLabel: "Revisar presencia digital en Antofagasta",
    diagnosticUrl: "/diagnostico?zona=antofagasta",
  },
  calama: {
    slug: "calama",
    country: "Chile",
    city: "Calama",
    title: "Marketing digital y desarrollo web en Calama | ENIX STUDIO",
    metaDescription:
      "Desarrollo web, SEO, marketing digital y automatizacion para empresas tecnicas, industriales y de servicios en Calama.",
    h1: "Marketing digital y desarrollo web en Calama para empresas tecnicas, industriales y de servicios",
    marketContext:
      "Calama reune comercio local, proveedores industriales y empresas tecnicas que necesitan verse mas profesionales, captar consultas y ordenar su presencia digital.",
    problems: [
      "Dependencia excesiva de redes sociales",
      "Poca visibilidad en Google para busquedas locales",
      "Baja confianza visual frente a clientes nuevos",
      "Consultas sin seguimiento ni registro comercial",
    ],
    industries: ["Comercio local", "Servicios tecnicos", "Proveedores industriales", "Construccion"],
    recommendedServices: [
      "Sitio web profesional y rapido",
      "SEO local para aparecer en busquedas relevantes",
      "Landing pages para campanas y servicios",
      "Automatizacion simple de consultas y formularios",
    ],
    scenarios: [
      "Tu negocio funciona, pero no se ve tan profesional como deberia.",
      "Los clientes preguntan por WhatsApp, redes o referidos sin un sistema central.",
      "Quieres aparecer en Google cuando buscan servicios como los tuyos en Calama.",
    ],
    faqs: [
      [
        "Sirve una pagina local para empresas en Calama?",
        "Si. Una URL local permite explicar mejor el contexto, orientar busquedas locales y conectar campanas con una pagina relevante.",
      ],
      [
        "Necesito invertir en publicidad para partir?",
        "No siempre. Primero conviene ordenar web, mensaje, SEO basico y medicion para que cualquier inversion posterior tenga mejor retorno.",
      ],
    ],
    ctaLabel: "Solicitar diagnostico digital en Calama",
    diagnosticUrl: "/diagnostico?zona=calama",
  },
};

export const marketList = Object.values(markets);
