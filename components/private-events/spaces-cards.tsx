"use client";
import { kobe } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaRegUserCircle } from "react-icons/fa";

function SpacesCard() {
  return (
    <div className="">
      <Card className="w-72 rounded-none border-0 bg-transparent text-td-black">
        <div className="relative h-72 w-full bg-transparent overflow-hidden mb-1">
          <Image
            className="object-cover w-72 h-72"
            src="/images/art-gallery.jpg"
            alt="Sunset in the mountains"
            width="300"
            height="300"
          />
        </div>
        <div className="">
          <div className={cn("font-semibold text-3xl mb-3", kobe.className)}>
            art gallery
          </div>
          <p className="text-sm leading-[1.1] leading line-clamp-3 h-20 mb-2">
            Our multipurpose art gallery is also used as an event space for
            meetings of all kinds.
          </p>
          <div className="text-sm flex flex-col gap-y-1 mb-6">
            <p className="flex flex-row items-center gap-x-2">
              <span>
                <FaRegUserCircle size={16} />
              </span>
              <span>100+ guests</span>
            </p>
          </div>
          <div className="buttons flex flex-row gap-x-2">
            <Button className="w-full h-9 text-base" variant="clear">
              Inquire
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function SpacesCards() {
  return (
    <section className="bg-td-white text-td-black w-full pt-10 overflow-visible">
      <div className="lg:hidden flex overflow-x-scroll pb-4 hide-scroll-bar">
        <div className="flex flex-nowrap px-4 overflow-x-visible gap-x-4">
          <SpacesCard />
          <SpacesCard />
          <SpacesCard />
          <SpacesCard />
          <SpacesCard />
          <SpacesCard />
        </div>
      </div>
    </section>
  );
}
