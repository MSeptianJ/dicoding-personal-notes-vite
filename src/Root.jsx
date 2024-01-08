import { useCallback, useEffect, useMemo, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import { noUserRouter, withUserRouter } from "./router";
import { getUserLogged } from "./utils/network-data";

const Root = () => {
  const [authedUser, setUser] = useState();
  const [init, setInit] = useState(true);

  const loginClientSide = useCallback((data) => {
    setUser(data);
  }, []);

  const checkAuthedUser = useCallback(async () => {
    const { data } = await getUserLogged();
    setUser(data);
    setInit(false);
  }, []);

  const contextValue = useMemo(() => {
    return {
      authedUser,
      loginClientSide,
    };
  }, [authedUser, loginClientSide]);

  useEffect(() => {
    checkAuthedUser();
  }, [checkAuthedUser]);

  if (init) {
    return null;
  }

  if (!authedUser) {
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
