import Hero from '../components/home/hero';
import Welcome from '@/components/home/welcome';
import Stay from '@/components/home/stay';
import Events from '@/components/home/events';
import CTAMobile from '@/components/home/cta-mobile';
import EatAndDrink from '@/components/home/eat-and-drink';

export default function Home() {
  return (
    <main className="position-relative">
      <Hero />
      <Welcome />
      <Stay />
      <Events />
      <CTAMobile />
      <EatAndDrink />
    </main>
  );
}
