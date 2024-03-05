import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { kobe } from '../../app/fonts/fonts';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Suspense } from 'react';

function Label() {
  return (
    <Input
      type="date"
      name="check-in"
      id="check-in"
      placeholder="Check in"
      className="h-[56px] w-[311px] rounded-xl"
    />
  );
}

function CheckAvailability() {
  return (
    <section className="z-10 hidden lg:inline-block  absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-td-beige rounded-3xl px-8 py-4 shadow-xl">
      <div className="flex flex-row gap-x-4 items-center justify-center">
        <p
          className={cn(
            'text-nowrap font-semibold text-[28px] mr-4',
            kobe.className
          )}
        >
          book your stay
        </p>
        <div className="flex flex-col">
          <label className="text-sm mb-1">Check in / checkout</label>
          <Label />
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-1">Guests</label>
          <Label />
        </div>
        <div className="flex flex-col">
          <label className="invisible">check availability</label>
          <Button type="submit" className="text-xl px-6 bg-td-daun">
            Check Availability
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <div className="relative">
      <div className=" bg-td-black relative flex items-center justify-center  h-[calc(100vh-80px)]  lg:h-screen lg:max-h-[769px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="md:hidden z-10 min-h-full w-auto absolute max-w-full object-cover"
        >
          <source src="/videos/td-hero-mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <video
          autoPlay
          loop
          muted
          className="hidden md:inline-block absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/videos/td-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-td-white"></div>
      <CheckAvailability />
    </div>
  );
}
