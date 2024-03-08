import Link from "next/link";
import LogoFull from "../logos/logo-full";
import { FaInstagram, FaFacebook, FaSpotify, FaWhatsapp } from "react-icons/fa";
import { LuMapPin, LuPhone } from "react-icons/lu";
import { Button } from "./button";
import ScrollToTop from "./scroll-to-top";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col pt-10 pb-32 lg:pb-16 gap-y-10 bg-td-black text-td-white px-4 lg:px-12">
      <div className="w-[126px]">
        <LogoFull color="white" />
      </div>
      <p className="text-sm lg:text-base leading-tight font-normal">
        Jl. Cok Rai Pudak No. 48, Peliatan, Kecamatan Ubud, Kabupaten Gianyar,
        Bali 80571, Indonesia
      </p>
      <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-between">
        <ul className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-4">
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
      </div>
      <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:w-full lg:items-center lg:-mt-3">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-4 lg:items-center">
          <p className="text-sm lg:text-base leading-tight font-normal">
            &copy; 2024 Titik Dua. PT Titik Titik Terang. All Rights Reserved.
          </p>
          <p className="text-sm lg:text-base leading-tight font-normal">
            Privacy policy
          </p>
        </div>
        <div className="w-full lg:w-auto text-center px-0">
          <ScrollToTop />
        </div>
      </div>
    </footer>
  );
}
