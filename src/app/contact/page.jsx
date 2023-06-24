import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex h-[90vh] w-screen flex-col items-center justify-center md:flex-row">
        <div className=" flex h-[50%] w-full flex-col items-center justify-start gap-y-0 p-5 md:h-[70%] md:justify-center md:gap-x-4 md:gap-y-6 md:p-10">
          <h1 className="text-2xl font-bold md:text-4xl">Contact</h1>
          <p>
            FIN STUDIO ARCHITECT LIMITED
            <br />
            159/191 SAMMAKORN AVENUE CHAIYAPHRUEK-WONGWAEN, LAM PHO, BANG BUA
            THONG DISTRICT, NONTHABURI 11110, THAILAND
            <br />
            T : 081 924 3132 , 080 125 1848 , 086 135 5715
            <br />
            FACEBOOK PAGE : Fin Studio Architect E :
            finstudioarchitect@gmail.com
          </p>
        </div>

        <div className="flex h-[50%] w-full items-center justify-center overflow-hidden bg-cover md:h-[70%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15490.467505245035!2d100.438514310702!3d13.921833811271211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2857afab65b13%3A0xd9efdb3a1c55c3b9!2z4Liq4Lix4Lih4Lih4Liy4LiB4Lij!5e0!3m2!1sen!2sus!4v1687573549858!5m2!1sen!2sus"
            width="700"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
