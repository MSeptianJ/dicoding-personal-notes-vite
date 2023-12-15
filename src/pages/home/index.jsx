import PropTypes from "prop-types";
import NoteList from "../../components/NotesComponent/NoteList";
import { getActiveNotes } from "../../utils/local-data";

const HomePage = () => {
  const activeNotes = getActiveNotes();

  return (
    <>
      <div className=" grid w-full gap-5">
        <NoteList
          ListTitle="Notes"
          ListNotes={activeNotes}
          // deleteFunc={handlerDeleteNote}
          // archiveFunc={handlerArchiveNote}
          // activateFunc={handlerActivateNote}
        />
      </div>
    </>
  );
};

HomePage.propTypes = {
  text: PropTypes.func,
};

export default HomePage;
