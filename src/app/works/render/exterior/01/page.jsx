"use client";

import React, { useState } from "react";
import Image from "next/image";
import Model from "@/components/model/Model";
import { data } from "../image/imgOne";

const ExteriorOne = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlerClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.image);
  };

  const prevSlide = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="my-4">
      <h1 className="p-10 text-center text-2xl font-bold uppercase">
        contest 1
      </h1>

      {/* picture */}
      <div className="mx-auto grid h-full w-full max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(300px,2fr))] items-center gap-2 px-8">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="overlay relative h-[300px] w-full cursor-pointer"
            >
              <div className="overlay-nth absolute left-0 top-0 h-full w-full bg-black/50 opacity-0 duration-500"></div>
              <Image
                src={item.image}
                alt={item.alt}
                priority={true}
                className="h-full w-full object-cover"
                onClick={() => handlerClick(item, index)}
              />
            </div>
          );
        })}
        {clickedImg && (
          <Model
            clickedImg={clickedImg}
            setClickedImg={setClickedImg}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
          />
        )}
      </div>
    </div>
  );
};

export default ExteriorOne;
