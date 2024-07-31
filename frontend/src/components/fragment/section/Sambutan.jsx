import React, { useEffect, useState } from "react";
import { APIgetSambutanHome } from "../../../services/api_call";

const Sambutan = () => {
  // const [sambutan, setSambutan] = useState([]);
  // useEffect(() => {
  //   APIgetSambutanHome((cb) => {
  //     setSambutan(cb?.data?.data);
  //   });
  // }, []);
  return (
    <div className="  ">
      <div>
        <h1 className="fontPrimary text-center text-2xl my-6 lg:mt-14 lg:text-3xl ">
          Sambutan Kepala Sekolah
        </h1>
        <div className="w-full flex flex-wrap justify-center lg:p-4">
          <div className="w-44 h-44 rounded-lg flex items-center justify-center lg:w-80 lg:h-80 ">
            <img
              src="owijpg.jpg"
              alt="rusak"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:flex lg:items-center ">
            <p className="text-center w-full p-2 lg:text-base font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              tempora quasi necessitatibus rem, quaerat mollitia, debitis
              molestiae delectus unde explicabo sint voluptas aperiam ullam.
              Placeat tenetur, aspernatur iste consequatur veniam dolorem alias
              deleniti. Aliquid necessitatibus cum accusamus natus aliquam
              ipsam, officiis vel blanditiis at repudiandae velit quas, corporis
              pariatur voluptatum et sapiente. Labore non animi enim expedita
              aliquid corrupti quis sunt obcaecati, accusamus suscipit officia
              nobis dolorum eaque deserunt dicta iste soluta maiores consectetur
              quia aut fuga.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sambutan;
