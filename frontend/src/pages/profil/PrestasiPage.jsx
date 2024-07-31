import React, { useEffect } from "react";
import Navbar from "../../components/fragment/navbar/Navbar";
import Footer from "../../components/layouts/Footer";
import Prestasi from "../../components/fragment/content/profil/Prestasi";

const PrestasiPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="mt-40">
        <Prestasi />
        <Footer bgFooter="bg-slate-300" />
      </div>
    </div>
  );
};

export default PrestasiPage;
