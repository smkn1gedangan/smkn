import { createContext, useState } from "react";

export const OptionContext = createContext();

export const OptionProvider = ({ children }) => {
  const [image, setImage] = useState(null);
  const [editHeader, setEditHeader] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <OptionContext.Provider
      value={{ image, setImage, editHeader, setEditHeader, open, setOpen }}
    >
      {children}
    </OptionContext.Provider>
  );
};
