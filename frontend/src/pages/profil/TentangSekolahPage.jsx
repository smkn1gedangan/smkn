import React from "react";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/fragment/navbar/Navbar";
import TentangSejarah from "../../components/fragment/content/profil/TentangSejarah";

const TentangSekolahPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="mt-40">
        <TentangSejarah />
        <Footer bgFooter="bg-slate-300" />
      </div>
    </div>
  );
};

export default TentangSekolahPage;
