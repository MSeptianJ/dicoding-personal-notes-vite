import { showFormattedDate } from "../../utils";
import { useOutletContext, useParams } from "react-router-dom";

const NotePage = () => {
  const { handlerGetNote } = useOutletContext();
  const id = useParams().id;
  const noteData = handlerGetNote(id);

  return (
    <div className=" h-full w-full p-8">
      <div className=" mb-5 w-full bg-primary p-6 text-back">
        <h3
          className=" mb-3 text-3xl font-bold text-accent"
          title={noteData.title}
        >
          {noteData.title}
        </h3>
        <p className="text-sm">{showFormattedDate(noteData.createdAt)}</p>
      </div>

      <div className=" m-auto w-full border border-secondary p-6 shadow-md ">
        <p className=" py-3 text-lg">{noteData.body}</p>
      </div>
    </div>
  );
};

NotePage.propTypes = {};

export default NotePage;
