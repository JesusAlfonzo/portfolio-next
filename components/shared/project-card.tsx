import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/shared/social-icons";
import { ProjectItem } from "@/types/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isOperativo = project.status === "operativo";

  return (
    <article className="relative w-full max-w-sm rounded-2xl overflow-hidden flex flex-col bg-card/65 dark:bg-card/35 backdrop-blur-md border border-black/10 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-indigo-500/50 hover:shadow-xl dark:hover:shadow-indigo-950/25 transition-all duration-300 group">
      {/* macOS Window Header Bar */}
      <header className="flex items-center justify-between px-4 py-2.5 bg-black/[0.03] dark:bg-white/[0.04] border-b border-black/5 dark:border-white/5 select-none">
        {/* macOS Window Controls (Traffic Lights) */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]/50" />
        </div>

        {/* Address / Domain Capsule */}
        {project.link ? (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visitar ${project.previewUrl || project.link}`}
            className="flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-mono text-muted-foreground/80 hover:text-foreground bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/5 transition-colors max-w-[160px] truncate group/url cursor-pointer"
          >
            <Globe className="w-3 h-3 shrink-0 opacity-70 text-blue-500 dark:text-indigo-400 group-hover/url:opacity-100 transition-opacity" />
            <span className="truncate">{project.previewUrl || "app.local"}</span>
          </Link>
        ) : (
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-mono text-muted-foreground/80 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 max-w-[160px] truncate">
            <Globe className="w-3 h-3 shrink-0 opacity-70 text-blue-500 dark:text-indigo-400" />
            <span className="truncate">{project.previewUrl || "app.local"}</span>
          </div>
        )}

        {/* Status Pill Indicator */}
        {isOperativo ? (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>En vivo</span>
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 shrink-0">
            <Sparkles className="w-2.5 h-2.5 shrink-0" />
            <span>WIP</span>
          </span>
        )}
      </header>

      {/* Interactive Project Preview Area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/5 dark:bg-black/30">
        <Image
          fill
          sizes="(max-width: 640px) 100vw, 384px"
          alt={`Vista previa del proyecto ${project.title}`}
          src={project.image}
          className="object-cover brightness-95 dark:brightness-85 transition-all duration-500 group-hover:scale-105 group-hover:brightness-100"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2">
          <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h4>
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-mono rounded-md bg-secondary/80 dark:bg-secondary/40 text-secondary-foreground border border-black/5 dark:border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons: Dual Action (Demo + GitHub) */}
        <div className="flex items-center gap-2 pt-2 border-t border-black/5 dark:border-white/5">
          <Button
            className="flex-1 cursor-pointer flex items-center justify-center gap-1.5"
            variant={isOperativo ? "default" : "outline"}
            nativeButton={false}
            render={
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>{isOperativo ? "Ver Proyecto" : "Ver Progreso"}</span>
          </Button>

          {project.github && (
            <Button
              className="cursor-pointer px-3 shrink-0"
              variant="outline"
              nativeButton={false}
              aria-label={`Ver código fuente de ${project.title} en GitHub`}
              render={
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <GithubIcon className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
