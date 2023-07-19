import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import Link from "next/link";

const NavbarSmall = ({ links, clickHandler }) => {
  return (
    <div className="flex h-screen w-full flex-col justify-between text-white">
      <div className="no-highlight container relative h-full translate-x-0 flex-col items-end justify-center gap-y-5 text-2xl transition-all duration-700 ease-in-out ">
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.url}
              onClick={clickHandler}
              className="text-xl uppercase"
            >
              <span>{link.title}</span>
            </Link>
          );
        })}
      </div>

      <div className="container mb-2 flex-col gap-4 text-sm">
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
  );
};

export default NavbarSmall;
