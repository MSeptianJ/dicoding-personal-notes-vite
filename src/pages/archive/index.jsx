import { useOutletContext } from "react-router-dom";
import Loading from "../../components/Loading";
import NoteSearch from "../../components/NoteSearch";
import NoteSubmitBtn from "../../components/button/NoteSubmitBtn";
import NoteCardList from "../../components/card/NoteCardList";
import useFetchData from "../../hooks/useFetchData";
import { getArchivedNotes } from "../../utils/network-data";

const ArchivePage = () => {
  const { handlerSearchNote, filteredNotes } = useOutletContext();
  const { data, isLoading, isSuccess, isError } =
    useFetchData(getArchivedNotes);

  const filteredArchivedNotes = filteredNotes(data);

  if (isError) {
    return (
      <div className="w-full text-center">
        <h2 className=" text-xl text-red-500">Error</h2>
      </div>
    );
  }

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
        {isLoading && (
          <div className="m-auto h-40 w-40">
            <Loading />
          </div>
        )}

        {isSuccess && (
          <NoteCardList ListTitle="Archive" ListNotes={filteredArchivedNotes} />
        )}
      </div>
    </>
  );
};

export default ArchivePage;
