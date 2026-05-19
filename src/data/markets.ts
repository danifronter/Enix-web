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
  "region-metropolitana": {
    slug: "region-metropolitana",
    country: "Chile",
    city: "Region Metropolitana",
    title: "Agencia de Marketing Digital en Region Metropolitana | ENIX STUDIO",
    metaDescription:
      "Marketing digital, desarrollo web, SEO, paid media, automatizacion e IA para empresas B2B, ecommerce, tecnologia y servicios profesionales en Region Metropolitana.",
    h1: "Agencia de marketing digital en Region Metropolitana para empresas B2B y de alto crecimiento",
    marketContext:
      "La Region Metropolitana concentra mercados altamente competitivos, equipos comerciales exigentes y empresas que necesitan diferenciarse con una presencia digital clara, medible y orientada a conversion.",
    problems: [
      "Alta competencia digital en busquedas, anuncios y comparacion de proveedores",
      "Campanas activas sin medicion clara de oportunidades comerciales",
      "Webs genericas que no transmiten autoridad ni diferenciacion",
      "Leads que se enfrian por falta de seguimiento y automatizacion comercial",
    ],
    industries: ["Empresas B2B", "Servicios profesionales", "Ecommerce", "Tecnologia"],
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
      "Necesitas campañas, SEO y web trabajando como un solo sistema medible.",
    ],
    faqs: [
      [
        "Que tipo de empresas atiende ENIX STUDIO en Region Metropolitana?",
        "Trabajamos con empresas B2B, servicios profesionales, ecommerce y tecnologia que necesitan ordenar su presencia digital y generar oportunidades medibles.",
      ],
      [
        "Pueden mejorar una web existente?",
        "Si. Revisamos mensaje, velocidad, SEO, conversion, tracking y rutas de contacto antes de decidir si conviene optimizar o rediseniar.",
      ],
    ],
    ctaLabel: "Solicitar diagnostico para Region Metropolitana",
    diagnosticUrl: "/diagnostico?zona=region-metropolitana",
  },
  "region-antofagasta": {
    slug: "region-antofagasta",
    country: "Chile",
    city: "Region de Antofagasta",
    title: "Agencia de Marketing Digital en Region de Antofagasta | ENIX STUDIO",
    metaDescription:
      "Marketing digital, web, SEO, branding, automatizacion y tracking para empresas industriales, mineras, servicios tecnicos y B2B en Region de Antofagasta.",
    h1: "Agencia de marketing digital en Region de Antofagasta para empresas industriales, mineras y B2B",
    marketContext:
      "La Region de Antofagasta concentra actividad industrial, proveedores mineros, servicios tecnicos, logistica, seguridad, capacitacion y negocios B2B que necesitan transmitir confianza digital ante clientes corporativos.",
    problems: [
      "Presencia digital debil frente a clientes corporativos e industriales",
      "Webs antiguas o poco tecnicas para procesos de cotizacion B2B",
      "Poca claridad comercial en servicios industriales, mineros o tecnicos",
      "Falta de seguimiento de oportunidades, formularios y solicitudes de cotizacion",
    ],
    industries: ["Proveedores mineros", "Empresas industriales", "Servicios tecnicos", "Logistica", "Seguridad", "Capacitacion"],
    recommendedServices: [
      "Web corporativa para empresas industriales",
      "SEO para proveedores mineros y servicios tecnicos",
      "Branding y narrativa de confianza",
      "Tracking, formularios y automatizacion de seguimiento",
    ],
    scenarios: [
      "Tu empresa atiende Antofagasta, Calama, Mejillones u otras zonas de la region, pero la web no explica bien su capacidad tecnica.",
      "Clientes corporativos revisan tu presencia digital antes de solicitar una cotizacion.",
      "Las consultas llegan por canales dispersos y se pierden oportunidades por falta de seguimiento.",
      "Necesitas mostrar servicios, certificaciones, experiencia y formularios claros sin parecer improvisado.",
    ],
    faqs: [
      [
        "ENIX STUDIO trabaja con proveedores mineros e industriales?",
        "Si. Ayudamos a ordenar propuesta de valor, presencia web, SEO, formularios y seguimiento comercial para proveedores mineros, empresas industriales y servicios tecnicos.",
      ],
      [
        "Por que no crear una pagina principal solo para Calama?",
        "Calama puede mencionarse de forma natural dentro del contexto industrial de la Region de Antofagasta. La pagina regional evita una arquitectura de ciudades sueltas y permite contenido mas serio y escalable.",
      ],
    ],
    ctaLabel: "Solicitar diagnostico para Region de Antofagasta",
    diagnosticUrl: "/diagnostico?zona=region-antofagasta",
  },
};

export const marketList = Object.values(markets);
