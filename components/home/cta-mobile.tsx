import { Button } from '../ui/button';

export default function CTAMobile() {
  return (
    <div className="lg:hidden fixed bottom-4 z-10 w-full px-4">
      <Button className="w-1/2 rounded-l-full rounded-r-none bg-td-white text-td-black text-xl font-normal focus:bg-zinc-200 active:bg-zinc-300">
        Book
      </Button>
      <Button className="w-1/2 rounded-l-none rounded-r-full text-xl bg-td-daun font-normal text-td-white focus:bg-green-700 active:bg-green-600">
        WhatsApp
      </Button>
    </div>
  );
}
