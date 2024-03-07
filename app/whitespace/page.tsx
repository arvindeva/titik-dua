import Hero from "@/components/whitespace/hero";
import Welcome from "@/components/whitespace/welcome";
import Stay from "@/components/whitespace/stay";
import Events from "@/components/whitespace/events";
import CTAMobile from "@/components/ui/cta-mobile";
import EatAndDrink from "@/components/whitespace/eat-and-drink";
import PrivateEvents from "@/components/whitespace/private-events";
import Experience from "@/components/whitespace/experience";

export default function WhitespacePage() {
  return (
    <main className="position-relative">
      <Hero />
      <Welcome />
      <Stay />
      <Events />
      <CTAMobile />
      <EatAndDrink />
      <PrivateEvents />
      <Experience />
    </main>
  );
}
