import React from "react";
import Laman from "../../../element/Laman";

const Prestasi = () => {
  return (
    <div className="flex flex-col items-center p-1">
      <Laman about="Prestasi" />
      <div className="w-full flex lg:justify-center">
        <div className="flex w-full flex-wrap mt-2 lg:mt-10 lg:w-4/5">
          <h1 className="fontPrimary text-xl lg:text-2xl inline-block w-full text-center lg:text-left">Prestasi Akademik dan Non Akademik</h1>
          <div className="w-full ml-2 mt-6">
            <p className="p-1  leading-loose text-sm">1. juara 1 lomba blkjasdjkjasjd pada tahun 2021</p>
            <p className="p-1  leading-loose text-sm">2. juara 4 lomba blkjasdjkjasjd se jawa timur pada tahun 2022</p>
            <p className="p-1  leading-loose text-sm">3. juara 3 lomba blkjasdjkjasjd tingkat nasional pada tahun 2022</p>
            <p className="p-1  leading-loose text-sm">4. juara 2 lomba blkjasdjkjasjd tingkat kabupaten pada tahun 2024</p>
            <p className="p-1  leading-loose text-sm">5. juara 5 lomba blkjasdjkjasjd pada tahun 2016</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prestasi;
