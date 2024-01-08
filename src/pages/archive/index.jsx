import { useCallback, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import NoteSearch from "../../components/NoteSearch";
import NoteSubmitBtn from "../../components/button/NoteSubmitBtn";
import NoteCardList from "../../components/card/NoteCardList";
import { getArchivedNotes } from "../../utils/network-data";

const ArchivePage = () => {
  const {
    handlerSearchNote,
    handlerArchiveNote,
    handlerUnarchiveNote,
    handlerDeleteNote,
    filteredArchiveNotes,
    setArchiveNotes,
  } = useOutletContext();

  const checkUserArchiveNotes = useCallback(async () => {
    const { data } = await getArchivedNotes();
    setArchiveNotes(data);
  }, [filteredArchiveNotes, setArchiveNotes]); // eslint-disable-line

  useEffect(() => {
    checkUserArchiveNotes();
  }, [checkUserArchiveNotes]);

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
          ListNotes={filteredArchiveNotes}
          handlerArchiveNote={handlerArchiveNote}
          handlerUnarchiveNote={handlerUnarchiveNote}
          handlerDeleteNote={handlerDeleteNote}
        />
      </div>
    </>
  );
};

export default ArchivePage;
