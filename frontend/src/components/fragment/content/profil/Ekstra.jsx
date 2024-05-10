import React from "react";
import Laman from "../../../element/Laman";

const Ekstra = () => {
  return (
    <div className="flex flex-col items-center p-1">
      <Laman about="Ekstrakurikuler" />
      <div className="w-full flex lg:justify-center ">
        <div className="flex w-full flex-wrap my-4 lg:mt-10 lg:w-4/5">
          {" "}
          <h1 className="font-semibold inline-block w-full">
            Ekstrakulikuler SMKN 1 Gedangan
          </h1>
          <p className="text-sm my-2 lg:text-base">
            Berikut adalah Ekstrakulikuler Siswa-Siswi SMKN 1 Gedangan antara
            lain :
          </p>
          <div className="w-full flex justify-center flex-wrap gap-4">
            <div className="w-4/5 relative p-1 rounded-sm shadow-md lg:w-[30%] lg:p-4">
              <h1 className="tracking-wide lg:my-4">
                1. futsal
              </h1>
              <div className="w-full overflow-hidden flex items-center justify-center">
                <img
                  src="./futsal.jpg"
                  className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                  alt=""
                />
              </div>
            </div>
            <div className="w-4/5 relative p-1 rounded-sm shadow-md lg:w-[30%] lg:p-4">
              <h1 className="tracking-wide lg:my-4">
                2. sepak bola
              </h1>
              <div className="w-full overflow-hidden flex items-center justify-center">
                <img
                  src="./sepak.jpeg"
                  className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                  alt=""
                />
              </div>
            </div>
            <div className="w-4/5 relative p-1 rounded-sm shadow-md lg:w-[30%] lg:p-4">
              <h1 className="tracking-wide lg:my-4">
                3. basket
              </h1>
              <div className="w-full overflow-hidden flex items-center justify-center">
                <img
                  src="./basket.jpg"
                  className="w-full h-full  object-cover object-center hover:scale-110 transition-all duration-300"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ekstra;
