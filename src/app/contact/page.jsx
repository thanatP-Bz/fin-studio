import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex h-[90vh] w-screen items-center justify-center ">
        <div className="mb-[10%] flex h-full w-screen flex-col items-center justify-center md:mb-0">
          <div className="contact-img flex h-[100%] w-full items-center justify-center overflow-hidden bg-cover md:mt-[7%] md:h-[100%]">
            <div className="my-4 mt-[10%] flex h-[100%] w-full items-center justify-center px-[60px] md:mt-0 md:justify-end">
              <div className="flex w-full max-w-[500px] flex-col items-center justify-center bg-white px-3 py-3 opacity-[0.8] md:px-6 md:py-10">
                <div className=" flex flex-col gap-y-2 text-black md:gap-y-8">
                  <h1 className=" text-xl font-bold md:p-2 md:text-4xl">
                    Contact
                  </h1>
                  <p>
                    FIN STUDIO ARCHITECT LIMITED 159/191 SAMMAKORN AVENUE
                    CHAIYAPHRUEK-WONGWAEN, LAM PHO, BANG BUA THONG DISTRICT,
                    NONTHABURI 11110, THAILAND
                  </p>
                  <p>T : 081 924 3132 , 080 125 1848 , 086 135 5715</p>
                  <p>FACEBOOK PAGE : Fin Studio Architect</p>
                  <p>E : finstudioarchitect@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
