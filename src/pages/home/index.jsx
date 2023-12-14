import PropTypes from "prop-types";
import NoteList from "../../components/NotesComponent/NoteList";
import { getAllNotes } from "../../utils/local-data";

const HomePage = () => {
  const notes = getAllNotes();

  const query = "";

  const activeNotes = notes.filter(
    (note) =>
      note.archived === false && note.title.toLowerCase().includes(query),
  );

  return (
    <div className=" grid w-full gap-5">
      <NoteList
        ListTitle="Notes"
        ListNotes={activeNotes}
        // deleteFunc={handlerDeleteNote}
        // archiveFunc={handlerArchiveNote}
        // activateFunc={handlerActivateNote}
      />
    </div>
  );
};

HomePage.propTypes = {
  text: PropTypes.func,
};

export default HomePage;
