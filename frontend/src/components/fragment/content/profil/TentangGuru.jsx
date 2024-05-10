import React from "react";
import Laman from "../../../element/Laman";

const TentangGuru = () => {
  return (
    <div className="flex flex-col items-center p-1">
      <Laman about="Dewan Guru Dan Staff" />
      <h1 className="text-2xl my-4 font-semibold text-center lg:my-10">
        Seluruh Dewan Guru Dan Staff
      </h1>
      <div className="w-full">
        <div className="flex flex-wrap gap-4 justify-center mt-2 lg:mt-10">
          <div className="w-[47%] h-[20rem] shadow-md rounded-sm  lg:w-[18%] lg:h-[18rem]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./owijpg.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <h1 className=" text-black text-center my-1 tracking-widest">
              Usammuhajir spd msi drs
            </h1>
          </div>
          <div className="w-[47%] h-[20rem] shadow-md rounded-sm  lg:w-[18%] lg:h-[18rem]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./owijpg.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <h1 className=" text-black text-center my-1 tracking-widest">
              Jhon Doe spd
            </h1>
          </div>
          <div className="w-[47%] h-[20rem] shadow-md rounded-sm  lg:w-[18%] lg:h-[18rem]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./owijpg.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <h1 className=" text-black text-center my-1 tracking-widest">
              amad nur
            </h1>
          </div>
          <div className="w-[47%] h-[20rem] shadow-md rounded-sm  lg:w-[18%] lg:h-[18rem]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./owijpg.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <h1 className=" text-black text-center my-1 tracking-widest">
              gajayana
            </h1>
          </div>
          <div className="w-[47%] h-[20rem] shadow-md rounded-sm  lg:w-[18%] lg:h-[18rem]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./owijpg.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <h1 className=" text-black text-center my-1 tracking-widest">
              lionel messi
            </h1>
          </div>
          <div className="w-[47%] h-[20rem] shadow-md rounded-sm  lg:w-[18%] lg:h-[18rem]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./owijpg.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <h1 className=" text-black text-center my-1 tracking-widest">
              neymar jr
            </h1>
          </div>
          <div className="w-[47%] h-[20rem] shadow-md rounded-sm  lg:w-[18%] lg:h-[18rem]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src="./owijpg.jpg"
                className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <h1 className=" text-black text-center my-1 tracking-widest">
              donald trump
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangGuru;
