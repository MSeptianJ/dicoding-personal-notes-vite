import parse from "html-react-parser";
import PropTypes from "prop-types";

const NoteCardBody = ({ noteData }) => {
  return (
    <div className=" m-auto h-40 w-full overflow-hidden text-ellipsis py-3 text-sm">
      {parse(noteData?.body)}
    </div>
  );
};

NoteCardBody.propTypes = {
  noteData: PropTypes.object.isRequired,
};

export default NoteCardBody;
