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

export default function PrivateEvents() {
  return (
    <section className="lg:px-12">
      <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto">
        <div className="lg:w-1/2 lg:py-20 relative">
          <Carousel
            className="w-full relative"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="w-full h-[281px] lg:h-[400px] bg-gray-600">
                    <Image
                      className="object-cover w-full h-full"
                      src="/images/private-events/private-events-1.jpg"
                      alt="private events one"
                      width={800}
                      height={600}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="py-10 lg:py-20 px-4 lg:w-1/2 lg:pl-24">
          <p className="text-xs text-zinc-500">EVENTS</p>
          <h1 className={cn("font-bold text-[40px] mb-8", kobe.className)}>
            private events
          </h1>
          <p className="text-sm mb-10 leading-tight font-normal lg:text-base">
            Titik Dua offers 6 multi-purpose spaces, an open-air amphitheater,
            to accommodate corporate events, wellness retreats, and intimate
            weddings.
          </p>
          <div className="w-full lg:w-auto flex flex-row gap-x-3">
            <Button className="w-1/2 lg:w-[180px] text-xl">Contact us</Button>
            <Button className="w-1/2 lg:w-[180px] bg-td-white text-td-black border-2 border-td-black text-xl focus:bg-td-beige">
              Read more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
