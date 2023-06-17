import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center overflow-hidden relative h-screen bg-cover bg-gray-300 custom-img">
        {/* overlay */}
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/30 z-[2]" />
        <div className=" text-white z-10 w-full max-w-[1366px] mx-auto px-[60px]">
          <h1 className="text-6xl font-bold">Beyond than Designs</h1>
          <p className="flex justify-end w-full max-w-[1000px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            laudantium possimus quos provident similique nobis neque consectetur
            nihil consequatur et!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
