import { cn } from '@/lib/utils';
import Hero from '../components/home/hero';
import { kobe } from './fonts/fonts';
import { Button } from '@/components/ui/button';
import Welcome from '@/components/home/welcome';
import Stay from '@/components/home/stay';

export default function Home() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Stay />
    </main>
  );
}
