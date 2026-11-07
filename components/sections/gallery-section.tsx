import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PERSONAL_INFO } from "@/data/portfolio";

export function GallerySection() {
  return (
    <section className="w-full flex justify-center items-center py-2">
      <Carousel
        orientation="horizontal"
        opts={{ loop: true }}
        className="w-full max-w-sm md:max-w-3xl lg:max-w-6xl"
      >
        <CarouselContent className="items-center">
          {PERSONAL_INFO.gallery.map((photo, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={500}
                  height={500}
                  className="w-64 h-auto mx-auto rounded-sm object-cover shadow-xs"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="ghost" />
        <CarouselNext variant="ghost" />
      </Carousel>
    </section>
  );
}
