import { cn } from "@/lib/utils";
import Hero from "./hero";
import { kobe } from "./fonts/fonts";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-td-beige w-full">
        <div className="flex flex-row px-12 py-32 max-w-content mx-auto">
          <div
            className={cn(
              "w-1/2 font-bold text-[80px] tracking-normal leading-[0.8]",
              kobe.className
            )}
          >
            welcome to tanah titik dua
          </div>
          <div className="w-1/2">
            <p className="tracking-tight leading-snug mt-2">
              An independent boutique hotel showcasing contemporary Indonesian
              design, art, and culture. Titik Dua offers design-savvy travelers
              a unique stay experience with custom-designed rooms, with a
              contemporary take on design, gastronomy, and immersive workshops
              and talks on culture, innovation, and wellness
            </p>
            <Button className="mt-8 text-2xl px-8 font-medium">
              More About Us
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
