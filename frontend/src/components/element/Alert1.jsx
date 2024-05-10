import React, { useContext, useEffect, useRef } from "react";
import { OptionContext } from "../../state/Option";
import Icon from "../../helper/Icon";

const Alert1 = ({
  exit,
  setExit,
  title,
  inputChange,
  handleSubmit,
  nameInput,
  desc,
  valueInput,
  type,
}) => {
  const { image, setImage } = useContext(OptionContext);
  const imageRef = useRef(null);
  const handleImage = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };
  return (
    <div className="z-20 w-4/5 p-4 left-1/2 rounded-md bg-slate-200 -translate-x-1/2 h-auto shadow-lg absolute top-20 max-md:w-full">
      <div className="cursor-pointer absolute ">
        {" "}
        <Icon
          widthIcon="2rem"
          heightIcon="2rem"
          classIcon=""
          clickIcon={() => {
            setExit(!exit);
          }}
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z"
          ></path>
        </Icon>
      </div>
      <h1 className="text-center text-2xl font-semibold">{title}</h1>
      <div className="w-full h-full relative flex">
        <div className="flex flex-col items-center w-[48%]">
          <h1 className="text-center font-semibold text-2xl my-4 max-sm:text-base">
            masukkan gambar
          </h1>
          <div
            onClick={handleImage}
            className="w-3/4 border border-black flex justify-center"
          >
            {image ? (
              <img
                className={`h-[10rem] w-[10rem] object-center object-cover`}
                src={URL.createObjectURL(image)}
                alt=""
              />
            ) : (
              <Icon widthIcon="10rem" heightIcon="10rem" viewBox="0 0 256 256">
                <path
                  fill="currentColor"
                  d="m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M158 46.48L193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2m-42-66a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6"
                ></path>
              </Icon>
            )}
            <input
              className="hidden"
              onChange={(e) => handleImageChange(e)}
              ref={imageRef}
              type="file"
              src=""
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-[48%]">
          <h1 className="text-center font-semibold text-2xl my-4 max-sm:text-base">
            {desc}
          </h1>
          {type === "option" && (
            <label className="mx-4 my-4 " htmlFor="">
              {" "}
              paragraph ke
              <select className="border-none outline-none mx-4" name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </label>
          )}
          <input
            type="text"
            className="w-4/5 outline-none rounded-md max-md:w-full"
            name={nameInput}
            value={valueInput}
            onChange={inputChange}
            placeholder="keterangan"
            id=""
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-blue-600 outline-none border-none mt-4 p-2 w-1/5 rounded-lg text-white font-semibold transition-all duration-300 hover:bg-blue-500 max-md:w-3/5"
          >
            kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert1;
