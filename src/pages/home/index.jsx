import PropTypes from "prop-types";

const HomePage = ({ text }) => {
  return <div>{text}</div>;
};

HomePage.propTypes = {
  text: PropTypes.func,
};

export default HomePage;
