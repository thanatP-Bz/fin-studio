import React from "react";
import Image from "next/image";
import one from "../../../../public/contest-1/1.jpg";
import two from "../../../../public/contest-1/2.jpg";
import three from "../../../../public/contest-1/3.jpg";
import four from "../../../../public/contest-1/4.jpg";
import five from "../../../../public/contest-1/5.jpg";
import six from "../../../../public/contest-1/6.jpg";
import seven from "../../../../public/contest-1/7.jpg";
import eight from "../../../../public/contest-1/8.jpg";
import nine from "../../../../public/contest-1/9.jpg";

const ContestOne = () => {
  return (
    <div className="mt-4">
      <h1 className="p-10 text-center text-2xl font-bold uppercase">
        contest 1
      </h1>

      {/* pictures */}
      <div className="mx-auto grid h-full w-full max-w-[1400px] grid-cols-[repeat(auto-fit,minmax(300px,2fr))] items-center gap-2 px-8">
        <div>
          <Image
            src={one}
            alt="contest-1"
            className="h-[300px] w-full cursor-pointer object-cover"
          />
        </div>
        <div>
          <Image
            src={two}
            alt="contest-2"
            className="h-[300px] w-full cursor-pointer object-cover"
          />
        </div>
        <div>
          <Image
            src={three}
            alt="contest-3"
            className="h-[300px] w-full cursor-pointer object-cover"
          />
        </div>
        <div>
          <Image
            src={four}
            alt="contest-4"
            className="h-[300px] w-full cursor-pointer object-cover"
          />
        </div>
        <div>
          <Image
            src={five}
            alt="contest-5"
            className="h-[300px] w-full cursor-pointer object-cover"
          />
        </div>
        <div>
          <Image
            src={six}
            alt="contest-6"
            className="h-[300px] w-full cursor-pointer object-cover"
          />
        </div>

        <div>
          <Image
            src={eight}
            alt="contest-8"
            className="h-[300px] w-full cursor-pointer object-cover"
          />
        </div>
        <div>
          <Image
            src={nine}
            alt="contest-9"
            className="h-[300px] w-full cursor-pointer object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContestOne;
