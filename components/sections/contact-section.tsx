import { Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { ContactButton } from "@/components/shared/contact-button";
import { GithubIcon, LinkedinIcon } from "@/components/shared/social-icons";
import { SectionHeading } from "@/components/shared/section-heading";

export function ContactSection() {
  return (
    <footer className="w-full max-w-4xl mx-auto py-6 px-4 text-center flex flex-col items-center gap-8">
      <SectionHeading
        title="Contacto"
        highlight="¿Trabajamos juntos?"
        className="mb-0 text-center"
      />

      <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
        Para proyectos full-stack, colaboraciones o cualquier consulta, no dudes
        en contactarme. Siempre estoy dispuesto a conectar con personas
        apasionadas por la tecnología y el desarrollo de software.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6 mt-2">
        <ContactButton
          href={PERSONAL_INFO.social.email}
          aria-label="Envíame un correo electrónico"
          className="flex items-center gap-2"
        >
          <Mail className="w-5 h-5 inline mr-1" />
          Contáctame
        </ContactButton>

        <div className="flex items-center gap-4 border-l border-gray-300 dark:border-gray-700 pl-6">
          <a
            href={PERSONAL_INFO.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="Visitar mi perfil de GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href={PERSONAL_INFO.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="Visitar mi perfil de LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
