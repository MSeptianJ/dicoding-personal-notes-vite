import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import "./assets/styles/index.css";
import ArchivePage from "./pages/archive";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import NotePage from "./pages/note";
import SubmitPage from "./pages/submit";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />} />
      <Route index element={<HomePage />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/submit" element={<SubmitPage />} />
      <Route path="/note/:id" element={<NotePage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
