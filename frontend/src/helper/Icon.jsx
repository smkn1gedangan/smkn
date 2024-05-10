import React from "react";

const Icon = ({
  children,
  widthIcon,
  heightIcon,
  viewBox,
  classIcon,
  clickIcon,target
}) => {
  return (
    <div>
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={widthIcon}
        height={heightIcon}
        viewBox={viewBox}
        className={classIcon}
        onClick={clickIcon}
        data-tooltip-target={target}
      >
        {children}
      </svg>
    </div>
  );
};

export default Icon;
