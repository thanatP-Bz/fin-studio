"use client";

import { useState } from "react";
import Image from "next/image";
import { data } from "../images/Images";
import Model from "../model/Model";

const Lightbox = () => {
  const [clickImg, setClickImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlerClick = (item, index) => {
    setCurrentIndex(index);
    setClickImg(item.link);
  };

  return (
    <div className="flex h-[100vh] w-full items-center justify-center gap-2">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <Image
              src={item.link}
              alt={item.text}
              width={400}
              height={400}
              className="cursor-pointer"
              onClick={() => handlerClick(item, index)}
            />
          </div>
        );
      })}
      {clickImg && <Model clickImg={clickImg} />}
    </div>
  );
};

export default Lightbox;
