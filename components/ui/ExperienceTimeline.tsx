import { Briefcase } from "lucide-react";
import Link from "next/link";

const EXPERIENCES = [
  {
    role: "Desarrollador de Software en Pasantía",
    company: "Departamento de Tecnología",
    date: "Julio 2026 - Actualidad",
    description:
      "Alineación de turnos operativos con normativas de evaluación académica y desarrollo continuo de software de la mano de un tutor institucional, asegurando calidad y cumplimiento de requerimientos.",
  },
  {
    role: "Desarrollador Full-Stack",
    company: "Universidad Central de Venezuela",
    date: "Enero 2026 - Mayo 2026",
    description:
      "Desarrollo del proyecto SGCI-IDI, un sistema empresarial de inventario y control de compras. Diseño de relaciones en PostgreSQL, integración de interfaces dinámicas y optimización de bloques de servidor Nginx en entorno Linux local.",
  },
  {
    role: "Asistente de Tecnologías de la Información",
    company: "Instituto de Inmunología Dr. Nicolás E. Bianco",
    date: "Abril 2025 - Diciembre 2025",
    description:
      "Gestión de incidencias técnicas, mantenimiento de infraestructura de redes y soporte directo en el área de comunicación y tecnología de la institución.",
    link: "#",
    linkText: "Ver certificado",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="-mb-8">
      <header className="flex flex-col gap-6 mb-2">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Experiencia, <br className="hidden sm:block" />
          <span className="text-blue-600 dark:text-blue-500">
            ¿Qué he logrado?
          </span>
        </h1>
      </header>

      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="w-7 h-7 text-gray-900 dark:text-white stroke-2" />
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
          Experiencia laboral
        </h2>
      </div>

      <div className="relative border-l border-gray-300 dark:border-gray-800 ml-3 sm:ml-4">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="mb-14 ml-8 md:flex md:gap-10 relative group"
          >
            <span className="absolute -left-[38.5px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-white dark:ring-gray-900"></span>

            <div className="md:w-1/3 mb-4 md:mb-0 shrink-0">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-500">
                {exp.role}
              </h3>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-1">
                {exp.company}
              </h4>
              <time className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-2 block">
                {exp.date}
              </time>
            </div>

            <div className="md:w-2/3 text-gray-600 dark:text-gray-300 text-[15px] sm:text-base leading-relaxed">
              <p>{exp.description}</p>

              {exp.link && (
                <Link
                  href={exp.link}
                  className="inline-flex items-center mt-3 text-blue-600 dark:text-blue-500 font-medium hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                >
                  {exp.linkText || "Saber más"}
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
