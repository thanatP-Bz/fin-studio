"use client";

import { useState } from "react";
import Image from "next/image";
import { data } from "../images/FinContestOne";
import Model from "../model/Model";

const Lightbox = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlerClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  return (
    <div className="flex h-[100vh] w-full items-center justify-center gap-2">
      {data.map((item, index) => {
        return (
          <div key={index} className="h-[400px] w-[400px]">
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
        <Model clickedImg={clickedImg} setClickedImg={setClickedImg} />
      )}
    </div>
  );
};

export default Lightbox;
