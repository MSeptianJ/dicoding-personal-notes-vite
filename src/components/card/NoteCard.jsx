import PropTypes from "prop-types";
import { MdArchive, MdDelete, MdUnarchive } from "react-icons/md";
import { Link } from "react-router-dom";
import NoteCardBody from "./NoteCardBody";
import NoteCardButton from "../button/NoteCardButton";

const NoteCard = ({
  noteData,
  handlerArchiveNote,
  handlerUnarchiveNote,
  handlerDeleteNote,
}) => {
  return (
    <div className="group flex w-full flex-col justify-between gap-3 rounded-sm bg-primary p-2 text-back shadow-lg shadow-[rgba(0,0,0,0.3)] transition-all duration-200 hover:-translate-y-4 hover:bg-secondary">
      <Link to={`/note/${noteData.id}`} className=" h-full w-full">
        <div className=" w-full px-2">
          <NoteCardBody noteData={noteData} />
        </div>
      </Link>

      <div className=" grid w-full grid-cols-2 gap-2">
        {!noteData.archived ? (
          <>
            <NoteCardButton
              btnTitle="Archive"
              btnFunc={handlerArchiveNote}
              btnId={noteData.id}
              btnIcon={<MdArchive />}
              isFocus
            />
            <NoteCardButton
              btnTitle="Delete"
              btnFunc={handlerDeleteNote}
              btnId={noteData.id}
              btnIcon={<MdDelete />}
            />
          </>
        ) : (
          <>
            <NoteCardButton
              btnTitle="Unarchive"
              btnFunc={handlerUnarchiveNote}
              btnId={noteData.id}
              btnIcon={<MdUnarchive />}
              isFocus
            />
            <NoteCardButton
              btnTitle="Delete"
              btnFunc={handlerDeleteNote}
              btnId={noteData.id}
              btnIcon={<MdDelete />}
            />
          </>
        )}
      </div>
    </div>
  );
};

NoteCard.propTypes = {
  noteData: PropTypes.object.isRequired,
  handlerArchiveNote: PropTypes.func.isRequired,
  handlerUnarchiveNote: PropTypes.func.isRequired,
  handlerDeleteNote: PropTypes.func.isRequired,
};

export default NoteCard;
