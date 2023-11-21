import PropTypes from "prop-types";
import NoteCardButton from "./NoteCardButton";
import NoteCardBody from "./NoteCardBody";

const NoteCard = ({ noteData, deleteNote }) => {
  return (
    <>
      <div className=" flex w-full flex-col justify-between gap-3 rounded-sm bg-main p-2  text-accent">
        <div className=" w-full px-2">
          <NoteCardBody noteData={noteData} />
        </div>

        <div className=" grid w-full grid-cols-2 gap-2">
          <NoteCardButton btnTitle="Archive" />
          <NoteCardButton
            btnTitle="Delete"
            btnFunc={deleteNote}
            btnId={noteData.id}
          />
        </div>
      </div>
    </>
  );
};

NoteCard.propTypes = {
  noteData: PropTypes.object,
  deleteNote: PropTypes.func,
};

export default NoteCard;
