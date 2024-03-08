"use client";
import { kobe } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { data } from "@/data";
import FadeIn from "@/components/animation/fade-in";

interface EatAndDrinkCardProps {
  restaurant: {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
  };
}

function EatAndDrinkCard({ restaurant }: EatAndDrinkCardProps) {
  return (
    <div className="w-full">
      <Card className="min-w-[164px] rounded-none border-0 bg-transparent text-td-black shadow-none">
        <div className="relative w-full bg-transparent overflow-hidden mb-3">
          <Image
            className="object-cover w-full  h-full"
            src={restaurant.imageUrl}
            alt="Sunset in the mountains"
            width="800"
            height="800"
          />
        </div>
        <div className="">
          <div
            className={cn(
              "font-semibold text-2xl mb-2 lg:mb-4 lg:text-[40px]",
              kobe.className,
            )}
          >
            {restaurant.name}
          </div>
          <div className="h-16 lg:h-32">
            <p className=" text-xs lg:text-base leading-[1.1] lg:leading-tight line-clamp-3 lg:line-clamp-4">
              {restaurant.description}
            </p>
          </div>
          <div className="buttons flex flex-row gap-x-2">
            <Button
              className="w-full h-9 lg:h-12 lg:text-xl text-base "
              variant="beige"
            >
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
      <div className="px-4 lg:px-0 max-w-content mx-auto">
        <FadeIn from="bottom">
          <h1
            className={cn(
              "text-[40px] font-bold lg:text-[64px] mb-8 leading-none",
              kobe.className,
            )}
          >
            eat and drink
          </h1>
        </FadeIn>
        <FadeIn from="bottom">
          <p className="mb-10 lg:w-1/2 text-sm lg:text-base leading-tight lg:leading-tight  font-regular">
            An Asian fusion dining experience using local ingredients from the
            island’s soil and ocean. An all-day eatery serving early bites to
            evening dinner through to nightcaps at our Rooftop, plus a laid back
            indoor-outdoor bar by the pool with local bites. To top it off we
            have our speakeasy bar serving the finest Arak infused cocktails and
            natural wines.
          </p>
        </FadeIn>
      </div>
      <div className="overflow-hidden">
        <FadeIn from="right">
          <div className="flex overflow-x-scroll max-w-content mx-auto hide-scroll-bar">
            <div className="px-4 lg:px-0 flex flex-nowrap overflow-x-visible gap-x-4 hide-scroll-bar">
              {data.foodsAndDrinks.map((restaurant) => {
                return (
                  <EatAndDrinkCard
                    key={restaurant.id}
                    restaurant={restaurant}
                  />
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
