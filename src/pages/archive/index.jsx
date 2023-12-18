import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import NoteSearch from "../../components/NoteSearch";
import NoteSubmitBtn from "../../components/NoteSubmitBtn";
import NoteList from "../../components/NotesComponent/NoteList";

const ArchivePage = () => {
  const { archiveNotes } = useOutletContext();

  return (
    <>
      <div className=" grid w-full grid-cols-6 items-center rounded-sm bg-primary shadow-lg">
        <div className=" col-span-4 w-full lg:col-span-5">
          <NoteSearch />
        </div>
        <div className=" col-span-2 h-full w-full lg:col-span-1">
          <NoteSubmitBtn />
        </div>
      </div>
      <div className=" grid w-full gap-5">
        <NoteList ListTitle="Archive" ListNotes={archiveNotes} />
      </div>
    </>
  );
};

ArchivePage.propTypes = {
  text: PropTypes.func,
};

export default ArchivePage;
