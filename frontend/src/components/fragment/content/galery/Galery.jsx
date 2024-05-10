import React from "react";
import Laman from "../../../element/Laman";

const Galery = () => {
  return (
    <div className="flex flex-col items-center p-1">
      <Laman about="Galeri" />
      <h1 className="text-2xl my-4 font-semibold text-center lg:my-10">
        Galery SMKN 1 Gedangan
      </h1>
      <div className="w-full my-4">
        <div className="flex flex-wrap gap-4 justify-center mt-2 lg:mt-10">
          <div className="w-4/5 h-[20rem] shadow-md rounded-sm  lg:w-[23%] lg:h-[18rem]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./basket.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <h1 className=" text-black font-semibold text-2xl text-center my-1 tracking-wide">
              Lapangan basket
            </h1>
          </div>
          <div className="w-4/5 h-[20rem] shadow-md rounded-sm  lg:w-[23%] lg:h-[18rem]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./lab.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <h1 className=" text-black font-semibold text-2xl text-center my-1 tracking-wide">
              labolatorium 
            </h1>
          </div>
          <div className="w-4/5 h-[20rem] shadow-md rounded-sm  lg:w-[23%] lg:h-[18rem]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./tentang.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <h1 className=" text-black font-semibold text-2xl text-center my-1 tracking-wide">
              poto bersama dewan guru 2024
            </h1>
          </div>
          <div className="w-4/5 h-[20rem] shadow-md rounded-sm  lg:w-[23%] lg:h-[18rem]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./kantin.jpeg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <h1 className=" text-black font-semibold text-2xl text-center my-1 tracking-wide">
              peresmian kantin
            </h1>
          </div>
          <div className="w-4/5 h-[20rem] shadow-md rounded-sm  lg:w-[23%] lg:h-[18rem]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./resepsi.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <h1 className=" text-black font-semibold text-2xl text-center my-1 tracking-wide">
              gedung b
            </h1>
          </div>
          <div className="w-4/5 h-[20rem] shadow-md rounded-sm  lg:w-[23%] lg:h-[18rem]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./header2.png"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <h1 className=" text-black font-semibold text-2xl text-center my-1 tracking-wide">
             lks
            </h1>
          </div>
          <div className="w-4/5 h-[20rem] shadow-md rounded-sm  lg:w-[23%] lg:h-[18rem]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./futsal.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <h1 className=" text-black font-semibold text-2xl text-center my-1 tracking-wide">
              classmeting
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galery;
