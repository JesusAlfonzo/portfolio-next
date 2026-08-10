import { AboutCard } from "@/components/ui/about-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcn/carousel";
import AboutMe from "@/components/ui/about-me-card";
import Image from "next/image";
import ExperienceTimeLine from "@/components/ui/ExperienceTimeline";
import ProjectsCard from "@/components/ui/projectsCard";
import FooterContact from "@/components/ui/footer-contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center font-sans dark:bg-black">
      <main className="flex flex-col w-full max-w-3xl flex-1 py-2 px-4 sm:px-8 md:px-16 dark:bg-black gap-8">
        <AboutCard />

        <hr className="w-full h-1 bg-gray-300 dark:bg-mist-900 border-none" />

        <div className="flex flex-col justify-center gap-4 w-full">
          <section className="flex flex-col gap-6">
            <AboutMe />
          </section>
        </div>

        <div>
          <section className="flex justify-center items-center mb-3">
            <Carousel
              orientation="horizontal"
              opts={{ loop: true }}
              className="w-full max-w-sm md:max-w-3xl lg:max-w-6xl"
            >
              <CarouselContent className="items-center">
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src={"/images/profile-pic/profile.jpg"}
                    alt="Image 1"
                    width={500}
                    height={500}
                    className="w-64 h-auto mx-auto"
                  />
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src={"/images/profile-pic/profile2.jpg"}
                    alt="Image 2"
                    width={500}
                    height={500}
                    className="w-64 h-auto mx-auto"
                  />
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src={"/images/profile-pic/profile.jpg"}
                    alt="Image 1"
                    width={500}
                    height={500}
                    className="w-64 h-auto mx-auto"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious variant={"ghost"} />
              <CarouselNext variant={"ghost"} />
            </Carousel>
          </section>
        </div>

        <hr className="w-full h-1 mt-2 bg-gray-300 dark:bg-mist-900 border-none" />

        <div>
          <section className="flex flex-col gap-6 mt-2">
            <ExperienceTimeLine />
          </section>
        </div>

        <hr className="w-full h-1 bg-gray-300 dark:bg-mist-900 border-none" />

        <div>
          <section className="flex flex-col gap-6 mt-2">
            <ProjectsCard />
          </section>
        </div>

        <hr className="w-full h-1 bg-gray-300 dark:bg-mist-900 border-none" />

        <div>
          <FooterContact />
        </div>

      </main>
    </div>
  );
}
