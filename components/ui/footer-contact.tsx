import { ContactButton } from "@/components/ui/contact-button";
import { Mail } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" {...props} viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a4.6 4.6 0 0 0-1.3-3.23 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.9.13-4 .43-4 .43a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5.8 3.35 6.8 6.5 7.17a4.8 4.8 0 0 0-1 3.03V22M9 20.5 3 16"/></svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" {...props} viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
  );
}

export default function FooterContact() {
  return (
    <section className="w-full max-w-4xl mx-auto py-6 px-4 text-center flex flex-col items-center gap-8">
      <header className="flex flex-col gap-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Contacto, <br className="hidden sm:block" />
          <span className="text-blue-600 dark:text-blue-500">
            ¿Trabajamos juntos?
          </span>
        </h2>
      </header>

      <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
        Para proyectos full-stack, colaboraciones o cualquier consulta, no dudes
        en contactarme. Siempre estoy dispuesto a conectar con personas
        apasionadas por la tecnología y el desarrollo de software.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
        <ContactButton
          href="mailto:jesusalfonzo.code@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Envíame un correo electrónico"
          className="flex items-center gap-2"
        >
          <Mail className="w-5 h-5" />
          Contáctame
        </ContactButton>

        <div className="flex items-center gap-4 border-l border-gray-300 dark:border-gray-700 pl-6">
          <a
            href="https://github.com/JesusAlfonzo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="Visitar mi perfil de GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/jesus-alfonzo-523900294"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="Visitar mi perfil de LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
