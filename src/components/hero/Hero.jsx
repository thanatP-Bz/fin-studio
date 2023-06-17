import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center overflow-hidden relative h-screen bg-cover bg-gray-300 custom-img">
        <div className=" text-white container flex-col">
          <div className="text-6xl font-bold">
            <h1>Final</h1>
            <br />
            <h1>Intrigated</h1>
            <br />
            <h1>Notation</h1>
            <br />
          </div>
          <p className="flex justify-end w-full max-w-[1000px] p-2">
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
