import React from "react";
import Image from "next/image";
import fin1 from "../../../public/fin-contest-1.jpg";
import fin2 from "../../../public/fin-contest-2.jpg";
import fin3 from "../../../public/fin-contest-3.jpg";
import fin4 from "../../../public/fin-contest-4.jpg";
import fin5 from "../../../public/fin-contest-5.jpg";
import fin6 from "../../../public/fin-contest-6.jpg";

const contest = () => {
  return (
    <>
      <div className="mx-auto my-[5%] grid h-full w-full max-w-[1200px] grid-cols-3 gap-2">
        <div className="relative cursor-pointer">
          <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-70">
            <h1 className="text-4xl uppercase">fin contest 1</h1>
          </div>
          <Image src={fin1} className="h-full w-full" alt="fin-2" />
        </div>

        <div className="relative cursor-pointer">
          <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-70">
            <h1 className="text-4xl uppercase">fin contest 2</h1>
          </div>
          <Image src={fin2} className="h-full w-full" alt="fin-2" />
        </div>

        <div className="relative cursor-pointer">
          <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-70">
            <h1 className="text-4xl uppercase">fin contest 3</h1>
          </div>
          <Image src={fin3} className="h-full w-full" alt="fin-3" />
        </div>

        <div className="relative cursor-pointer">
          <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-70">
            <h1 className="text-4xl uppercase">fin contest 4</h1>
          </div>
          <Image src={fin4} className="h-full w-full" alt="fin-4" />
        </div>

        <div className="relative cursor-pointer">
          <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-70">
            <h1 className="text-4xl uppercase">fin contest 5</h1>
          </div>
          <Image src={fin5} className="h-full w-full" alt="fin-5" />
        </div>

        <div className="relative cursor-pointer">
          <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-70">
            <h1 className="text-4xl uppercase">fin contest 6</h1>
          </div>
          <Image src={fin6} className="h-full w-full" alt="fin-6" />
        </div>
      </div>
    </>
  );
};

export default contest;
