import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NoteCardBody from "./NoteCardBody";
import NoteCardHead from "./NoteCardHead";

const NoteCard = ({ noteData }) => {
  return (
    <div className="group w-full rounded-sm bg-primary  text-back shadow-lg shadow-[rgba(0,0,0,0.3)] transition-all duration-200 hover:-translate-y-1 hover:bg-secondary">
      <Link
        to={`/note/${noteData?.id}`}
        className=" block h-full w-full p-2 pb-4"
      >
        <div className=" w-full px-2">
          <NoteCardHead noteData={noteData} />
          <NoteCardBody noteData={noteData} />
        </div>
      </Link>
    </div>
  );
};

NoteCard.propTypes = {
  noteData: PropTypes.object.isRequired,
};

export default NoteCard;
