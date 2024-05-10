import React, { useState } from "react";
import Icon from "../../helper/Icon";
import { APIlogin } from "../../services/api_call";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [valueLogin, setValueLogin] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    APIlogin(valueLogin, (cb) => {
      if (cb?.response?.status) {
        setError(true);
        setErrorMessage(cb?.response?.data?.error);
      } else {
        localStorage.setItem("token", JSON.stringify(cb?.data?.token));
        navigate("/edited");
      }
    });
  };
  return (
    <div className="shadow-lg w-4/5 h-[30rem] lg:h-[25rem] my-10 md:w-1/4 ">
      <div className="border border-blue-600 h-20 relative outline-none bg-blue-700 brdr ">
        <div className="absolute w-16 h-16 bg-white left-1/2 border border-blue-600 p-2 -translate-x-1/2 rounded-full -bottom-8">
          <img src="./smkn1.png" alt="" />
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="font-semibold text-blue-600">smkn 1 gedangan</p>
      </div>
      <form className="w-full flex items-center mt-10 flex-col gap-5 ">
        <label
          htmlFor=""
          className="flex border-b border-blue-800 items-center p-2 w-4/5"
        >
          {" "}
          <div className="relative w-full flex justify-center">
            <div className="relative">
              <Icon
                widthIcon="1.4rem"
                viewBox="0 0 20 20"
                heightIcon="1.4rem"
                classIcon=" absolute left-2 top-1/2 -translate-y-1/2"
              >
                {" "}
                <path
                  fill="blue"
                  d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                />
              </Icon>
            </div>
            <input
              type="text"
              id="input-group-1"
              value={valueLogin.username}
              onChange={(e) =>
                setValueLogin({ ...valueLogin, username: e.target.value })
              }
              className="outline-none border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
              placeholder="name@flowbite.com"
            />
          </div>
        </label>
        <label
          htmlFor=""
          className="flex border-b border-blue-800 items-center p-2 w-4/5"
        >
          {" "}
          <div className="relative w-full flex justify-center">
            <div className="relative">
              <Icon
                widthIcon="1.4rem"
                viewBox="0 0 20 20"
                heightIcon="1.4rem"
                classIcon=" absolute left-2 top-1/2 -translate-y-1/2"
              >
                {" "}
                <path
                  fill="blue"
                  d="M19 13c.34 0 .67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6a2 2 0 0 0-2 2v10c0 1.11.89 2 2 2h7.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm3 11a2 2 0 1 1 2-2c0 1.11-.89 2-2 2m8.41 2l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41z"
                ></path>
              </Icon>
            </div>
            <input
              type="text"
              id="input-group-1"
              value={valueLogin.password}
              onChange={(e) =>
                setValueLogin({ ...valueLogin, password: e.target.value })
              }
              className="outline-none border-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
              placeholder="password"
            />
          </div>
        </label>
        <button
          onClick={(e) => handleLogin(e)}
          className="bg-blue-600 outline-none border-none p-2 w-3/5 rounded-lg text-white font-semibold transition-all duration-300 hover:bg-blue-500 "
        >
          kirim
        </button>
        {error && <p className="text-red-700">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
