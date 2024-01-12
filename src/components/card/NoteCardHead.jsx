import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils";

const NoteCardHead = ({ noteData }) => {
  return (
    <div className=" w-full border-b-2 border-secondary pb-3 transition-all duration-200 group-hover:border-accent">
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
  );
};

NoteCardHead.propTypes = {
  noteData: PropTypes.object.isRequired,
};

export default NoteCardHead;
