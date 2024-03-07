"use client";
import { kobe } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { LuMapPin, LuClock } from "react-icons/lu";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Mousewheel } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function EventCard() {
  return (
    <div className="">
      <Card className="w-72 lg:w-[432px] rounded-none border-0 bg-td-black text-td-white text-start">
        <div className="relative h-72 lg:h-[432px] w-full bg-transparent overflow-hidden mb-1">
          <Image
            className="object-cover w-72 h-72 lg:w-[432px] lg:h-[432px]"
            src="/images/benang-merah.jpg"
            alt="benang merah"
            width="600"
            height="600"
          />
          <div className="absolute bottom-2 left-2 bg-td-beige font-medium text-td-black text-base px-2.5 py-1 rounded-full">
            Art
          </div>
        </div>
        <div className="">
          <div className={cn("font-semibold text-3xl mb-3", kobe.className)}>
            benang merah
          </div>
          <p className="text-td-white text-sm leading-[1.1] leading line-clamp-3 h-20 mb-2">
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
            <Button className="w-full h-9 lg:h-12 text-base lg:text-xl bg-transparent border-2 border-td-white">
              Details
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function Events() {
  return (
    <section className="bg-td-black text-td-white w-full pt-10 pb-10 overflow-hidden lg:px-12">
      <div className="mx-auto px-4 lg:px-0 max-w-[1400px]">
        <h1
          className={cn(
            "text-[40px] font-bold lg:text-[64px] mb-8 leading-none",
            kobe.className,
          )}
        >
          featured events
        </h1>
        <div className="lg:flex flex-row items-center justify-between">
          <p className="mb-10 text-sm lg:text-base lg:leading-tight leading-tight font-regular">
            Experience emerging and established Indonesian creatives and artists
            through our monthly curation of exhibitions, talks, workshops and
            more.
          </p>

          <div className="w-full text-end hidden lg:flex flex-row items-center justify-end gap-x-2 mb-8">
            <Button className="home-events-prev-button text-td-black bg-td-white h-[44px] w-[44px] p-0 hover:bg-td-white active:bg-zinc-500">
              <GoArrowLeft size={30} />
            </Button>

            <Button className="home-events-next-button text-td-black bg-td-white h-[44px] w-[44px] p-0 hover:bg-td-white active:bg-zinc-500">
              <GoArrowRight size={30} />
            </Button>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex overflow-x-scroll pb-4 px-4 hide-scroll-bar">
        <div className="flex flex-nowrap !overflow-x-visible gap-x-4">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>

      <div className="hidden mx-auto lg:block max-w-[1400px]">
        <Swiper
          slidesPerView={"auto"}
          mousewheel={{
            forceToAxis: true,
          }}
          spaceBetween={16}
          navigation={{
            prevEl: ".home-events-prev-button",
            nextEl: ".home-events-next-button",
          }}
          freeMode={true}
          modules={[FreeMode, Navigation, Mousewheel]}
          className="mySwiper !overflow-visible"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((card, i) => {
            return (
              <SwiperSlide key={i} className="max-w-[432px] min-h-48">
                <EventCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
