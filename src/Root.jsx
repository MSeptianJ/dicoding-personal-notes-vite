import { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import { DataProvider } from "./context/DataContext";
import ArchivePage from "./pages/archive";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import NotePage from "./pages/note";
import RegisterPage from "./pages/register";
import SubmitPage from "./pages/submit";
import { getAccessToken } from "./utils/network-data";

const Root = () => {
  const [isUser] = useState(() => getAccessToken());

  const withUserRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<App />} errorElement={<ErrorPage />}>
        <Route errorElement={<ErrorPage />} />
        <Route index element={<HomePage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/note/:id" element={<NotePage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Route>,
    ),
  );

  const noUserRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<App />} errorElement={<ErrorPage />}>
        <Route errorElement={<ErrorPage />} />
        <Route path="/*" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>,
    ),
  );

  if (!isUser) {
    return (
      <DataProvider value={"hai"}>
        <RouterProvider router={noUserRouter} />
      </DataProvider>
    );
  }

  return (
    <DataProvider value={"hai"}>
      <RouterProvider router={withUserRouter} />;
    </DataProvider>
  );
};

Root.propTypes = {};

export default Root;
