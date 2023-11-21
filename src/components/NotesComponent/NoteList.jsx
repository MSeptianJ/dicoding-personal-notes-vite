import PropTypes from "prop-types";
import NoteCard from "./NoteCard";

const NoteList = ({ ListTitle, ListNotes }) => {
  return (
    <div className=" w-full rounded-sm bg-sub p-3">
      <h2 className=" mb-2 font-semibold uppercase text-accent">{ListTitle}</h2>
      <div className=" m-auto grid w-full gap-5 md:grid-cols-2 lg:grid-cols-4">
        {ListNotes.length <= 0 ? (
          <p className=" text-center">No Notes</p>
        ) : (
          ListNotes?.map((note, id) => <NoteCard key={id} noteData={note} />)
        )}
      </div>
    </div>
  );
};

NoteList.propTypes = {
  ListTitle: PropTypes.string,
  ListNotes: PropTypes.array,
};

export default NoteList;
