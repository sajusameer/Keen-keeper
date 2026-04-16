import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// ✅ Correct Router import
import { RouterProvider } from "react-router-dom";
import { router } from "./layout/router";

// ✅ Toast (react-toastify)
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={2000} />
  </StrictMode>
);
