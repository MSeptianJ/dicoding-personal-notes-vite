import PropTypes from "prop-types";

const NoteSubmit = () => {
  return (
    <div className=" bg-sub w-full rounded-sm p-3">
      <h2 className=" font-semibold uppercase">Submit Note</h2>
    </div>
  );
};

NoteSubmit.propTypes = {
  func: PropTypes.func,
};

export default NoteSubmit;
