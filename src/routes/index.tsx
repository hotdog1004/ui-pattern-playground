import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ModalPage from "../pages/modal/ModalPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/modal",
    element: <ModalPage />,
  },
]);

export default router;
