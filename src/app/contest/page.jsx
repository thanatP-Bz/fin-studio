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
      <div className="mx-auto my-[5%] w-full max-w-[1200px] overflow-hidden px-4 ">
        <div className="md:grid-row-auto grid-rows-[repeat(1,16.6%))] grid h-[100%] gap-4 md:grid-cols-[repeat(4,1fr)]">
          <div className="relative h-full w-full cursor-pointer md:col-start-1 md:col-end-3">
            <div class="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-70">
              <h1 className="z-20 text-sm font-bold uppercase text-white md:text-2xl">
                fin contest 1
              </h1>
            </div>
            <div className="h-full w-full bg-red-200">
              <Image
                src={fin1}
                alt="fin-1"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative cursor-pointer md:col-start-3 md:col-end-5 ">
            <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-70">
              <h1 className="z-20 text-2xl font-bold uppercase text-white">
                fin contest 2
              </h1>
            </div>
            <Image
              src={fin2}
              className="h-full w-full object-cover"
              alt="fin-2"
            />
          </div>

          <div className="relative cursor-pointer">
            <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-70">
              <h1 className="z-20 text-2xl font-bold uppercase text-white">
                fin contest 3
              </h1>
            </div>
            <Image
              src={fin3}
              className="h-full w-full object-cover"
              alt="fin-3"
            />
          </div>

          <div className="relative cursor-pointer">
            <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-70">
              <h1 className="z-20 text-2xl font-bold uppercase text-white">
                fin contest 4
              </h1>
            </div>
            <Image
              src={fin4}
              className="h-full w-full object-cover"
              alt="fin-4"
            />
          </div>

          <div className="relative cursor-pointer bg-red-400 md:h-full">
            <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-70">
              <h1 className="z-20 text-2xl font-bold uppercase text-white">
                fin contest 5
              </h1>
            </div>
            <Image
              src={fin5}
              className="h-full w-full object-cover"
              alt="fin-5"
            />
          </div>

          <div className="relative cursor-pointer md:h-full">
            <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-70">
              <h1 className="z-20 text-2xl font-bold uppercase text-white">
                fin contest 6
              </h1>
            </div>
            <Image
              src={fin6}
              className="h-full w-full object-cover "
              alt="fin-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default contest;
