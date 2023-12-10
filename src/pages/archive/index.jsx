import PropTypes from "prop-types";

const Archive = ({ text }) => {
  return <div>{text}</div>;
};

Archive.propTypes = {
  text: PropTypes.func,
};

export default Archive;
