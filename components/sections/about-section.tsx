import { Badge } from "@/components/ui/badge";
import { PERSONAL_INFO } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section className="w-full py-2">
      <header className="mb-8 flex flex-col gap-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-200 tracking-tight">
          Soy {PERSONAL_INFO.name},{" "}
          <br className="hidden sm:block" />
          <span className="text-blue-600 dark:text-indigo-400">
            {PERSONAL_INFO.headlineRole}
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-self-start gap-3 mt-2 w-full">
          {PERSONAL_INFO.skills.map((tech) => (
            <Badge
              key={tech}
              variant="default"
              className="flex items-center justify-center w-full sm:w-auto px-4 py-1.5 whitespace-nowrap text-sm rounded-full border shadow-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </header>

      <article className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
        {PERSONAL_INFO.bio.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">
            {paragraph}
          </p>
        ))}

        <blockquote className="border-l-4 border-blue-600 dark:border-indigo-500 pl-4 italic">
          <p>{PERSONAL_INFO.quote.text}</p>
          <span className="block mt-2 font-semibold not-italic">
            — {PERSONAL_INFO.quote.author}
          </span>
        </blockquote>
      </article>
    </section>
  );
}
