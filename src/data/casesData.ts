export type CaseStudy = {
  slug: string;
  title: string;
  label: string;
  category: string;
  icon: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  services: string[];
  objective: string;
  diagnosis: string[];
  process: string[];
  technologies: string[];
  before: string[];
  after: string[];
  learnings: string[];
};

export const caseFilters = ["Todos", "Desarrollo Web", "SEO", "Branding", "Automatización", "IA", "Paid Media", "E-commerce", "CRM"];

export const cases: CaseStudy[] = [
  {
    slug: "rediseno-web-corporativo-empresa-servicios",
    title: "Rediseño web corporativo para empresa de servicios",
    label: "Concepto estratégico",
    category: "Desarrollo Web",
    icon: "lineChart",
    summary: "Empresa con web antigua que no transmitía confianza ni explicaba con claridad su propuesta.",
    problem: "La empresa tenía una web antigua, poco clara y sin llamados a la acción visibles.",
    solution: "Se rediseñó la experiencia, se ordenó el mensaje comercial, se optimizó la velocidad y se integraron formularios de captación.",
    result: "Mayor percepción profesional, navegación más clara y mejor capacidad para convertir visitas en oportunidades.",
    services: ["Desarrollo Web Premium", "SEO Técnico", "Branding", "Conversión"],
    objective: "Transformar una presencia digital débil en un activo comercial confiable, rápido y orientado a consultas.",
    diagnosis: ["Mensaje inicial genérico", "Arquitectura de servicios confusa", "Baja percepción premium", "Sin tracking de conversiones"],
    process: ["Auditoría de mensaje y UX", "Nueva estructura por servicios", "Diseño visual premium", "Implementación performance-first", "Configuración de eventos y formularios"],
    technologies: ["Astro", "TailwindCSS", "Schema.org", "GA4", "GTM"],
    before: ["Diseño antiguo", "Mensaje confuso", "Sin CTA", "Sin medición"],
    after: ["Diseño premium", "Mensaje claro", "CTA estratégico", "Tracking activo"],
    learnings: ["La confianza se construye antes del formulario.", "Una web corporativa debe explicar valor, no solo listar servicios."],
  },
  {
    slug: "landing-page-captacion-leads",
    title: "Landing page para captación de leads",
    label: "Concepto estratégico",
    category: "Paid Media",
    icon: "target",
    summary: "Empresa que hacía campañas, pero enviaba tráfico a una página débil y dispersa.",
    problem: "La inversión en anuncios generaba clics, pero la página no contenía una propuesta específica ni una ruta de conversión.",
    solution: "Se creó una landing enfocada en una oferta, con prueba, beneficios, formulario corto, tracking y seguimiento.",
    result: "Más claridad para el usuario, menor fricción y mejor capacidad de medir oportunidades por campaña.",
    services: ["Landing Page", "Paid Media", "Tracking", "Optimización"],
    objective: "Convertir tráfico pagado en consultas calificadas, no solo en visitas.",
    diagnosis: ["Promesa desconectada del anuncio", "Formulario largo", "Sin eventos", "Sin prueba social"],
    process: ["Mapa de intención", "Copy de conversión", "Diseño de landing", "Implementación de eventos", "Optimización iterativa"],
    technologies: ["Astro", "GA4", "GTM", "Meta Ads", "Google Ads"],
    before: ["Tráfico a home genérica", "Baja claridad", "Sin medición real", "Sin seguimiento"],
    after: ["Landing específica", "CTA único", "Eventos activos", "Lead conectado"],
    learnings: ["Una campaña amplifica la calidad del embudo.", "La landing debe continuar la promesa del anuncio."],
  },
  {
    slug: "automatizacion-comercial-crm-ia",
    title: "Automatización comercial con CRM e IA",
    label: "Concepto estratégico",
    category: "Automatización",
    icon: "bot",
    summary: "Empresa que perdía clientes por falta de seguimiento y respuestas tardías.",
    problem: "Los leads llegaban por distintos canales y quedaban dispersos en WhatsApp, correo o memoria del equipo.",
    solution: "Se diseñó un flujo con CRM, calificación inicial, alertas, IA para atención y secuencias de seguimiento.",
    result: "Procesos más ordenados, respuesta más rápida y menor riesgo de perder oportunidades por falta de acción.",
    services: ["CRM", "Automatización", "IA para Atención", "Email Marketing"],
    objective: "Reducir pérdida de leads y crear trazabilidad comercial desde la primera consulta.",
    diagnosis: ["Sin pipeline", "Sin responsable claro", "Consultas sin registro", "Seguimiento manual"],
    process: ["Mapeo de canales", "Definición de estados", "Integración CRM", "Flujos automáticos", "Dashboard de seguimiento"],
    technologies: ["CRM", "OpenAI", "Email automation", "Webhooks", "Dashboards"],
    before: ["Leads dispersos", "Respuesta lenta", "Sin trazabilidad", "Tareas manuales"],
    after: ["Pipeline claro", "IA califica", "Alertas activas", "Seguimiento automático"],
    learnings: ["La velocidad comercial se diseña.", "Automatizar no reemplaza criterio; libera tiempo para vender mejor."],
  },
  {
    slug: "seo-empresa-local",
    title: "SEO para empresa local",
    label: "Concepto estratégico",
    category: "SEO",
    icon: "search",
    summary: "Empresa que no aparecía en Google cuando sus clientes buscaban servicios.",
    problem: "El sitio no tenía arquitectura SEO, contenido por intención ni señales locales claras.",
    solution: "Se ordenó la estructura, se optimizaron páginas de servicio, metadata, contenido local y datos estructurados.",
    result: "Mejor base para aparecer en búsquedas con intención comercial y captar demanda orgánica local.",
    services: ["SEO Avanzado", "Contenido", "SEO Local", "Arquitectura Web"],
    objective: "Hacer que Google entienda servicios, ubicación, autoridad y relevancia comercial.",
    diagnosis: ["Servicios mezclados", "Sin SEO local", "Poca velocidad", "Contenido genérico"],
    process: ["Keyword research", "Arquitectura SEO", "Optimización técnica", "Contenido por servicio", "Medición orgánica"],
    technologies: ["Schema.org", "GA4", "Search Console", "Astro", "Core Web Vitals"],
    before: ["Invisible en Google", "URLs débiles", "Sin intención", "Sin schema"],
    after: ["Arquitectura clara", "Contenido estratégico", "SEO local", "Medición orgánica"],
    learnings: ["El SEO empieza por claridad de negocio.", "La intención importa más que publicar por publicar."],
  },
  {
    slug: "branding-presencia-digital-premium",
    title: "Branding y presencia digital premium",
    label: "Concepto estratégico",
    category: "Branding",
    icon: "badgeCheck",
    summary: "Empresa que se veía menos profesional que su competencia pese a tener una buena oferta.",
    problem: "La marca no transmitía confianza, consistencia ni diferenciación en web, redes y piezas comerciales.",
    solution: "Se definió narrativa, dirección visual, sistema de marca y presencia digital coherente.",
    result: "Mayor autoridad percibida, comunicación más clara y una experiencia de marca más confiable.",
    services: ["Branding", "Identidad Visual", "Web", "Comunicación"],
    objective: "Elevar percepción para que la marca represente el verdadero nivel de la empresa.",
    diagnosis: ["Identidad inconsistente", "Mensaje débil", "Baja diferenciación", "Diseños desconectados"],
    process: ["Estrategia de marca", "Narrativa", "Sistema visual", "Aplicaciones digitales", "Guía de comunicación"],
    technologies: ["Design system", "Web UI", "Content framework", "Brand assets"],
    before: ["Marca genérica", "Baja confianza", "Piezas inconexas", "Poca autoridad"],
    after: ["Presencia premium", "Mensaje consistente", "Sistema visual", "Mayor diferenciación"],
    learnings: ["La percepción vende antes que el vendedor.", "Una marca clara reduce fricción comercial."],
  },
  {
    slug: "ecommerce-optimizado-conversion",
    title: "E-commerce optimizado para conversión",
    label: "Concepto estratégico",
    category: "E-commerce",
    icon: "shoppingCart",
    summary: "Tienda online con visitas, pero pocas ventas y baja claridad en el proceso de compra.",
    problem: "El e-commerce recibía tráfico, pero el usuario encontraba fricción en confianza, fichas, carrito y checkout.",
    solution: "Se optimizó UX, arquitectura de categorías, fichas de producto, tracking y señales de confianza.",
    result: "Experiencia más clara, mejor lectura de comportamiento y mayor capacidad de convertir visitas en ventas.",
    services: ["E-commerce", "UX", "Conversión", "Tracking"],
    objective: "Reducir fricción de compra y mejorar medición de eventos comerciales.",
    diagnosis: ["Fichas débiles", "Checkout confuso", "Sin eventos clave", "Poca confianza"],
    process: ["Auditoría UX", "Optimización de fichas", "Mejora de carrito", "Tracking e-commerce", "Iteración CRO"],
    technologies: ["E-commerce tracking", "GA4", "GTM", "CRO", "Performance"],
    before: ["Visitas sin compra", "Fricción en checkout", "Sin tracking", "Baja confianza"],
    after: ["UX más clara", "Eventos medidos", "Checkout ordenado", "Señales de confianza"],
    learnings: ["En e-commerce cada fricción cuesta ventas.", "Sin tracking no hay optimización seria."],
  },
];

export const industries = ["Servicios profesionales", "Educación", "Retail", "Salud", "Inmobiliarias", "Tecnología", "Turismo", "Empresas B2B", "Comercio local"];
