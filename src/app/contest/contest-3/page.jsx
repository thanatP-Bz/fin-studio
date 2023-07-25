"use client";

import React, { useState } from "react";
import Image from "next/image";
import Model from "@/components/model/Model";
import { data } from "../../../components/images/Backup";

const ContestThree = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlerClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const prevSlide = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="my-4">
      <h1 className="p-10 text-center text-2xl font-bold uppercase">
        contest 3
      </h1>

      {/* picture */}
      <div className="mx-auto grid h-full w-full max-w-[1400px] grid-cols-[repeat(auto-fit,minmax(300px,2fr))] items-center gap-2 px-8">
        {data.map((item, index) => {
          return (
            <div key={index} className="h-[300px] w-full">
              <Image
                src={item.link}
                alt={item.text}
                priority={true}
                className="h-full w-full cursor-pointer object-cover"
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

export default ContestThree;
