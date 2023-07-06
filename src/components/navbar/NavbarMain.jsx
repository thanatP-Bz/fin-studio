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

const contestLinks = [
  {
    id: 1,
    title: "contest-1",
    url: "/contest-1",
  },
  {
    id: 2,
    title: "contest-2",
    url: "/contest-2",
  },
  {
    id: 3,
    title: "contest-3",
    url: "/contest-3",
  },
  {
    id: 4,
    title: "contest-4",
    url: "contest-4",
  },

  {
    id: 5,
    title: "contest-5",
    url: "/contest-5",
  },
  {
    id: 6,
    title: "contest-6",
    url: "/contest-6",
  },
];

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

          <div className="relative mt-2 flex w-full max-w-[1400px] items-center justify-between">
            <Link href="#">home</Link>
            <Link href="#">home</Link>
            <Link href="#">home</Link>
            <Link href="#">home</Link>
            <Link href="#">home</Link>
            <Link href="#">home</Link>

            {/* dropdown1 */}
            <div className="absolute left-[57%] top-8 bg-white p-2 shadow-md">
              {contestLinks.map((link) => {
                return (
                  <div key={link.id} className="bg-red-200 px-6 py-1">
                    <Link href={link.url} className="z-10">
                      {link.title}
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* dropdown2 */}
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMain;
