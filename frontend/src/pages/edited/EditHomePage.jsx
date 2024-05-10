import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditHome from "../../components/layouts/EditHome";
import Navbar from "../../components/fragment/navbar/Navbar";

const EditHomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const dataLocal = localStorage.getItem("token");
    const token = dataLocal && JSON.parse(dataLocal);
    if (!token) {
      navigate(`/login`);
    } else {
      navigate(`/edited/home`);
    }
  }, []);
  return (
    <div>
      <Navbar type="edited" />
      <EditHome />
    </div>
  );
};

export default EditHomePage;
