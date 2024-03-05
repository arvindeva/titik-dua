'use client';
import { kobe } from '@/app/fonts/fonts';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

function RoomCard() {
  return (
    <div className="">
      <Card className="w-72 rounded-none border-0 bg-td-beige">
        <div className="h-56 w-full bg-zinc-400 overflow-hidden">
          <Image
            className="object-cover w-80 h-60"
            src="/images/frasa-room.jpg"
            alt="Sunset in the mountains"
            width="300"
            height="200"
          />
        </div>
        <div className="px-4 py-4">
          <div className={cn('font-bold text-3xl mb-3', kobe.className)}>
            frasa room
          </div>
          <p className="text-gray-700 text-sm leading-[1.1] leading line-clamp-5 h-24 mb-4">
            A place where couples can enjoy each other&apos;s company while
            bathing in an exposed jacuzzi right in the middle of the living
            room.
          </p>
          <div className="buttons flex flex-row gap-x-2">
            <Button className="w-1/2 h-9 font-normal text-base">
              Book Now
            </Button>
            <Button className="w-1/2 h-9 font-medium text-base bg-transparent text-td-black border-[1.32px] border-td-black">
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
    <section className="bg-white w-full py-5  overflow-visible">
      <div className="px-4 max-w-content mx-auto lg:px-12">
        <h1
          className={cn(
            'text-[40px] font-bold tracking-wide mb-2 lg:text-[64px]',
            kobe.className
          )}
        >
          stay
        </h1>
      </div>

      <div className="lg:hidden flex overflow-x-scroll pb-4 hide-scroll-bar">
        <div className="flex flex-nowrap px-4 overflow-x-visible gap-x-4">
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </div>
    </section>
  );
}
