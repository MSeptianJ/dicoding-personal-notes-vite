import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../contexts/DataContext";
import NoteNavigation from "./NoteNavigation";
import { IconLogOut } from "../../icon";

const NoteHeader = ({ navList, logOutFunc }) => {
  const { authedUser } = useContext(DataContext);

  return (
    <header className=" flex w-full items-center justify-between border-b-2 border-primary p-1 text-center font-bold uppercase">
      <p className=" text-left">
        <Link
          to={"/"}
          className=" p-3 transition-all duration-200 hover:text-accent"
        >
          Personal Notes
        </Link>
      </p>

      <div className=" flex items-center">
        <NoteNavigation
          navList={authedUser ? navList.slice(0, 2) : navList.slice(2, 4)}
        />

        {authedUser && (
          <div className=" cursor-pointer transition-all duration-200 hover:bg-primary hover:text-back">
            <button
              onClick={logOutFunc}
              className=" flex w-full items-center gap-2 p-2 uppercase"
            >
              <IconLogOut />
              {authedUser.name}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

NoteHeader.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.object).isRequired,
  logOutFunc: PropTypes.func.isRequired,
};

export default NoteHeader;
