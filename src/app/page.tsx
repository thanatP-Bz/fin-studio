import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="flex h-[100vh] w-screen items-center justify-center">
        <div className="mb-[10%] flex h-[100vh] w-screen flex-col items-center justify-center md:mb-0">
          <div className="home-img flex h-[50%] w-full items-center justify-center overflow-hidden bg-cover md:mt-[7%] md:h-[100%]"></div>

          <div className="flex h-[50%] w-full max-w-[1000px] flex-col items-center justify-start gap-y-0 p-4 md:h-[100%] md:justify-center md:gap-x-4 md:gap-y-6 md:p-10">
            <h1 className="text-2xl font-bold uppercase md:text-[28px]">
              Welcome to Fin Studio
            </h1>
            <p>Modern Architectures, Interiors, Designs and Inspirations</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
