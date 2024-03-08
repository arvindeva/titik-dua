import Hero from "../components/home/hero";
import Welcome from "@/components/home/welcome";
import Stay from "@/components/home/stay";
import Events from "@/components/home/events";
import EatAndDrink from "@/components/home/eat-and-drink";
import PrivateEvents from "@/components/home/private-events";
import Experience from "@/components/home/experience";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Welcome />
      <Stay />
      <Events />
      <EatAndDrink />
      <PrivateEvents />
      <Experience />
    </main>
  );
}
