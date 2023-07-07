import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-150px md:text-md z-10 mx-auto flex w-screen max-w-[1400px] flex-col items-center justify-between text-center text-sm text-black md:z-0 md:flex-row">
        <div>
          <p className="p-0 md:p-2">
            ©2023 FIN Studio Architect Limited. All rights reserved.
          </p>
        </div>
        <div className="p-0 md:p-2">
          <p>social medias</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
