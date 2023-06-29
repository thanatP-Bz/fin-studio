import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="flex h-[90vh] w-screen items-center justify-center">
        <div className="mb-[10%] flex h-full w-screen flex-col items-center justify-center md:mb-0">
          <div className="home-img flex h-[90%] w-full items-center justify-center overflow-hidden bg-cover md:mt-[7%] md:h-[100%]">
            <div className="flex h-full w-full items-center justify-center text-center uppercase text-white ">
              <div>
                <h1 className="p-2 text-4xl font-bold md:text-6xl">
                  Welcome to Fin Studio
                </h1>
                <p className="text-md md:text-xl">
                  Modern Architectures, Interiors, Designs and Inspirations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
