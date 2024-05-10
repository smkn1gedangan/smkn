import React, { useContext, useEffect, useRef, useState } from "react";
import {
  APIPostHeader,
  APIgetHeaderHome,
  APIdelHeaderHome,
} from "../../../services/api_call";
import Icon from "../../../helper/Icon";
import { OptionContext } from "../../../state/Option";
import Post from "../../element/Post";
import Alert1 from "../../element/Alert1";
const Editing = () => {
  const { image, editHeader, setEditHeader } = useContext(OptionContext);
  const [header, setHeader] = useState([]);
  const [idIcon, setIdIcon] = useState(null);

  const [postOrEdited, setPostOrEdited] = useState({ title: "" });
  useEffect(() => {
    APIgetHeaderHome((cb) => {
      setHeader(cb?.data?.data);
    });
  }, []);
  const handleDeleteHeaders = (e, id) => {
    e.preventDefault();
    APIdelHeaderHome(id, (cb) => {
      cb.status === 200 && window.location.reload();
    });
  };
  const handleFindIdHeader = (e, id) => {
    e.preventDefault();
    const filtering = header.find((item) => item.id === id);
    if (filtering.id > 0) {
      setIdIcon(filtering.id);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("title", postOrEdited.title);
    APIPostHeader(data, (cb) => {
      if (cb.status === 200) {
        window.location.reload();
      }
    });
  };
  return (
    <div className="w-full p-4 relative">
      {editHeader && (
        <Alert1
          handleSubmit={handleSubmit}
          setPostOrEdited={setPostOrEdited}
          postOrEdited={postOrEdited}
          exit={editHeader}
          desc="masukkan judul"
          setExit={setEditHeader}
          title="headers"
          nameInput="title"
          inputChange={(e) =>
            setPostOrEdited({ ...postOrEdited, title: e.target.value })
          }
          valueInput={postOrEdited.title}
        />
      )}
      <div className={`${editHeader && "blur-md"} flex items-center flex-col`}>
        <h1 className="text-center text-2xl my-10 font-semibold">Headers</h1>
        <div className="w-4/5 flex justify-evenly gap-10 flex-wrap max-md:w-full">
          {header?.length > 0
            ? header.map((item) => (
                <div
                  className={`${
                    idIcon === item.id && "z-20"
                  } w-1/5 p-1 relative max-md:w-[42%]`}
                  key={item.id}
                >
                  <Icon
                    widthIcon="1.2rem"
                    heightIcon="1.2rem"
                    viewBox="0 0 256 256"
                    classIcon="absolute right-2 top-2 cursor-pointer"
                    clickIcon={(e) => handleFindIdHeader(e, item.id)}
                  >
                    <path
                      fill="currentColor"
                      d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"
                    ></path>
                  </Icon>
                  <img
                    className="w-full h-44 object-cover"
                    src={item.url}
                    alt=""
                  />
                  <p className="text-center">{item.title}</p>
                  {idIcon === item.id && (
                    <div
                      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute"
                      role="alert"
                    >
                      <strong className="font-bold block mt-1">
                        Apakah item dengan id {item.id} Dihapus?
                      </strong>
                      <span className="block sm:inline">
                        klik{" "}
                        <b
                          className="cursor-pointer"
                          onClick={(e) => handleDeleteHeaders(e, item.id)}
                        >
                          Ya
                        </b>{" "}
                        untuk lanjutkan
                      </span>
                      <span
                        onClick={() => setIdIcon(null)}
                        className="absolute top-0 bottom-0 right-0"
                      >
                        <svg
                          className="fill-current h-6 w-6 text-red-500"
                          role="button"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <title>Close</title>
                          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                        </svg>
                      </span>
                    </div>
                  )}
                </div>
              ))
            : ""}
        </div>
        <Post
          title="tambah header"
          setContent={setEditHeader}
          content={editHeader}
        />
      </div>
    </div>
  );
};

export default Editing;
