import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import ArchivePage from "../pages/archive";
import ErrorPage from "../pages/error";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import NotePage from "../pages/note";
import RegisterPage from "../pages/register";
import SubmitPage from "../pages/submit";

export const withUserRouter = createBrowserRouter(
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

export const noUserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />} />
      <Route index element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<LoginPage />} />
    </Route>,
  ),
);
