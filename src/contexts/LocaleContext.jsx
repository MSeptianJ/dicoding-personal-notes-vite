import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const LocaleContext = createContext();

export const LocaleContextProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");

  const changeLocale = useCallback(() => {
    localStorage.setItem("locale", locale === "en" ? "id" : "en");
    setLocale((prevLocale) => (prevLocale === "en" ? "id" : "en"));
  }, [locale]);

  const contextValue = useMemo(() => {
    return {
      locale,
      setLocale,
      changeLocale,
    };
  }, [locale, changeLocale, setLocale]);

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  );
};

export const GetLocaleContexts = () => {
  return useContext(LocaleContext);
};

LocaleContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
