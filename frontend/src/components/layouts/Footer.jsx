import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Footer = ({ bgFooter }) => {
  const [timerFooter, setTimerFooter] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      const tahun = new Date().getFullYear();
      setTimerFooter(tahun);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={`${bgFooter} w-full flex items-center flex-wrap `}>
      <div className="w-full flex items-center flex-col lg:w-[40%] p-2">
        <img src="./icon.png" className="w-24 h-24" alt="" />
        <p className="text-center font-semibold font-sans mt-4">
          Jl. Raya Sumberrejo, Sumberrejo Krajan, Sumberejo, Gedangan, Kabupaten
          Malang, Jawa Timur 65178.SMK Negeri 1 loremData bertekad mencapai
          perbaikan yang berkesinambungan berdasarkan sistem manajemen mutu
        </p>
      </div>

      <div className="flex items-center flex-col w-full lg:w-[30%] p-4 ">
        <h1 className="font-semibold text-2xl lg:h-24">contact</h1>
        <div className="flex flex-wrap w-full justify-center">
          <p className="text-center mx-2 font-sans font-semibold"> Whatsapp</p>
          <p className="text-center mx-2 font-sans font-semibold">Telegram</p>
          <p className="text-center mx-2 font-sans font-semibold">Facebook</p>
          <p className="text-center mx-2 font-sans font-semibold">Instagram</p>
          <p className="text-center mx-2 font-sans font-semibold">Youtube</p>
          <p className="text-center mx-2 font-sans font-semibold">Tiktok</p>
          <Link to={`/login`} className="text-center mx-2 font-sans font-bold">login</Link>
        </div>
      </div>
      <div className="w-full bg-black h-20 flex items-center justify-center p-2 mt-10">
        <p className="text-center text-white ">
          @ {timerFooter} &nbsp;
          <span className="font-semibold text-white ">
            OFFICIAL SMKN 1 GEDANGAN | &nbsp;
          </span>
          <a target="_blank" href="https://usammuhazir.vercel.app">
            All rights reserved
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
