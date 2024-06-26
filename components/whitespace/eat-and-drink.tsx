"use client";
import { kobe } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

function EatAndDrinkCard() {
  return (
    <div className="">
      <Card className="min-w-[164px] rounded-none border-0 bg-transparent text-td-black shadow-none">
        <div className="relative w-full bg-transparent overflow-hidden mb-3">
          <Image
            className="object-cover w-full  h-full"
            src="/images/ramu-kitchen.jpg"
            alt="Sunset in the mountains"
            width="800"
            height="500"
          />
        </div>
        <div className="">
          <div
            className={cn(
              "font-semibold text-2xl mb-2 lg:mb-4 lg:text-[40px]",
              kobe.className,
            )}
          >
            ramu kitchen
          </div>
          <p className=" text-xs lg:text-base leading-[1.1] lg:leading-tight line-clamp-4 h-14 lg:h-24 mb-6">
            An Asian fusion dining experience taking local ingredients from the
            island&apos;s soil and ocean.
          </p>

          <div className="buttons flex flex-row gap-x-2">
            <Button className="w-full h-9 lg:h-12 lg:text-xl text-base bg-transparent border-2 border-td-black text-td-black focus:bg-td-white">
              Explore
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function EatAndDrink() {
  return (
    <section className="bg-td-beige text-td-black w-full py-10 overflow-visible lg:px-12">
      <div className="px-4 lg:px-0 max-w-[1400px] mx-auto">
        <h1
          className={cn(
            "text-[40px] font-bold lg:text-[64px] mb-8 leading-none",
            kobe.className,
          )}
        >
          eat and drink
        </h1>
        <p className="mb-10 lg:w-1/2 text-sm lg:text-base leading-tight lg:leading-tight  font-regular">
          An Asian fusion dining experience using local ingredients from the
          island’s soil and ocean. An all-day eatery serving early bites to
          evening dinner through to nightcaps at our Rooftop, plus a laid back
          indoor-outdoor bar by the pool with local bites. To top it off we have
          our speakeasy bar serving the finest Arak infused cocktails and
          natural wines.
        </p>
      </div>

      <div className="flex overflow-x-scroll max-w-[1400px] mx-auto hide-scroll-bar">
        <div className="px-4 lg:px-0 flex flex-nowrap overflow-x-visible gap-x-4">
          <EatAndDrinkCard />
          <EatAndDrinkCard />
          <EatAndDrinkCard />
          <EatAndDrinkCard />
        </div>
      </div>
    </section>
  );
}
