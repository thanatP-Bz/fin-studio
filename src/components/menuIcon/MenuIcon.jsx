import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/fin-dark.png";
import { VscMenu, VscClose } from "react-icons/vsc";

const MenuIcon = ({ menuOpen, clickHandler }) => {
  return (
    <>
      {/* logo */}
      <Link href="/">
        <Image src={Logo} width={50} height={50} alt="logo" />
      </Link>

      {/* logo */}
      <div className="z-10 cursor-pointer text-2xl" onClick={clickHandler}>
        {menuOpen ? (
          <VscClose className="text-white transition-all duration-700 ease-in-out" />
        ) : (
          <VscMenu className="text-black transition-all duration-700 ease-in-out" />
        )}
      </div>
    </>
  );
};

export default MenuIcon;
