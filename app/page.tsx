import Hero from '../components/home/hero';
import Welcome from '@/components/home/welcome';
import Stay from '@/components/home/stay';
import CTAMobile from '@/components/home/cta-mobile';

export default function Home() {
  return (
    <main className="position-relative">
      <Hero />
      <Welcome />
      <Stay />
      <CTAMobile />
    </main>
  );
}
