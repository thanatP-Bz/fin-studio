import React from "react";
import Hero from "../../public/home.jpg";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="flex items-center gap-[100px] ">
      <div className="flex gap-y-10 flex-col">
        <h1 className="text-6xl font-bold">Beyond than Designs</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          laudantium possimus quos provident similique nobis neque consectetur
          nihil consequatur et!
        </p>
        <button className="bg-orange-400 max-w-max px-8 py-4">Read More</button>
      </div>
      <div>
        <Image alt="" src={Hero} className="" />
      </div>
    </div>
  );
};

export default Homepage;
