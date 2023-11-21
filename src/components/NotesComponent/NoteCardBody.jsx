import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils/utils";

const NoteCardBody = ({ noteData }) => {
  return (
    <>
      <div className=" w-full border-b-2 border-sub pb-3">
        <h3 className=" mb-1 text-lg font-bold">
          {noteData.title.length >= 15
            ? noteData.title.substring(0, 15) + "..."
            : noteData.title}
        </h3>
        <p className="text-sm">{showFormattedDate(noteData.createdAt)}</p>
      </div>

      <div className=" m-auto w-full">
        <p className=" py-3 text-sm">
          {noteData.body.length >= 200
            ? noteData.body.substring(0, 180) + "..."
            : noteData.body}
        </p>
      </div>
    </>
  );
};

NoteCardBody.propTypes = {
  noteData: PropTypes.object,
};

export default NoteCardBody;
