import { useOutletContext } from "react-router-dom";
import NoteSearch from "../../components/NoteSearch";
import NoteSubmitBtn from "../../components/button/NoteSubmitBtn";
import NoteCardList from "../../components/card/NoteCardList";

const ArchivePage = () => {
  const {
    archiveNotes,
    handlerSearchNote,
    handlerArchiveNote,
    handlerUnarchiveNote,
    handlerDeleteNote,
  } = useOutletContext();

  return (
    <>
      <div className=" grid w-full grid-cols-6 items-center rounded-sm bg-primary shadow-lg">
        <div className=" col-span-4 w-full lg:col-span-5">
          <NoteSearch searchFunc={handlerSearchNote} />
        </div>
        <div className=" col-span-2 h-full w-full lg:col-span-1">
          <NoteSubmitBtn />
        </div>
      </div>

      <div className=" grid w-full gap-5">
        <NoteCardList
          ListTitle="Archive"
          ListNotes={archiveNotes}
          handlerArchiveNote={handlerArchiveNote}
          handlerUnarchiveNote={handlerUnarchiveNote}
          handlerDeleteNote={handlerDeleteNote}
        />
      </div>
    </>
  );
};

export default ArchivePage;
