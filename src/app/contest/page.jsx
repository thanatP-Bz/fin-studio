import React from "react";
import Image from "next/image";
import fin1 from "../../../public/fin-contest-1.jpg";
import fin2 from "../../../public/fin-contest-2.jpg";
import fin3 from "../../../public/fin-contest-3.jpg";
import fin4 from "../../../public/fin-contest-4.jpg";
import fin5 from "../../../public/fin-contest-5.jpg";
import fin6 from "../../../public/fin-contest-6.jpg";

const page = () => {
  return (
    <>
      <div className="flex h-[70vh] w-full items-center justify-center md:h-[90vh]">
        <div className="mb-[0] flex h-full w-screen flex-col items-center justify-center md:mb-[0]">
          <div className="contest-img flex h-full w-full items-center justify-center overflow-hidden bg-cover md:mt-[7%]">
            <h1 className="p-8 text-4xl font-bold uppercase text-white md:text-6xl">
              fin contest
            </h1>
          </div>
        </div>
      </div>

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

        {/*  <div class="relative cursor-pointer">
          <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-100">
            <h1 className="text-4xl uppercase">fin contest 1</h1>
          </div>
          <div class="relative">
            <div class="flex h-full flex-wrap content-center">
              <Image src={fin3} alt="fin3" />
            </div>
          </div>
        </div>

        <div class="relative cursor-pointer">
          <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-100">
            <h1 className="text-4xl uppercase">fin contest 1</h1>
          </div>
          <div class="relative">
            <div class="flex h-full flex-wrap content-center">
              <Image src={fin4} alt="fin4" />
            </div>
          </div>
        </div>

        <div class="relative cursor-pointer">
          <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-100">
            <h1 className="text-4xl uppercase">fin contest 1</h1>
          </div>
          <div class="relative">
            <div class="flex h-full flex-wrap content-center">
              <Image src={fin5} alt="fin5" />
            </div>
          </div>
        </div>

        <div class="relative cursor-pointer">
          <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-100">
            <h1 className="text-4xl uppercase">fin contest 1</h1>
          </div>
          <div class="relative">
            <div class="flex h-full flex-wrap content-center">
              <Image src={fin6} alt="fin6" />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default page;
