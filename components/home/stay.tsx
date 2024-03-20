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
import { data } from "@/data";
import FadeIn from "@/components/animation/fade-in";

interface RoomCardProps {
  room: {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
  };
}

function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="">
      <Card className="w-72 lg:w-[432px] xl:w-[550px] rounded-none border-0 bg-td-beige">
        <div className="h-56 lg:h-[324px] w-full bg-zinc-400 overflow-hidden">
          <Image
            className="object-cover w-80 h-60 lg:w-[432px] xl:w-[550px] lg:h-[324px]"
            src={room.imageUrl}
            alt="Sunset in the mountains"
            width="600"
            height="500"
          />
        </div>
        <div className="p-4 lg:p-6 text-start">
          <div
            className={cn(
              "font-bold text-3xl mb-3 lg:text-[48px]",
              kobe.className,
            )}
          >
            {room.name}
          </div>
          <p className="text-gray-700 text-sm lg:text-base leading-[1.1] lg:leading-tight line-clamp-5 h-24 lg:h-36 mb-4">
            {room.description}
          </p>
          <div className="buttons flex flex-row gap-x-2">
            <Button
              className="w-1/2 h-9 text-base lg:h-[47px] lg:text-xl"
              variant="primary"
            >
              Book Now
            </Button>
            <Button
              className="w-1/2 h-9 lg:h-[47px] text-base lg:text-xl"
              variant="beige"
            >
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
    <section className="bg-white w-full py-5 lg:py-12 !overflow-hidden lg:px-0">
      <div className="mx-auto px-4 lg:px-12 max-w-content">
        <h1
          className={cn(
            "text-[40px] font-bold leading-none mb-4 lg:text-[64px]",
            kobe.className,
          )}
        >
          <FadeIn from="bottom">stay</FadeIn>
        </h1>
      </div>

      <FadeIn from="right" threshold={0.3}>
        <div className="lg:hidden flex overflow-x-scroll pb-4 px-4 hide-scroll-bar">
          <div className="flex flex-nowrap overflow-x-visible gap-x-4">
            {data.rooms.map((room, i) => {
              return <RoomCard key={i} room={room} />;
            })}
          </div>
        </div>
      </FadeIn>
      <FadeIn from="right" threshold={0.3}>
        <div className="hidden mx-auto lg:block max-w-content lg:px-12">
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
            {data.rooms.map((room, i) => {
              return (
                <SwiperSlide
                  key={room.id}
                  className="lg:max-w-[432px] xl:max-w-[550px] min-h-48"
                >
                  <RoomCard room={room} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </FadeIn>
    </section>
  );
}
