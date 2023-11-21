import PropTypes from "prop-types";

const NoteSearch = ({ searchNote }) => {
  const searchHandler = (e) => {
    searchNote(e.target.value);
  };

  return (
    <div className="grid w-full gap-2 rounded-sm bg-sub p-3">
      <label className=" font-semibold uppercase" htmlFor="NoteSearch">
        Search Notes
      </label>
      <div className=" m-auto w-full">
        <input
          className=" m-auto w-full rounded-md border-2 border-accent bg-transparent p-2 text-sm"
          type="text"
          name="note-search"
          id="NoteSearch"
          onChange={searchHandler}
        />
      </div>
    </div>
  );
};

NoteSearch.propTypes = {
  searchNote: PropTypes.func,
};

export default NoteSearch;
