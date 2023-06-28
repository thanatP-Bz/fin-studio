"use client";

import React, { useState } from "react";
import NavbarSmall from "./NavbarSmall";
import MenuIcon from "../menuIcon/MenuIcon";

const links = [
  {
    id: 1,
    title: "home",
    url: "/",
  },
  {
    id: 2,
    title: "services",
    url: "/services",
  },
  {
    id: 3,
    title: "works",
    url: "/works",
  },
  {
    id: 4,
    title: "fin contest",
    url: "/contact",
  },

  {
    id: 5,
    title: "about",
    url: "/about",
  },
  {
    id: 6,
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
    <div className="fixed left-0 top-0 z-30 flex w-full bg-white md:hidden">
      <nav className="container h-full flex-col items-center justify-between">
        <div className="flex w-full items-center justify-between ">
          <MenuIcon clickHandler={clickHandler} menuOpen={menuOpen} />
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
            <NavbarSmall links={links} clickHandler={clickHandler} />
          ) : (
            <div className="translate-x-full" />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
