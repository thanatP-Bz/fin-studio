"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt2, HiX } from "react-icons/hi";

const links = [
  {
    id: 1,
    title: "home",
    url: "/",
  },
  {
    id: 2,
    title: "works",
    url: "/works",
  },
  {
    id: 3,
    title: "about",
    url: "/about",
  },
  {
    id: 4,
    title: "contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const clickHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed left-0 top-0 z-10 w-full text-white">
      <nav className="container items-center justify-between py-5">
        {/* logo */}
        <Link href="/">
          <h1 className="text-xl font-bold">FIN Studio</h1>
        </Link>

        {/* logo */}
        <div className="z-20 cursor-pointer text-4xl" onClick={clickHandler}>
          {menuOpen ? (
            <HiX className="transition-all duration-700 ease-in-out" />
          ) : (
            <HiMenuAlt2 className="transition-all duration-700 ease-in-out" />
          )}
        </div>

        {/* overlay */}
        <div
          className={
            menuOpen
              ? `absolute bottom-0 left-0 right-0 top-0 h-screen  bg-black/80 transition-all duration-700 ease-in-out`
              : "absolute bottom-0 left-[1300px] right-0 top-0  h-screen translate-x-0 transition-all duration-700 ease-in-out"
          }
        >
          {/* navbar */}
          {menuOpen ? (
            <div className="flex h-screen w-full">
              <div className="no-highlight container relative flex h-full flex-col items-end justify-center gap-y-5 text-2xl">
                {links.map((link) => {
                  return (
                    <Link key={link.id} href={link.url} onClick={clickHandler}>
                      <span className="link link-underline link-underline-black">
                        {link.title}
                      </span>
                    </Link>
                  );
                })}
                <span className="mt-10 w-full bg-white p-[0.7px]"></span>
              </div>
            </div>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
