import React from "react";
import Navbar from "../../components/fragment/navbar/Navbar";
import Footer from "../../components/layouts/Footer";
import TentangGuru from "../../components/fragment/content/profil/TentangGuru";

const TentangGuruPage = () => {
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
