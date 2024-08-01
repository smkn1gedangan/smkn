import React from "react";
import BoxInformationCount from "../../element/BoxInformasiCount";

const Count = () => {
  return (
    <div className="p-2 w-full bgLinear">
      <h1 className="fontPrimary text-center text-xl mt-6 lg:mt-14 lg:text-3xl">
        Tentang Sekolah
      </h1>
      <div className="flex flex-wrap justify-evenly gap-10">
        {" "}
        <BoxInformationCount
          count={1005}
          viewBox="0 0 15 16"
          widthIcon="2.4rem"
          heightIcon="2.4rem"
          idTarget="siswaCount"
          title="jumlah siswa"
        >
          {" "}
          <path
            fill="currentColor"
            d="M7.5 7a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5m0-4C6.67 3 6 3.67 6 4.5S6.67 6 7.5 6S9 5.33 9 4.5S8.33 3 7.5 3"
          ></path>
          <path
            fill="currentColor"
            d="M13.5 11c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5-.22.5-.5A2.5 2.5 0 0 0 11.5 7h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5c.83 0 1.5-.67 1.5-1.5S11.33 3 10.5 3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5A2.5 2.5 0 0 1 13 4.5c0 .62-.22 1.18-.6 1.62c1.49.4 2.6 1.76 2.6 3.38c0 .83-.67 1.5-1.5 1.5m-12 0C.67 11 0 10.33 0 9.5c0-1.62 1.1-2.98 2.6-3.38c-.37-.44-.6-1-.6-1.62A2.5 2.5 0 0 1 4.5 2c.28 0 .5.22.5.5s-.22.5-.5.5C3.67 3 3 3.67 3 4.5S3.67 6 4.5 6c.28 0 .5.22.5.5s-.22.5-.5.5h-1A2.5 2.5 0 0 0 1 9.5c0 .28.22.5.5.5s.5.22.5.5s-.22.5-.5.5m9 3h-6c-.83 0-1.5-.67-1.5-1.5v-1C3 9.57 4.57 8 6.5 8h2c1.93 0 3.5 1.57 3.5 3.5v1c0 .83-.67 1.5-1.5 1.5m-4-5A2.5 2.5 0 0 0 4 11.5v1c0 .28.22.5.5.5h6c.28 0 .5-.22.5-.5v-1A2.5 2.5 0 0 0 8.5 9z"
          ></path>
        </BoxInformationCount>
        <BoxInformationCount
          count={100}
          viewBox="0 0 15 16"
          idTarget="teacherCount"
          widthIcon="2.4rem"
          heightIcon="2.4rem"
          title="jumlah Guru dan Staff"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="m225.9 58.31l-96-32a6 6 0 0 0-3.8 0l-96 32A6 6 0 0 0 26 64v80a6 6 0 0 0 12 0V72.32l38.68 12.9A62 62 0 0 0 99 174.75c-19.25 6.53-36 19.59-48 38a6 6 0 0 0 10 6.53C76.47 195.59 100.88 182 128 182s51.53 13.59 67 37.28a6 6 0 0 0 10-6.56c-12-18.38-28.73-31.44-48-38a62 62 0 0 0 22.27-89.53l46.63-15.5a6 6 0 0 0 0-11.38M178 120a50 50 0 1 1-89.37-30.8l37.47 12.49a6 6 0 0 0 3.8 0l37.47-12.49A49.78 49.78 0 0 1 178 120m-50-30.32L51 64l77-25.68L205 64Z"
            ></path>
          </svg>
        </BoxInformationCount>
        <BoxInformationCount
          count={72}
          viewBox="0 0 15 16"
          idTarget="ruangCount"
          widthIcon="2.4rem"
          heightIcon="2.4rem"
          title="jumlah ruangan"
        >
          <path
            fill="none"
            stroke="currentColor"
            d="M6 14.5H1.5v-13h21v13H18m-.5 9.5a10.6 10.6 0 0 1 1.572-5.555l.428-.695v-.25h-15v.25l.428.695A10.6 10.6 0 0 1 6.5 24m9.5-9v-3.5s-1.5-1-4-1s-4 1-4 1V15m3.85-6.5s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0c0 1.25-1.596 2.25-1.596 2.25z"
          ></path>
        </BoxInformationCount>
        <BoxInformationCount
          count={6}
          viewBox="0 0 15 16"
          widthIcon="2.4rem"
          heightIcon="2.4rem"
          idTarget="jurasanCount"
          title="jumlah Jurusan"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9.901 4.317v1.364M9.9 2.662a.124.124 0 0 1-.124-.125c0-.07.056-.125.124-.125m.002.25a.125.125 0 0 0 .124-.125a.124.124 0 0 0-.124-.125M.857 12.864h12.007M1.989 6.829a1.939 1.939 0 1 0 3.878 0a1.939 1.939 0 1 0-3.878 0"></path>
            <path d="M.855 12.865v-1.024a3.072 3.072 0 1 1 6.145 0v1.024m.394-6.149A3.554 3.554 0 1 0 6.33 4"></path>
          </g>
        </BoxInformationCount>
      </div>
    </div>
  );
};

export default Count;
