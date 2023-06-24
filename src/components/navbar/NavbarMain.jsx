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
    title: "works",
    url: "/works",
  },
  {
    id: 3,
    title: "fin contest",
    url: "/contact",
  },
  {
    id: 4,
    title: "news",
    url: "/news",
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
            <Image src={Logo} width={100} height={100} alt="logo" />
          </Link>

          <div className="flex w-full max-w-[1400px] items-center justify-between ">
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
