import React, { useEffect, useState } from "react";
import Laman from "../../../element/Laman";

const Kompetensi = ({ title, bgImage, definisi, dipelajari, tamatan }) => {
  return (
    <div className="flex flex-col items-center p-1">
      <Laman about={title} />
      <h1 className="text-center fontPrimary text-2xl my-4 lg:text-3xl lg:mt-6">
        {title}
      </h1>
      <div className="w-full flex items-center flex-wrap lg:w-4/5">
        {" "}
        <div
          className="w-full h-52 my-4 flex lg:justify-center  lg:h-96 bg-no-repeat"
          style={{
            backgroundImage: bgImage,
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            objectPosition: "cover",
          }}
        ></div>
        <p className="text-center p-1 tracking-wider my-6 lg:text-base font-serif capitalize text-slate-700">
          {definisi}
        </p>
        <h1 className="fontPrimary text-base font-semibold mt-4">
          Yang Dipelajari Peserta Didik Kompetensi Keahlian {title}
        </h1>
        <div className="w-full ml-4 mb-4">
        {dipelajari.map((item, index) => (
              <p
                className="p-1 tracking-wider lg:text-base font-serif capitalize text-slate-700"
                key={index}
              >
                - {item}
              </p>
          ))}{" "}
        </div>
        <h1 className="fontPrimary text-base w-full font-semibold mt-4">
          Kompetensi Tamatan
        </h1>
        <div>
          <p className="p-1 tracking-wider lg:text-base font-serif capitalize text-slate-700">
            {" "}
            {tamatan}
          </p>{" "}
        </div>
        <h1 className="fontPrimary text-base w-full font-semibold mt-4">
          Lingkup Pekerjaan
        </h1>
        <div className="w-full ml-4 mb-4">
        {dipelajari.map((item, index) => (
              <p
                className="p-1 tracking-wider lg:text-base font-serif capitalize text-slate-700"
                key={index}
              >
                - {item}
              </p>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default Kompetensi;
