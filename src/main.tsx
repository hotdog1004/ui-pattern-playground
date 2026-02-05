import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ModalCProvider } from "./examples/modal/ModalCProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalCProvider>
      <RouterProvider router={router} />
    </ModalCProvider>
  </StrictMode>
);
