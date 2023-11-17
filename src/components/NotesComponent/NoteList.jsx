import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

const NoteList = ({ ListTitle, ListNotes }) => {
  return (
    <div className=" w-full rounded-sm bg-sub p-3">
      <h2 className=" mb-5 font-semibold uppercase">{ListTitle}</h2>
      <div className=" m-auto grid w-full grid-cols-4 gap-5">
        {ListNotes?.map((note, id) => (
          <NoteItem key={id} noteData={note} />
        ))}
      </div>
    </div>
  );
};

NoteList.propTypes = {
  ListTitle: PropTypes.string,
  ListNotes: PropTypes.array,
};

export default NoteList;
