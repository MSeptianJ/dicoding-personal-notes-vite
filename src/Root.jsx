import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
import { GetAuthContexts } from "./contexts/AuthContext";
import { GetLocaleContexts } from "./contexts/LocaleContext";
import { GetThemeContexts } from "./contexts/ThemeContext";
import { noUserRouter, withUserRouter } from "./router";

const Root = () => {
  const { setLocale } = GetLocaleContexts();
  const { changeTheme } = GetThemeContexts();
  const { init, authedUser } = GetAuthContexts();

  useEffect(() => {
    // initialize Locale
    if (localStorage.locale) {
      setLocale(localStorage.locale);
    } else {
      localStorage.setItem("locale", "en");
      setLocale("en");
    }

    // initialize Theme
    if (localStorage.theme) {
      changeTheme(localStorage.theme);
    } else {
      localStorage.setItem("theme", "light");
      changeTheme("light");
    }
  }, []); // eslint-disable-line

  if (init) {
    return (
      <div className="m-auto h-40 w-40">
        <Loading />
      </div>
    );
  }

  if (!authedUser) {
    return <RouterProvider router={noUserRouter} />;
  }

  return <RouterProvider router={withUserRouter} />;
};

Root.propTypes = {};

export default Root;
