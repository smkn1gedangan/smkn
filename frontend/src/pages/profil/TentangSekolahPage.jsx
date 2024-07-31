import React, { useEffect } from "react";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/fragment/navbar/Navbar";
import TentangSejarah from "../../components/fragment/content/profil/TentangSejarah";

const TentangSekolahPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
