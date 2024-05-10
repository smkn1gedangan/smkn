import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Link
        to={`/edited/home`}
        className="border-2 border-black w-1/6 p-2 h-24 grid place-content-center"
      >
        HomePage
      </Link>
      <Link
        to={`/edited/profil`}
        className="border-2 border-black w-1/6 p-2 h-24 grid place-content-center"
      >
        profil
      </Link>
    </div>
  );
};

export default Dashboard;
