import parser from "html-react-parser";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils";

const NoteCardBody = ({ noteData }) => {
  return (
    <>
      <div className=" w-full border-b-2 border-secondary pb-3 transition-all duration-200 group-hover:border-primary">
        <h3
          className=" mb-1 text-lg font-bold text-accent"
          title={noteData?.title}
        >
          {noteData?.title.length >= 15
            ? noteData?.title.substring(0, 15) + "..."
            : noteData?.title}
        </h3>
        <p className="text-sm">{showFormattedDate(noteData?.createdAt)}</p>
      </div>

      <div className=" m-auto w-full py-3 text-sm">
        {noteData?.body.length >= 200
          ? parser(noteData?.body.substring(0, 180) + "...")
          : parser(noteData?.body)}
      </div>
    </>
  );
};

NoteCardBody.propTypes = {
  noteData: PropTypes.object.isRequired,
};

export default NoteCardBody;
