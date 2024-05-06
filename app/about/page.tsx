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
      <section className="bg-td-beige px-4 pt-10 lg:pt-20 lg:pb-20 mx-auto lg:px-0">
        <div className="flex flex-col lg:flex-row lg:px-12 lg:items-center lg:gap-16">
          <div className="w-full lg:w-1/2">
            <h3 className="font-semibold mb-0.5 lg:mb-4 uppercase">about us</h3>
            <h1
              className={cn(
                "mb-4 font-bold text-[52px] md:text-[64px] xl:text-[80px] 2xl:text-[96px] lg:tracking-normal leading-[0.8]",
                kobe.className
              )}
            >
              a creative space for everyone
            </h1>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-sm leading-tight lg:text-base mb-10 font-normal lg:leading-tight">
              Titik Dua is an independent boutique hotel showcasing contemporary
              Indonesian design, art, and culture in our many creative spaces.
            </p>
          </div>
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
