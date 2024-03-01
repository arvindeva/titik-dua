import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function CheckAvailability() {
  return (
    <section className="z-10 hidden md:inline-block  absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-td-beige rounded-3xl px-8 py-4 shadow-xl">
      <div className="flex flex-row gap-x-4 items-center justify-center">
        <p className="text-nowrap font-semibold text-[28px]">book your stay</p>
        <div className="flex flex-col">
          <label>Check in / checkout</label>
          <Input
            type="date"
            name="check-in"
            id="check-in"
            placeholder="Check in"
            className="h-[56px] w-[311px]"
          />
        </div>
        <div className="flex flex-col">
          <label>Check in / checkout</label>
          <Input
            type="date"
            name="check-in"
            id="check-in"
            placeholder="Check in"
            className="h-[56px] w-[311px]"
          />
        </div>
        <div className="flex flex-col">
          <label className="invisible">check availability</label>
          <Button type="submit" className="text-xl px-6 ">
            Check Availability
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <div className="relative">
      <div className="relative  h-screen max-h-[769px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/videos/td-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <CheckAvailability />
    </div>
  );
}
