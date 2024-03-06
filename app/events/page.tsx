import { cn } from "@/lib/utils";
import { kobe } from "../fonts/fonts";

import FeaturedEvents from "@/components/events/featured-events";
import PastEvents from "@/components/events/past-events";
import Experience from "@/components/events/experience";
import CTAMobile from "@/components/ui/cta-mobile";

export default function EventsPage() {
  return (
    <main className="bg-td-white">
      <div className="px-4 py-10 bg-td-beige">
        <h1
          className={cn("font-bold text-[56px] leading-none", kobe.className)}
        >
          what&apos;s on
        </h1>
      </div>
      <FeaturedEvents />
      <PastEvents />
      <Experience />
      <CTAMobile />
    </main>
  );
}
