import PropTypes from "prop-types";
import { AuthContextProvider } from "./AuthContext";
import { LocaleContextProvider } from "./LocaleContext";
import { ThemeContextProvider } from "./ThemeContext";

export const DataContextProvider = ({ children }) => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <LocaleContextProvider>{children}</LocaleContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};

DataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContextProvider;
