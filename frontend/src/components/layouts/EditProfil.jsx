import React, { useEffect, useState } from "react";
import Editing3 from "../fragment/edited/Editing3";
import Laman from "../element/Laman";

const EditProfil = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Laman type="edited" about="home" />
      <Editing3 />
    </div>
  );
};

export default EditProfil;
