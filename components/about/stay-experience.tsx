import { kobe } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function StayExperience() {
  return (
    <section className="py-10 px-4">
      <h1 className={cn("text-[40px] font-bold mb-8", kobe.className)}>
        stay experience
      </h1>
      <div className="text-sm leading-tight flex flex-col gap-y-4 mb-10">
        <p className="">
          Compact, intimate, welcoming. 22 cozy rooms with handcrafted
          furniture, floor-to-ceiling windows, a choice of king-size or twin
          beds featuring artisanal rugs, runners, and curated amenities,
          celebrating Indonesian craftsmanship. All modern creature comforts and
          a balcony overlooking the pool and forest.
        </p>
        <p>
          Feast at Ramu Kitchen, for Modern Asian fare. Wonder around our
          multi-purpose spaces and open-air amphitheater. Or accommodate your
          unique events, private or corporate in our space. Titik Dua curates a
          regular lineup of design-led exhibitions, innovative talks and
          workshops.
        </p>
      </div>
      <Button className="w-full text-xl font-medium active:bg-td-white active:border-2 active:border-td-black active:text-td-black">
        Book now
      </Button>
    </section>
  );
}
