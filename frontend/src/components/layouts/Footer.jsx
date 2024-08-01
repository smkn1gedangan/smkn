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
    <div className={`${bgFooter} w-full flex items-center flex-wrap mt-20 `}>
      <div className="w-full flex items-center flex-col lg:w-1/2 p-2">
        <img src="./icon.png" className="w-24 h-24" alt="" />
        <p className="text-center fontPrimary mt-4 text-sm lg:text-base">
          Jl. Raya Sumberrejo, Sumberrejo Krajan, Sumberejo, Gedangan, Kabupaten
          Malang, Jawa Timur 65178.SMK Negeri 1 Gedangan bertekad mencapai
          perbaikan yang berkesinambungan berdasarkan sistem manajemen mutu
        </p>
      </div>

      <div className="flex items-center flex-col w-full lg:w-1/3 p-4 ">
        <h1 className="font-semibold fontPrimary text-2xl lg:h-24">contact</h1>
        <div className="flex flex-wrap w-full justify-center">
          <p className="text-sm lg:text-base text-center mx-2 fontPrimary"> Whatsapp</p>
          <p className="text-sm lg:text-base text-center mx-2 fontPrimary">Telegram</p>
          <p className="text-sm lg:text-base text-center mx-2 fontPrimary">Facebook</p>
          <p className="text-sm lg:text-base text-center mx-2 fontPrimary">Instagram</p>
          <p className="text-sm lg:text-base text-center mx-2 fontPrimary">Youtube</p>
          <p className="text-sm lg:text-base text-center mx-2 fontPrimary">Tiktok</p>
          <Link to={`/login`} className="fontPrimary font-bold text-sm lg:text-base text-center mx-2 ">login</Link>
        </div>
      </div>
      <div className="w-full bg-black h-20 flex items-center justify-center p-2 mt-10">
        <p className="text-center fontPrimary text-white ">
          @ {timerFooter} &nbsp;
          <span className="text-sm lg:text-base fontPrimary font-semibold text-white ">
            OFFICIAL SMKN 1 GEDANGAN | &nbsp;
          </span>
          <a target="_blank" className="text-sm lg:text-base fontPrimary" href="https://usammuhazir.vercel.app">
            All rights reserved
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
