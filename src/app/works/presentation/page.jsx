"use client";

import React, { useState } from "react";
import Image from "next/image";
import Model from "@/components/model/Model";
import { preImgTwo } from "../../../components/images/Presentation";

const Presentation = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlerClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const prevSlide = () => {
    const totalLength = preImgTwo.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = preImgTwo[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = preImgTwo.filter((item) => {
      return preImgTwo.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const totalLength = preImgTwo.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = preImgTwo[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = preImgTwo.filter((item) => {
      return preImgTwo.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
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
        {preImgTwo.map((item, index) => {
          return (
            <div key={index} className="h-[300px] w-full">
              <Image
                src={item.link}
                alt={item.alt}
                priority={true}
                className="h-full w-full cursor-pointer object-cover shadow-md"
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

export default Presentation;
