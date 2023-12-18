import { Link } from "react-router-dom";
import NoteNavigation from "./NoteNavigation";

const NoteHeader = () => {
  return (
    <header className=" flex w-full items-center justify-between border-b-2 border-primary text-center font-bold uppercase">
      <p className=" m-auto w-full text-left">
        <Link
          to={"/"}
          className=" p-3 transition-all duration-200 hover:text-accent"
        >
          Personal Notes
        </Link>
      </p>
      <NoteNavigation />
    </header>
  );
};

export default NoteHeader;
