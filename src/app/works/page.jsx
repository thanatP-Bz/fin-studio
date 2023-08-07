import React from "react";
import Image from "next/image";
import { preImg } from "../../components/images/Presentation";
import { renderImg } from "../../components/images/RenderImg";
import { designImg } from "../../components/images/DesignImg";
import { HiArrowRight } from "react-icons/hi";

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
        className="mx-auto mt-8 flex w-full max-w-[1200px] flex-col text-center text-xl"
      >
        {/* Architecture Design */}
        <div>
          <h1 className="p-4 uppercase">Architecture Design</h1>
          <div className="mx-auto grid h-full w-full max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(300px,2fr))] items-center gap-2 px-8">
            {designImg.map((img, index) => {
              return (
                <div key={index} className="h-[300px] w-full shadow-md">
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
            <button className="link-underline-black link-underline flex gap-1 text-lg uppercase">
              More Projects
              <HiArrowRight className="mt-1" />
            </button>
          </div>
        </div>
        {/*Architecture Rendering  */}
        <div>
          <h1 className="p-4 uppercase">Architecture Rendering</h1>
          <div className="mx-auto grid h-full w-full max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(300px,2fr))] items-center gap-2 px-8">
            {renderImg.map((img, index) => {
              return (
                <div key={index} className="h-[300px] w-full shadow-md">
                  <Image
                    src={img.link}
                    alt={img.alt}
                    className="h-full w-full cursor-pointer object-cover"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex w-full items-center justify-end p-4 px-8 ">
            <button className="link-underline-black link-underline flex gap-1 text-lg uppercase">
              More Projects
              <HiArrowRight className="mt-1" />
            </button>
          </div>
        </div>

        {/* Architecture 3D Presentation */}
        <div>
          <h1 className="p-4 uppercase">Architecture 3D Presentation</h1>
          <div className="mx-auto grid h-full w-full max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(300px,2fr))] items-center gap-2 px-8">
            {preImg.map((img, index) => {
              return (
                <div key={index} className="h-[300px] w-[375px] shadow-md">
                  <Image
                    src={img.link}
                    alt={img.alt}
                    className="h-full w-full cursor-pointer object-cover"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex w-full items-center justify-end p-4 px-8 ">
            <button className="link-underline-black link-underline flex gap-1 text-lg uppercase">
              More Projects
              <HiArrowRight className="mt-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
