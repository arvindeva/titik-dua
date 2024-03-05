import { kobe } from '@/app/fonts/fonts';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function PrivateEvents() {
  return (
    <section className="">
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
                <div className="w-full h-[281px] bg-gray-600">
                  <Image
                    className="object-cover w-full h-full"
                    src="/images/private-events/private-events-1.jpg"
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
      <div className="py-10 px-4">
        <p className="text-xs text-zinc-500">EVENTS</p>
        <h1 className={cn('font-bold text-[40px] mb-8', kobe.className)}>
          private events
        </h1>
        <p className="text-sm mb-10 leading-tight font-normal">
          Titik Dua offers 6 multi-purpose spaces, an open-air amphitheater, to
          accommodate corporate events, wellness retreats, and intimate
          weddings.
        </p>
        <div className="w-full flex flex-row gap-x-3">
          <Button className="w-1/2 text-xl font-normal">Contact us</Button>
          <Button className="w-1/2 bg-td-white text-td-black border border-td-black text-xl font-normal focus:bg-td-beige">
            Read more
          </Button>
        </div>
      </div>
    </section>
  );
}
