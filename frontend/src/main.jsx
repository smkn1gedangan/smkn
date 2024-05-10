import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style/main.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DashboardEditPage from "./pages/DashboardEditPage";
import { OptionProvider } from "./state/Option";
import EditHomePage from "./pages/edited/EditHomePage";
import VisiPage from "./pages/profil/VisiPage";
import EditProfilPage from "./pages/edited/EditProfilPage";
import TentangGuruPage from "./pages/profil/TentangGuruPage";
import TentangSekolahPage from "./pages/profil/TentangSekolahPage";
import SaranaSekolahPage from "./pages/profil/SaranaSekolahPage";
import PrestasiPage from "./pages/profil/PrestasiPage";
import EkstraPage from "./pages/profil/EkstraPage";
import SijaPage from "./pages/kompetensi/SijaPage";
import MMpage from "./pages/kompetensi/MMpage";
import AkPage from "./pages/kompetensi/AkPage";
import TkrPage from "./pages/kompetensi/TkrPage";
import BogaPage from "./pages/kompetensi/BogaPage";
import BusanaPage from "./pages/kompetensi/BusanaPage";
import GaleriPage from "./pages/galeri/GaleriPage";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/tentang",
    element: <TentangSekolahPage />,
  },
  {
    path: "/visimisi",
    element: <VisiPage />,
  },

  {
    path: "/guru",
    element: <TentangGuruPage />,
  },
  {
    path: "/saranaprasarana",
    element: <SaranaSekolahPage />,
  },
  {
    path: "/prestasi",
    element: <PrestasiPage />,
  },
  {
    path: "/ekstra",
    element: <EkstraPage />,
  },
  {
    path: "/sija",
    element: <SijaPage />,
  },
  {
    path: "/mm",
    element: <MMpage />,
  },
  {
    path: "/ak",
    element: <AkPage />,
  },
  {
    path: "/tkr",
    element: <TkrPage />,
  },
  {
    path: "/boga",
    element: <BogaPage />,
  },
  {
    path: "/busana",
    element: <BusanaPage />,
  },
  {
    path: "/galery",
    element: <GaleriPage />,
  },

  {
    path: "/edited",
    element: <DashboardEditPage />,
  },
  {
    path: "/edited/home",
    element: <EditHomePage />,
  },
  {
    path: "/edited/profil",
    element: <EditProfilPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OptionProvider>
      <RouterProvider router={routes}></RouterProvider>
    </OptionProvider>
  </React.StrictMode>
);
