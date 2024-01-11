import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  const addToStyle = (value) => {
    const bodyElement = window.document.body;
    bodyElement.setAttribute("class", value);
    localStorage.setItem("theme", value);
  };

  const changeTheme = useCallback((newValue) => {
    setTheme(newValue);
    addToStyle(newValue);
  }, []); // eslint-disable-line

  const contextValue = useMemo(() => {
    return {
      theme,
      changeTheme,
    };
  }, [theme, changeTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const GetThemeContexts = () => {
  return useContext(ThemeContext);
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
