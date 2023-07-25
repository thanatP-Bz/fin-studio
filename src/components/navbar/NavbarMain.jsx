"use client";

import Dropdown from "../navbar/Dropdown";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/fin-dark.png";

const NavbarMain = () => {
  return (
    <div className="fixed left-0 z-30 hidden w-full bg-white pb-2  md:block">
      <nav className=" h-full flex-col items-center justify-between">
        <div className="flex h-full flex-col items-center ">
          <Link href="/">
            <Image
              src={Logo}
              width={160}
              height={160}
              alt="logo"
              className="h-auto w-auto p-2"
            />
          </Link>

          <div className="relative mt-2 flex w-full max-w-[1200px] items-center justify-between px-8 uppercase">
            <Link href="/" className="link-underline-black link-underline">
              home
            </Link>
            <Link
              href="/services"
              className="link-underline-black link-underline"
            >
              services
            </Link>
            <Link href="/works" className="link-underline-black link-underline">
              works
            </Link>

            {/* dropdown */}
            <Dropdown />

            <Link href="/about" className="link-underline-black link-underline">
              about
            </Link>
            <Link
              href="/contact"
              className="link-underline-black link-underline"
            >
              contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMain;
