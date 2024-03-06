import { cn } from "@/lib/utils";
import { kobe } from "../fonts/fonts";
import CTAMobile from "@/components/ui/cta-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Deluxe from "@/components/stay/deluxe";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SpecialOffers from "@/components/stay/special-offers";

const data = [
  {
    id: 1,
    name: "aksen room",
    description:
      "A homage to the Balinese culture, Aksen features red brick surrounding the room interior, creating a sense of place in a traditional Balinese home.",
    imageUrl: "/images/rooms/aksen/1.jpg",
  },
  {
    id: 2,
    name: "alinea room",
    description:
      "Alinea features unique design details such as a hidden minibar behind a head-to-toe mirror.",
    imageUrl: "/images/rooms/alinea/1.jpg",
  },
  {
    id: 3,
    name: "frasa room",
    description:
      "A place where couples can enjoy each other's company while bathing in an exposed jacuzzi right in the middle of the living room.",
    imageUrl: "/images/rooms/frasa/1.jpg",
  },
  {
    id: 4,
    name: "jeda room",
    description:
      "Jeda offers a tranquil space to enjoy yoga or mini workouts in the comfort of your own room.",
    imageUrl: "/images/rooms/jeda/1.jpg",
  },
];

interface RoomCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

function RoomCard({ name, description, imageUrl }: RoomCardProps) {
  return (
    <div>
      <div>
        <Carousel
          className="w-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="w-full h-[281px] bg-zinc-400">
                  <Image
                    className="object-cover w-full h-full"
                    src={imageUrl}
                    alt="private events one"
                    width={400}
                    height={400}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="py-10 px-4 bg-td-white">
        <h1
          className={cn(
            "font-bold text-[40px] leading-[30px] mb-6",
            kobe.className,
          )}
        >
          {name}
        </h1>
        <p className="text-sm mb-10 leading-tight font-normal">{description}</p>
        <div className="w-full flex flex-row gap-x-3">
          <Button className="w-1/2 text-xl">Book now</Button>
          <Button className="w-1/2" variant="clear">
            Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function StayPage() {
  return (
    <main className="relative">
      <section className="bg-td-beige px-4 py-10 mx-auto">
        <h3 className="font-semibold mb-0.5">STAY WITH US</h3>
        <h1
          className={cn(
            "text-[56px] leading-[46px] mb-4 font-semibold",
            kobe.className,
          )}
        >
          our luxury boutique hotel in ubud
        </h1>
        <p className="text-sm leading-tight">
          Compact, intimate, welcome. 22 cozy rooms overlooking the pool and the
          lush jungle.
        </p>
      </section>
      <CTAMobile />
      <Deluxe />
      <section>
        <h1 className={cn("font-bold text-[40px] px-4 mb-4", kobe.className)}>
          our signature rooms
        </h1>
        {data.map((room) => (
          <RoomCard
            key={room.id}
            name={room.name}
            description={room.description}
            imageUrl={room.imageUrl}
          />
        ))}
      </section>
      <SpecialOffers />
    </main>
  );
}
