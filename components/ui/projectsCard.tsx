import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/shadcn/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    id: 1,
    title: "IDI Landing Page",
    description:
      "Landing page para el proyecto de investigación y desarrollo de la empresa IDI, mostrando información relevante y enlaces a recursos.",
    image: "/images/projects/idi-landing-page.webp",
    status: "operativo",
    badge: "Astro / Zod",
    link: "https://idiucv.vercel.app/",
  },
  {
    id: 2,
    title: "QR Generator",
    description:
      "Aplicación web para generar códigos QR personalizados, permitiendo a los usuarios crear y descargar códigos QR para diferentes propósitos.",
    image: "/images/projects/project-working-on-it-dark.webp",
    status: "operativo",
    badge: "Next.js",
    link: "https://github.com/JesusAlfonzo/QR-generator",
  },
  {
    id: 3,
    title: "Niubox",
    description:
      "Aplicacion web para la gestión de tareas y proyectos con enfoque en metodologías ágiles.",
    image: "/images/projects/project-working-on-it-dark.webp",
    status: "construccion",
    badge: "En Desarrollo",
    link: "https://github.com/JesusAlfonzo/niubox",
  },
  {
    id: 4,
    title: "Chatbot",
    description:
      "Asistente virtual para la atención al cliente y automatización de procesos.",
    image: "/images/projects/project-working-on-it-dark.webp",
    status: "construccion",
    badge: "En Desarrollo",
    link: "https://github.com/JesusAlfonzo",
  },
];

export default function ProjectsCard() {
  const operativos = PROJECTS.filter((p) => p.status === "operativo");
  const enConstruccion = PROJECTS.filter((p) => p.status === "construccion");

  const renderProjectCard = (project: (typeof PROJECTS)[0]) => (
    <Card
      key={project.id}
      className="relative w-full max-w-sm pt-0 overflow-hidden flex flex-col"
    >
      <div className="relative aspect-video w-full bg-black/10">
        <Image
          width={800}
          height={450}
          alt={`Portada del proyecto ${project.title}`}
          src={project.image}
          className="absolute inset-0 z-10 h-full w-full object-cover brightness-75 transition-all hover:brightness-100"
        />
        <div className="absolute top-3 left-3 z-20">
          <Badge
            variant={project.status === "operativo" ? "default" : "secondary"}
          >
            {project.badge}
          </Badge>
        </div>
      </div>

      <CardHeader className="grow">
        <CardTitle className="text-xl font-(family-name:var(--font-noto-sans)">
          {project.title}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button
          className="w-full"
          variant={project.status === "operativo" ? "default" : "outline"}
        >
          <Link target="_blank" rel="noopener noreferrer" href={project.link}>
            {project.status === "operativo" ? "Ver Proyecto" : "Ver Progreso"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <section className="w-full max-w-6xl mx-auto">
      <header className="flex flex-col gap-6 mb-10 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Proyectos, <br className="hidden sm:block" />
          <span className="text-blue-600 dark:text-blue-500">
            ¿Qué he construido?
          </span>
        </h1>
      </header>

      {/* Sección Operativos */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b pb-2">
          En Producción
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center sm:place-items-start">
          {operativos.map(renderProjectCard)}
        </div>
      </div>

      {/* Sección En Construcción */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b pb-2">
          En Construcción
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center sm:place-items-start">
          {enConstruccion.map(renderProjectCard)}
        </div>
      </div>
    </section>
  );
}
