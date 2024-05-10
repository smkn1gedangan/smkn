import React, { useState } from "react";
import Navbar from "../../components/fragment/navbar/Navbar";
import Footer from "../../components/layouts/Footer";
import Kompetensi from "../../components/fragment/content/kompetensi/Kompetensi";

const BusanaPage = () => {
  const data = [
    "Sistem Komputer",
    "Komputer dan Jaringan Dasar",
    "Pemrograman Dasar",
    "Dasar Desain Grafis",
    "Dasar Program Keahlian",
    "Infrastruktur Komputasi Awan (IaaS)",
    "Platform Komputasi Awan (PaaS)",
  ];

  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="mt-40">
        <Kompetensi
          title={"Tata Busana"}
          bgImage={"url(./busana.avif)"}
          definisi="Sistem Informatika Jaringan dan Aplikasi merupakan kompetensi keahlian
          baru di program keahlian teknik komputer dan informatika.SIJA sebutan
          dari Sistem Informatika Jaringan dan Aplikasi dibuka pada tahun
          pelajaran 2017/2018.Pembukaan jurusan/kompetensi keahlian ini ditandai
          dengan terbitnya surat keputusan Direktorat Jendral Pendidikan Dasar
          dan Menengah tentang spektrum keahlian pendidikan menengah kejuruan
          NO.4678/D/KEP/2016."
          tamatan={"Mampu memahami Jaringan, mengoperasikan komputer dll"}
          dipelajari={data}
        />
        <Footer bgFooter="bg-slate-300" />
      </div>
    </div>
  );
};

export default BusanaPage;
