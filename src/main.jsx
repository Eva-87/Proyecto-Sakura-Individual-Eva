
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";   
import { router } from "./router/router";
import { TarotProvider } from "./context/TarotContext";
import './index.css'




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TarotProvider>
      <RouterProvider router={router} />
    </TarotProvider>
  </StrictMode>
);




