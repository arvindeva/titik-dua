'use client';
import { kobe } from '@/app/fonts/fonts';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

function OfferCard() {
  return (
    <div className="">
      <Card className="w-72 rounded-none border-0 bg-td-beige">
        <div className="h-56 w-full bg-zinc-400 overflow-hidden">
          <Image
            className="object-cover w-80 h-60"
            src="/images/nyepi.jpg"
            alt="Sunset in the mountains"
            width="300"
            height="200"
          />
        </div>
        <div className="px-4 py-4">
          <h1
            className={cn(
              'font-bold text-3xl mb-3 h-16 leading-none line-clamp-2',
              kobe.className
            )}
          >
            nyepi at titik dua
          </h1>
          <p className="text-td-black text-sm leading-[1.1] leading line-clamp-3 mb-4">
            Bali&apos;s Day of Silence at Titik Dua.
          </p>
          <div className="flex flex-col text-sm leading-tight mb-8">
            <div>
              <p className="font-bold">Booking period:</p>
              <p>16 Jan 2024 - 10 Mar 2024</p>
            </div>
            <div>
              <p className="font-bold">Booking period:</p>
              <p>16 Jan 2024 - 10 Mar 2024</p>
            </div>
          </div>
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

export default function SpecialOffers() {
  return (
    <section className="bg-td-bata w-full py-5  overflow-visible">
      <div className="px-4 max-w-content mx-auto lg:px-12">
        <h1
          className={cn(
            'text-[40px] text-td-white font-bold mb-2 lg:text-[64px]',
            kobe.className
          )}
        >
          special offers
        </h1>
      </div>

      <div className="lg:hidden flex overflow-x-scroll pb-4 hide-scroll-bar">
        <div className="flex flex-nowrap px-4 overflow-x-visible gap-x-4">
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </div>
      </div>
    </section>
  );
}
