import PropTypes from "prop-types";
import NoteCard from "./NoteCard";

const NoteCardList = ({
  ListTitle,
  ListNotes,
  handlerArchiveNote,
  handlerUnarchiveNote,
  handlerDeleteNote,
}) => {
  return (
    <div className=" bg-sub w-full rounded-sm p-3">
      <h2 className=" mb-5 text-xl font-bold uppercase">{ListTitle}</h2>
      <div
        className={`${
          ListNotes.length ? "grid gap-5 md:grid-cols-2 lg:grid-cols-4" : ""
        } m-auto w-full `}
      >
        {ListNotes.length ? (
          ListNotes?.map((note, id) => (
            <NoteCard
              key={id}
              noteData={note}
              handlerArchiveNote={handlerArchiveNote}
              handlerUnarchiveNote={handlerUnarchiveNote}
              handlerDeleteNote={handlerDeleteNote}
            />
          ))
        ) : (
          <p className=" text-center">No Notes</p>
        )}
      </div>
    </div>
  );
};

NoteCardList.propTypes = {
  ListTitle: PropTypes.string.isRequired,
  ListNotes: PropTypes.arrayOf(PropTypes.object).isRequired,
  handlerArchiveNote: PropTypes.func.isRequired,
  handlerUnarchiveNote: PropTypes.func.isRequired,
  handlerDeleteNote: PropTypes.func.isRequired,
};

export default NoteCardList;
