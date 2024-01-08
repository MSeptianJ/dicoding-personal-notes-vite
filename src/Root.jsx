import { useCallback, useMemo, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import { DataProvider } from "./contexts/DataContext";
import ArchivePage from "./pages/archive";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import NotePage from "./pages/note";
import RegisterPage from "./pages/register";
import SubmitPage from "./pages/submit";
import { getAccessToken } from "./utils/network-data";

const Root = () => {
  const [user, setUser] = useState(() => getAccessToken());

  const loginClientSide = useCallback((token) => {
    setUser(token);
  }, []);

  const contextValue = useMemo(() => {
    return {
      user,
      loginClientSide,
    };
  }, [user, loginClientSide]);

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
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<LoginPage />} />
      </Route>,
    ),
  );

  if (!user) {
    return (
      <DataProvider value={contextValue}>
        <RouterProvider router={noUserRouter} />
      </DataProvider>
    );
  }

  return (
    <DataProvider value={contextValue}>
      <RouterProvider router={withUserRouter} />;
    </DataProvider>
  );
};

Root.propTypes = {};

export default Root;
