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
    title: "portfolio",
    url: "/portfolio",
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
    <div className="flex h-16 items-center justify-between">
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
  );
};

export default Navbar;
