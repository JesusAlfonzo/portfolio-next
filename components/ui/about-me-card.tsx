import {Badge} from "@/components/ui/shadcn/badge";

export default function AboutMe() {
    return (
        <section className="max-w-3xl mx-auto py-2">
            <header className="mb-10 flex flex-col gap-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-200 tracking-tight">
                    Soy Jesús Alfonzo, <br className="hidden sm:block"/>
                    <span className="text-blue-600 dark:text-blue-500">Backend Developer.</span>
                </h1>

                <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-self-start gap-3 mt-4 w-full">
                    {["Node.js", "PostgreSQL", "DevOps", "Next.js", "Omada"].map((tech) => (
                        <Badge
                            key={tech}
                            variant="default"
                            className="flex items-center justify-center w-full sm:w-auto px-4 py-1.5 whitespace-nowrap text-sm rounded-full border"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </header>

            <article className=" prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <p>
                    Tengo 22 años, estoy radicado en Caracas y soy Técnico Superior en Informática. Me dedico a diseñar
                    arquitecturas, inventarios y soluciones administrativas escalables para el sector empresarial.
                </p>
                <br/>
                <p>
                    Mi interés va más allá del código fuente: me apasiona la infraestructura completa. Tengo experiencia
                    práctica administrando servidores, configurando infraestructura de redes inalámbricas, gestionando
                    bases de datos relacionales y construyendo APIs robustas con tecnologías modernas.
                </p>
                <br/>
                <p>
                    Me considero un profesional analítico, enfocado y profundamente creativo, donde la responsabilidad
                    es siempre la regla. Disfruto del aprendizaje continuo, la buena música y el estilo. Soy de pocas
                    palabras, pero de gran ambición técnica. Si mi vida se redujera a una sola acción, sin duda sería
                    programar.
                </p>
                <br/>
                <blockquote>
                    <p>&ldquo;¿Qué haces cuando sabes que tu realidad no es real?&rdquo;</p>
                    — Elliot Alderson
                </blockquote>
            </article>
        </section>

    );
}