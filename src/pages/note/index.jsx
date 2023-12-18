import NoteCardButton from "../../components/NotesComponent/NoteCardButton";
import { showFormattedDate } from "../../utils";
import { useOutletContext, useParams } from "react-router-dom";

const NotePage = () => {
  const {
    handlerGetNote,
    handlerArchiveNote,
    handlerUnarchiveNote,
    handlerDeleteNote,
  } = useOutletContext();
  const id = useParams().id;
  const noteData = handlerGetNote(id);

  return (
    <div className=" h-full w-full p-8">
      <div className=" mb-5 w-full border-b-2 border-b-accent bg-primary px-6 py-4 text-back">
        <h3
          className=" mb-3 text-3xl font-bold text-accent"
          title={noteData?.title}
        >
          {noteData?.title}
        </h3>
        <p className="text-sm">{showFormattedDate(noteData?.createdAt)}</p>
      </div>

      <div className=" m-auto mb-5 w-full border border-secondary p-6 shadow-md ">
        <p className=" py-3 text-lg">{noteData?.body}</p>
      </div>

      <div className=" grid h-14 w-full grid-cols-2 gap-2 bg-primary p-2 text-back">
        {!noteData.archived ? (
          <>
            <NoteCardButton
              btnTitle="Archive"
              btnFunc={handlerArchiveNote}
              btnId={noteData.id}
              isFocus
            />
            <NoteCardButton
              btnTitle="Delete"
              btnFunc={handlerDeleteNote}
              btnId={noteData.id}
            />
          </>
        ) : (
          <>
            <NoteCardButton
              btnTitle="Unarchive"
              btnFunc={handlerUnarchiveNote}
              btnId={noteData.id}
              isFocus
            />
            <NoteCardButton
              btnTitle="Delete"
              btnFunc={handlerDeleteNote}
              btnId={noteData.id}
            />
          </>
        )}
      </div>
    </div>
  );
};

NotePage.propTypes = {};

export default NotePage;
