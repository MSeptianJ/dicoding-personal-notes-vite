import parser from "html-react-parser";
import PropTypes from "prop-types";

const NoteCardBody = ({ noteData }) => {
  return (
    <div className=" m-auto w-full py-3 text-sm">
      {noteData?.body.length >= 200
        ? parser(noteData?.body.substring(0, 180) + "...")
        : parser(noteData?.body)}
    </div>
  );
};

NoteCardBody.propTypes = {
  noteData: PropTypes.object.isRequired,
};

export default NoteCardBody;
