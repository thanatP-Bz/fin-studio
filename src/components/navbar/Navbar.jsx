"use client";

import React from "react";
import Link from "next/link";

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
  return (
    <div className="fixed top-0 left-0 w-full z-10 text-white">
      <div className="flex justify-between items-center px-[60px] py-4 mx-auto my-0 max-w-[1366px]">
        <Link href="/">
          <h1 className="text-xl font-bold">FIN Studio</h1>
        </Link>
        <div className="flex item-center gap-10 ">
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
  );
};

export default Navbar;
