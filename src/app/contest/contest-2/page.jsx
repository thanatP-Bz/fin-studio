import React from "react";
import Image from "next/image";

import one from "../../../../public/contest-2/1.jpg";
import two from "../../../../public/contest-2/2.jpg";
import three from "../../../../public/contest-2/3.jpg";
import four from "../../../../public/contest-2/4.jpg";
import five from "../../../../public/contest-2/5.jpg";
import six from "../../../../public/contest-2/6.jpg";
import seven from "../../../../public/contest-2/7.jpg";
import eight from "../../../../public/contest-2/8.jpg";
import nine from "../../../../public/contest-2/9.jpg";
import ten from "../../../../public/contest-2/11.jpg";
import eleven from "../../../../public/contest-2/11.jpg";
import twelve from "../../../../public/contest-2/12.jpg";
import thirteen from "../../../../public/contest-2/13.jpg";
import fourteen from "../../../../public/contest-2/14.jpg";
import fifteen from "../../../../public/contest-2/15.jpg";
import sixteen from "../../../../public/contest-2/16.jpg";
import sventeen from "../../../../public/contest-2/17.jpg";
import eighteen from "../../../../public/contest-2/18.jpg";
import nineteen from "../../../../public/contest-2/19.jpg";
import twenty from "../../../../public/contest-2/20.jpg";

const ContestTwo = () => {
  return (
    <div className="mt-4">
      <h1 className="p-10 text-center text-2xl font-bold uppercase">
        contest 2
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
            src={seven}
            alt="contest-7"
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
        <div>
          <Image
            src={ten}
            alt="contest-10"
            className="h-[300px] w-full cursor-pointer object-cover"
          />
        </div>
        <div>
          <Image
            src={eleven}
            alt="contest-11"
            className="h-[300px] w-full cursor-pointer object-cover"
          />
        </div>
        <div>
          <Image
            src={twelve}
            alt="contest-12"
            className="h-[300px] w-full cursor-pointer object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContestTwo;
