import React from "react";
import Image from "next/image";
import aniwat from "../../../public/aniwat.png";
import kamphon from "../../../public/kamphon.png";
import kitwat from "../../../public/kitwat.png";

const About = () => {
  return (
    <>
      <div className="flex h-[70vh] w-full items-center justify-center md:h-[90vh]">
        <div className="mb-[0] flex h-full w-screen flex-col items-center justify-center md:mb-[0]">
          <div className="about-img flex h-full w-full items-center justify-center overflow-hidden bg-cover md:mt-[7%]">
            <h1 className="p-8 text-4xl font-bold uppercase text-white md:text-6xl">
              about
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center gap-y-0 p-4 text-center md:justify-center md:gap-x-4 md:gap-y-6 md:p-10">
        <h1 className="p-4 text-xl font-bold uppercase md:text-4xl">
          Welcome to Fin Studio
        </h1>
        <p className="text-md md:text-xl">
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
        <h1 className="p-8 text-xl font-bold md:text-4xl">studio team</h1>
        <div className="flex flex-col items-center justify-center gap-y-5 md:flex-row md:items-start md:gap-y-0">
          <div className="flex flex-col gap-y-2 bg-white">
            <Image
              src={aniwat}
              className=" h-[300px] w-[300px] object-contain md:h-[400px] md:w-[400px]"
              alt="aniwat"
            />

            <h1 className="text-md font-bold md:text-2xl">Aniwat Suyata</h1>
            <p className="text-sm md:text-xl">Founder / Architect</p>
          </div>

          <div className=" flex flex-col  gap-y-2 bg-white ">
            <Image
              src={kitwat}
              className="h-[300px] w-[300px] object-contain md:h-[400px] md:w-[400px]"
              alt="kitwat"
            />
            <h1 className="text-md font-bold md:text-2xl">Kitwat Thasee</h1>
            <p className="text-sm md:text-xl ">Director / Architect</p>
          </div>

          <div className="flex flex-col gap-y-2 bg-white">
            <Image
              src={kamphon}
              className="h-[300px] w-[300px] object-contain md:h-[400px] md:w-[400px]"
              alt="kamphon"
            />

            <h1 className="text-md font-bold md:text-2xl">Kamphon Mingklin</h1>
            <p className="text-sm md:text-xl ">Director / 3D model</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
