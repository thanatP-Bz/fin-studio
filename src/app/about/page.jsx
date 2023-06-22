import React from "react";

const About = () => {
  return (
    <div className=" h-screen w-screen">
      <div className="about-img flex h-[85vh] w-full items-center justify-center overflow-hidden bg-gray-300 bg-cover ">
        <h1 className="text-center text-6xl font-bold text-white">
          about fin studio
        </h1>
      </div>

      <div className="wrap container h-[500px] w-screen">
        <div className="h-full w-full bg-green-300"></div>
        <div className="h-full w-full bg-red-300"></div>
      </div>
    </div>
  );
};

export default About;
