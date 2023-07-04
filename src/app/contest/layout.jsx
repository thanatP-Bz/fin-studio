import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="flex h-[70vh] w-full items-center justify-center md:h-[90vh]">
        <div className="mb-[0] flex h-full w-screen flex-col items-center justify-center md:mb-[0]">
          <div className="contest-img flex h-full w-full items-center justify-center overflow-hidden bg-cover md:mt-[7%]">
            <h1 className="p-8 text-4xl font-bold uppercase text-white md:text-6xl">
              fin contest
            </h1>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default layout;
