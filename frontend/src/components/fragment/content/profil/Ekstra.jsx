import React from "react";
import Laman from "../../../element/Laman";

const Ekstra = ({ data }) => {
  return (
    <div className="flex flex-col items-center p-1">
      <Laman about="Ekstrakurikuler" />
      <div className="w-full flex lg:justify-center ">
        <div className="flex w-full flex-wrap my-4 lg:mt-10 lg:w-4/5">
          {" "}
          <h1 className="fontPrimary text-base lg:text-2xl inline-block w-full">
            Ekstrakulikuler SMKN 1 Gedangan
          </h1>
          <p className="text-sm my-2 leading-loose">
            Berikut adalah Ekstrakulikuler Siswa-Siswi SMKN 1 Gedangan antara
            lain :
          </p>
          <div className="w-full flex flex-wrap gap-4">
            <div className="lg:w-4/5 relative w-full p-1 rounded-sm shadow-lg:p-4">
              <h1 className="tracking-wide lg:my-4 fontPrimary uppercase">
                1. futsal
              </h1>
              <div className="w-full overflow-hidden flex items-center h-96 justify-center">
                <img
                  src="./futsal.jpg"
                  className="w-full h-full  object-cover object-center hover:scale-105 transition-all duration-300"
                  alt=""
                />
              </div>
              <h1 className="fontPrimary text-sm lg:text-base mt-8">
                visi dan misi Ekstrakulikuler futsal
              </h1>
              <div className="w-full ml-4 mb-4">
                {data?.map((item, index) => (
                  <p
                    className="p-1 tracking-wider text-xs lg:text-sm font-serif capitalize text-slate-700"
                    key={index}
                  >
                    - {item}
                  </p>
                ))}{" "}
              </div>
              <h1 className="fontPrimary text-sm lg:text-base mt-8">
                Jadwal Ekstrakulikuler
              </h1>{" "}
              <p className="p-1 tracking-wider text-xs lg:text-sm font-serif capitalize text-slate-700">
                sabtu - minggu
              </p>{" "}
              <h1 className="fontPrimary text-sm lg:text-base mt-8">
                Pembina Ekstrakulikuler
              </h1>{" "}
              <p className="p-1 tracking-wider text-xs lg:text-sm font-serif capitalize text-slate-700">
                Pak Testing
              </p>{" "}
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-4">
            <div className="lg:w-4/5 relative w-full p-1 rounded-sm shadow-lg:p-4">
              <h1 className="tracking-wide lg:my-4 fontPrimary uppercase">
                1. basket
              </h1>
              <div className="w-full overflow-hidden flex items-center h-96 justify-center">
                <img
                  src="./basket.jpg"
                  className="w-full h-full  object-cover object-center hover:scale-105 transition-all duration-300"
                  alt=""
                />
              </div>
              <h1 className="fontPrimary text-sm lg:text-base mt-8">
                visi dan misi Ekstrakulikuler basket
              </h1>
              <div className="w-full ml-4 mb-4">
                {data?.map((item, index) => (
                  <p
                    className="p-1 tracking-wider text-xs lg:text-sm font-serif capitalize text-slate-700"
                    key={index}
                  >
                    - {item}
                  </p>
                ))}{" "}
              </div>
              <h1 className="fontPrimary text-sm lg:text-base mt-8">
                Jadwal Ekstrakulikuler
              </h1>{" "}
              <p className="p-1 tracking-wider text-xs lg:text-sm font-serif capitalize text-slate-700">
                sabtu - minggu
              </p>{" "}
              <h1 className="fontPrimary text-sm lg:text-base mt-8">
                Pembina Ekstrakulikuler
              </h1>{" "}
              <p className="p-1 tracking-wider text-xs lg:text-sm font-serif capitalize text-slate-700">
                Pak Testing
              </p>{" "}
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Ekstra;
