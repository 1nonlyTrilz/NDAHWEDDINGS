import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import PeaceAndMissan from "./pages/PeaceAndMisan";
import ChiomaAndMarizu from "./pages/ChiomaAndMarizu";
import JesicaAndBright from "./pages/JessicaAndbright";

AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/our-team",
    element: <div>OurTeam</div>,
  },
  {
    path: "/contact",
    element: <Pricing />,
  },
  {
    path: "/contact",
    element: <Pricing />,
  },
  {
    path: "/gallery/peace-missan-wedding",
    element: <PeaceAndMissan />,
  },
  {
    path: "/gallery/chioma-marizu-wedding",
    element: <ChiomaAndMarizu />,
  },
  {
    path: "/gallery/jessica-bright-wedding",
    element: <JesicaAndBright />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
