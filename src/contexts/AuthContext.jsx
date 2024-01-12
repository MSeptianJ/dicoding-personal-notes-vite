import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getUserLogged } from "../utils/network-data";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
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
      init,
      authedUser,
      loginClientSide,
    };
  }, [init, authedUser, loginClientSide]);

  useEffect(() => {
    checkAuthedUser();
  }, [checkAuthedUser]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const GetAuthContexts = () => {
  return useContext(AuthContext);
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
