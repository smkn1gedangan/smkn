import React from "react";
import Laman from "../../../element/Laman";

const TentangSarana = () => {
  return (
    <div className="p-1 flex items-center flex-col">
      <Laman about="Sarana Dan Prasarana" />
      <div className="w-full p-1 lg:w-4/5 ">
        <h1 className="text-xl lg:lg:text-2xl text-center lg:text-left my-1 fontPrimary lg:my-10">
          Sarana dan Prasarana
        </h1>
        <p className="leading-relaxed  text-base font-serif text-slate-700">
          Sarana Dan Prasana merupakan aspek yang penting blablabka.... Nam quas
          autem amet dolore harum, nobis ab doloribus quisquam eos error.
          Fugiat, dolores assumenda debitis odio quibusdam officiis rem
          recusandae tempore ipsa quae beatae vitae, dolore rerum eaque ullam
          nihil a vel repellat. Eum quia eius fugit commodi in dolorem
          exercitationem. Laborum, dolorem. Ex dolorum ad dolorem aliquam
          nostrum enim illo ipsum repellat illum perferendis. Modi aspernatur,
          magnam pariatur quidem adipisci fuga eveniet. Necessitatibus eum quas
          tenetur voluptatum eveniet! Perspiciatis libero quasi ratione? Minima
          maiores tempore dolorem, porro debitis vero aspernatur accusantium
          fuga placeat culpa, qui commodi soluta magni ut natus.
        </p>
      </div>
      <div className="w-full lg:w-[90%]">
        <div className="flex flex-wrap gap-3 justify-center mt-2 lg:mt-10">
          <div className="w-4/5 h-[20rem] rounded-sm shadow-md lg:w-[30%] p-1 hover:opacity-75 lg:h-[20rem]">
            <div className="w-full h-4/5 overflow-hidden">
              <img
                src="./kantin.jpeg"
                className="w-full h-full  object-cover object-center"
                alt=""
              />
            </div>
            <h1 className=" text-black text-center text-xl my-4 lg:text-2xl fontPrimary">
              kantin
            </h1>
          </div>
          <div className="w-4/5 h-[20rem] rounded-sm shadow-md lg:w-[30%] p-1 hover:opacity-75 lg:h-[20rem]">
            <div className="w-full h-4/5 overflow-hidden">
              <img
                src="./resepsi.jpg"
                className="w-full h-full  object-cover object-center"
                alt=""
              />
            </div>
            <h1 className=" text-black text-center text-xl my-4 lg:text-2xl fontPrimary">
              recepcionist
            </h1>
          </div>
          <div className="w-4/5 h-[20rem] rounded-sm shadow-md lg:w-[30%] p-1 hover:opacity-75 lg:h-[20rem]">
            <div className="w-full h-4/5 overflow-hidden">
              <img
                src="./lab.jpg"
                className="w-full h-full  object-cover object-center"
                alt=""
              />
            </div>
            <h1 className=" text-black text-center text-xl my-4 lg:text-2xl fontPrimary">
              labolatorium komputer
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangSarana;
