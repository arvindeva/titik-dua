import { cn } from "@/lib/utils";
import { kobe } from "../fonts/fonts";
import { Button } from "@/components/ui/button";
import ImageGrid from "@/components/private-events/image-grid";
import Spaces from "@/components/private-events/spaces";
import Wedding from "@/components/private-events/wedding";
import Link from "next/link";

export default function PrivateEventsPage() {
  return (
    <main className="">
      <section className="bg-td-beige px-4 py-10 mx-auto">
        <h1
          className={cn(
            "text-[56px] leading-[46px] mb-4 font-semibold",
            kobe.className,
          )}
        >
          our space for your creativity
        </h1>
        <p className="text-sm leading-tight mb-5">
          Titik Dua offers 6 multi-purpose spaces, from an open-air amphitheater
          to an art gallery to meeting rooms that can accommodate corporate
          events, wellness retreats, intimate weddings and more.
        </p>
        <Link href="/contact">
          <Button variant="black" className="w-full mb-10">
            Get in touch
          </Button>
        </Link>
        <ImageGrid />
      </section>
      <Spaces />
      <Wedding />
    </main>
  );
}
