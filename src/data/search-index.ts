import type { ElementType } from "react";
import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Brush,
  FileText,
  Globe2,
  MapPin,
  Megaphone,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { blogArticles } from "@/data/blogData";

export type SearchItemType =
  | "Servicio"
  | "Artículo"
  | "Página"
  | "Caso"
  | "Industria"
  | "Mercado";

export type SearchItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  type: SearchItemType;
  category?: string;
  tags?: string[];
  featured?: boolean;
  icon?: ElementType;
};

const serviceItems: SearchItem[] = [
  {
    id: "servicio-web",
    title: "Desarrollo Web",
    description:
      "Sitios web, landing pages, ecommerce y plataformas digitales diseñadas para convertir visitas en oportunidades.",
    href: "/servicios/desarrollo-web/",
    type: "Servicio",
    category: "Web",
    tags: ["web", "landing", "ecommerce", "sitio web", "conversion", "ux"],
    featured: true,
    icon: Globe2,
  },
  {
    id: "servicio-seo",
    title: "SEO Avanzado",
    description:
      "Arquitectura, contenido y optimización técnica para aparecer cuando tus clientes buscan soluciones.",
    href: "/servicios/seo/",
    type: "Servicio",
    category: "SEO",
    tags: ["seo", "google", "organico", "posicionamiento", "contenido"],
    featured: true,
    icon: Search,
  },
  {
    id: "servicio-paid-media",
    title: "Paid Media",
    description:
      "Campañas digitales conectadas a landing pages, eventos y medición real.",
    href: "/servicios/paid-media/",
    type: "Servicio",
    category: "Campañas",
    tags: ["ads", "google ads", "meta ads", "campañas", "publicidad"],
    featured: true,
    icon: Megaphone,
  },
  {
    id: "servicio-automatizacion",
    title: "Automatización e IA",
    description:
      "Flujos para conectar formularios, WhatsApp, CRM, correos e IA para no perder leads.",
    href: "/servicios/automatizacion-ia/",
    type: "Servicio",
    category: "Automatización",
    tags: ["ia", "automatizacion", "whatsapp", "crm", "leads"],
    featured: true,
    icon: Bot,
  },
  {
    id: "servicio-branding",
    title: "Branding y Comunicación",
    description:
      "Identidad, mensaje y sistema visual para transmitir confianza antes de vender.",
    href: "/servicios/branding/",
    type: "Servicio",
    category: "Marca",
    tags: ["branding", "marca", "identidad", "confianza", "comunicacion"],
    featured: false,
    icon: Brush,
  },
  {
    id: "servicio-analitica",
    title: "Analítica y Tracking",
    description:
      "Eventos, conversiones y dashboards para saber qué canal genera oportunidades.",
    href: "/servicios/analitica-tracking/",
    type: "Servicio",
    category: "Datos",
    tags: ["ga4", "gtm", "tracking", "analitica", "dashboard", "metricas"],
    featured: true,
    icon: BarChart3,
  },
];

const pageItems: SearchItem[] = [
  {
    id: "diagnostico",
    title: "Diagnóstico gratuito",
    description:
      "Revisamos tu presencia digital y te mostramos oportunidades concretas de mejora.",
    href: "/diagnostico/",
    type: "Página",
    category: "Conversión",
    tags: ["diagnostico", "auditoria", "revision", "contacto"],
    featured: true,
    icon: Sparkles,
  },
  {
    id: "servicios",
    title: "Servicios digitales",
    description:
      "Explora las soluciones de Enix Studio para web, SEO, campañas, IA, branding y analítica.",
    href: "/servicios/",
    type: "Página",
    category: "Servicios",
    tags: ["servicios", "catalogo", "soluciones"],
    featured: true,
    icon: BriefcaseBusiness,
  },
  {
    id: "catalogo-servicios",
    title: "Catálogo de servicios",
    description:
      "Revisa todos los servicios digitales de Enix Studio como un catálogo de soluciones.",
    href: "/servicios/catalogo/",
    type: "Página",
    category: "Servicios",
    tags: ["catalogo", "servicios", "soluciones"],
    featured: false,
    icon: BriefcaseBusiness,
  },
  {
    id: "nosotros",
    title: "Nosotros",
    description:
      "Conoce la visión, misión y forma de trabajo de Enix Studio, agencia digital de NOVVOR.",
    href: "/nosotros/",
    type: "Página",
    category: "Empresa",
    tags: ["nosotros", "empresa", "novvor", "equipo"],
    featured: false,
    icon: ShieldCheck,
  },
  {
    id: "contacto",
    title: "Contacto",
    description:
      "Conversemos sobre tu presencia digital, web, SEO, automatización o campañas.",
    href: "/contacto/",
    type: "Página",
    category: "Contacto",
    tags: ["contacto", "correo", "consulta"],
    featured: false,
    icon: FileText,
  },
  {
    id: "blog",
    title: "Blog",
    description:
      "Guías y recursos para tomar mejores decisiones sobre web, SEO, automatización y marketing digital.",
    href: "/blog/",
    type: "Página",
    category: "Recursos",
    tags: ["blog", "guias", "recursos", "articulos"],
    featured: false,
    icon: FileText,
  },
  {
    id: "casos",
    title: "Casos",
    description:
      "Escenarios y soluciones digitales aplicadas a problemas reales de empresas.",
    href: "/casos/",
    type: "Página",
    category: "Casos",
    tags: ["casos", "soluciones", "ejemplos"],
    featured: false,
    icon: BriefcaseBusiness,
  },
];

const marketItems: SearchItem[] = [
  {
    id: "cl",
    title: "Servicios digitales en Chile",
    description:
      "Soluciones digitales para empresas en Chile: web, SEO, campañas, automatización y analítica.",
    href: "/cl/",
    type: "Mercado",
    category: "Chile",
    tags: ["chile", "marketing digital", "servicios digitales"],
    featured: false,
    icon: MapPin,
  },
  {
    id: "region-metropolitana",
    title: "Marketing digital en Región Metropolitana",
    description:
      "Servicios digitales para empresas B2B, ecommerce, tecnología y servicios profesionales en Santiago.",
    href: "/cl/region-metropolitana/",
    type: "Mercado",
    category: "Chile",
    tags: ["santiago", "region metropolitana", "marketing digital"],
    featured: false,
    icon: MapPin,
  },
  {
    id: "region-antofagasta",
    title: "Marketing digital en Región de Antofagasta",
    description:
      "Soluciones digitales para empresas industriales, proveedores mineros y servicios B2B del norte de Chile.",
    href: "/cl/region-antofagasta/",
    type: "Mercado",
    category: "Chile",
    tags: ["antofagasta", "mineria", "industrial", "b2b"],
    featured: false,
    icon: MapPin,
  },
];

const industryItems: SearchItem[] = [
  {
    id: "industria-b2b",
    title: "Empresas B2B",
    description:
      "Sistemas digitales para empresas que venden servicios complejos y necesitan confianza, seguimiento y datos.",
    href: "/industrias/empresas-b2b/",
    type: "Industria",
    category: "B2B",
    tags: ["b2b", "ventas complejas", "servicios"],
    featured: false,
    icon: BriefcaseBusiness,
  },
  {
    id: "industria-industrial",
    title: "Empresas industriales",
    description:
      "Web, SEO y analítica para empresas industriales que necesitan transmitir capacidad técnica y confianza.",
    href: "/industrias/empresas-industriales/",
    type: "Industria",
    category: "Industria",
    tags: ["industrial", "mineria", "proveedores", "b2b"],
    featured: false,
    icon: BriefcaseBusiness,
  },
  {
    id: "industria-mineria",
    title: "Proveedores mineros",
    description:
      "Presencia digital, SEO y confianza técnica para proveedores mineros e industriales.",
    href: "/industrias/proveedores-mineros/",
    type: "Industria",
    category: "Minería",
    tags: ["mineria", "proveedores", "industrial", "antofagasta"],
    featured: false,
    icon: BriefcaseBusiness,
  },
  {
    id: "industria-servicios-profesionales",
    title: "Servicios profesionales",
    description:
      "Soluciones digitales para consultoras, estudios y empresas de servicios que necesitan confianza y captación.",
    href: "/industrias/servicios-profesionales/",
    type: "Industria",
    category: "Servicios",
    tags: ["consultoras", "servicios profesionales", "b2b"],
    featured: false,
    icon: BriefcaseBusiness,
  },
  {
    id: "industria-ecommerce",
    title: "Ecommerce",
    description:
      "Web, campañas, tracking y optimización para tiendas online y negocios que venden digitalmente.",
    href: "/industrias/ecommerce/",
    type: "Industria",
    category: "Ecommerce",
    tags: ["ecommerce", "tienda online", "campañas", "tracking"],
    featured: false,
    icon: BriefcaseBusiness,
  },
];

const blogItems: SearchItem[] = blogArticles.map((article) => ({
  id: `blog-${article.slug}`,
  title: article.title,
  description: article.description,
  href: `/blog/${article.slug}/`,
  type: "Artículo",
  category: article.category,
  tags: [
    ...article.keywords,
    article.intent,
    article.serviceRelated,
    article.category,
  ],
  featured: article.slug === "landing-page-de-conversion" || article.slug === "seo-para-empresas",
  icon: FileText,
}));

export const searchIndex: SearchItem[] = [
  ...serviceItems,
  ...pageItems,
  ...blogItems,
  ...marketItems,
  ...industryItems,
];
