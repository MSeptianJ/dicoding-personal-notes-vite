import PropTypes from "prop-types";
import { AuthContextProvider } from "./AuthContext";

export const DataContextProvider = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

DataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContextProvider;
