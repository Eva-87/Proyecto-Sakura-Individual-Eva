import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Discover from "../pages/discover/Discover";
import Record from "../pages/record/Record";
import Save from "../pages/save/Save";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "discover", Component: Discover },
      { path: "save", Component: Save },
    ],
  },
]);
