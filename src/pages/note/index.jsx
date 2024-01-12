import parser from "html-react-parser";
import { Navigate, useOutletContext, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { GetLocaleContexts } from "../../contexts/LocaleContext";
import useFetchData from "../../hooks/useFetchData";
import { showFormattedDate } from "../../utils";
import { getNote } from "../../utils/network-data";
import NotePageBtn from "./NotePageBtn";

const NotePage = () => {
  const { locale } = GetLocaleContexts();
  const { handlerArchiveNote, handlerUnarchiveNote, handlerDeleteNote } =
    useOutletContext();
  const { id } = useParams();
  const {
    data: noteData,
    isLoading,
    isSuccess,
    isError,
  } = useFetchData(getNote, id);

  if (isError) {
    return <Navigate to={"/error"} />;
  }

  return (
    <div className=" h-full w-full p-8">
      {isLoading && (
        <div className="m-auto h-40 w-40">
          <Loading />
        </div>
      )}

      {isSuccess && (
        <>
          <div className=" mb-5 w-full border-b-2 border-b-accent bg-primary px-6 py-4 text-back">
            <h3
              className=" mb-3 text-3xl font-bold text-accent"
              title={noteData?.title}
            >
              {noteData?.title}
            </h3>
            <p className="text-sm">{showFormattedDate(noteData?.createdAt)}</p>
          </div>

          <div className=" m-auto mb-5 w-full bg-primary p-6 py-3 text-lg text-back shadow-md ">
            {parser(noteData?.body)}
          </div>

          <NotePageBtn
            locale={locale}
            noteData={noteData}
            handlerArchiveNote={handlerArchiveNote}
            handlerUnarchiveNote={handlerUnarchiveNote}
            handlerDeleteNote={handlerDeleteNote}
          />
        </>
      )}
    </div>
  );
};

export default NotePage;
