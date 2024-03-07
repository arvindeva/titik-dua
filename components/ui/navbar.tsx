"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "./button";
import Menu from "./menu";

import LogoFull from "@/components/logos/logo-full";
import LogoMobile from "../logos/logo-mobile";

function DesktopNavBar() {
  return (
    <header className="hidden lg:inline-block sticky top-0 z-50 w-full bg-black text-td-white h-[101px] px-12">
      <div className="mx-auto max-w-content flex flex-row items-center h-full justify-between w-full">
        <Link href="/">
          <LogoFull color="white" />
        </Link>
        <div className="flex flex-row items-center space-x-4">
          <FaWhatsapp size="38" className="mr-2" />
          <Button variant="secondary">
            <p className="text-2xl px-4 py-4">book now</p>
          </Button>
          <Menu />
        </div>
      </div>
    </header>
  );
}

function MobileNavBar() {
  return (
    <header className="lg:hidden sticky top-0 z-50 w-full bg-black text-td-white h-[80px] px-4">
      <div className="mx-auto max-w-[1400px] flex flex-row items-center h-full justify-between w-full">
        <Link className="h-7" href="/">
          <LogoMobile color="white" />
        </Link>
        <Menu />
      </div>
    </header>
  );
}

export default function NavBar() {
  return (
    <>
      <MobileNavBar />
      <DesktopNavBar />
    </>
  );
}
