import React from "react";
import Icon from "../../helper/Icon";
import { Link } from "react-router-dom";

const Laman = ({ about, type }) => {
  return (
    <div className="w-full bg-slate-100 p-2 rounded-lg mt-4 lg:w-4/5">
      <div className="flex items-center gap-2">
        <Icon widthIcon="1.2rem" heightIcon="1.2rem" viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
          ></path>
        </Icon>
        <Link
          to={type === "edited" ? `/edited` : "/"}
          className="font-semibold text-blue-950"
        >
          Beranda
        </Link>
        <span>&gt;</span>
        <h1>{about}</h1>
      </div>
    </div>
  );
};

export default Laman;
