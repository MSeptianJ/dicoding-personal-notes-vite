import { Navigate, useOutletContext } from "react-router-dom";
import Loading from "../../components/Loading";
import NoteUI from "../../components/NoteUI";
import NoteCardList from "../../components/card/NoteCardList";
import { GetLocaleContexts } from "../../contexts/LocaleContext";
import useFetchData from "../../hooks/useFetchData";
import { getArchivedNotes } from "../../utils/network-data";

const ArchivePage = () => {
  const { locale } = GetLocaleContexts();
  const { handlerSearchNote, filteredNotes } = useOutletContext();
  const { data, isLoading, isSuccess, isError } =
    useFetchData(getArchivedNotes);

  const filteredArchivedNotes = filteredNotes(data);

  if (isError) {
    return <Navigate to={"/error"} />;
  }

  return (
    <>
      <NoteUI locale={locale} handlerSearchNote={handlerSearchNote} />

      <div className=" grid w-full gap-5">
        {isLoading && (
          <div className="m-auto h-40 w-40">
            <Loading />
          </div>
        )}

        {isSuccess && (
          <NoteCardList
            locale={locale}
            ListTitle={locale === "en" ? "Archive Notes" : "Catatan Arsip"}
            ListNotes={filteredArchivedNotes}
          />
        )}
      </div>
    </>
  );
};

export default ArchivePage;
