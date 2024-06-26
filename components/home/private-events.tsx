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
import Link from "next/link";
import FadeIn from "../animation/fade-in";

export default function PrivateEvents() {
  return (
    <section className="">
      <div className="flex flex-col lg:flex-row max-w-content lg:px-12 mx-auto">
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
          <FadeIn from="bottom">
            <p className="text-xs text-zinc-500">EVENTS</p>
            <h1 className={cn("font-bold text-[40px] mb-8", kobe.className)}>
              private events
            </h1>
          </FadeIn>
          <FadeIn from="bottom">
            <p className="text-sm mb-10 leading-tight font-normal lg:text-base lg:leading-tight">
              Memorable events are at the heart of Titik Dua. Featuring 6
              multi-purpose spaces and an open-air amphitheater, offering a
              diverse venue choice for corporate events, wellness retreats, and
              intimate weddings. In keeping with our mission of bringing local
              creative talent to the global stage, Titik Dua presents a regular
              lineup of designed-led exhibitions, innovative talks, and
              workshops.
            </p>
          </FadeIn>
          <div className="w-auto flex flex-row gap-x-3">
            <Link href="/contact" className="w-1/2 lg:w-auto">
              <Button
                className=" w-full lg:w-[180px] text-xl"
                variant="primary"
              >
                Contact us
              </Button>
            </Link>
            <Link href="/private-events" className="w-1/2 lg:w-auto">
              <Button
                className=" w-full lg:w-[180px] text-xl"
                variant="transparent"
              >
                Read more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
