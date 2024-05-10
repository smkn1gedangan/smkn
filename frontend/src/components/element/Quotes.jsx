import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
const Quotes = ({quote}) => {
  const textRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
       quote
      ],
      typeSpeed: 100,
      loop:true
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-4/5 h-40">
      <h1 ref={textRef} className="text-3xl text-center"></h1>
    </div>
  );
};

export default Quotes;
