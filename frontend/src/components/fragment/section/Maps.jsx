import React from "react";

const Maps = () => {
  return (
    <div className="">
      <h1 className="fontPrimary text-center text-xl lg:text-2xl my-10 ">Lokasi SMKN 1 Gedangan</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.589329214547!2d112.61662247412835!3d-8.243983582794009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78a756844f736f%3A0xee8e378530c977fc!2sSMK%20Negeri%201%20Gedangan!5e0!3m2!1sid!2sid!4v1708522103888!5m2!1sid!2sid"
        width="100%"
        style={{ border: "none" }}
        height="300px"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
