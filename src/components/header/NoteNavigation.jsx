import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NoteNavigation = ({ navList }) => {
  return (
    <nav className="">
      <ul className=" flex">
        {navList.map((nav, i) => (
          <li
            key={i}
            className=" w-full cursor-pointer transition-all duration-200 hover:bg-primary hover:text-back"
          >
            <Link to={nav.url} className=" flex w-full items-center gap-2 p-2">
              {nav.icon}
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
