import { RouterProvider } from "react-router-dom";
import { GetAuthContexts } from "./contexts/AuthContext";
import { noUserRouter, withUserRouter } from "./router";

const Root = () => {
  const { init, authedUser } = GetAuthContexts();

  if (init) {
    return null;
  }

  if (!authedUser) {
    return <RouterProvider router={noUserRouter} />;
  }

  return <RouterProvider router={withUserRouter} />;
};

Root.propTypes = {};

export default Root;
