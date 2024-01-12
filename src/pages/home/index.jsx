import { Navigate, useOutletContext } from "react-router-dom";
import Loading from "../../components/Loading";
import NoteUI from "../../components/NoteUI";
import NoteCardList from "../../components/card/NoteCardList";
import { GetLocaleContexts } from "../../contexts/LocaleContext";
import useFetchData from "../../hooks/useFetchData";
import { getActiveNotes } from "../../utils/network-data";

const HomePage = () => {
  const { locale } = GetLocaleContexts();
  const { handlerSearchNote, filteredNotes } = useOutletContext();
  const { data, isLoading, isSuccess, isError } = useFetchData(getActiveNotes);

  const filteredActiveNotes = filteredNotes(data);

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
            ListTitle={locale === "en" ? "Active Notes" : "Catatan Aktif"}
            ListNotes={filteredActiveNotes}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
