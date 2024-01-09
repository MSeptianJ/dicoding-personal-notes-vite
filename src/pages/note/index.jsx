import parser from "html-react-parser";
import { useOutletContext, useParams } from "react-router-dom";
import NoteCardButton from "../../components/button/NoteCardButton";
import useFetchData from "../../hooks/useFetchData";
import { IconArchive, IconDelete, IconUnarchive } from "../../icon";
import { showFormattedDate } from "../../utils";
import { getNote } from "../../utils/network-data";
import Loading from "../../components/Loading";

const NotePage = () => {
  const { handlerArchiveNote, handlerUnarchiveNote, handlerDeleteNote } =
    useOutletContext();
  const { id } = useParams();

  const {
    data: noteData,
    isLoading,
    isSuccess,
    isError,
  } = useFetchData(getNote(id));

  return (
    <div className=" h-full w-full p-8">
      {isLoading && (
        <div className="m-auto h-40 w-40">
          <Loading />
        </div>
      )}

      {isError && <p>Error</p>}

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

          <div className=" m-auto mb-5 w-full border border-secondary p-6 py-3 text-lg shadow-md ">
            {parser(noteData?.body)}
          </div>

          <div className=" grid h-14 w-full grid-cols-2 gap-2 bg-primary p-2 text-back">
            {!noteData?.archived ? (
              <>
                <NoteCardButton
                  btnTitle="Archive"
                  btnFunc={handlerArchiveNote}
                  btnId={noteData?.id}
                  btnIcon={<IconArchive />}
                  isFocus
                />
                <NoteCardButton
                  btnTitle="Delete"
                  btnFunc={handlerDeleteNote}
                  btnId={noteData?.id}
                  btnIcon={<IconDelete />}
                />
              </>
            ) : (
              <>
                <NoteCardButton
                  btnTitle="Unarchive"
                  btnFunc={handlerUnarchiveNote}
                  btnId={noteData?.id}
                  btnIcon={<IconUnarchive />}
                  isFocus
                />
                <NoteCardButton
                  btnTitle="Delete"
                  btnFunc={handlerDeleteNote}
                  btnId={noteData?.id}
                  btnIcon={<IconDelete />}
                />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NotePage;
