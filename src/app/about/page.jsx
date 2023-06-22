import React from "react";

const About = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="about-img flex h-[85vh] w-full items-center justify-center overflow-hidden bg-gray-300 bg-cover ">
        <h1 className="text-center text-6xl font-bold text-white">
          about fin studio
        </h1>
      </div>
      <div className="container w-full justify-center">
        <div className="relative top-[-40px] items-center justify-center bg-slate-400 p-6 text-white">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            tempora pariatur voluptatem sed a praesentium modi repudiandae quam
            magnam odio ad, necessitatibus et labore impedit tenetur! In, sit
            illum
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
