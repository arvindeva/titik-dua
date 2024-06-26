"use-client";

import { Button } from "./button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import LogoMobile from "../logos/logo-mobile";
import { cn } from "@/lib/utils";
import { kobe } from "@/app/fonts/fonts";
import { FaInstagram, FaFacebook, FaSpotify, FaWhatsapp } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LogoFull from "../logos/logo-full";

export default function menu() {
  return (
    <Sheet>
      <SheetTrigger>
        <svg
          width="40"
          height="16"
          viewBox="0 0 40 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="4" fill="white" />
          <rect y="12" width="40" height="4" fill="white" />
        </svg>
      </SheetTrigger>
      <SheetContent side="top" className="h-full p-0 bg-td-beige">
        <SheetHeader>
          <div className="sticky xl:h-[101px] top-0 z-50 w-full  text-td-black h-[80px] px-4 lg:px-0">
            <div className="mx-auto max-w-content flex flex-row items-center h-full justify-between w-full lg:px-12">
              <Link className="h-7" href="/">
                <SheetClose>
                  <div className="lg:hidden">
                    <LogoMobile color="black" />
                  </div>
                  <div className="hidden lg:block">
                    <LogoFull color="black" />
                  </div>
                </SheetClose>
              </Link>
              <div className="hidden lg:flex flex-row space-x-8 items-center">
                <FaWhatsapp size="38" className="mr-2" />
                <Button variant="black">
                  <p className="text-2xl px-4 py-4">Book now</p>
                </Button>

                <SheetClose className="bg-transparent transform -translate-x-1.5">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2.82812"
                      width="40"
                      height="4"
                      transform="rotate(45 2.82812 0)"
                      fill="#181E1B"
                    />
                    <rect
                      x="31.1094"
                      y="2.82812"
                      width="40"
                      height="4"
                      transform="rotate(135 31.1094 2.82812)"
                      fill="#181E1B"
                    />
                  </svg>
                </SheetClose>
              </div>
              <SheetClose className="block lg:hidden bg-transparent transform -translate-x-1.5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2.82812"
                    width="40"
                    height="4"
                    transform="rotate(45 2.82812 0)"
                    fill="#181E1B"
                  />
                  <rect
                    x="31.1094"
                    y="2.82812"
                    width="40"
                    height="4"
                    transform="rotate(135 31.1094 2.82812)"
                    fill="#181E1B"
                  />
                </svg>
              </SheetClose>
            </div>
          </div>
          <div>
            <ul
              className={cn(
                "flex flex-col space-y-3 text-[32px] font-bold mt-8 leading-none lg:hidden",
                kobe.className,
              )}
            >
              <li>
                <Link href="/stay">
                  <SheetClose>stay</SheetClose>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <SheetClose>what&apos;s on</SheetClose>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <SheetClose>about us</SheetClose>
                </Link>
              </li>
              <li>
                <Link href="/private-events">
                  <SheetClose>private events</SheetClose>
                </Link>
              </li>
              <li>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-bold no-underline hover:no-underline">
                      restaurants & bars
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col text-center gap-y-3 pt-3">
                        <li>
                          <Link href="/ramu-kitchen">
                            <SheetClose>ramu kitchen</SheetClose>
                          </Link>
                        </li>
                        <li>
                          <Link href="/rooftop-bar">
                            <SheetClose>rooftop bar</SheetClose>
                          </Link>
                        </li>
                        <li>
                          <Link href="/pool-bar">
                            <SheetClose>pool bar</SheetClose>
                          </Link>
                        </li>
                        <li>
                          <Link href="/coca-bar">
                            <SheetClose>coca bar</SheetClose>
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li>
                <Link href="/contact">
                  <SheetClose>contact</SheetClose>
                </Link>
              </li>
            </ul>

            <div
              className={cn(
                "hidden lg:flex flex-row text-[40px] gap-x-48 font-bold mt-4 leading-none max-w-content mx-auto px-12",
                kobe.className,
              )}
            >
              <ul className="text-left space-y-6">
                <li>
                  <Link href="/stay">
                    <SheetClose>stay</SheetClose>
                  </Link>
                </li>
                <li>
                  <Link href="/events">
                    <SheetClose>what&apos;s on</SheetClose>
                  </Link>
                </li>
                <li>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="font-bold no-underline hover:no-underline">
                        restaurants & bars
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="flex flex-col gap-y-3 pt-3">
                          <li>
                            <Link href="/ramu-kitchen">
                              <SheetClose>ramu kitchen</SheetClose>
                            </Link>
                          </li>
                          <li>
                            <Link href="/rooftop-bar">
                              <SheetClose>rooftop bar</SheetClose>
                            </Link>
                          </li>
                          <li>
                            <Link href="/pool-bar">
                              <SheetClose>pool bar</SheetClose>
                            </Link>
                          </li>
                          <li>
                            <Link href="/coca-bar">
                              <SheetClose>coca bar</SheetClose>
                            </Link>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
              </ul>
              <ul className="text-left space-y-6">
                <li>
                  <Link href="/private-events">
                    <SheetClose>private events</SheetClose>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <SheetClose>about us</SheetClose>
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    <SheetClose>contact</SheetClose>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute bottom-10  right-1/2 lg:right-12 transform translate-x-1/2 lg:translate-x-0">
            <ul className="flex flex-row space-x-4 lg:space-x-8">
              <li>
                <Link href="/" className="text-xl lg:text-4xl">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href="/" className="text-xl lg:text-4xl">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link href="/" className="text-xl lg:text-4xl">
                  <FaSpotify />
                </Link>
              </li>
            </ul>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
