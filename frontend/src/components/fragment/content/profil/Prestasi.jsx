import React from "react";
import Laman from "../../../element/Laman";

const Prestasi = () => {
  return (
    <div className="flex flex-col items-center p-1">
      <Laman about="Prestasi" />
      <div className="w-full flex lg:justify-center">
        <div className="flex w-full flex-wrap mt-2 lg:mt-10 lg:w-4/5">
          <h1 className="font-semibold inline-block w-full">Prestasi Akademik dan Non Akademik</h1>
          <p className="text-sm my-2 lg:text-base">Prestasi Yang Pernah Diraih Siswa-Siswi SMKN 1 Gedangan antara lain :</p>
          <div className="w-full ml-2">
            <p className="text-sm my-2 lg:text-base">1. juara 1 lomba blkjasdjkjasjd pada tahun 2021</p>
            <p className="text-sm my-2 lg:text-base">2. juara 4 lomba blkjasdjkjasjd se jawa timur pada tahun 2022</p>
            <p className="text-sm my-2 lg:text-base">3. juara 3 lomba blkjasdjkjasjd tingkat nasional pada tahun 2022</p>
            <p className="text-sm my-2 lg:text-base">4. juara 2 lomba blkjasdjkjasjd tingkat kabupaten pada tahun 2024</p>
            <p className="text-sm my-2 lg:text-base">5. juara 5 lomba blkjasdjkjasjd pada tahun 2016</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prestasi;
