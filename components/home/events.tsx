'use client';
import { kobe } from '@/app/fonts/fonts';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

function EventCard() {
  return (
    <div className="">
      <Card className="w-72 rounded-none border-0 bg-transparent text-td-white">
        <div className="relative h-72 w-full bg-transparent overflow-hidden mb-1">
          <Image
            className="object-cover w-72 h-72"
            src="/images/benang-merah.jpg"
            alt="Sunset in the mountains"
            width="300"
            height="300"
          />
        </div>
        <div className="">
          <div className={cn('font-semibold text-3xl mb-3', kobe.className)}>
            benang merah
          </div>
          <p className="text-td-white text-sm leading-[1.1] leading line-clamp-3 h-20 mb-2">
            Exhibition by Setia Cap Cili. From 1 february - 21 february. Opening
            night:
          </p>
          <div className="mb-4 text-sm">
            <p>Art gallery</p>
            <p>17:00 PM - 22:00 PM</p>
          </div>
          <div className="buttons flex flex-row gap-x-2">
            <Button className="w-full h-9 font-normal text-base bg-transparent border border-td-white">
              Details
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function Events() {
  return (
    <section className="bg-td-black text-td-white w-full py-10 overflow-visible">
      <div className="px-4 max-w-content mx-auto lg:px-12">
        <h1
          className={cn(
            'text-[40px] font-bold tracking-wide lg:text-[64px] mb-4',
            kobe.className
          )}
        >
          featured events
        </h1>
        <p className="mb-10 text-sm leading-tight font-regular">
          Experience emerging and established Indonesian creatives and artists
          through our monthly curation of exhibitions, talks, workshops and
          more.
        </p>
      </div>

      <div className="lg:hidden flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap px-4 overflow-x-visible gap-x-4">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </section>
  );
}
