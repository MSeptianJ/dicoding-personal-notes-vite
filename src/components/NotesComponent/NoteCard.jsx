import PropTypes from "prop-types";
import NoteCardBody from "./NoteCardBody";
import NoteCardButton from "./NoteCardButton";
import { useOutletContext } from "react-router-dom";

const NoteCard = ({ noteData }) => {
  const { handlerArchiveNote, handlerUnarchiveNote, handlerDeleteNote } =
    useOutletContext();

  return (
    <>
      <div className=" flex w-full flex-col justify-between gap-3 rounded-sm bg-primary p-2 text-back shadow-lg shadow-[rgba(0,0,0,0.3)]">
        <div className=" w-full px-2">
          <NoteCardBody noteData={noteData} />
        </div>

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
