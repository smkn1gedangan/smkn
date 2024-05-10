import React, { useEffect, useState } from "react";
import { APIPostNavbar, APInavbar } from "../../../services/api_call";
import Icon from "../../../helper/Icon";

const NavbarEditing = () => {
  const [navbar, setNavbar] = useState([]);
  const [dataUpdate, setDataUpdate] = useState({ email: "", noHP: "" });
  useEffect(() => {
    APInavbar((cb) => {
      setNavbar(cb?.data?.data);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    APIPostNavbar(dataUpdate, 1, (cb) => {
      if (cb.status === 200) {
        window.location.reload();
      }
    });
  };
  return (
    <div className="w-full">
      <h1 className="text-center text-2xl my-10 font-semibold">navbar</h1>
      {navbar.length > 0
        ? navbar.map((item) => (
            <div className="flex w-full justify-evenly" key={item.id}>
              <h1>noHp : {item.noHp}</h1>
              <h1>email : {item.email}</h1>
            </div>
          ))
        : ""}
      <h1 className="text-center text-2xl my-10 font-semibold">edit Navbar</h1>

      <div className="flex flex-wrap justify-center gap-10 w-full ">
        {" "}
        <div className="relative mb-6 w-full flex justify-center md:w-[48%]">
          <div className="relative">
            <Icon
              viewBox="0 0 20 16"
              widthIcon="1rem"
              heightIcon="1rem"
              classIcon="text-gray-500 dark:text-gray-400 absolute left-2 top-1/2 -translate-y-1/2"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </Icon>
          </div>
          <input
            type="text"
            value={dataUpdate.email}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, email: e.target.value })
            }
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-2/3"
            placeholder="@smkn1gedangan"
          />
        </div>
        <div className="relative mb-6 w-full md:w-[48%] flex justify-center">
          <div className="relative">
            <Icon
              widthIcon="1rem"
              viewBox="0 0 20 20"
              heightIcon="1rem"
              classIcon="text-gray-500 dark:text-gray-400 absolute left-2 top-1/2 -translate-y-1/2"
            >
              {" "}
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </Icon>
          </div>
          <input
            type="text"
            id="input-group-1"
            value={dataUpdate.noHP}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, noHP: e.target.value })
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-2/3"
            placeholder="081238713"
          />
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          className="bg-blue-600 outline-none border-none p-2 md:w-1/5 rounded-lg text-white font-semibold transition-all duration-300 hover:bg-blue-500 w-3/5 "
        >
          kirim
        </button>
      </div>
    </div>
  );
};

export default NavbarEditing;
