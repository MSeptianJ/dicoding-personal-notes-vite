import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
import { GetAuthContexts } from "./contexts/AuthContext";
import { GetThemeContexts } from "./contexts/ThemeContext";
import { noUserRouter, withUserRouter } from "./router";

const Root = () => {
  const { changeTheme } = GetThemeContexts();
  const { init, authedUser } = GetAuthContexts();

  useEffect(() => {
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
