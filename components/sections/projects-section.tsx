import { Sparkles, Rocket } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { ProjectCard } from "@/components/shared/project-card";
import { SectionHeading } from "@/components/shared/section-heading";

export function ProjectsSection() {
  const operativos = PROJECTS.filter((p) => p.status === "operativo");
  const enConstruccion = PROJECTS.filter((p) => p.status === "construccion");

  return (
    <section className="w-full">
      <SectionHeading
        title="Proyectos"
        highlight="¿Qué he construido?"
        className="mb-10 text-center sm:text-left"
      />

      {/* En Producción */}
      <div className="mb-12">
        <div className="flex items-center gap-2.5 mb-6 pb-2 border-b border-black/10 dark:border-white/10">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Rocket className="w-4 h-4" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            En Producción
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full place-items-stretch">
          {operativos.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* En Construcción */}
      <div>
        <div className="flex items-center gap-2.5 mb-6 pb-2 border-b border-black/10 dark:border-white/10">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <Sparkles className="w-4 h-4" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            En Desarrollo
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full place-items-stretch">
          {enConstruccion.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
