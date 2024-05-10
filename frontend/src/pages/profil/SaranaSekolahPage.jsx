import React from "react";
import TentangSarana from "../../components/fragment/content/profil/TentangSarana";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/fragment/navbar/Navbar";

const SaranaSekolahPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="mt-40">
        <TentangSarana />
        <Footer bgFooter="bg-slate-300" />
      </div>
    </div>
  );
};

export default SaranaSekolahPage;
