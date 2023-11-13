import PropTypes from "prop-types";

const NoteSearch = () => {
  return (
    <div className="bg-sub w-full rounded-sm p-3">
      <h2 className=" font-semibold uppercase">Search Notes</h2>
    </div>
  );
};

NoteSearch.propTypes = {
  func: PropTypes.func,
};

export default NoteSearch;
