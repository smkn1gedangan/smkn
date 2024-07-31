import React, { useEffect } from "react";
import Navbar from "../../components/fragment/navbar/Navbar";
import Footer from "../../components/layouts/Footer";
import TentangVisiMisi from "../../components/fragment/content/profil/TentangVisiMisi";

const VisiPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="mt-40">
        <TentangVisiMisi />
        <Footer bgFooter="bg-slate-300" />
      </div>
    </div>
  );
};

export default VisiPage;
