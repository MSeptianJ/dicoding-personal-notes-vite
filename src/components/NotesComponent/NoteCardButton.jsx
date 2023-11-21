import PropTypes from "prop-types";

const NoteCardButton = ({ btnTitle, btnFunc }) => {
  return (
    <button
      onClick={btnFunc}
      className=" rounded-sm bg-sub font-semibold text-main hover:bg-darkMain hover:text-sub"
    >
      {btnTitle}
    </button>
  );
};

NoteCardButton.propTypes = {
  btnFunc: PropTypes.func,
  btnTitle: PropTypes.string,
};

export default NoteCardButton;
