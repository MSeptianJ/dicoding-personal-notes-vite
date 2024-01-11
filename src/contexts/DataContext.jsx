import PropTypes from "prop-types";
import { AuthContextProvider } from "./AuthContext";
import { ThemeContextProvider } from "./ThemeContext";

export const DataContextProvider = ({ children }) => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </AuthContextProvider>
  );
};

DataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContextProvider;
