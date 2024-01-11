import PropTypes from "prop-types";
import NoteCardButton from "../../components/button/NoteCardButton";
import { IconArchive, IconDelete, IconUnarchive } from "../../icon";

const NotePageBtn = ({
  noteData,
  handlerArchiveNote,
  handlerUnarchiveNote,
  handlerDeleteNote,
}) => {
  return (
    <div className=" grid h-14 w-full grid-cols-2 gap-2 bg-primary p-2 text-back">
      {!noteData?.archived ? (
        <>
          <NoteCardButton
            btnTitle="Archive"
            btnFunc={handlerArchiveNote}
            btnId={noteData?.id}
            btnIcon={<IconArchive />}
            isFocus
          />
          <NoteCardButton
            btnTitle="Delete"
            btnFunc={handlerDeleteNote}
            btnId={noteData?.id}
            btnIcon={<IconDelete />}
          />
        </>
      ) : (
        <>
          <NoteCardButton
            btnTitle="Unarchive"
            btnFunc={handlerUnarchiveNote}
            btnId={noteData?.id}
            btnIcon={<IconUnarchive />}
            isFocus
          />
          <NoteCardButton
            btnTitle="Delete"
            btnFunc={handlerDeleteNote}
            btnId={noteData?.id}
            btnIcon={<IconDelete />}
          />
        </>
      )}
    </div>
  );
};

NotePageBtn.propTypes = {
  noteData: PropTypes.object.isRequired,
  handlerArchiveNote: PropTypes.func.isRequired,
  handlerUnarchiveNote: PropTypes.func.isRequired,
  handlerDeleteNote: PropTypes.func.isRequired,
};

export default NotePageBtn;
