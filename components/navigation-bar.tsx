"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="relative mx-auto grid grid-flow-col items-center justify-between px-6 py-[34px] md:max-w-[768px] md:px-[42px] lg:max-w-[1440px] lg:px-[164px] lg:py-[64px]">
      <Link href="/">
        <Image
          src="/shared/desktop/logo-dark.png"
          alt=""
          width={0}
          height={0}
          className="inline h-[27px] w-auto"
          unoptimized
        />
      </Link>

      <div className=" md:hidden">
        <Button
          className=""
          variant={"ghost"}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <Image
              src="/shared/mobile/icon-close.svg"
              alt=""
              width={0}
              height={0}
              className="h-5 w-6"
            />
          ) : (
            <Image
              src="/shared/mobile/icon-hamburger.svg"
              alt=""
              width={0}
              height={0}
              className="h-5 w-6"
            />
          )}
        </Button>
      </div>

      {/* MOBILE MENU */}
      {openMenu ? (
        <div className="absolute  top-[104px] z-50 w-full">
          <ul className="   grid gap-8 bg-customBlack px-6 py-12 text-2xl uppercase text-white transition-all md:hidden">
            <li className="duration-500  ">
              <Link onClick={() => setOpenMenu(!openMenu)} href="/about">
                Our company
              </Link>
            </li>
            <li className="duration-500  ">
              <Link onClick={() => setOpenMenu(!openMenu)} href="/locations">
                Locations
              </Link>
            </li>
            <li className="duration-500  ">
              <Link onClick={() => setOpenMenu(!openMenu)} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="h-screen bg-customDarkGrey/30" />
        </div>
      ) : (
        ""
      )}

      {/* TABLET and DESKTOP MENU */}
      <div className="hidden md:inline  ">
        <ul className="grid gap-8 bg-white text-2xl uppercase text-customDarkGrey transition-all md:cursor-pointer md:grid-flow-col md:gap-[42px] md:text-sm md:leading-[14px] md:tracking-[2px]">
          <li className="duration-500 hover:underline">
            <Link href="/about">Our company</Link>
          </li>
          <li className="duration-500 hover:underline">
            <Link href="/locations">Locations</Link>
          </li>
          <li className="duration-500 hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
