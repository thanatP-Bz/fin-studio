import React from "react";
import Image from "next/image";
import aniwat from "../../../public/aniwat.png";
import kamphon from "../../../public/kamphon.png";
import kitwat from "../../../public/kitwat.png";

const About = () => {
  return (
    <div>
      <div className="mb-[10%] flex h-[100vh] w-screen flex-col items-center justify-center md:mb-0">
        <div className="about-img flex h-[50%] w-full items-center justify-center overflow-hidden bg-cover md:mt-[7%] md:h-[100%]"></div>

        <div className="flex h-[50%] w-full max-w-[1000px] flex-col items-center justify-start gap-y-0 p-4 md:h-[100%] md:justify-center md:gap-x-4 md:gap-y-6 md:p-10">
          <h1 className="text-2xl font-bold uppercase md:text-[28px]">
            Fin Studio History
          </h1>
          <p>
            F = Final I = Integrated N = Notion `The final feelings and
            thoughts` After that, so many people became aware of our pages. Both
            Thai and foreigners. For the past 5 years, I have got to say 99% of
            the works on our page were not existent and not actually created.
            Right now, our page has many conversations. Such as,various
            questions, praise, gratitude, asking for help. Sometimes, we make
            some files for you and those who are interested to learn to get
            further benefit. And from now on, we have to develop the works that
            were started for fun turn to be serious for our fan page.
          </p>
        </div>
      </div>

      {/* team */}
      <div className=" mb-[7%] w-full text-center uppercase md:mb-[5%] md:mt-[0]">
        <h1 className="p-4 text-2xl font-bold md:text-[28px]">team</h1>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:items-start">
          <div className="bg-white">
            <Image src={aniwat} width={300} height={300} alt="aniwat" />

            <h1>Aniwat Suyata</h1>
            <p>Founder / Architect</p>
          </div>

          <div className="bg-white">
            <Image src={kitwat} width={300} height={300} alt="kitwat" />
            <h1>Kitwat Thasee</h1>
            <p>Director / Architect</p>
          </div>

          <div className="bg-white">
            <Image src={kamphon} width={300} height={300} alt="kamphon" />

            <h1>Kamphon Mingklin</h1>
            <p>Director / 3D model</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
