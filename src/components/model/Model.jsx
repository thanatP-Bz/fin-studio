import React from "react";
import { RiCloseFill } from "react-icons/ri";
import Image from "next/image";

const Model = ({ clickedImg, setClickedImg }) => {
  const closeModelHandler = () => {
    setClickedImg(null);
  };

  return (
    <div>
      <div className="fixed left-0 top-0 z-[500] h-screen w-full bg-black/70">
        <span
          className="absolute right-0 top-0 cursor-pointer"
          onClick={closeModelHandler}
        >
          <RiCloseFill className="text-4xl text-white" />
        </span>
        <div className="absolute left-1/2 top-1/2 z-[1000] h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 transform  text-black">
          <Image
            src={clickedImg}
            alt="bigger-image"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Model;
