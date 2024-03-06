import { cn } from "@/lib/utils";
import { kobe } from "../fonts/fonts";
import ImageGrid from "@/components/about/image-grid";

export default function AboutPage() {
  return (
    <main className="">
      <section className="bg-td-beige px-4 pt-10 mx-auto">
        <h3 className="font-semibold mb-0.5 uppercase">about us</h3>
        <h1
          className={cn(
            "text-[56px] leading-[46px] mb-4 font-semibold",
            kobe.className,
          )}
        >
          a creative space for everyone
        </h1>
        <p className="text-sm leading-tight">
          Titik Dua is an independent boutique hotel showcasing contemporary
          Indonesian design, art, and culture in our many creative spaces.
        </p>
      </section>
      <ImageGrid />
    </main>
  );
}
