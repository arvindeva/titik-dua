'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

import { Button } from './button';
import MenuDesktop from './menu-desktop';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-td-black text-td-white h-[101px] px-10">
      <div className="mx-auto max-w-[1400px] flex flex-row items-center h-full">
        <Link href="/">
          <div className="-translate-y-1 display flex flex-row gap-x-1 items-baseline">
            <span className="font-black text-[46px]">:</span>
            <span className="text-4xl tracking-wide"> titik dua</span>
          </div>
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
          <FaWhatsapp size="38" className="mr-2" />
          <Button variant="secondary">
            <p className="text-[24px] px-4 py-4">book now</p>
          </Button>
          <MenuDesktop />
        </div>
      </div>
    </header>
  );
}
