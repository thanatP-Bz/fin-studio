import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="flex h-[100vh] w-screen items-center justify-center">
        <div className="mb-[10%] flex h-[100vh] w-screen flex-col items-center justify-center md:mb-0">
          <div className="home-img flex h-[100%] w-full items-center justify-center overflow-hidden bg-cover md:mt-[7%] md:h-[100%]"></div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-y-0 p-4 md:h-[100%] md:justify-center md:gap-x-4 md:gap-y-6 md:p-10">
        <h1 className="text-2xl font-bold uppercase md:text-[28px]">
          Welcome to Fin Studio
        </h1>
        <p>Modern Architectures, Interiors, Designs and Inspirations</p>
      </div>
    </>
  );
};

export default Homepage;
