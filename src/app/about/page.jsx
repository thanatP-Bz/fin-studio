import React from "react";
import Image from "next/image";
import aniwat from "../../../public/aniwat.png";
import kamphon from "../../../public/kamphon.png";
import kitwat from "../../../public/kitwat.png";

const About = () => {
  return (
    <>
      <div className="flex h-[70vh] w-screen items-center justify-center md:h-[100vh]">
        <div className="mb-[10%] flex h-[100vh] w-screen flex-col items-center justify-center md:mb-0">
          <div className="about-img flex h-[70%] w-full items-center justify-center overflow-hidden bg-cover md:mt-[7%] md:h-[100%]"></div>
        </div>
      </div>
      <div className="mx-auto flex h-[100%] w-full max-w-[1350px] flex-col items-center justify-center gap-y-0 p-4 text-center md:h-[70%] md:justify-center md:gap-x-4 md:gap-y-6 md:p-10">
        <h1 className="text-2xl font-bold uppercase md:text-[28px]">
          Welcome to Fin Studio
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error placeat
          ad perspiciatis inventore fugiat sint adipisci ipsam provident quas
          vero exercitationem quis atque voluptates facere, maxime molestias
          minus quam? Eos! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Labore nobis assumenda natus quisquam numquam illum expedita
          ipsum tempore similique esse eligendi quod, vitae hic est laudantium
          deleniti adipisci asperiores ex.
        </p>
      </div>

      {/* team */}
      <div className=" mb-[7%] w-full text-center uppercase md:mb-[5%] md:mt-[0]">
        <h1 className=" p-8 text-xl font-bold md:text-4xl">studio team</h1>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:items-start">
          <div className="flex flex-col gap-y-4 bg-white">
            <Image
              src={aniwat}
              className="h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
              alt="aniwat"
            />

            <h1 className="text-xl font-bold md:text-2xl">Aniwat Suyata</h1>
            <p className="text-md md:text-xl ">Founder / Architect</p>
          </div>

          <div className=" flex flex-col  gap-y-4 bg-white">
            <Image
              src={kitwat}
              className="h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
              alt="kitwat"
            />
            <h1 className="text-xl font-bold md:text-2xl">Kitwat Thasee</h1>
            <p className="text-md md:text-xl ">Director / Architect</p>
          </div>

          <div className="flex flex-col gap-y-4 bg-white">
            <Image
              src={kamphon}
              className="h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
              alt="kamphon"
            />

            <h1 className="text-xl font-bold md:text-2xl">Kamphon Mingklin</h1>
            <p className="text-md md:text-xl ">Director / 3D model</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
