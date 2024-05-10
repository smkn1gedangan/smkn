import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { APIgetJurusanHome } from "../../../services/api_call";
const Jurusan = () => {
  // const [jurusan, setJurusan] = useState([]);

  // useEffect(() => {
  //   APIgetJurusanHome((cb) => {
  //     setJurusan(cb?.data?.data);
  //   });
  // }, []);
  return (
    <div className="w-[87%] relative left-1/2 -translate-x-1/2">
      <h1 className="font-semibold text-center text-2xl my-3 lg:my-10">
        Jurusan
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="w-5/6 h-[15rem] shadow-md lg:w-[47%] lg:h-[20rem] overflow-hidden">
          <img className="w-full h-4/5 object-cover hover:scale-110 duration-300 transition-all" src="a.png" alt="" />
            <h3 className="title text-4xl text-white text-center">
              mm
            </h3>
        </div>
        <div className="w-5/6 h-[15rem] shadow-md lg:w-[47%] lg:h-[20rem] overflow-hidden">
          <img className="w-full h-4/5 object-cover hover:scale-110 duration-300 transition-all" src="t.png" alt="" />
            <h3 className="title text-4xl text-white text-center">
              sija
            </h3>
        </div>
        <div className="w-5/6 h-[15rem] shadow-md lg:w-[47%] lg:h-[20rem] overflow-hidden">
          <img className="w-full h-4/5 object-cover hover:scale-110 duration-300 transition-all" src="s.png" alt="" />
            <h3 className="title text-4xl text-white text-center">
              boga
            </h3>
        </div>
      </div>
    </div>
  );
};

export default Jurusan;
