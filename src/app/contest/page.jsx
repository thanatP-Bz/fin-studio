import React from "react";
import Image from "next/image";
import fin1 from "../../../public/fin-contest-1.jpg";
import fin2 from "../../../public/fin-contest-2.jpg";
import fin3 from "../../../public/fin-contest-3.jpg";
import fin4 from "../../../public/fin-contest-4.jpg";
import fin5 from "../../../public/fin-contest-5.jpg";
import fin6 from "../../../public/fin-contest-6.jpg";

const Contest = () => {
  return (
    <>
      <>
        <div className="flex h-[70vh] w-screen items-center justify-center md:h-[90vh]">
          <div className="mb-[0] flex h-full w-screen flex-col items-center justify-center md:mb-[0]">
            <div className="contest-img flex h-full w-full items-center justify-center overflow-hidden bg-cover md:mt-[7%]">
              <h1 className="p-8 text-4xl font-bold uppercase text-white md:text-6xl">
                fin contest
              </h1>
            </div>
          </div>
        </div>

        <div className="mx-auto my-[5%] grid w-screen max-w-[1200px] grid-cols-3 gap-2">
          <div className="relative">
            <div className=""></div>
            <Image src={fin1} className="h-full w-full" alt="fin-1" />
          </div>
          <div>
            <Image src={fin2} className="h-full w-full" alt="fin-2" />
          </div>
          <div>
            <Image src={fin3} className="h-full w-full" alt="fin-3" />
          </div>
          <div>
            <Image src={fin4} className="h-full w-full" alt="fin-4" />
          </div>
          <div>
            <Image src={fin5} className="h-full w-full" alt="fin-5" />
          </div>
          <div>
            <Image src={fin6} className="h-full w-full" alt="fin-6" />
          </div>
        </div>
      </>
    </>
  );
};

export default Contest;
