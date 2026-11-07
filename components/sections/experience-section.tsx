import {
  Briefcase,
  Calendar,
  ShieldCheck,
  ExternalLink,
  Building2,
} from "lucide-react";
import Link from "next/link";
import { EXPERIENCES } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <section className="w-full">
      <SectionHeading
        title="Experiencia"
        highlight="Trayectoria y Logros"
        className="mb-6"
      />

      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-blue-500/10 dark:bg-indigo-500/15 border border-blue-500/20 dark:border-indigo-500/30 shrink-0">
          <Briefcase className="w-6 h-6 text-blue-600 dark:text-indigo-400 stroke-2" />
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            Experiencia laboral
          </h3>
          <p className="text-sm text-muted-foreground">
            Línea de tiempo de proyectos clave y responsabilidades técnicas
          </p>
        </div>
      </div>

      <div className="relative pl-6 sm:pl-8 ml-3 sm:ml-4 border-l-2 border-blue-500/25 dark:border-indigo-500/30 space-y-8 sm:space-y-10">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot Indicator */}
            {exp.current ? (
              <span className="absolute -left-[31px] sm:-left-[39px] top-5 flex h-4 w-4 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 ring-4 ring-white dark:ring-[#060810]" />
              </span>
            ) : (
              <span
                aria-hidden="true"
                className="absolute -left-[29px] sm:-left-[37px] top-5.5 w-3 h-3 rounded-full bg-blue-600 dark:bg-indigo-500 ring-4 ring-white/90 dark:ring-[#060810] shadow-sm transition-transform duration-300 group-hover:scale-125"
              />
            )}

            {/* Glassmorphic Experience Card */}
            <div className="relative rounded-2xl p-5 sm:p-6 bg-card/65 dark:bg-card/35 backdrop-blur-md border border-black/5 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 shadow-sm hover:shadow-md">
              {/* Row 1: Date Pill & Status Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                <time className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground bg-black/[0.04] dark:bg-white/[0.06] px-2.5 py-1 rounded-md border border-black/5 dark:border-white/10 shrink-0">
                  <Calendar className="w-3.5 h-3.5 shrink-0 text-blue-500 dark:text-indigo-400" />
                  <span className="whitespace-nowrap">{exp.date}</span>
                </time>

                {/* Status or Achievement Badge */}
                {exp.highlightBadge && (
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shrink-0 shadow-2xs",
                      exp.current
                        ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25"
                        : "bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/25"
                    )}
                  >
                    {exp.current ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    ) : (
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-amber-600 dark:text-amber-400" />
                    )}
                    <span>{exp.highlightBadge}</span>
                  </span>
                )}
              </div>

              {/* Row 2: Role Title (Full Width) */}
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                {exp.role}
              </h4>

              {/* Row 3: Company (Full Width with Building Icon) */}
              <p className="text-sm sm:text-[15px] font-semibold text-blue-600 dark:text-indigo-400 mt-1.5 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 shrink-0 opacity-80" />
                <span>{exp.company}</span>
              </p>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-[15px] leading-relaxed mt-3">
                {exp.description}
              </p>

              {/* Technology Tags */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3.5 border-t border-black/5 dark:border-white/5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground border border-black/5 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Optional Link (e.g. Landing Page) */}
              {exp.link && (
                <div className="mt-4 pt-2">
                  <Link
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-indigo-400 hover:text-blue-800 dark:hover:text-indigo-300 transition-colors"
                  >
                    {exp.linkText || "Ver más"}
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
