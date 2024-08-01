import React, { useEffect, useState } from "react";
import Laman from "../../../element/Laman";
import { APIgettentangSekolah } from "../../../../services/api_call";

const TentangSejarah = () => {
  // const [sejarah, setSejarah] = useState([]);
  // useEffect(() => {
  //   APIgettentangSekolah((cb) => {
  //     setSejarah(cb?.data?.data);
  //   });
  // }, []);
  return (
    <div className="flex flex-col items-center p-1">
      <Laman about="Tentang Sekolah" />
      <div className="w-full p-2 md:w-4/5 lg:my-10">
        <div className="w-full h-[15rem] overflow-hidden lg:h-[30rem]">
          <img
            className="w-full h-full object-cover hover:scale-110  transition-all duration-300"
            src="tentang.jpg"
            alt=""
          />
        </div>
        <h1 className="fontPrimary text-xl lg:text-2xl my-4">
          Sejarah Smkn 1 Gedangan
        </h1>
        <p className="leading-relaxed  text-base font-serif text-slate-700">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          pariatur harum voluptates deleniti laudantium eum et delectus velit
          autem, repudiandae soluta suscipit molestias eveniet hic qui eius
          voluptatem nulla accusamus, similique dolore veniam. Asperiores
          veritatis harum quae nobis provident praesentium, dolor ipsum hic quis
          rem fugiat recusandae nam maxime reprehenderit. Quae, optio libero.
          Harum esse a, vel quaerat repellendus laborum explicabo! Natus est
          aliquid culpa vitae quia sequi, animi itaque soluta debitis,
          consequatur dolor repellat officiis eaque quasi autem sed corrupti
          cumque deleniti iure, quidem ipsam veniam! Recusandae eum, soluta sunt
          impedit libero quae nisi ab obcaecati possimus. In eveniet iure ad
          aliquam voluptatibus architecto, sapiente error hic veritatis a
          reprehenderit quia aut omnis aperiam nemo accusamus et voluptatum
          dolores asperiores officiis dolorem quo quae dignissimos. Laborum,
          officiis corrupti expedita quam rem maiores odio fugit minima
          consectetur voluptas iste autem ullam dolore, a aliquam exercitationem
          repellendus. Non delectus maxime earum corporis eius ea laudantium
          nemo aperiam soluta, inventore commodi explicabo consequuntur
          praesentium labore at! Doloremque ipsam optio vero, exercitationem
          dignissimos quia dolore ex natus distinctio. Vero, veniam fugiat
          ratione tempore molestias vel iure incidunt neque accusantium et
          aspernatur dicta reprehenderit culpa, labore doloribus hic
          necessitatibus aperiam asperiores! Placeat, nihil error! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aliquid corrupti labore
          dignissimos cupiditate reiciendis? Repellat ea sunt culpa molestiae,
          nobis reiciendis asperiores laborum laudantium eligendi, sequi minus
          voluptatibus accusamus sapiente soluta autem porro? Ratione minima
          earum consequuntur natus obcaecati facilis, animi non voluptates
          placeat eaque fuga? Eos nobis quo ut odit non voluptatum atque qui
          enim a autem, voluptatibus quaerat. Dolore, ut exercitationem aliquid
          error iste deleniti sapiente delectus reprehenderit saepe. Veniam
          repellendus quam, sit voluptas asperiores voluptatum repellat
          cupiditate similique commodi non incidunt nam, a inventore tenetur ea!
          A adipisci voluptas autem minus, vero incidunt distinctio quas quis
          asperiores?
        </p>
      </div>
    </div>
  );
};

export default TentangSejarah;
