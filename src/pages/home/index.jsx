import { useCallback, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import NoteSearch from "../../components/NoteSearch";
import NoteSubmitBtn from "../../components/button/NoteSubmitBtn";
import NoteCardList from "../../components/card/NoteCardList";
import { getActiveNotes } from "../../utils/network-data";

const HomePage = () => {
  const {
    handlerSearchNote,
    handlerArchiveNote,
    handlerUnarchiveNote,
    handlerDeleteNote,
    filteredActiveNotes,
    setActiveNotes,
  } = useOutletContext();

  const checkUserNotes = useCallback(async () => {
    const { data } = await getActiveNotes();
    setActiveNotes(data);
  }, [filteredActiveNotes, setActiveNotes]); // eslint-disable-line

  useEffect(() => {
    checkUserNotes();
  }, [checkUserNotes]);

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
          ListTitle="Notes"
          ListNotes={filteredActiveNotes}
          handlerArchiveNote={handlerArchiveNote}
          handlerUnarchiveNote={handlerUnarchiveNote}
          handlerDeleteNote={handlerDeleteNote}
        />
      </div>
    </>
  );
};

export default HomePage;
