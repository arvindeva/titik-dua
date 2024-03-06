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

export default function Wedding() {
  return (
    <section className="bg-td-beige">
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
                    src="/images/wedding.jpg"
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
        <h1
          className={cn("font-bold text-[40px] mb-4 lowercase", kobe.className)}
        >
          wedding
        </h1>

        <p className="text-sm leading-tight font-normal mb-4">
          Titik Dua specializes in small-scale weddings for couples seeking
          small, intimate experience-based weddings. Three distinctive indoor
          and outdoor events spaces are available alongside Titik Dua&apos;s
          comprehensive event planning services and specially catered menus.
          With an enchanted setting, enveloped by verdant lushness, the poolside
          area serves as an intimate al fresco setting for sunset ceremonies and
          garden parties.
        </p>
        <p className="text-sm leading-tight font-normal mb-10">
          And thanks to our network with Ubud&apos;s community of artist,
          designers, and performers, Titik Dua can collaborate to create
          weddings that capture the creative spirit of each couple.
        </p>
        <Button variant="black" className="w-full">
          General inquiry
        </Button>
      </div>
    </section>
  );
}
