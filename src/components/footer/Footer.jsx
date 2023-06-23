import React from "react";

const Footer = () => {
  return (
    <div className="container absolute bottom-0 left-0 z-10 w-screen flex-col items-center justify-between   bg-white text-center text-black md:flex-row">
      <p className="p-0 md:p-2">
        ©2023 FIN Studio Architect Limited. All rights reserved.
      </p>
      <div className="p-0 md:p-2">
        <p>social medias</p>
      </div>
    </div>
  );
};

export default Footer;
