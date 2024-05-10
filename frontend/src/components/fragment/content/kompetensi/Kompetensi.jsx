import React, { useEffect, useState } from "react";
import Laman from "../../../element/Laman";

const Kompetensi = ({ title, bgImage, definisi, dipelajari, tamatan }) => {
  return (
    <div className="flex flex-col items-center p-1">
      <Laman about={title} />
      <h1 className="text-center font-semibold text-2xl my-4 lg:text-4xl">
        {title}
      </h1>
      <div className="w-full flex items-center flex-wrap lg:w-4/5">
        {" "}
        <div
          className="w-full h-52 my-4 flex lg:justify-center  lg:h-72 bg-no-repeat"
          style={{
            backgroundImage: bgImage,
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            objectPosition: "cover",
          }}
        ></div>
        <p className="text-center p-1 tracking-wide">{definisi}</p>
        <h1 className="font-semibold ">
          Yang Dipelajari Peserta Didik Kompetensi Keahlian {title}
        </h1>
        <div className="w-full ml-4 my-4">
          {dipelajari.map((item, index) => (
            <p key={index}>
              {index + 1}. {item}
            </p>
          ))}
        </div>
        <h1 className="font-semibold w-full">Kompetensi Tamatan</h1>
        <div>
          <p className="text-center my-4"> {tamatan}</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Kompetensi;
