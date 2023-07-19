import React from "react";
import { MdOutlineArchitecture, MdBedroomParent } from "react-icons/md";
import { CgTrees } from "react-icons/cg";
import { RiTeamFill } from "react-icons/ri";
import { BsBoxes, BsFillBuildingsFill } from "react-icons/bs";

const services = () => {
  return (
    <>
      <div className="flex h-[70vh] w-full items-center justify-center md:h-[90vh]">
        <div className="mb-[0] flex h-full w-full flex-col items-center justify-center md:mb-[0]">
          <div className="services-img flex h-full w-full items-center justify-center overflow-hidden bg-cover md:mt-[7%]">
            <h1 className="p-8 text-4xl font-bold uppercase text-white md:text-6xl">
              services
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1150px] flex-col items-center justify-center gap-y-0 text-center md:justify-center md:gap-x-4 md:gap-y-6 md:p-10">
        <h1 className="p-4 text-xl font-bold uppercase md:text-2xl">
          Our services will be able to help you with
        </h1>
        <p className="text-md md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error placeat
          ad perspiciatis inventore fugiat sint adipisci ipsam provident quas
        </p>
      </div>

      <div className="mx-auto mb-4 grid w-full max-w-[1200px] grid-cols-1 items-center gap-0 px-4 text-center md:grid-cols-3 md:px-8">
        <div className="bg-gray-100 p-4 ">
          <span className="flex w-full items-center justify-center ">
            <MdOutlineArchitecture className="text-4xl md:text-6xl" />
          </span>
          <h1 className="p-4 text-xl font-bold uppercase md:text-2xl">
            Architecture
          </h1>
          <p className="text-md md:text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            nesciunt odio consequatur ipsam animi dicta cumque eius quisquam.
            Nostrum ad facilis animi ipsum illum reiciendis natus, autem dolorum
            magni excepturi?
          </p>
        </div>
        <div className="p-4">
          <span className="flex w-full items-center justify-center">
            <MdBedroomParent className="text-4xl md:text-6xl" />
          </span>
          <h1 className="p-4 text-xl font-bold uppercase md:text-2xl">
            interior
          </h1>
          <p className="text-md md:text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            nesciunt odio consequatur ipsam animi dicta cumque eius quisquam.
            Nostrum ad facilis animi ipsum illum reiciendis natus, autem dolorum
            magni excepturi?
          </p>
        </div>
        <div className="bg-gray-100 p-4">
          <span className="flex w-full items-center justify-center">
            <CgTrees className="text-4xl md:text-6xl" />
          </span>
          <h1 className=" p-4 text-xl font-bold uppercase md:text-2xl">
            landscape
          </h1>
          <p className="text-md md:text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            nesciunt odio consequatur ipsam animi dicta cumque eius quisquam.
            Nostrum ad facilis animi ipsum illum reiciendis natus, autem dolorum
            magni excepturi?
          </p>
        </div>

        <div className="p-4">
          <span className="flex w-full items-center justify-center">
            <RiTeamFill className="text-4xl md:text-6xl" />
          </span>
          <h1 className="p-4 text-xl font-bold uppercase md:text-2xl">
            consult
          </h1>
          <p className="text-md md:text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            nesciunt odio consequatur ipsam animi dicta cumque eius quisquam.
            Nostrum ad facilis animi ipsum illum reiciendis natus, autem dolorum
            magni excepturi?
          </p>
        </div>

        <div className="bg-gray-100 p-4">
          <span className="flex w-full items-center justify-center">
            <BsBoxes className="text-4xl md:text-6xl" />
          </span>
          <h1 className="p-4 text-xl font-bold uppercase md:text-2xl">
            3D model
          </h1>
          <p className="text-md md:text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            nesciunt odio consequatur ipsam animi dicta cumque eius quisquam.
            Nostrum ad facilis animi ipsum illum reiciendis natus, autem dolorum
            magni excepturi?
          </p>
        </div>

        <div className="p-4">
          <span className="flex w-full items-center justify-center">
            <BsFillBuildingsFill className="text-3xl md:text-6xl" />
          </span>
          <h1 className="p-4 text-xl font-bold uppercase md:text-2xl">
            construction
          </h1>
          <p className="text-md md:text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            nesciunt odio consequatur ipsam animi dicta cumque eius quisquam.
            Nostrum ad facilis animi ipsum illum reiciendis natus, autem dolorum
            magni excepturi?
          </p>
        </div>
      </div>
    </>
  );
};

export default services;
