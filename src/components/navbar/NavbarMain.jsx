import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/fin-dark.png";

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
    url: "/contest",
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
              className="p-2"
            />
          </Link>

          <div className="mt-2 flex w-full max-w-[1400px] items-center justify-between">
            {links.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  className=" text-xl uppercase"
                >
                  <span className="link link-underline link-underline-black">
                    {link.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMain;
