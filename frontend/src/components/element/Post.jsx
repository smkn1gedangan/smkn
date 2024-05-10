import React from "react";
import Icon from "../../helper/Icon";

const Post = ({ title, setContent, content }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-center text-2xl my-10 font-semibold">{title}</h1>
      <Icon
        viewBox="0 0 24 24"
        widthIcon="10rem"
        heightIcon="10rem"
        classIcon="cursor-pointer outline-none"
        clickIcon={() => {
          setContent(!content), window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          type="button"
        >
          <path d="M15 12v6m-3-3h6"></path>
          <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
        </g>
      </Icon>
    </div>
  );
};

export default Post;
