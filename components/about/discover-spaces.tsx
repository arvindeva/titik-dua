import { kobe } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function DiscoverSpaces() {
  return (
    <section className="py-10 px-4 bg-td-bata text-td-white">
      <h1
        className={cn(
          "text-[40px] font-bold mb-4 leading-none",
          kobe.className,
        )}
      >
        discover titik dua&apos;s spaces
      </h1>
      <div className="text-sm leading-tight flex flex-col gap-y-4 mb-10">
        <p className="">
          Titik Dua offers 6 multi-purpose spaces, from an open amphitheater to
          an art gallery to meeting rooms that can accommodate corporate events,
          wellness retreats, intimate weddings and more.
        </p>
      </div>
      <Button className="w-full text-xl font-medium bg-td-white text-td-bata active active:bg-transparent active:border-2 active:border-td-white active:text-td-white focus:bg-td-white">
        Our spaces
      </Button>
    </section>
  );
}
