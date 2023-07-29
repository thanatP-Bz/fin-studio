import React from "react";
import Image from "next/image";
import { preImg } from "../../components/images/Work";

const Works = () => {
  return (
    <>
      <div className="flex h-[70vh] w-full items-center justify-center md:h-[90vh]">
        <div className="mb-[0] flex h-full w-full flex-col items-center justify-center md:mb-[0]">
          <div className="services-img flex h-full w-full items-center justify-center overflow-hidden bg-cover md:mt-[7%]">
            <h1 className="p-8 text-4xl font-bold uppercase text-white md:text-6xl">
              works
            </h1>
          </div>
        </div>
      </div>

      {/* showcase */}
      <div
        id="showcase"
        className="mx-auto mt-8 w-full max-w-[1200px] bg-green-300 text-center text-xl"
      >
        <div>
          <h1>Architecture 3D Presentation</h1>
          <div>
            {preImg.map((img, index) => {
              return (
                <div key={index}>
                  <Image src={img.link} alt={img.alt} />
                </div>
              );
            })}
          </div>
          <button>Explore More</button>
        </div>
        <div>
          <h1>Architecture Design</h1>
          <div></div>
          <button>Explore More</button>
        </div>
        <div>
          <h1>Architecture Rendering</h1>
          <div>Explore More</div>
        </div>
      </div>
    </>
  );
};

export default Works;
