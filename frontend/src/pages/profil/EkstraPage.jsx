import React, { useEffect } from "react";
import Ekstra from "../../components/fragment/content/profil/Ekstra";
import Navbar from "../../components/fragment/navbar/Navbar";
import Footer from "../../components/layouts/Footer";

const EkstraPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
        <Ekstra data={data}/>
        <Footer bgFooter="bg-slate-300" />
      </div>
    </div>
  );
};

export default EkstraPage;
