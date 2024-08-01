import { CountUp } from "countup.js";
import React, { useEffect, useRef } from "react";
import Icon from "../../helper/Icon";
const BoxInformationCount = ({
  count,
  title,
  children,
  idTarget,
  widthIcon,
  heightIcon,
  viewBox,
}) => {
  useEffect(() => {
    const countUp = new CountUp(idTarget, count, {
      enableScrollSpy: true,
    });
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  }, []);

  return (
    <div className="w-[40%] mt-2 border-b-[1px]  border-b-slate-300 p-4 flex justify-evenly max-sm:w-[95%]">
      <div className="flex items-center justify-evenly w-full">
        <div className="w-1/6 h-full flex items-center justify-center ">
          <Icon widthIcon={widthIcon} viewBox={viewBox} heightIcon={heightIcon}>
            {children}
          </Icon>
        </div>
        <div className="flex flex-col items-center w-[95%] ">
          <h1 className="text-base lg:text-xl fontPrimary text-center">{title}</h1>
          <p className="text-4xl font-semibold fontPrimary" id={idTarget}></p>
        </div>
      </div>
    </div>
  );
};

export default BoxInformationCount;
