import React from "react";
import Image from "next/image";
import aniwat from "../../../public/aniwat.png";
import kamphon from "../../../public/kamphon.png";
import kitwat from "../../../public/kitwat.png";

const About = () => {
  return (
    <div>
      <div className="flex h-[90vh] w-screen flex-col items-center justify-center md:flex-row">
        <div className="about-img flex h-[50%] w-full items-center justify-center overflow-hidden bg-cover md:h-[70%]"></div>

        <div className=" flex h-[50%] w-full flex-col items-center justify-start gap-y-0 p-5 md:h-[70%] md:justify-center md:gap-x-4 md:gap-y-6 md:p-10">
          <h1 className="text-2xl font-bold md:text-4xl">FIN</h1>
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

      {/* team */}
      <div className="team-img mx-auto mt-[10%] w-full  bg-red-200 py-6 text-center uppercase md:my-0">
        <h1 className="p-4 text-2xl font-bold md:text-4xl">team</h1>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:items-start">
          <div>
            <Image src={aniwat} width={300} height={300} alt="aniwat" />

            <h1>Aniwat Suyata</h1>
            <p>president</p>
          </div>

          <div>
            <Image src={kitwat} width={300} height={300} alt="kitwat" />
            <h1>Kiwat Tasi</h1>
            <p>president</p>
          </div>

          <div>
            <Image src={kamphon} width={300} height={300} alt="kamphon" />

            <h1>Khamphon Doe</h1>
            <p>president</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
