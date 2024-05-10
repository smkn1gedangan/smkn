import React from "react";
import Navbar from "../../components/fragment/navbar/Navbar";
import Galery from "../../components/fragment/content/galery/Galery";
import Footer from "../../components/layouts/Footer";

const GaleriPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="mt-40">
        <Galery />
        <Footer bgFooter="bg-slate-300" />
      </div>
    </div>
  );
};

export default GaleriPage;
