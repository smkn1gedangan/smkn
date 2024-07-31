import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { APIgetHeaderHome } from "../../../services/api_call";
const Heroes = () => {
  const [header, setHeader] = useState([]);
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: false,
    fade: true,
  };
  // useEffect(() => {
  //   APIgetHeaderHome((cb) => {
  //     setHeader(cb?.data?.data);
  //   })
  // }, []);
  return (
    <div className="slider-container w-full overflow-x-hidden">
      <Slider className="w-full" {...settings}>
        <div className="w-full">
          <div className="w-full bg-blue-950 flex justify-around p-1">
            <div className="w-[47%] flex flex-col p-1 justify-center ">
              <h1 className="fontPrimary capitalize text-sm text-center tracking-wide  text-gray-100 lg:text-3xl">
                Selamat datang di website smkn 1 Gedangan
              </h1>
              <p className="text-white text-xs text-center font-light lg:text-base mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, necessitatibus omnis voluptatibus quaerat enim
                recusandae molestias ab quasi minima nemo.
              </p>
            </div>
            <img
              className="w-[47%] h-44 object-cover object-center md:h-[20rem] lg:h-[30rem]"
              src="./header.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full bg-blue-950 flex justify-around p-1">
            <div className="w-[47%] flex flex-col p-1 justify-center ">
              <h1 className="fontPrimary capitalize font-semibold text-sm text-center tracking-wide text-white lg:text-3xl">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-white text-xs text-center font-light lg:text-base mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, necessita
              </p>
            </div>
            <img
              className="w-[47%] h-44 object-cover object-center md:h-[20rem] lg:h-[30rem]"
              src="./header2.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full bg-blue-950 flex justify-around p-1">
            <div className="w-[47%] flex flex-col p-1 justify-center ">
              <h1 className="fontPrimary capitalize font-semibold text-sm text-center tracking-wide text-white lg:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolorum?
              </h1>
              <p className="fontPrimary text-white text-xs text-center font-light lg:text-base mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, necessita Lorem ipsum dolor sit amet.
              </p>
            </div>
            <img
              className="w-[47%] h-44 object-cover object-center md:h-[20rem] lg:h-[30rem]"
              src="./header3.jpeg"
              alt=""
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default Heroes;
