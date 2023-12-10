import PropTypes from "prop-types";

const Home = ({ text }) => {
  return <div>{text}</div>;
};

Home.propTypes = {
  text: PropTypes.func,
};

export default Home;
