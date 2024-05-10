import React, { useEffect, useState } from "react";
import Editing from "../fragment/edited/Editing";
import Editing2 from "../fragment/edited/Editing2";
import Editing4 from "../fragment/edited/Editing4";
import NavbarEditing from "../fragment/edited/NavbarEditing";
import { APIgetSambutanHome } from "../../services/api_call";
import Laman from "../element/Laman";

const EditHome = () => {
  const [sambutan, setSambutan] = useState([]);
  useEffect(() => {
    APIgetSambutanHome((cb) => {
      const data = cb?.data?.data;
      setSambutan(data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Laman type="edited" about="home" />

      <Editing />
      <Editing2 data={sambutan} />
      <Editing4 />
      <NavbarEditing />
    </div>
  );
};

export default EditHome;
