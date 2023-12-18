import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NoteNavigation = ({ navList }) => {
  return (
    <nav className=" w-1/2">
      <ul className=" flex">
        {navList.map((nav, i) => (
          <li
            key={i}
            className=" w-full cursor-pointer bg-primary text-back transition-all duration-200 hover:bg-accent"
          >
            <Link to={nav.url} className=" block w-full p-3">
              {nav.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NoteNavigation.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteNavigation;
