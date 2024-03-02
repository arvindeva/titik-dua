import { kobe } from '@/app/fonts/fonts';
import { cn } from '@/lib/utils';

export default function Stay() {
  return (
    <section className="bg-white w-full py-5 px-4">
      <h1 className={cn('text-[40px] font-bold tracking-wide', kobe.className)}>
        stay
      </h1>
      <div className="carousel" />
    </section>
  );
}
