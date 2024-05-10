import React, { useContext, useRef } from "react";
import Icon from "../../helper/Icon";
import { OptionContext } from "../../state/Option";

const Input = ({ inputChange, inputValue, onHandleSubmit, id }) => {
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
    <div className="w-4/5 flex flex-wrap gap-10 justify-center">
      <div
        onClick={handleImage}
        className="w-1/4 border border-black flex justify-center"
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
      <div className="w-3/5 items-center flex justify-center flex-wrap">
        <Input
          id="deskripsi"
          name="deskripsi"
          onChange={inputChange}
          value={inputValue}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write description here..."
        ></Input>

        <button
          onClick={(e) => onHandleSubmit(e, id)}
          className="bg-blue-600 outline-none border-none mt-4 p-2 w-2/6 rounded-lg text-white font-semibold transition-all duration-300 hover:bg-blue-500 "
        >
          kirim
        </button>
      </div>
    </div>
  );
};

export default Input;
