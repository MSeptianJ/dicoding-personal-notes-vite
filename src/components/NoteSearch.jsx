import PropTypes from "prop-types";

const NoteSearch = () => {
  return (
    <div className="grid w-full gap-2 rounded-sm bg-sub p-3">
      <label className=" font-semibold uppercase" htmlFor="NoteSearch">
        Search Notes
      </label>
      <div className=" m-auto w-full">
        <form className=" m-auto w-full" action="">
          <input
            className=" bg-transparent m-auto w-full rounded-md border-2 border-accent p-2 text-sm"
            type="text"
            name="note-search"
            id="NoteSearch"
          />
        </form>
      </div>
    </div>
  );
};

NoteSearch.propTypes = {
  func: PropTypes.func,
};

export default NoteSearch;
