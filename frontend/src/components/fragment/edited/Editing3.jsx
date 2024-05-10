import React, { useEffect, useState } from "react";
import { APIgettentangSekolah } from "../../../services/api_call";
import Post from "../../element/Post";
import Alert1 from "../../element/Alert1";

const Editing3 = () => {
  const [sejarah, setSejarah] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    APIgettentangSekolah((cb) => {
      setSejarah(cb?.data?.data);
    });
  }, []);
  return (
    <div className="w-full">
      {update && (
        <Alert1
          type="option"
          title="edit sejarah"
          exit={update}
          setExit={setUpdate}
        />
      )}
      <div className="">
        {" "}
        <h1 className="text-center text-2xl my-10 font-semibold">sejarah</h1>
        {sejarah.length > 0
          ? sejarah.map((item) => (
              <div
                className="w-full flex flex-wrap justify-evenly  items-center "
                key={item.id}
              >
                <div className="w-48 h-48 p-3 flex justify-center ">
                  <img
                    className="w-40 h-40 object-cover"
                    src={item.url}
                    alt=""
                  />
                </div>
                <div className="w-4/5 flex flex-col items-center">
                  <h1>paragraph1 : {item.parapraph1}</h1>
                  <h1>paragraph2 : {item.parapraph2}</h1>
                  <h1>paragraph3 : {item.parapraph3}</h1>
                  <h1>paragraph4 : {item.parapraph4}</h1>
                  <h1>paragraph5 : {item.parapraph5}</h1>
                  <h1>paragraph6 : {item.parapraph6}</h1>
                  <h1>paragraph7 : {item.parapraph7}</h1>
                  <h1>paragraph8 : {item.parapraph8}</h1>
                  <h1>paragraph9 : {item.parapraph9}</h1>
                  <h1>paragraph10 : {item.parapraph10}</h1>
                </div>
              </div>
            ))
          : ""}
        <Post title="update sejarah" setContent={setUpdate} content={update} />
      </div>
    </div>
  );
};

export default Editing3;
