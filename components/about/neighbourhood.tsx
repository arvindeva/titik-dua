import { kobe } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function NeighbourhoodCard() {
  return (
    <div className="">
      <Card className="w-72 rounded-none border-0 bg-transparent text-td-black">
        <div className="relative h-72 w-full bg-transparent overflow-hidden mb-2">
          <Image
            className="object-cover w-72 h-72"
            src="/images/about/setia-cap-cili.jpg"
            alt="Sunset in the mountains"
            width="300"
            height="300"
          />
        </div>
        <div className="">
          <div className={cn("font-semibold text-3xl mb-3", kobe.className)}>
            setia cap cili
          </div>
          <p className="text-sm leading-[1.1] leading line-clamp-3 h-14 mb-2">
            Traditional Balinese tenun weaving into precious fabrics and
            sarongs.
          </p>
          <div className="buttons flex flex-row gap-x-2">
            <Button className="w-full h-9 text-base" variant="clear">
              Visit
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function Neighbourhood() {
  return (
    <section className="py-10 bg-td-beige">
      <h1 className={cn("text-[40px] font-bold mb-8 px-4", kobe.className)}>
        our neighbourhood
      </h1>
      <div className="text-sm leading-tight flex flex-col gap-y-4 mb-10 px-4">
        <p className="">
          We&apos;re located in Peliatan Village, a stones throw from Ubud. Few
          will argue about Ubud&apos;s lure. As the epicenter of Bali&apos;s
          rich culture where art, tradition, and spirituality blend and converge
          in a beautiful harmony. Built on a solid foundation of local creative
          artistry, Ubud remains a mecca for Balinese artists and international
          entrepreneurs; in recent decades, Ubud has evolved into one of the
          world&apos;s top destinations for yoga, health & wellness, and
          innovative dining.
        </p>
      </div>
      <div className="lg:hidden flex overflow-x-scroll pb-4 hide-scroll-bar">
        <div className="flex flex-nowrap px-4 overflow-x-visible gap-x-4">
          <NeighbourhoodCard />
          <NeighbourhoodCard />
          <NeighbourhoodCard />
          <NeighbourhoodCard />
          <NeighbourhoodCard />
        </div>
      </div>
    </section>
  );
}
