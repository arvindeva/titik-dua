import { Button } from "../ui/button";
import { kobe } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import FadeIn from "@/components/animation/fade-in";

export default function Welcome() {
  return (
    <section className="bg-td-beige w-full">
      <div className="flex flex-col lg:flex-row gap-y-10 px-4 py-10 lg:px-12 lg:py-16 xl:py-32 lg:gap-x-12 xl:gap-x-16 mx-auto max-w-content">
        <div
          className={cn(
            "lg:w-1/2 font-bold text-[52px] md:text-[64px] xl:text-[80px] 2xl:text-[96px] lg:tracking-normal leading-[0.8]",
            kobe.className,
          )}
        >
          <FadeIn from="bottom" threshold={0.4}>
            welcome to tanah titik dua
          </FadeIn>
        </div>
        <div className="lg:w-1/2">
          <FadeIn from="bottom">
            <p className="text-sm lg:text-base mb-10 font-normal lg:leading-tight">
              An independent boutique hotel showcasing contemporary Indonesian
              design, art, and culture. Titik Dua offers design-savvy travelers
              a unique stay experience with custom-designed rooms, with a
              contemporary take on design, gastronomy, and immersive workshops
              and talks on culture, innovation, and wellness.
            </p>
          </FadeIn>
          <FadeIn from="bottom" threshold={0.6}>
            <Link href="/about">
              <Button
                className="w-full lg:w-auto text-xl lg:text-2xl font-medium lg:px-7"
                variant="primary"
              >
                More About Us
              </Button>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
