import PropTypes from "prop-types";

const NoteCardButton = ({ btnTitle, btnFunc, btnId, isFocus }) => {
  const handleFunction = () => {
    btnFunc(btnId);
  };

  return (
    <button
      onClick={handleFunction}
      className={`${
        isFocus ? "hover:bg-primary bg-accent text-main" : " hover:bg-accent"
      } rounded-sm p-1 text-sm shadow-xl`}
    >
      {btnTitle}
    </button>
  );
};

NoteCardButton.propTypes = {
  btnFunc: PropTypes.func,
  btnTitle: PropTypes.string,
  btnId: PropTypes.number,
  isFocus: PropTypes.bool,
};

export default NoteCardButton;
