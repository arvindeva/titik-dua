import { kobe } from "@/app/fonts/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";

export default function LearningExperience() {
  return (
    <section className="">
      <div>
        <Carousel
          className="w-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="w-full h-[281px] bg-gray-600">
                  <Image
                    className="object-cover w-full h-full"
                    src="/images/learning-experience.jpg"
                    alt="private events one"
                    width={400}
                    height={400}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="py-10 px-4">
        <p className="text-xs text-zinc-500 uppercase">workshops</p>
        <h1
          className={cn("font-bold text-[40px] mb-8 lowercase", kobe.className)}
        >
          learning experience
        </h1>
        <p className="text-sm leading-tight font-normal">
          Memorable events are at the heart of what we do. In keeping with our
          mission of bringing local creative talent to the global stage, Titik
          Dua presents a regular lineup of design-led exhibitions, innovative
          talks, and workshops.
        </p>
      </div>
    </section>
  );
}
