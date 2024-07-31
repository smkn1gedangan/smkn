import React, { useEffect } from "react";
import Navbar from "../../components/fragment/navbar/Navbar";
import Footer from "../../components/layouts/Footer";
import TentangGuru from "../../components/fragment/content/profil/TentangGuru";

const TentangGuruPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="mt-40">
        <TentangGuru />
        <Footer bgFooter="bg-slate-300" />
      </div>
    </div>
  );
};

export default TentangGuruPage;
