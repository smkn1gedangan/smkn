import React from "react";
import Login from "../components/layouts/Login";
import Quotes from "../components/element/Quotes";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/fragment/navbar/Navbar";

const LoginPage = () => {
  return (
    <div className="w-full relative flex items-center flex-wrap flex-col">
      <Navbar />
      {/* <Quotes quote= "Live life as best as possible and hopefully always be healthy"/> */}
      <div className="mt-40 w-full  flex flex-col items-center">
        {" "}
        <Login />
        <Footer bgFooter="bg-blue-300" />
      </div>
    </div>
  );
};

export default LoginPage;
