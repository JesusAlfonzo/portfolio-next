import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolio";
import { ContactButton } from "@/components/shared/contact-button";
import {
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/components/shared/social-icons";

export function HeroSection() {
  const infoItems = [
    { label: "Estudios:", value: PERSONAL_INFO.studies },
    { label: "Ubicación:", value: PERSONAL_INFO.location },
    { label: "Trabajo en:", value: PERSONAL_INFO.workplace },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center md:items-start mb-4 gap-8">
      {/* Interactive Profile Photo */}
      <div className="group relative w-72 h-72 mb-4 md:mb-0 shrink-0 overflow-hidden rounded-none shadow-md">
        <Image
          src={PERSONAL_INFO.profilePhotos.primary}
          width={800}
          height={800}
          alt={`Foto de ${PERSONAL_INFO.name}`}
          priority
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
        />
        <Image
          src={PERSONAL_INFO.profilePhotos.secondary}
          width={800}
          height={800}
          alt={`Foto casual de ${PERSONAL_INFO.name}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
      </div>

      {/* Profile Details */}
      <div className="text-left flex-1">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          {PERSONAL_INFO.name}
        </h1>
        <h2 className="font-normal text-left text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-indigo-400 transition-colors">
          {PERSONAL_INFO.role}
        </h2>

        <dl className="mt-2 space-y-2">
          {infoItems.map((item) => (
            <div key={item.label} className="text-left">
              <dt className="text-blue-600 dark:text-indigo-400 font-semibold inline mr-1">
                {item.label}
              </dt>
              <dd className="text-sm inline text-gray-800 dark:text-gray-200">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Social Icons & CTA */}
        <div className="mt-4 flex items-center gap-2 flex-wrap">
          <a
            href={PERSONAL_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de Instagram"
            className="inline-block p-1 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>

          <span className="text-gray-400 text-xl select-none" aria-hidden="true">
            |
          </span>

          <a
            href={PERSONAL_INFO.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de GitHub"
            className="inline-block p-1 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
          >
            <GithubIcon className="w-6 h-6" />
          </a>

          <span className="text-gray-400 text-xl select-none" aria-hidden="true">
            |
          </span>

          <a
            href={PERSONAL_INFO.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn"
            className="inline-block p-1 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>

          <div className="ml-2">
            <ContactButton href={PERSONAL_INFO.social.email}>
              Contáctame
            </ContactButton>
          </div>
        </div>
      </div>
    </section>
  );
}
