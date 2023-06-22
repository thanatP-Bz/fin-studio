import React from "react";
import Image from "next/image";
import Image1 from "../../../public/img-1.jpg";

const About = () => {
  return (
    <div className=" h-screen w-screen">
      <div className="about-img mb-[3%] flex h-[85vh] w-full items-center justify-center overflow-hidden bg-gray-300 bg-cover">
        <h1 className="text-center text-[5rem] font-bold uppercase text-white">
          about fin studio
        </h1>
      </div>

      <div className=" container h-3/5 w-screen gap-x-4">
        <div className=" w-full">
          <Image
            src={Image1}
            alt="img-1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" flex h-full w-full flex-col items-center justify-center gap-x-4 gap-y-6 p-6 shadow-md">
          <h1 className="text-4xl font-bold">FIN</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quas, beatae nulla laudantium labore atque quae corrupti natus
            velit. Qui assumenda accusamus odit, animi et maxime harum omnis
            voluptate quo totam perferendis voluptatem possimus praesentium
            repellendus sunt eius illum nulla! Ea expedita sapiente perspiciatis
            ipsam ab distinctio laborum, quas impedit?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
