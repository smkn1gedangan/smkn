import React from "react";
import Laman from "../../../element/Laman";

const TentangVisiMisi = () => {
  return (
    <div className="w-full p-1 flex flex-col items-center">
      <Laman about="Visi Misi Dan Tujuan Sekolah" />
      <div className="w-full md:w-4/5">
        <h1 className="text-2xl my-4 fontPrimary text-center border-b-black border-b p-2 lg:my-10">
          VISI, MISI DAN TUJUAN SMKN 1 GEDANGAN
        </h1>
        <p className="text-xl my-4  fontPrimary">1. Visi Sekolah</p>
        <p className="leading-relaxed  text-base font-serif">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          temporibus consequuntur debitis. A, est magnam sed, harum cupiditate
          tenetur iste id quae veniam illum adipisci nisi dolore dolores impedit
          maiores deserunt facere praesentium! Pariatur ex ad iste accusamus
          quae ullam nam voluptates voluptate, aliquid ut eveniet, provident
          nemo explicabo architecto?
        </p>
        <p className="text-xl my-4 fontPrimary">2. Misi Sekolah</p>
        <p className="leading-relaxed  text-base font-serif">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          temporibus consequuntur debitis. A, est magnam sed, harum cupiditate
          tenetur iste id quae veniam illum adipisci nisi dolore dolores impedit
          maiores deserunt facere praesentium! Pariatur ex ad iste accusamus
          quae ullam nam voluptates voluptate, aliquid ut eveniet, provident
          nemo explicabo architecto? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptate, sequi!
        </p>
        <p className="text-xl my-4 fontPrimary">3. Tujuan Sekolah</p>
        <p className="leading-relaxed  text-base font-serif">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          temporibus consequuntur debitis. A, est magnam sed, harum cupiditate
          tenetur iste id quae veniam illum adipisci nisi dolore dolores impedit
          maiores deserunt facere praesentium! Pariatur ex ad iste accusamus
          quae ullam nam voluptates voluptate, aliquid ut eveniet, provident
          nemo explicabo architecto?
        </p>
      </div>
    </div>
  );
};

export default TentangVisiMisi;
