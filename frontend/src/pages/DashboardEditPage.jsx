import React, { useEffect } from "react";
import Dashboard from "../components/layouts/Dashboard";
// import Navbar from "../components/layouts/Navbar";
import { useNavigate } from "react-router-dom";

const DashboardEditPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const dataLocal = localStorage.getItem("token");
    const token = dataLocal && JSON.parse(dataLocal);
    if (!token) {
      navigate(`/login`);
    }
  }, []);
  return (
    <div>
      {/* <Navbar /> */}
      <Dashboard />
    </div>
  );
};

export default DashboardEditPage;
