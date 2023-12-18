import { Link } from "react-router-dom";

const NoteNavigation = () => {
  return (
    <nav className=" w-1/2">
      <ul className=" flex">
        <li className=" w-full cursor-pointer bg-primary text-back transition-all duration-200 hover:bg-accent">
          <Link to={"/"} className=" block w-full p-3">
            Home
          </Link>
        </li>
        <li className=" w-full cursor-pointer bg-primary text-back transition-all duration-200 hover:bg-accent">
          <Link to={"/archive"} className=" block w-full p-3">
            Archive
          </Link>
        </li>
      </ul>
    </nav>
  );
};

NoteNavigation.propTypes = {};

export default NoteNavigation;
