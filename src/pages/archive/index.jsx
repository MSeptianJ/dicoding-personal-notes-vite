import PropTypes from "prop-types";
import NoteSearch from "../../components/NoteSearch";
import NoteList from "../../components/NotesComponent/NoteList";
import { useOutletContext } from "react-router-dom";

const ArchivePage = () => {
  const { archiveNotes } = useOutletContext();

  return (
    <>
      <NoteSearch />
      <div className=" grid w-full gap-5">
        <NoteList
          ListTitle="Archive"
          ListNotes={archiveNotes}
          // deleteFunc={handlerDeleteNote}
          // archiveFunc={handlerArchiveNote}
          // activateFunc={handlerActivateNote}
        />
      </div>
    </>
  );
};

ArchivePage.propTypes = {
  text: PropTypes.func,
};

export default ArchivePage;
