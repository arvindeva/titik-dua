"use client";
import { kobe } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Mousewheel } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function RoomCard() {
  return (
    <div className="">
      <Card className="w-72 lg:w-[432px] rounded-none border-0 bg-td-beige">
        <div className="h-56 lg:h-[324px] w-full bg-zinc-400 overflow-hidden">
          <Image
            className="object-cover w-80 h-60 lg:w-[432px] lg:h-[324px]"
            src="/images/frasa-room.jpg"
            alt="Sunset in the mountains"
            width="500"
            height="400"
          />
        </div>
        <div className="p-6 text-start">
          <div
            className={cn(
              "font-bold text-3xl mb-3 lg:text-[48px]",
              kobe.className,
            )}
          >
            frasa room
          </div>
          <p className="text-gray-700 text-sm lg:text-base leading-[1.1] lg:leading-tight line-clamp-5 h-24 lg:h-36 mb-4">
            A place where couples can enjoy each other&apos;s company while
            bathing in an exposed jacuzzi right in the middle of the living
            room.
          </p>
          <div className="buttons flex flex-row gap-x-2">
            <Button className="w-1/2 h-9 text-base">Book Now</Button>
            <Button className="w-1/2 h-9 text-base bg-transparent text-td-black border-[2px] border-td-black focus:bg-td-white">
              Details
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function Stay() {
  return (
    <section className="bg-white w-full py-5 !overflow-hidden lg:px-12">
      <div className="mx-auto px-4 lg:px-0 max-w-[1400px]">
        <h1
          className={cn(
            "text-[40px] font-bold mb-2 lg:text-[64px]",
            kobe.className,
          )}
        >
          stay
        </h1>
      </div>

      <div className="lg:hidden flex overflow-x-scroll pb-4 px-4 hide-scroll-bar">
        <div className="flex flex-nowrap overflow-x-visible gap-x-4">
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </div>

      <div className="hidden mx-auto lg:block max-w-[1400px]">
        <div className="w-full text-end flex flex-row items-center justify-end gap-x-2 mb-8">
          <Button
            className="home-stay-prev-button text-td-white bg-td-black h-[44px] w-[44px] p-0 active:bg-zinc-500"
            variant="icon"
          >
            <GoArrowLeft size={30} />
          </Button>

          <Button
            className="home-stay-next-button text-td-white bg-td-black h-[44px] w-[44px] p-0 active:bg-zinc-500"
            variant="icon"
          >
            <GoArrowRight size={30} />
          </Button>
        </div>
        <Swiper
          slidesPerView={"auto"}
          mousewheel={{
            forceToAxis: true,
          }}
          spaceBetween={16}
          navigation={{
            prevEl: ".home-stay-prev-button",
            nextEl: ".home-stay-next-button",
          }}
          freeMode={true}
          modules={[FreeMode, Navigation, Mousewheel]}
          className="mySwiper !overflow-visible"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((card, i) => {
            return (
              <SwiperSlide key={i} className="max-w-[432px] min-h-48">
                <RoomCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
