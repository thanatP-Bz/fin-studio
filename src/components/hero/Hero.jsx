import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="home-img relative flex h-screen w-full items-center justify-center overflow-hidden bg-gray-300 bg-cover">
        <div className=" container flex-col text-white">
          <div className="text-6xl font-bold">
            <h1 className="font-unsteady">Final</h1>
            <br />
            <h1>Intrigated</h1>
            <br />
            <h1>Notation</h1>
            <br />
          </div>
          <p className="flex w-full max-w-[1000px] justify-end p-2">
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
