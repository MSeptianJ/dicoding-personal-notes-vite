import { RouterProvider } from "react-router-dom";
import { GetAuthContexts } from "./contexts/AuthContext";
import { noUserRouter, withUserRouter } from "./router";
import Loading from "./components/Loading";

const Root = () => {
  const { init, authedUser } = GetAuthContexts();

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
