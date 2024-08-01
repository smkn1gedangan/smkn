import React from "react";
import Laman from "../../../element/Laman";

const Galery = () => {
  return (
    <div className="flex flex-col items-center p-1">
      <Laman about="Galeri" />
      <h1 className="lg:text-2xl text-xl my-4 fontPrimary text-center lg:mt-10">
        Galery SMKN 1 Gedangan
      </h1>
      <div className="w-4/5 mb-4">
        <div className="flex flex-wrap gap-4 justify-center mt-2 lg:mt-10">
          <div className="w-[97%]  h-[25rem] border border-gray-300 mt-4 rounded-sm  lg:w-[23%] ">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./basket.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <div className="grid place-content-center h-1/4"><h1 className=" text-black fontPrimary text-xl text-center my-1 tracking-wide">
              Lapangan basket
            </h1></div>
          </div>
          <div className="w-[97%]  h-[25rem] border border-gray-300 mt-4 rounded-sm  lg:w-[23%]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./lab.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <div className="grid place-content-center h-1/4"><h1 className=" text-black fontPrimary text-xl text-center my-1 tracking-wide">
              labolatorium 
            </h1></div>
          </div>
          <div className="w-[97%]  h-[25rem] border border-gray-300 mt-4 rounded-sm  lg:w-[23%]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./tentang.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <div className="grid place-content-center h-1/4"><h1 className=" text-black fontPrimary text-xl text-center my-1 tracking-wide">
              poto bersama dewan guru 2024
            </h1></div>
          </div>
          <div className="w-[97%]  h-[25rem] border border-gray-300 mt-4 rounded-sm  lg:w-[23%]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./kantin.jpeg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <div className="grid place-content-center h-1/4"><h1 className=" text-black fontPrimary text-xl text-center my-1 tracking-wide">
              peresmian kantin
            </h1></div>
          </div>
          <div className="w-[97%]  h-[25rem] border border-gray-300 mt-4 rounded-sm  lg:w-[23%]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./resepsi.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <div className="grid place-content-center h-1/4"><h1 className=" text-black fontPrimary text-xl text-center my-1 tracking-wide">
              gedung b
            </h1></div>
          </div>
          <div className="w-[97%]  h-[25rem] border border-gray-300 mt-4 rounded-sm  lg:w-[23%]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./header2.png"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <div className="grid place-content-center h-1/4"><h1 className=" text-black fontPrimary text-xl text-center my-1 tracking-wide">
             lks
            </h1></div>
          </div>
          <div className="w-[97%]  h-[25rem] border border-gray-300 mt-4 rounded-sm  lg:w-[23%]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./futsal.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <div className="grid place-content-center h-1/4"><h1 className=" text-black fontPrimary text-xl text-center my-1 tracking-wide">
              classmeting
            </h1></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galery;
