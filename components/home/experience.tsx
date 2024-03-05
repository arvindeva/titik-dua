'use client';
import { kobe } from '@/app/fonts/fonts';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { LuMapPin, LuClock } from 'react-icons/lu';

function ExperienceCard() {
  return (
    <div className="">
      <Card className="w-72 rounded-none border-0 border-transparent bg-transparent text-td-black shadow-none">
        <div className="relative h-72 w-full bg-transparent overflow-hidden mb-1">
          <Image
            className="object-cover w-72 h-72"
            src="/images/morning-yoga.jpg"
            alt="Sunset in the mountains"
            width="300"
            height="300"
          />
          <div className="absolute bottom-2 left-2 bg-td-beige font-medium text-base px-2.5 py-1 rounded-full">
            Wellness
          </div>
        </div>
        <div className="">
          <div className={cn('font-semibold text-3xl mb-3', kobe.className)}>
            morning yoga
          </div>
          <p className="text-td-black text-sm leading-[1.1] leading line-clamp-3 mb-6">
            wake up with our daily yoga sessions.
          </p>
          <div className="text-sm flex flex-col gap-y-1 mb-6">
            <p className="flex flex-row items-center gap-x-1">
              <span>
                <LuMapPin />
              </span>
              <span>Amphitheatre</span>
            </p>
            <p className="flex flex-row items-center gap-x-1">
              <span>
                <LuClock />
              </span>
              <span>7:00 AM</span>
            </p>
          </div>
          <div className="buttons flex flex-row gap-x-3">
            <Button className="w-1/2 h-9 font-normal text-base border-td-black">
              Register
            </Button>
            <Button className="w-1/2 h-9 font-normal text-base bg-transparent border border-td-black text-td-black">
              Details
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="bg-td-beige text-td-black w-full py-10 overflow-visible">
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
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>
    </section>
  );
}
