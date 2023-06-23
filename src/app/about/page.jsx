import React from "react";
import Image from "next/image";
import Image1 from "../../../public/img-1.jpg";

const About = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="about-img flex h-[80vh] w-full items-center justify-center overflow-hidden bg-gray-300 bg-cover"></div>

      <div className=" h-[80vh] w-screen gap-x-4">
        {/*   <div className=" w-full">
          <Image
            src={Image1}
            alt="img-1"
            className="h-full w-full object-cover"
          />
        </div> */}
        <div className=" flex h-full w-full flex-col items-center justify-center gap-x-4 gap-y-6 p-6">
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
