import React from "react";
import Image from "next/image";
import Image1 from "../../../public/img-1.jpg";

const About = () => {
  return (
    <div className="z-10 flex h-screen w-screen flex-col items-center justify-center md:flex-row">
      <div className="about-img flex h-[50%] w-full items-center justify-center overflow-hidden bg-cover md:h-[70%]"></div>

      <div className=" flex h-[50%] w-full flex-col items-center justify-start gap-y-0 p-5 md:h-[70%] md:justify-center md:gap-x-4 md:gap-y-6 md:p-10">
        <h1 className="text-2xl font-bold md:text-4xl">FIN</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          quas, beatae nulla laudantium labore atque quae corrupti natus velit.
          Qui assumenda accusamus odit, animi et maxime harum omnis voluptate
          quo totam perferendis voluptatem possimus praesentium repellendus sunt
          eius illum nulla! Ea expedita sapiente perspiciatis ipsam ab
          distinctio laborum, quas impedit?
        </p>
      </div>
    </div>
  );
};

export default About;
