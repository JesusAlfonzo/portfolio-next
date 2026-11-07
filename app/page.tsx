import { Separator } from "@/components/ui/separator";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center font-sans">
      <main className="flex flex-col w-full max-w-3xl flex-1 py-2 px-4 sm:px-8 md:px-16 gap-8">
        <HeroSection />

        <Separator className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/25 dark:via-indigo-500/25 to-transparent border-none" />

        <AboutSection />

        <GallerySection />

        <Separator className="w-full h-px mt-2 bg-gradient-to-r from-transparent via-blue-500/25 dark:via-indigo-500/25 to-transparent border-none" />

        <ExperienceSection />

        <Separator className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/25 dark:via-indigo-500/25 to-transparent border-none" />

        <ProjectsSection />

        <Separator className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/25 dark:via-indigo-500/25 to-transparent border-none" />

        <ContactSection />
      </main>
    </div>
  );
}
