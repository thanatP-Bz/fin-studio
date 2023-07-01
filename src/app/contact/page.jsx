import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="flex h-[70vh] w-screen items-center justify-center md:h-[90vh]">
        <div className="mb-[0] flex h-full w-screen flex-col items-center justify-center md:mb-[0]">
          <div className="contact-img flex h-full w-full items-center justify-center overflow-hidden bg-cover md:mt-[7%]">
            <h1 className="p-8 text-4xl font-bold uppercase text-white md:text-6xl">
              contact
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[600px] flex-col items-center justify-center gap-y-0 p-4  md:justify-center md:gap-x-4 md:gap-y-6 md:p-10">
        <p className="text-center text-sm font-bold md:text-xl">
          FIN STUDIO ARCHITECT LIMITED
        </p>
        <p className="text-sm md:text-xl">
          159/191 SAMMAKORN AVENUE CHAIYAPHRUEK-WONGWAEN, LAM PHO, BANG BUA
          THONG DISTRICT, NONTHABURI 11110, THAILAND
        </p>
        <div className="mx-auto mt-2 flex w-full flex-col justify-between gap-4 p-1 text-sm md:text-xl">
          <span className="flex md:mb-2">
            <FaPhoneSquareAlt className="mb-1 mr-1 text-xl text-green-500 md:text-3xl" />
            : 081 924 3132, 080 125 1848, 086 135 5715
          </span>

          <span className="flex md:mb-2 ">
            <BsFacebook className="mb-1 mr-1 text-xl text-blue-500 md:text-3xl" />
            : Fin Studio Architect
          </span>

          <span className="flex md:mb-2 ">
            <MdMarkEmailUnread className="mb-1 mr-1 text-xl text-cyan-500 md:text-3xl" />
            : finstudioarchitect@gmail.com
          </span>
        </div>
      </div>
    </>
  );
};

{
  /* <div className=" flex flex-col gap-y-4 text-black md:gap-y-6">
<h1 className=" text-xl font-bold uppercase md:p-1 md:text-4xl">
  Contact
</h1>
<p className="text-sm font-bold md:text-xl">
  FIN STUDIO ARCHITECT LIMITED
</p>
<p className="text-sm md:text-xl">
  159/191 SAMMAKORN AVENUE CHAIYAPHRUEK-WONGWAEN, LAM PHO,
  BANG BUA THONG DISTRICT, NONTHABURI 11110, THAILAND
</p>
<div className="text-sm md:text-xl">
  <span className="mb-2 flex">
    <FaPhoneSquareAlt className="mb-1 mr-1 text-xl md:text-3xl" />{" "}
    : 081 924 3132, 080 125 1848, 086 135 5715
  </span>

  <span className="mb-2 flex">
    <BsFacebook className="mb-1 mr-1 text-xl md:text-3xl" /> :
    Fin Studio Architect
  </span>

  <span className="mb-2 flex">
    <MdMarkEmailUnread className="mb-1 mr-1 text-xl md:text-3xl" />
    : finstudioarchitect@gmail.com
  </span>
</div>
</div> */
}
export default Contact;
