"use client";

import React, { useState } from "react";
import Image from "next/image";
import Model from "@/components/model/Model";
import Link from "next/link";
import { data } from "../exterior/image/Image";

const Exterior = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlerClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  return (
    <div className="my-4 md:mt-[7%]">
      <h1 className="p-10 text-center text-2xl font-bold uppercase">
        Exterior
      </h1>
      {/* picture */}
      <div className="mx-auto grid h-full w-full max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(300px,2fr))] items-center gap-2 px-8">
        {data.map((img, index) => {
          return (
            <div key={index}>
              <Link href={img.link}>
                <div className="overlay relative h-[300px] w-full shadow-md">
                  <div className="overlay-nth absolute left-0 top-0 h-full w-full bg-black/50 opacity-0 duration-500">
                    <h1 className="no-spance absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform uppercase text-white">
                      {img.title}
                    </h1>
                  </div>
                  <Image
                    src={img.image}
                    alt={img.alt}
                    className="h-full w-full cursor-pointer object-cover"
                    onClick={() => handlerClick(img, index)}
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
  );
};

export default Exterior;
