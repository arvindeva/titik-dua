import { kobe } from '@/app/fonts/fonts';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function Spaces() {
  return (
    <section className="py-10 px-4">
      <p className="text-xs text-zinc-500 uppercase mb-4">spaces</p>
      <h1
        className={cn(
          'font-bold text-[40px] mb-8 lowercase leading-8',
          kobe.className
        )}
      >
        our space is your space
      </h1>
      <div className="text-sm flex flex-col gap-y-4 leading-tight">
        <p className="">
          Welcome to Titik Dua – a creative playground that embodies the world
          we want to live in, create, and dream in.
        </p>
        <h4 className="font-bold">Spaces</h4>
        <p>
          Our oceanside village is home to a range of venues and event spaces
          available for private hire, providing a backdrop for all kinds of
          groups – from weddings and birthdays to meetings and corporate events.
        </p>

        <h4 className="font-bold">Activities</h4>
        <p>
          Whether via wellness, sustainability workshops or our cultural
          programme, we can help arrange all manner of personalised activities
          to enhance your event.
        </p>

        <h4 className="font-bold">Food and beverage</h4>
        <p>
          Our culinary offerings make the most of sustainable and locally
          sourced ingredients, catering to all kinds of tastes, including
          authentic Indonesian, plant-based, and international comfort food.
        </p>

        <h4 className="font-bold">Art and music</h4>
        <p>
          Creativity is at the core of everything we do at Tititk Dua. We view
          art and design as a vehicle for change, showcasing our sustainability
          message through the art installations, furniture and architecture
          around the Tanah. Our music programme reflects our eclectic tastes,
          featuring international DJs and live musicians alongside homespun
          talent.
        </p>
        <h4 className="font-bold">Rooms</h4>
        <p>
          Our group booking service is designed to accommodate your needs when
          reserving eight (8) rooms and above. Whether you are planning a
          corporate event, a family reunion, or any large gathering, we make the
          booking process seamless and convenient.
        </p>
      </div>
      <div className="pt-10 flex flex-col gap-y-10">
        <h2 className="font-medium text-xl">
          Tell us what you&apos;re planning here and our dedicated team will
          help bring your event to life.
        </h2>
        <Button className="w-full" variant="black">
          Get in touch
        </Button>
      </div>
    </section>
  );
}
