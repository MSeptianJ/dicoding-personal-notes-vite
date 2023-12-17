import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

const NoteSearch = () => {
  const { handlerSearchNote } = useOutletContext();

  const searchHandler = (e) => {
    handlerSearchNote(e.target.value);
  };

  return (
    <div className="bg-primary m-auto grid w-2/4 gap-2 rounded-sm bg-sub p-3">
      <label
        className=" text-back font-semibold uppercase"
        htmlFor="NoteSearch"
      >
        Search Notes
      </label>

      <div className=" m-auto w-full">
        <input
          className=" text-back m-auto w-full rounded-md border-2 border-accent bg-transparent p-2 text-sm"
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
