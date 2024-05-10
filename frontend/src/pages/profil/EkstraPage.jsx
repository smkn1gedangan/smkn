import React from "react";
import Ekstra from "../../components/fragment/content/profil/Ekstra";
import Navbar from "../../components/fragment/navbar/Navbar";
import Footer from "../../components/layouts/Footer";

const EkstraPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="mt-40">
        <Ekstra />
        <Footer bgFooter="bg-slate-300" />
      </div>
    </div>
  );
};

export default EkstraPage;
