import PropTypes from "prop-types";
import NoteCardBody from "./NoteCardBody";
import NoteCardButton from "./NoteCardButton";
import { Link, useOutletContext } from "react-router-dom";

const NoteCard = ({ noteData }) => {
  const { handlerArchiveNote, handlerUnarchiveNote, handlerDeleteNote } =
    useOutletContext();

  return (
    <>
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
                isFocus
              />
              <NoteCardButton
                btnTitle="Delete"
                btnFunc={handlerDeleteNote}
                btnId={noteData.id}
              />
            </>
          ) : (
            <>
              <NoteCardButton
                btnTitle="Unarchive"
                btnFunc={handlerUnarchiveNote}
                btnId={noteData.id}
                isFocus
              />
              <NoteCardButton
                btnTitle="Delete"
                btnFunc={handlerDeleteNote}
                btnId={noteData.id}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

NoteCard.propTypes = {
  noteData: PropTypes.object,
  deleteFunc: PropTypes.func,
  archiveFunc: PropTypes.func,
  activateFunc: PropTypes.func,
};

export default NoteCard;
