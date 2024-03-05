import Link from 'next/link';
import LogoFull from '../logos/logo-full';
import { FaInstagram, FaFacebook, FaSpotify, FaWhatsapp } from 'react-icons/fa';
import { LuMapPin, LuPhone } from 'react-icons/lu';
import { Button } from './button';
import ScrollToTop from './scroll-to-top';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col pt-10 pb-32 gap-y-10 bg-td-black text-td-white px-4">
      <div className="w-[126px]">
        <LogoFull />
      </div>
      <p className="text-sm">
        Jl. Cok Rai Pudak No. 48, Peliatan, Kecamatan Ubud, Kabupaten Gianyar,
        Bali 80571, Indonesia
      </p>
      <ul className="flex flex-col gap-y-4">
        <li className="flex flex-row items-center gap-x-2">
          <LuPhone size={20} />+ 62 12345678
        </li>
        <li className="flex flex-row items-center gap-x-2">
          <FaWhatsapp size={20} />
          Contact us directly
        </li>
        <li className="flex flex-row items-center gap-x-2">
          <LuMapPin size={20} />
          Get directions
        </li>
      </ul>
      <ul className="flex flex-row space-x-4 justify-center">
        <li>
          <Link href="/">
            <FaInstagram size="20px" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <FaFacebook size="20px" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <FaSpotify size="20px" />
          </Link>
        </li>
      </ul>
      <p className="text-sm">
        &copy; 2024 Titik Dua. PT Titik Titik Terang. All Rights Reserved.
      </p>
      <p className="text-sm">Privacy policy</p>
      <div className="w-full text-center">
        <ScrollToTop />
      </div>
    </footer>
  );
}
