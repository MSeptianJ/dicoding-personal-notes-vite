import PropTypes from "prop-types";

const NoteCardButton = ({ btnTitle, btnFunc, btnId, isFocus }) => {
  const handleFunction = () => {
    btnFunc(btnId);
  };

  return (
    <button
      onClick={handleFunction}
      className={`${
        isFocus
          ? "text-main bg-accent hover:bg-opacity-70"
          : " hover:text-accent"
      } rounded-sm p-1 text-sm shadow-xl transition-all duration-200`}
    >
      {btnTitle}
    </button>
  );
};

NoteCardButton.propTypes = {
  btnFunc: PropTypes.func,
  btnTitle: PropTypes.string,
  btnId: PropTypes.string,
  isFocus: PropTypes.bool,
};

export default NoteCardButton;
