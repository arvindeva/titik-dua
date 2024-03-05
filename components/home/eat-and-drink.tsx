'use client';
import { kobe } from '@/app/fonts/fonts';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

function EatAndDrinkCard() {
  return (
    <div className="">
      <Card className="w-[164px] rounded-none border-0 bg-transparent text-td-black shadow-none">
        <div className="relative h-[164px] w-full bg-transparent overflow-hidden mb-3">
          <Image
            className="object-cover w-[164px] h-[164px]"
            src="/images/ramu-kitchen.jpg"
            alt="Sunset in the mountains"
            width="300"
            height="300"
          />
        </div>
        <div className="">
          <div className={cn('font-semibold text-2xl mb-2', kobe.className)}>
            ramu kitchen
          </div>
          <p className=" text-xs leading-[1.1] leading line-clamp-4 h-14 mb-6">
            An Asian fusion dining experience taking local ingredients from the
            island&apos;s soil and ocean.
          </p>

          <div className="buttons flex flex-row gap-x-2">
            <Button className="w-full h-9 font-normal text-base bg-transparent border border-td-black text-td-black">
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
    <section className="bg-td-beige text-td-black w-full py-10 overflow-visible">
      <div className="px-4 max-w-content mx-auto lg:px-12">
        <h1
          className={cn(
            'text-[40px] font-bold tracking-wide lg:text-[64px] mb-8 leading-none',
            kobe.className
          )}
        >
          eat and drink
        </h1>
        <p className="mb-10 text-sm leading-tight font-regular">
          An Asian fusion dining experience using local ingredients from the
          island’s soil and ocean. An all-day eatery serving early bites to
          evening dinner through to nightcaps at our Rooftop, plus a laid back
          indoor-outdoor bar by the pool with local bites. To top it off we have
          our speakeasy bar serving the finest Arak infused cocktails and
          natural wines.
        </p>
      </div>

      <div className="lg:hidden flex overflow-x-scroll hide-scroll-bar">
        <div className="flex flex-nowrap px-4 overflow-x-visible gap-x-4">
          <EatAndDrinkCard />
          <EatAndDrinkCard />
          <EatAndDrinkCard />
          <EatAndDrinkCard />
        </div>
      </div>
    </section>
  );
}
