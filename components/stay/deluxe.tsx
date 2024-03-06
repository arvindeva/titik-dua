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

export default function Deluxe() {
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
                <div className="w-full h-[281px] bg-zinc-400">
                  <Image
                    className="object-cover w-full h-full"
                    src="/images/rooms/titik-dua-deluxe/1.jpg"
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
      <div className="py-10 px-4 bg-td-beige">
        <h1
          className={cn(
            "font-bold text-[40px] leading-[30px] mb-6",
            kobe.className,
          )}
        >
          titik dua deluxe room
        </h1>
        <p className="text-sm mb-10 leading-tight font-normal">
          Cozy rooms with handcrafted furniture, floor-to-ceiling windows, a
          choice of king-size or twin beds featuring artisanal rugs, runners,
          and curated amenities, celebrating Indonesian craftsmanship. LED Smart
          TV, portable speakers, and a balcony overlooking the pool and forest
          complete the picture.
        </p>
        <div className="w-full flex flex-row gap-x-3">
          <Button className="w-1/2 text-xl">Book now</Button>
          <Button className="w-1/2" variant="clear">
            Details
          </Button>
        </div>
      </div>
    </section>
  );
}
