import { Button } from '../ui/button';
import { kobe } from '@/app/fonts/fonts';
import { cn } from '@/lib/utils';

export default function Welcome() {
  return (
    <section className="bg-td-beige w-full">
      <div className="flex flex-col lg:flex-row gap-y-10 px-4 py-10 lg:px-12 lg:py-32 max-w-content mx-auto">
        <div
          className={cn(
            'lg:w-1/2 font-bold text-[52px] lg:text-[80px] lg:tracking-normal leading-[0.8]',
            kobe.className
          )}
        >
          welcome to tanah titik dua
        </div>
        <div className="lg:w-1/2">
          <p className="text-sm lg:text-base mb-10 lg:tracking-tight leading-tight font-normal">
            An independent boutique hotel showcasing contemporary Indonesian
            design, art, and culture. Titik Dua offers design-savvy travelers a
            unique stay experience with custom-designed rooms, with a
            contemporary take on design, gastronomy, and immersive workshops and
            talks on culture, innovation, and wellness
          </p>
          <Button className="w-full lg:w-auto text-xl px-8 font-normal">
            More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}
