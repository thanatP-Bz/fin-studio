import React from "react";
import Image from "next/image";
import { preImg } from "../../components/images/Work";

const Works = () => {
  return (
    <>
      <div className="flex h-[70vh] w-full items-center justify-center md:h-[90vh]">
        <div className="mb-[0] flex h-full w-full flex-col items-center justify-center md:mb-[0]">
          <div className="services-img flex h-full w-full items-center justify-center overflow-hidden bg-cover md:mt-[7%]">
            <h1 className="p-8 text-4xl font-bold uppercase text-white md:text-6xl">
              works
            </h1>
          </div>
        </div>
      </div>

      {/* showcase */}
      <div
        id="showcase"
        className="mx-auto mt-8 flex w-full max-w-[1200px] flex-col gap-8 text-center text-xl"
      >
        <div className="bg-gray-100">
          <h1 className="p-4 uppercase">Architecture 3D Presentation</h1>
          <div className="mx-auto grid h-full w-full max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(300px,2fr))] items-center gap-2 px-8">
            {preImg.map((img, index) => {
              return (
                <div key={index} className="h-[300px] w-full">
                  <Image
                    src={img.link}
                    alt={img.alt}
                    className="h-full w-full cursor-pointer object-cover"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex w-full items-center justify-end p-4 px-8">
            <button className="link-underline-black link-underline  text-lg uppercase">
              Explore More
            </button>
          </div>
        </div>
        <div>
          <h1>Architecture Design</h1>
          <div></div>
          <button>Explore More</button>
        </div>
        <div>
          <h1>Architecture Rendering</h1>
          <div>Explore More</div>
        </div>
      </div>
    </>
  );
};

export default Works;
