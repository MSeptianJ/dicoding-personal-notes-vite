import PropTypes from "prop-types";
import NoteList from "../../components/NotesComponent/NoteList";
import NoteSearch from "../../components/NoteSearch";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
  const { activeNotes } = useOutletContext();

  return (
    <>
      <NoteSearch />
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
