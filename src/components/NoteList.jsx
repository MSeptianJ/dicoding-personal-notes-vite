import PropTypes from "prop-types";

const NoteList = ({ ListTitle, ListNotes }) => {
  return (
    <div className=" bg-sub w-full rounded-sm p-3">
      <h2 className=" font-semibold uppercase">{ListTitle}</h2>
      {ListNotes?.map((note, id) => (
        <div key={id}>{note}</div>
      ))}
    </div>
  );
};

NoteList.propTypes = {
  ListTitle: PropTypes.string,
  ListNotes: PropTypes.object,
};

export default NoteList;
