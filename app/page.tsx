import Hero from '../components/home/hero';
import Welcome from '@/components/home/welcome';
import Stay from '@/components/home/stay';
import Events from '@/components/home/events';
import CTAMobile from '@/components/home/cta-mobile';
import EatAndDrink from '@/components/home/eat-and-drink';
import PrivateEvents from '@/components/home/private-events';
import Experience from '@/components/home/experience';
import Footer from '@/components/ui/footer';

export default function Home() {
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
      <Footer />
    </main>
  );
}
