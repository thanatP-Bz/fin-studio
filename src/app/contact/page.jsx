import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="flex h-[90vh] w-screen items-center justify-center">
        <div className="mb-[10%] flex h-full w-screen flex-col items-center justify-center md:mb-0">
          <div className="contact-img flex h-[100%] w-full items-center justify-center overflow-hidden bg-cover md:mt-[7%] md:h-[100%]">
            <div className="my-4 mt-[10%] flex h-[100%] w-full items-center justify-center px-[60px] md:mt-0">
              <div className="mt-[2%] flex w-full max-w-[500px] flex-col items-center justify-center bg-white px-3 py-3 opacity-[0.8] md:px-6 md:py-5">
                <div className=" flex flex-col gap-y-4 text-black md:gap-y-6">
                  <h1 className=" text-xl font-bold uppercase md:p-1 md:text-4xl">
                    Contact
                  </h1>
                  <p className="text-sm md:text-xl">
                    FIN STUDIO ARCHITECT LIMITED
                  </p>
                  <p className="text-sm md:text-xl">
                    159/191 SAMMAKORN AVENUE CHAIYAPHRUEK-WONGWAEN, LAM PHO,
                    BANG BUA THONG DISTRICT, NONTHABURI 11110, THAILAND
                  </p>
                  <div className="text-sm md:text-xl">
                    <span className="mb-2 flex">
                      <FaPhoneSquareAlt className="mb-1 mr-1 text-xl md:text-3xl" />{" "}
                      : 081 924 3132, 080 125 1848, 086 135 5715
                    </span>

                    <span className="mb-2 flex">
                      <BsFacebook className="mb-1 mr-1 text-xl md:text-3xl" /> :
                      Fin Studio Architect
                    </span>

                    <span className="mb-2 flex">
                      <MdMarkEmailUnread className="mb-1 mr-1 text-xl md:text-3xl" />
                      : finstudioarchitect@gmail.com
                    </span>
                  </div>
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
