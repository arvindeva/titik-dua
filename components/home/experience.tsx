"use client";
import { kobe } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { LuMapPin, LuClock } from "react-icons/lu";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Mousewheel } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { data } from "@/data";
import FadeIn from "@/components/animation/fade-in";

interface ExperienceCardProps {
  experience: {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
  };
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="">
      <Card className="w-72 lg:w-[432px] rounded-none border-0 border-transparent bg-transparent text-td-black shadow-none text-start">
        <div className="relative h-72 lg:h-[432px] w-full bg-transparent overflow-hidden mb-1 lg:mb-0">
          <Image
            className="object-cover w-72 h-72 lg:h-[432px] lg:w-[432px]"
            src={experience.imageUrl}
            alt="Sunset in the mountains"
            width="600"
            height="600"
          />
          <div className="absolute bottom-2 left-2 bg-td-beige font-medium text-base px-2.5 py-1 rounded-full">
            Wellness
          </div>
        </div>
        <div className="bg-td-beige py-2">
          <div
            className={cn(
              "font-semibold text-3xl lg:text-[40px] mb-3",
              kobe.className,
            )}
          >
            {experience.name}
          </div>
          <p className="text-td-black text-sm lg:text-base leading-[1.1] h-[48px] leading line-clamp-3 mb-6">
            {experience.description}
          </p>
          <div className="text-sm lg:text-base flex flex-col gap-y-1 lg:gap-y-2 mb-6">
            <p className="flex flex-row items-center gap-x-1">
              <span>
                <LuMapPin size={20} />
              </span>
              <span>Amphitheatre</span>
            </p>
            <p className="flex flex-row items-center gap-x-1">
              <span>
                <LuClock size={20} />
              </span>
              <span>7:00 AM</span>
            </p>
          </div>
          <div className="buttons flex flex-row gap-x-3">
            <Button
              className="w-1/2 h-9 text-base border-td-black lg:text-xl lg:h-[47px]"
              variant="primary"
            >
              Register
            </Button>
            <Button
              className="w-1/2 h-9 text-base lg:text-xl lg:h-[47px]"
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

export default function Experience() {
  return (
    <section className="bg-td-beige text-td-black w-full py-10 !overflow-hidden lg:px-12">
      <div className="px-4 max-w-content mx-auto lg:px-0">
        <FadeIn from="bottom">
          <h1
            className={cn(
              "text-[40px] font-bold lg:text-[64px] mb-8 leading-none",
              kobe.className,
            )}
          >
            experience
          </h1>
        </FadeIn>

        <FadeIn from="bottom" threshold={0.25}>
          <div className="lg:flex flex-row items-end justify-between">
            <p className="mb-10 text-sm leading-tight font-normal w-full lg:w-1/2 lg:text-base lg:leading-tight">
              We&apos;re located in Peliatan Village, a stones throw from Ubud.
              Few will argue about Ubud&apos;s lure. As the epicenter of
              Bali&apos;s rich culture where art, tradition, and spirituality
              blend and converge in a beautiful harmony. Built on a solid
              foundation of local creative artistry, Ubud remains a mecca for
              Balinese artists and international entrepreneurs; in recent
              decades, Ubud has evolved into one of the world&apos;s top
              destinations for yoga, health & wellness, and innovative dining.
            </p>
            <div className="w-full lg:w-1/2 text-end hidden lg:flex flex-row items-center justify-end gap-x-2 mb-8">
              <Button className="home-experiences-prev-button text-td-white h-[44px] w-[44px] bg-td-black p-0 active:bg-zinc-500">
                <GoArrowLeft size={30} />
              </Button>
              <Button className="home-experiences-next-button text-td-white h-[44px] w-[44px] bg-td-black  p-0 active:bg-zinc-500">
                <GoArrowRight size={30} />
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
      <FadeIn from="right" threshold={0.25}>
        <div className="lg:hidden flex overflow-x-scroll hide-scroll-bar">
          <div className="flex flex-nowrap px-4 overflow-x-visible gap-x-4">
            {data.experiences.map((experience, i) => {
              return (
                <ExperienceCard key={experience.id} experience={experience} />
              );
            })}
          </div>
        </div>
      </FadeIn>

      <FadeIn from="right" threshold={0.25}>
        <div className="hidden !max-w-content mx-auto lg:block hide-scroll-bar">
          <Swiper
            slidesPerView={"auto"}
            mousewheel={{
              forceToAxis: true,
            }}
            spaceBetween={24}
            navigation={{
              prevEl: ".home-experiences-prev-button",
              nextEl: ".home-experiences-next-button",
            }}
            freeMode={true}
            modules={[FreeMode, Navigation, Mousewheel]}
            className="mySwiper !overflow-visible"
          >
            {data.experiences.map((experience, i) => {
              return (
                <SwiperSlide
                  key={experience.id}
                  className="max-w-[432px] min-h-48"
                >
                  <ExperienceCard experience={experience} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </FadeIn>
    </section>
  );
}
