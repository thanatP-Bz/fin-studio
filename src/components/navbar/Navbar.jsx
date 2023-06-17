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
    <div className="fixed top-0 left-0 w-full z-10 text-white">
      <nav className="justify-between items-center py-5 container">
        <Link href="/">
          <h1 className="text-xl font-bold">FIN Studio</h1>
        </Link>
        <div className="cursor-pointer text-4xl z-20" onClick={clickHandler}>
          {menuOpen ? <HiX /> : <HiMenuAlt2 />}
        </div>
        <div
          className={
            menuOpen
              ? `fixed h-screen top-0 right-0 left-0 bottom-0 bg-black/80`
              : "fixed h-screen top-0 right-0 left-0 bottom-0"
          }
        >
          <div className="flex h-screen w-full">
            <div className="flex gap-y-5 text-2xl justify-center items-end flex-col h-full container">
              {links.map((link) => {
                return (
                  <Link key={link.id} href={link.url}>
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
