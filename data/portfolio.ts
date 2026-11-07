import {
  PersonalInfo,
  ExperienceItem,
  ProjectItem,
} from "@/types/portfolio";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Jesús Alfonzo",
  role: "Software Developer",
  headlineRole: "Backend Developer.",
  studies: "TSU Informática",
  location: "Caracas | Venezuela",
  workplace: "Instituto de Inmunología Dr. Nicolas E. Bianco, (UCV)",
  email: "jesusalfonzo.code@gmail.com",
  profilePhotos: {
    primary: "/images/profile-pic/snx00.webp",
    secondary: "/images/profile-pic/profile.jpg",
  },
  skills: ["Node.js", "PostgreSQL", "DevOps", "Next.js", "Omada"],
  bio: [
    "Tengo 22 años, estoy radicado en Caracas y soy Técnico Superior en Informática. Me dedico a diseñar arquitecturas, inventarios y soluciones administrativas escalables para el sector empresarial.",
    "Mi interés va más allá del código fuente: me apasiona la infraestructura completa. Tengo experiencia práctica administrando servidores, configurando infraestructura de redes inalámbricas, gestionando bases de datos relacionales y construyendo APIs robustas con tecnologías modernas.",
    "Me considero un profesional analítico, enfocado y profundamente creativo, donde la responsabilidad es siempre la regla. Disfruto del aprendizaje continuo, la buena música y el estilo. Soy de pocas palabras, pero de gran ambición técnica. Si mi vida se redujera a una sola acción, sin duda sería programar.",
  ],
  quote: {
    text: "“¿Qué haces cuando sabes que tu realidad no es real?”",
    author: "Elliot Alderson",
  },
  gallery: [
    {
      src: "/images/profile-pic/snx00.webp",
      alt: "Fotografía de Jesús Alfonzo - snx00",
    },
    {
      src: "/images/profile-pic/snx01.webp",
      alt: "Fotografía de Jesús Alfonzo - snx01",
    },
    {
      src: "/images/profile-pic/snx02.webp",
      alt: "Fotografía de Jesús Alfonzo - snx02",
    },
    {
      src: "/images/profile-pic/snx03.webp",
      alt: "Fotografía de Jesús Alfonzo - snx03",
    },
  ],
  social: {
    instagram: "https://www.instagram.com/jesus_alfxnzor/",
    github: "https://github.com/jesusalfonzo",
    linkedin: "https://www.linkedin.com/in/jesus-alfonzo-523900294",
    email: "mailto:jesusalfonzo.code@gmail.com",
  },
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Desarrollo de Sistema ERP Institucional",
    company: "Instituto de Inmunología Dr. Nicolás E. Bianco C. - UCV",
    date: "Julio 2026 - Presente",
    current: true,
    highlightBadge: "En Desarrollo Activo",
    description:
      "Diseño y desarrollo integral de un sistema ERP a medida para centralizar y automatizar los procesos de compras, inventario de reactivos médicos, almacén y gestión operativa del instituto. Construcción de arquitectura modular escalable, modelado relacional y APIs seguras.",
    technologies: [
      "PostgreSQL",
      "Node.js",
      "Next.js",
      "Docker",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
  {
    role: "Construcción y Preparación de Servidor & Bases de Datos",
    company: "Instituto de Inmunología Dr. Nicolás E. Bianco C. - UCV",
    date: "Enero 2026 - Mayo 2026",
    description:
      "Aprovisionamiento, configuración e implementación de servidor Linux local para infraestructura institucional. Contenerización de microservicios mediante Docker y Docker Compose, despliegue de motores de bases de datos PostgreSQL con políticas de respaldo automatizadas y configuración de proxy inverso Nginx.",
    technologies: [
      "Linux Server",
      "Docker",
      "Docker Compose",
      "PostgreSQL",
      "Nginx",
      "DevOps",
      "Bash",
    ],
  },
  {
    role: "Desarrollo de Landing Page Oficial",
    company: "Instituto de Inmunología Dr. Nicolás E. Bianco C. - UCV",
    date: "Septiembre 2025 - Diciembre 2025",
    description:
      "Diseño y desarrollo de la plataforma web institucional oficial del instituto, orientada a la difusión científica, captación de pacientes y divulgación de líneas de investigación. Optimización de rendimiento web, SEO, diseño responsive moderno y accesibilidad.",
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Zod", "UI/UX"],
    link: "https://idiucv.vercel.app/",
    linkText: "Visitar sitio web oficial",
  },
  {
    role: "Reestructuración de Red e Internet con TP-Link Omada",
    company: "Instituto de Inmunología Dr. Nicolás E. Bianco C. - UCV",
    date: "Junio 2025 - Agosto 2025",
    highlightBadge: "Certificación Oficial de 5 Años",
    description:
      "Reingeniería integral y modernización de la infraestructura de conectividad inalámbrica y cableada. Despliegue de la solución centralizada TP-Link Omada SDN, segmentación de redes mediante VLANs, balanceo de carga, políticas de seguridad y cableado estructurado certificado con 5 años de garantía operativa.",
    technologies: [
      "TP-Link Omada SDN",
      "VLANs",
      "Cableado Estructurado",
      "Routing & Switching",
      "QoS",
      "Ciberseguridad",
    ],
  },
  {
    role: "Soporte Técnico Especializado e Infraestructura IT",
    company: "Instituto de Inmunología Dr. Nicolás E. Bianco C. - UCV",
    date: "Abril 2025 - Junio 2025",
    description:
      "Soporte técnico integral a estaciones de trabajo de laboratorio y personal administrativo. Diagnóstico y mantenimiento preventivo y correctivo de hardware y software, gestión de incidencias críticas, configuración de periféricos especializados y continuidad operativa de los servicios informáticos.",
    technologies: [
      "Soporte IT",
      "Hardware & Software",
      "Mantenimiento Preventivo",
      "Windows/Linux",
      "Helpdesk",
      "Redes LAN",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "IDI Landing Page",
    description:
      "Plataforma web institucional oficial para el Instituto de Inmunología Dr. Nicolás E. Bianco C. de la UCV, mostrando investigaciones, servicios médicos y divulgación científica.",
    image: "/images/projects/idi-landing-page.webp",
    status: "operativo",
    badge: "En Producción",
    previewUrl: "idiucv.vercel.app",
    link: "https://idiucv.vercel.app/",
    github: "https://github.com/JesusAlfonzo",
    tags: ["Astro", "Tailwind CSS", "Zod"],
  },
  {
    id: 2,
    title: "QR Generator",
    description:
      "Aplicación interactiva construida en Python para generar, personalizar y descargar códigos QR de alta resolución con opciones de configuración y formatos visuales.",
    image: "/images/projects/project-working-on-it-dark.webp",
    status: "operativo",
    badge: "Python",
    previewUrl: "qr-generator.dev",
    link: "https://github.com/JesusAlfonzo/QR-generator",
    github: "https://github.com/JesusAlfonzo/QR-generator",
    tags: ["Python"],
  },
  {
    id: 3,
    title: "Niubox",
    description:
      "Herramienta web para la gestión ágil de tareas, seguimiento de sprints y administración de proyectos en equipos multidisciplinarios.",
    image: "/images/projects/project-working-on-it-dark.webp",
    status: "construccion",
    badge: "En Desarrollo",
    previewUrl: "niubox.app",
    link: "https://github.com/JesusAlfonzo/niubox",
    github: "https://github.com/JesusAlfonzo/niubox",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Chatbot IA",
    description:
      "Asistente conversacional inteligente diseñado para atención de usuarios, automatización de consultas recurrentes e integración con APIs de IA.",
    image: "/images/projects/project-working-on-it-dark.webp",
    status: "construccion",
    badge: "En Desarrollo",
    previewUrl: "ai-assistant.dev",
    link: "https://github.com/JesusAlfonzo",
    github: "https://github.com/JesusAlfonzo",
    tags: ["Node.js", "LangChain", "OpenAI API", "REST"],
  },
];
