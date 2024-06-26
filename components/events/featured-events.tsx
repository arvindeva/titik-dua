"use client";
import { kobe } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LuMapPin, LuClock } from "react-icons/lu";

function EventCard() {
  return (
    <div className="">
      <Card className="w-72 rounded-none border-0 bg-transparent text-td-black">
        <div className="relative h-72 w-full bg-transparent overflow-hidden mb-1">
          <Image
            className="object-cover w-72 h-72"
            src="/images/benang-merah.jpg"
            alt="Sunset in the mountains"
            width="300"
            height="300"
          />
          <div className="absolute bottom-2 left-2 bg-td-beige font-medium text-td-black text-base px-2.5 py-1 rounded-full">
            Culture
          </div>
        </div>
        <div className="">
          <div className={cn("font-semibold text-3xl mb-3", kobe.className)}>
            benang merah
          </div>
          <p className="text-sm leading-[1.1] leading line-clamp-3 h-20 mb-2">
            Exhibition by Setia Cap Cili. From 1 february - 21 february. Opening
            night:
          </p>
          <div className="text-sm flex flex-col gap-y-1 mb-6">
            <p className="flex flex-row items-center gap-x-1">
              <span>
                <LuMapPin />
              </span>
              <span>Art Gallery</span>
            </p>
            <p className="flex flex-row items-center gap-x-1">
              <span>
                <LuClock />
              </span>
              <span>17:00 PM - 22:00 PM</span>
            </p>
          </div>
          <div className="buttons flex flex-row gap-x-2">
            <Button className="w-full h-9 text-base" variant="clear">
              Details
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function FeaturedEvents() {
  return (
    <section className="bg-td-white text-td-black w-full pt-10 pb-10 overflow-visible">
      <div className="px-4 max-w-content mx-auto lg:px-12">
        <h1
          className={cn(
            "text-[40px] font-bold lg:text-[64px] mb-8 leading-none",
            kobe.className,
          )}
        >
          featured events
        </h1>
        <p className="mb-10 text-sm leading-tight font-regular">
          Experience emerging and established Indonesian creatives and artists
          through our monthly curation of exhibitions, talks, workshops and
          more.
        </p>
      </div>

      <div className="lg:hidden flex overflow-x-scroll pb-4 hide-scroll-bar">
        <div className="flex flex-nowrap px-4 overflow-x-visible gap-x-4">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </section>
  );
}
