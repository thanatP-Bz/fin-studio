import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex h-[70vh] w-screen items-center justify-center md:h-[100vh]">
        <div className="mb-[10%] flex h-[100vh] w-screen flex-col items-center justify-center md:mb-0">
          <div className="contact-img flex h-[ึ70%] w-full items-center justify-center overflow-hidden bg-cover md:mt-[7%] md:h-[100%]">
            <div className="mx-auto my-4 flex h-[60%] w-full items-center justify-end px-[60px]">
              <div className="flex w-full max-w-[500px] flex-col bg-white px-3 py-5 opacity-[0.8] md:px-6 md:py-10">
                <div className=" flex flex-col gap-y-4 text-black md:gap-y-8">
                  <h1 className="p-2 text-xl font-bold md:text-4xl">Contact</h1>
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
