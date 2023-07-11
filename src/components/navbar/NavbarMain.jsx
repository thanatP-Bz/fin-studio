"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/fin-dark.png";
import { AiOutlineDown } from "react-icons/ai";

const contestSubLinks = [
  {
    id: 1,
    title: "professional",
    url: "/professional",
  },
  {
    id: 2,
    title: "student",
    url: "/student",
  },
];

const NavbarMain = () => {
  const [open, setOpen] = useState(false);
  const [openSubContest, setOpenSubContest] = useState(false);

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
              className="p-2"
            />
          </Link>

          <div className="relative mt-2 flex w-full max-w-[1400px] items-center justify-between px-8 uppercase">
            <Link href="/">home</Link>
            <Link href="/services">services</Link>
            <Link href="/works">works</Link>

            <div className="group flex gap-2">
              fins contest
              <AiOutlineDown className="mt-1" />
              {/* dropdown1 */}
              <ul>
                <li>
                  <Link href="#"></Link>
                </li>
              </ul>
            </div>

            <Link href="/about">about</Link>
            <Link href="/contact">contact</Link>

            {/* dropdown2 */}
            {openSubContest ? (
              <div className="absolute left-[67%] top-40 bg-white p-2 shadow-md">
                {contestSubLinks.map((link) => {
                  return (
                    <div key={link.id} className="bg-red-200 px-6 py-1">
                      <Link href={link.url} className="z-10">
                        {link.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMain;
