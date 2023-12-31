"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Model from "@/components/model/Model";
import { preImgOne } from "../../components/images/Presentation";
import { renderImg } from "../../components/images/RenderImg";
import { designImg } from "../../components/images/DesignImg";

const Works = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlerClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.image);
  };

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
        className=" mx-auto mt-10 flex w-full max-w-[1200px] flex-col text-center text-xl"
      >
        {/* Architecture Design */}
        <div>
          <h1 className="p-4 uppercase">Architecture Design</h1>
          <div className="mx-auto mb-10 grid h-full w-full max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(300px,2fr))] items-center gap-2 px-8">
            {designImg.map((img, index) => {
              return (
                <div key={index}>
                  <Link href={img.link}>
                    <div className="overlay relative h-[300px] w-full shadow-md md:h-[300px]">
                      <div className="overlay-nth absolute left-0 top-0 h-full w-full bg-black/50 opacity-0 duration-500">
                        <h1 className="unppercase absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform uppercase text-white">
                          {img.title}
                        </h1>
                      </div>
                      <Image
                        src={img.image}
                        alt={img.alt}
                        className="h-full w-full cursor-pointer object-cover"
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/*Architecture Rendering  */}
        <div>
          <h1 className="p-4 uppercase">Architecture Rendering</h1>
          <div className="mx-auto mb-10 grid h-full w-full max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(300px,1200px))] items-center gap-2 px-8">
            {renderImg.map((img, index) => {
              return (
                <div key={index}>
                  <Link href={img.link}>
                    <div className="overlay relative h-[300px] w-full shadow-md md:h-[400px]">
                      <div className="overlay-nth absolute left-0 top-0 h-full w-full bg-black/50 opacity-0 duration-500">
                        <h1 className="unppercase absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform uppercase text-white">
                          {img.title}
                        </h1>
                      </div>
                      <Image
                        src={img.image}
                        alt={img.alt}
                        className="h-full w-full cursor-pointer object-cover"
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Architecture 3D Presentation */}
        <div>
          <h1 className="p-4 uppercase">Architecture 3D Presentation</h1>
          <div className="mx-auto mb-10 grid h-full w-full max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(300px,1200px))] items-center gap-2 px-8 md:mb-10">
            {preImgOne.map((img, index) => {
              return (
                <div key={index}>
                  <Link href={img.link}>
                    <div className="overlay relative h-[300px] w-full shadow-md md:h-[400px]">
                      <div className="overlay-nth absolute left-0 top-0 h-full w-full bg-black/50 opacity-0 duration-500">
                        <h1 className="unppercase absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform uppercase text-white">
                          {img.title}
                        </h1>
                      </div>
                      <Image
                        src={img.image}
                        alt={img.alt}
                        className="h-full w-full cursor-pointer object-cover"
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
            {clickedImg && (
              <Model clickedImg={clickedImg} setClickedImg={setClickedImg} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
