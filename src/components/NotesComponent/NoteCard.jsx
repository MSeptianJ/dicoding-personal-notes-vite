import PropTypes from "prop-types";
import NoteCardBody from "./NoteCardBody";
import NoteCardButton from "./NoteCardButton";

const NoteCard = ({ noteData, deleteFunc, archiveFunc, activateFunc }) => {
  return (
    <>
      <div className=" bg-primary text-back flex w-full flex-col justify-between gap-3 rounded-sm p-2 shadow-lg shadow-[rgba(0,0,0,0.3)]">
        <div className=" w-full px-2">
          <NoteCardBody noteData={noteData} />
        </div>

        <div className=" grid w-full grid-cols-2 gap-2">
          {!noteData.archived ? (
            <>
              <NoteCardButton
                btnTitle="Archive"
                btnFunc={archiveFunc}
                btnId={noteData.id}
                isFocus
              />
              <NoteCardButton
                btnTitle="Delete"
                btnFunc={deleteFunc}
                btnId={noteData.id}
              />
            </>
          ) : (
            <>
              <NoteCardButton
                btnTitle="Activate"
                btnFunc={activateFunc}
                btnId={noteData.id}
                isFocus
              />
              <NoteCardButton
                btnTitle="Delete"
                btnFunc={deleteFunc}
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
