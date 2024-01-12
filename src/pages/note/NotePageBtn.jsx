import PropTypes from "prop-types";
import NoteCardButton from "../../components/button/NoteCardButton";
import { IconArchive, IconDelete, IconUnarchive } from "../../icon";

const NotePageBtn = ({
  locale,
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
            btnTitle={locale === "en" ? "Archive" : "Arsipkan"}
            btnFunc={handlerArchiveNote}
            btnId={noteData?.id}
            btnIcon={<IconArchive />}
            isFocus
          />
          <NoteCardButton
            btnTitle={locale === "en" ? "Delete" : "Hapus"}
            btnFunc={handlerDeleteNote}
            btnId={noteData?.id}
            btnIcon={<IconDelete />}
          />
        </>
      ) : (
        <>
          <NoteCardButton
            btnTitle={locale === "en" ? "Unarchive" : "Aktifkan"}
            btnFunc={handlerUnarchiveNote}
            btnId={noteData?.id}
            btnIcon={<IconUnarchive />}
            isFocus
          />
          <NoteCardButton
            btnTitle={locale === "en" ? "Delete" : "Hapus"}
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
  locale: PropTypes.string.isRequired,
  noteData: PropTypes.object.isRequired,
  handlerArchiveNote: PropTypes.func.isRequired,
  handlerUnarchiveNote: PropTypes.func.isRequired,
  handlerDeleteNote: PropTypes.func.isRequired,
};

export default NotePageBtn;
