"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { AiFillFacebook } from "react-icons/ai";

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
    <div className="fixed left-0 top-0 z-30 h-screen w-full text-white">
      <nav className="container h-full flex-col items-center justify-between py-5">
        <div className="flex w-full items-center justify-between">
          {/* logo */}
          <Link href="/">
            <h1 className="text-xl font-bold">FIN Studio</h1>
          </Link>

          {/* logo */}
          <div className="z-10 cursor-pointer text-4xl" onClick={clickHandler}>
            {menuOpen ? (
              <HiX className="transition-all duration-700 ease-in-out" />
            ) : (
              <HiMenuAlt2 className="transition-all duration-700 ease-in-out" />
            )}
          </div>
        </div>

        {/* overlay */}
        <div
          className={
            menuOpen
              ? `absolute bottom-0 left-0 right-0 top-0 h-screen  bg-black/80 transition-all duration-700 ease-in-out`
              : " absolute bottom-0 left-[1300px] right-0  top-0 h-screen transition-all duration-700 ease-in-out"
          }
        >
          {/* navbar */}
          {menuOpen ? (
            <div className="flex h-screen w-screen flex-col justify-between">
              <div className="no-highlight container relative h-full translate-x-0 flex-col items-end justify-center gap-y-5 text-2xl transition-all duration-700 ease-in-out ">
                {links.map((link) => {
                  return (
                    <Link
                      key={link.id}
                      href={link.url}
                      onClick={clickHandler}
                      className="text-4xl"
                    >
                      <span className="link link-underline link-underline-black">
                        {link.title}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="container mb-2 flex-col gap-4 text-[1rem]">
                <span className="w-full bg-white p-[0.5px]"></span>
                <div className="flex justify-between">
                  <p>©2023 FIN studio Limited. All rights reserved.</p>
                  <Link
                    href="https://www.facebook.com/profile.php?id=100093002670493"
                    className="text-2xl"
                  >
                    <AiFillFacebook />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="translate-x-full" />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
