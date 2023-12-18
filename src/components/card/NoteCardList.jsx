import PropTypes from "prop-types";
import NoteCard from "./NoteCard";

const NoteCardList = ({ ListTitle, ListNotes }) => {
  return (
    <div className=" bg-sub w-full rounded-sm p-3">
      <h2 className=" mb-5 text-xl font-bold uppercase">{ListTitle}</h2>
      <div
        className={`${
          ListNotes.length ? "grid gap-5 md:grid-cols-2 lg:grid-cols-4" : ""
        } m-auto w-full `}
      >
        {ListNotes.length <= 0 ? (
          <p className=" text-center">No Notes</p>
        ) : (
          ListNotes?.map((note, id) => <NoteCard key={id} noteData={note} />)
        )}
      </div>
    </div>
  );
};

NoteCardList.propTypes = {
  ListTitle: PropTypes.string,
  ListNotes: PropTypes.array,
};

export default NoteCardList;
