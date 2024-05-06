import { cn } from "@/lib/utils";
import { kobe } from "../fonts/fonts";
import ImageGrid from "@/components/about/image-grid";
import StayExperience from "@/components/about/stay-experience";
import CTAMobile from "@/components/ui/cta-mobile";
import Neighbourhood from "@/components/about/neighbourhood";
import LearningExperience from "@/components/about/learning-experience";
import DiscoverSpaces from "@/components/about/discover-spaces";
import Stay from "@/components/about/stay";

export default function AboutPage() {
  return (
    <main className="">
      <section className="bg-td-beige px-4 pt-10 mx-auto lg:px-0">
        <div className="flex flex-col lg:flex-row lg:px-12 lg:items-center lg:gap-4">
          <div className="w-full">
            <h3 className="font-semibold mb-0.5 uppercase">about us</h3>
            <h1
              className={cn(
                "text-[56px] leading-[46px] mb-4 font-semibold",
                kobe.className
              )}
            >
              a creative space for everyone
            </h1>
          </div>
          <p className="text-sm leading-tight">
            Titik Dua is an independent boutique hotel showcasing contemporary
            Indonesian design, art, and culture in our many creative spaces.
          </p>
        </div>
      </section>
      <ImageGrid />
      <StayExperience />
      <Neighbourhood />
      <LearningExperience />
      <DiscoverSpaces />
      <Stay />
      <CTAMobile />
    </main>
  );
}
