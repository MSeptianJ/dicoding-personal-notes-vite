import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const NoteSearch = () => {
  const { handlerSearchNote } = useOutletContext();

  const searchHandler = (e) => {
    handlerSearchNote(e.target.value);
  };

  return (
    <div className="m-auto grid w-full gap-2 p-3">
      <label
        className=" flex items-center gap-2 font-semibold uppercase text-back"
        htmlFor="NoteSearch"
      >
        <FaSearch />
        Search Notes
      </label>

      <div className=" m-auto w-full">
        <input
          className=" m-auto w-full rounded-md border border-back bg-transparent p-2 text-sm text-back"
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
  searchFunc: PropTypes.func,
};

export default NoteSearch;
