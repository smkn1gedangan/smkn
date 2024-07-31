import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ type }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const navbarRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition === 0) {
        setIsNavbarFixed(false);
      } else {
        setIsNavbarFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // useEffect(() => {
  //   function handleOutsideClick(event) {
  //     if (navbarRef.current && !navbarRef.current.contains(event.target)) {
  //       setIsMenuOpen(false);
  //     }
  //   }

  //   if (isMenuOpen) {
  //     document.addEventListener("mousedown", handleOutsideClick);
  //   } else {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, [isMenuOpen]);
  const handleClickHamburger = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //   useEffect(() => {
  //     APInavbar((cb) => {
  //       setNavbar(cb?.data?.data[0]);
  //     });
  //   }, []);
  const handleLogout = (e) => {
    e.preventDefault();
    APIlogout((cb) => {
      if (cb?.status === 200) {
        localStorage.clear("token");
        navigate("/");
      }
    });
  };
  return (
    <div className="w-full fixed z-50">
      <div
        className={` bg-gradient-to-r from-blue-600 to-blue-300 h-10 p-1 w-full max-sm:h-16 max-sm:flex max-sm:justify-center max-sm:flex-wrap`}
      >
        <div className="w-1/2 h-full flex items-center justify-evenly text-white max-md:w-full">
          <div className="flex items-center w-1/2 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.4rem"
              height="1.4rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
              ></path>
            </svg>
            <h5 className="text-xl fontPrimary mx-2 max-md:text-sm">
              +61282139123
            </h5>
          </div>
          <div className="flex items-center w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.4rem"
              height="1.4rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 4H2v16h20zm-2 4l-8 5l-8-5V6l8 5l8-5z"
              ></path>
            </svg>
            <h5 className="text-base mx-2 fontPrimary">example@gmail.com</h5>
          </div>
          {type === "edited" && (
            <h1
              onClick={(e) => handleLogout(e)}
              className="absolute right-10 font-semibold text-black cursor-pointer max-sm:right-0 max-sm:w-full max-sm:relative max-sm:text-white"
            >
              Logout
            </h1>
          )}
        </div>
      </div>
      <div
        className={`bg-white w-full h-24 flex p-4 items-center max-md:p-0 max-md:relative z-50`}
      >
        <div className="flex items-center w-1/3 justify-center gap-4 max-md:w-full max-md:justify-around">
          <div className="flex items-center gap-4">
            <img
              className="w-20 h-20 object-cover max-lg:w-12 max-lg:h-12"
              src="./smkn1.png"
              alt=""
            />
            <h1 className="fontPrimary text-xl text-blue-900 xl:text-2xl">
              SMKN 1 GEDANGAN
            </h1>
          </div>
          <div
            className="flex flex-col gap-1 md:hidden"
            id="hamburger"
            onClick={handleClickHamburger}
          >
            <div
              className={` bg-black h-1 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 origin-left w-6" : "w-8"
              }`}
            ></div>
            <div
              className={` bg-black h-1 transition-all duration-300 ${
                isMenuOpen ? "scale-0 " : "w-8"
              }`}
            ></div>
            <div
              className={` bg-black h-1 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 origin-left w-6" : "w-8"
              }`}
            ></div>
          </div>
        </div>

        <div
          ref={navbarRef}
          id="hamburger-menu"
          className={`max-w-[64%] w-full max-md:rounded-xl static max-md:absolute max-md:w-3/4 max-md:bg-blue-300 max-md:right-0 max-md:h-screen max-md:z-30 max-md:top-20 max-md:shadow-2xl ${
            isMenuOpen ? "flex" : "max-md:hidden flex"
          }`}
        >
          <ul className="flex justify-evenly w-full max-md:block max-lg:p-4 max-md:w-full  items-center">
            <li
              className={`${
                type === "home" && "text-blue-400"
              } w-1/6 font-semibold  text-center max-md:w-full max-md:my-4 max-md:text-white max-md:text-2xl`}
            >
              <Link className="fontPrimary" to={`/`}> BERANDA</Link>
            </li>
            <li className="w-1/6 flex justify-center font-semibold max-md:w-full max-md:my-10 max-md:border-b-2 max-md:border-b-white max-md:p-2 ">
              <div className="relative inline-block tooltip">
                <a to="" className="hover:text-gray-400 px-2 py-1 font-medium fontPrimary">
                  PROFIL
                </a>
                <div className="flex flex-col p-4 bg-white w-60 h-80 rounded-md z-20 absolute left-1/2 -translate-x-1/2 invisible tooltip-item justify-center">
                  <ul className="list-disc space-y-2 flex flex-col items-center gap-3">
                    <li className="list-none text-center font-light">
                      <Link className="" to={`/tentang`}>TENTANG SEKOLAH</Link>
                    </li>
                    <li className="list-none text-center font-light">
                      <Link to={"/visimisi"}>
                        {" "}
                        VISI , MISI DAN TUJUAN SEKOLAH
                      </Link>
                    </li>
                    <li className="list-none text-center font-light">
                      <Link to={`/guru`}> DEWAN GURU DAN STAFF</Link>
                    </li>
                    <li className="list-none text-center font-light">
                      <Link to={`/saranaprasarana`}>SARANA DAN PRASARANA</Link>
                    </li>
                    <li className="list-none text-center font-light">
                      <Link to={`/prestasi`}>PRESTASI</Link>
                    </li>
                    <li className="list-none text-center font-light">
                      <Link to={`/ekstra`}> EKSTRAKURIKULER</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="w-1/6 flex justify-center font-semibold max-md:w-full max-md:my-10 max-md:border-b-2 max-md:border-b-white max-md:p-2 ">
              <div className="relative inline-block tooltip">
                <a to="" className="hover:text-gray-400 px-2 py-1 font-medium fontPrimary">
                  KOMPETENSI
                </a>
                <div className="flex flex-col p-4 bg-white w-60 h-80 rounded-md z-20 absolute left-1/2 -translate-x-1/2 invisible tooltip-item justify-center ">
                  <ul className="list-disc space-y-2 flex flex-col items-center gap-3">
                    <li className="list-none text-center font-light">
                      <Link to={`/sija`}>
                        Sistem Informatika Dan Jaringan Aplikasi
                      </Link>
                    </li>
                    <li className="list-none text-center font-light">
                      <Link to={`/mm`}>Multimedia</Link>
                    </li>
                    <li className="list-none text-center font-light">
                      <Link to={`/boga`}>Tata Boga</Link>
                    </li>
                    <li className="list-none text-center font-light">
                      <Link to={`/tkr`}>Teknik Kendaraan Ringan</Link>
                    </li>
                    <li className="list-none text-center font-light">
                      <Link to={`/busana`}>Tata Busana</Link>
                    </li>
                    <li className="list-none text-center font-light">
                      <Link to={`/ak`}>Akuntansi</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="w-1/6 flex justify-center font-semibold max-md:w-full max-md:my-10 max-md:border-b-2 max-md:border-b-white max-md:p-2 ">
              <div className="relative inline-block tooltip">
                <a to="" className="hover:text-gray-400 px-2 py-1 font-medium fontPrimary">
                  PPDB
                </a>
                <div className="flex flex-col p-4 bg-white w-60 h-32 rounded-md z-20 absolute left-1/2 -translate-x-1/2 invisible tooltip-item justify-center ">
                  <ul className="list-disc space-y-2 flex flex-col items-center gap-3">
                    <li className="list-none text-center font-light"><a href="https://ppdbjatim.net/informasi/jadwal/">JADWAL</a></li>
                    <li className="list-none text-center font-light">
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_0gbxKWZDtaUfsoDqg4fS3ivHaLpvPzI5o7BF77DbpJ616w/viewform">
                        SURVEI PEMINATAN
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="w-1/6 flex justify-center font-semibold max-md:w-full max-md:my-10 max-md:border-b-2 max-md:border-b-white max-md:p-2 ">
              <div className="relative inline-block tooltip fontPrimary">
                <Link to="/galery" className="hover:text-gray-400 px-2 py-1 font-medium">
                  GALLERY
                </Link>
               
              </div>
            </li>
            <li className="w-1/6 flex justify-center font-semibold max-md:w-full max-md:my-10 max-md:border-b-2 max-md:border-b-white max-md:p-2 ">
              <div className="relative inline-block tooltip">
                <a
                  href="http://elearning.smkn1gedangan-malang.sch.id/"
                  target="_blank"
                  className="fontPrimary"
                >
                  E-LEARNING
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
