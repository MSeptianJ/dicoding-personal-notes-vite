import { Navigate, useOutletContext } from "react-router-dom";
import Loading from "../../components/Loading";
import NoteSearch from "../../components/NoteSearch";
import NoteSubmitBtn from "../../components/button/NoteSubmitBtn";
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
      <div className=" grid w-full grid-cols-6 items-center rounded-sm bg-primary shadow-lg">
        <div className=" col-span-4 w-full lg:col-span-5">
          <NoteSearch locale={locale} searchFunc={handlerSearchNote} />
        </div>
        <div className=" col-span-2 h-full w-full lg:col-span-1">
          <NoteSubmitBtn locale={locale} />
        </div>
      </div>

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
