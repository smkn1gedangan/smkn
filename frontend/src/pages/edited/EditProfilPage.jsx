import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditProfil from "../../components/layouts/EditProfil";
import Navbar from "../../components/fragment/navbar/Navbar";

const EditProfilPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const dataLocal = localStorage.getItem("token");
    const token = dataLocal && JSON.parse(dataLocal);
    if (!token) {
      navigate(`/login`);
    } else {
      navigate(`/edited/profil`);
    }
  }, []);
  return (
    <div>
      <Navbar type="edited" />
      <EditProfil />
    </div>
  );
};

export default EditProfilPage;
