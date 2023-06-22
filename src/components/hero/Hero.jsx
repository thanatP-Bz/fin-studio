import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="home-img relative flex h-screen w-full items-center justify-center overflow-hidden bg-gray-300 bg-cover">
        <div className=" container h-3/4 flex-col justify-end gap-y-4  p-10 text-white">
          <h1 className="text-6xl font-bold ">it is Beyond Than Design</h1>
          <p className="flex w-full max-w-[1000px] justify-end p-2 text-xl">
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
