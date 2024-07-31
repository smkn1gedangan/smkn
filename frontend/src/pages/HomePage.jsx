import Heroes from "../components/fragment/section/Heroes";
import Sambutan from "../components/fragment/section/Sambutan";
import Maps from "../components/fragment/section/Maps";
import Footer from "../components/layouts/Footer";
import Count from "../components/fragment/section/Count";
import Navbar from "../components/fragment/navbar/Navbar";
import { useEffect } from "react";
const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-full flex flex-col">
      <Navbar type="home" />
      <div className="mt-40">
        <Heroes />
        <Sambutan />
        <Count />
        <Maps />
        <Footer bgFooter="bg-slate-200" />
      </div>
    </div>
  );
};

export default HomePage;
