import React, { useContext, useEffect, useRef, useState } from "react";
import {
  APIUpdateSambutan,
  APIgetSambutanHome,
} from "../../../services/api_call";
import { OptionContext } from "../../../state/Option";
import TextArea from "../../element/TextArea";

const Editing2 = ({ data }) => {
  const { image, editHeader } = useContext(OptionContext);

  const [postOrEdited, setPostOrEdited] = useState({ deskripsi: "" });

  const onHandleSubmit = (e, id) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    console.log(id);
    data.append("deskripsi", postOrEdited.deskripsi);
    APIUpdateSambutan(data, id, (cb) => {
      if (cb.status === 200) {
        window.location.reload();
      }
    });
  };
  return (
    <div className={`${editHeader && "blur-md"} w-full p-4 relative`}>
      <div className="flex items-center flex-col">
        <h1 className="text-center text-2xl my-10 font-semibold">sambutan</h1>
        <div className="relative w-full" key={data[0]?.id}>
          <div className="flex flex-wrap justify-evenly w-full gap-5 items-center ">
            {" "}
            <img
              className="w-40 h-40 border border-black object-cover max-md:w-full"
              src={data[0]?.url}
              alt=""
            />
            <h1 className="text-center">{data[0]?.deskripsi}</h1>
          </div>
          <div className="flex items-center flex-col w-full">
            <h1 className="text-center text-2xl my-10 font-semibold">
              edit sambutan
            </h1>
            <TextArea
              inputChange={(e) =>
                setPostOrEdited({
                  ...deskripsi,
                  deskripsi: e.target.value,
                })
              }
              inputValue={postOrEdited.deskripsi}
              onHandleSubmit={onHandleSubmit}
              id={data[0]?.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editing2;
